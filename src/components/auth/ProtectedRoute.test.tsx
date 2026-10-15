import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuthStore } from '@/store/authStore';

const setup = (role?: 'moderator' | 'super-admin') => {
  useAuthStore.setState({
    admin: role ? { id: '1', email: 'a@b.c', name: 'A', role } : null,
    accessToken: null,
  });
  const router = createMemoryRouter(
    [
      { path: '/login', element: <p>login</p> },
      { path: '/403', element: <p>interdit</p> },
      {
        element: <ProtectedRoute allowedRoles={['super-admin']} />,
        children: [{ path: '/secret', element: <p>secret</p> }],
      },
    ],
    { initialEntries: ['/secret'] },
  );
  render(<RouterProvider router={router} />);
};

describe('ProtectedRoute', () => {
  it('redirige vers /login sans session', () => {
    setup();
    expect(screen.getByText('login')).toBeInTheDocument();
  });
  it('redirige vers /403 si le rôle est insuffisant', () => {
    setup('moderator');
    expect(screen.getByText('interdit')).toBeInTheDocument();
  });
  it('affiche la page si le rôle est autorisé', () => {
    setup('super-admin');
    expect(screen.getByText('secret')).toBeInTheDocument();
  });
});
