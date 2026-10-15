import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import LoginPage from './LoginPage';
import { authApi } from '@/api/auth.api';
import { useAuthStore } from '@/store/authStore';

const renderPage = () =>
  render(
    <QueryClientProvider
      client={new QueryClient({ defaultOptions: { mutations: { retry: false } } })}
    >
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </QueryClientProvider>,
  );

describe('LoginPage', () => {
  beforeEach(() => useAuthStore.setState({ admin: null, accessToken: null }));

  it('valide les champs obligatoires', async () => {
    renderPage();
    await userEvent.click(screen.getByRole('button', { name: /se connecter/i }));
    expect(await screen.findByText("L'email est requis")).toBeInTheDocument();
    expect(screen.getByText('Le mot de passe est requis')).toBeInTheDocument();
  });

  it('ouvre une session en cas de succès', async () => {
    vi.spyOn(authApi, 'login').mockResolvedValue({
      admin: { id: '1', email: 'a@b.fr', name: 'Admin', role: 'super-admin' },
      accessToken: 'tok',
    });
    renderPage();
    await userEvent.type(screen.getByLabelText(/email/i), 'a@b.fr');
    await userEvent.type(screen.getByLabelText(/mot de passe/i), 'Passw0rd!');
    await userEvent.click(screen.getByRole('button', { name: /se connecter/i }));
    await waitFor(() => expect(useAuthStore.getState().admin?.role).toBe('super-admin'));
  });
});
