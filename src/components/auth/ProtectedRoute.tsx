import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import type { AdminRole } from '@/types';

interface Props {
  allowedRoles?: AdminRole[];
}

/** Garde de route : exige une session et, optionnellement, un rôle autorisé. */
export const ProtectedRoute = ({ allowedRoles }: Props) => {
  const admin = useAuthStore((s) => s.admin);
  const location = useLocation();
  if (!admin) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  if (allowedRoles && !allowedRoles.includes(admin.role)) return <Navigate to="/403" replace />;
  return <Outlet />;
};
