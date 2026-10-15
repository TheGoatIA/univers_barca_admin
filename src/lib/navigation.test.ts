import { navFor } from './navigation';

describe('navigation par rôle', () => {
  it('le modérateur ne voit ni la supervision ni les comptes admin', () => {
    const labels = navFor('moderator').map((n) => n.label);
    expect(labels).toContain('Modération');
    expect(labels).not.toContain('Supervision');
    expect(labels).not.toContain('Comptes admin');
  });
  it('le super-admin voit tout', () => {
    expect(navFor('super-admin').length).toBeGreaterThanOrEqual(10);
  });
});
