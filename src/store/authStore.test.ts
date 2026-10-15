import { useAuthStore } from './authStore';

describe('authStore', () => {
  it('ne persiste jamais le jeton d’accès', () => {
    useAuthStore
      .getState()
      .setSession({ id: '1', email: 'a@b.c', name: 'A', role: 'super-admin' }, 'secret-token');
    const stored = localStorage.getItem('ub-auth') ?? '';
    expect(stored).toContain('super-admin');
    expect(stored).not.toContain('secret-token');
  });
  it('clear vide la session', () => {
    useAuthStore.getState().clear();
    expect(useAuthStore.getState().admin).toBeNull();
  });
});
