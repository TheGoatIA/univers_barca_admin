import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AdminProfile } from '@/types';

interface AuthState {
  admin: AdminProfile | null;
  /** Access token gardé UNIQUEMENT en mémoire (jamais persisté) ; le refresh vit dans un cookie httpOnly. */
  accessToken: string | null;
  setSession: (admin: AdminProfile, accessToken: string) => void;
  setAccessToken: (accessToken: string) => void;
  clear: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      admin: null,
      accessToken: null,
      setSession: (admin, accessToken) => set({ admin, accessToken }),
      setAccessToken: (accessToken) => set({ accessToken }),
      clear: () => set({ admin: null, accessToken: null }),
    }),
    { name: 'ub-auth', partialize: (s) => ({ admin: s.admin }) },
  ),
);
