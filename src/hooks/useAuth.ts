import { useNavigate } from 'react-router-dom';
import { authApi } from '@/api/auth.api';
import { queryClient } from '@/lib/queryClient';
import { useAuthStore } from '@/store/authStore';
import type { AdminRole } from '@/types';

export const useAuth = () => {
  const navigate = useNavigate();
  const admin = useAuthStore((s) => s.admin);
  const clear = useAuthStore((s) => s.clear);

  const logout = async () => {
    await authApi.logout().catch(() => undefined);
    clear();
    queryClient.clear();
    navigate('/login', { replace: true });
  };
  const hasRole = (...roles: AdminRole[]) => !!admin && roles.includes(admin.role);
  return { admin, isAuthenticated: !!admin, logout, hasRole };
};
