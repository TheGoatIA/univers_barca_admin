import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/store/authStore';

export const API_URL = import.meta.env.VITE_API_URL ?? '/api/v1';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 20_000,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.set('Authorization', `Bearer ${token}`);
  return config;
});

type Retryable = InternalAxiosRequestConfig & { _retry?: boolean };
let refreshing: Promise<string> | null = null;

/** Un seul refresh à la fois : les requêtes concurrentes attendent la même promesse (anti race-condition). */
const refreshAccessToken = (): Promise<string> => {
  refreshing ??= axios
    .post<{ data: { accessToken: string } }>(`${API_URL}/admin/auth/refresh`, null, {
      withCredentials: true,
    })
    .then((r) => {
      useAuthStore.getState().setAccessToken(r.data.data.accessToken);
      return r.data.data.accessToken;
    })
    .finally(() => {
      refreshing = null;
    });
  return refreshing;
};

api.interceptors.response.use(
  (r) => r,
  async (error: AxiosError) => {
    const original = error.config as Retryable | undefined;
    const isAuthCall = original?.url?.includes('/admin/auth/');
    if (error.response?.status === 401 && original && !original._retry && !isAuthCall) {
      original._retry = true;
      try {
        const token = await refreshAccessToken();
        original.headers.set('Authorization', `Bearer ${token}`);
        return api(original);
      } catch {
        useAuthStore.getState().clear();
        window.location.assign('/login');
      }
    }
    return Promise.reject(error);
  },
);

/** Message utilisateur lisible depuis une erreur API. */
export const errorMessage = (e: unknown): string => {
  if (axios.isAxiosError(e))
    return e.response?.data?.error?.message ?? 'Le serveur est injoignable';
  return e instanceof Error ? e.message : 'Une erreur est survenue';
};
