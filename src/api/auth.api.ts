import { api } from '@/lib/axios';
import type { AdminProfile, ApiSuccess } from '@/types';

export interface LoginPayload {
  email: string;
  password: string;
  totp?: string;
}
export interface LoginResult {
  admin: AdminProfile;
  accessToken: string;
}

export const authApi = {
  login: (payload: LoginPayload) =>
    api.post<ApiSuccess<LoginResult>>('/admin/auth/login', payload).then((r) => r.data.data),
  logout: () => api.post('/admin/auth/logout'),
};
