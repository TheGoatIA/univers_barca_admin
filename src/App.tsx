import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { MainLayout } from '@/components/layout/MainLayout';
import { NAV } from '@/lib/navigation';

const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'));
const PlayersPage = lazy(() => import('@/pages/players/PlayersPage'));
const ModulePage = lazy(() => import('@/pages/modules/ModulePage'));
const NotFoundPage = lazy(() => import('@/pages/errors/NotFoundPage'));
const ForbiddenPage = lazy(() => import('@/pages/errors/ForbiddenPage'));

const implemented: Record<string, React.ReactElement> = {
  '/': <DashboardPage />,
  '/joueurs': <PlayersPage />,
};

// eslint-disable-next-line react-refresh/only-export-components
export const routes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/403', element: <ForbiddenPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: NAV.map((n) => ({
          // Chaque section est cloisonnée par rôle (en plus de la protection côté API)
          element: <ProtectedRoute allowedRoles={n.roles} />,
          children: [{ path: n.to, element: implemented[n.to] ?? <ModulePage /> }],
        })),
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
