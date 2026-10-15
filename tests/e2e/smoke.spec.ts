import { expect, test } from '@playwright/test';

test('redirige un visiteur anonyme vers la connexion', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByRole('heading', { name: /connexion/i })).toBeVisible();
});

test('affiche une page 404 pour une route inconnue', async ({ page }) => {
  await page.goto('/route-inconnue');
  await expect(page.getByText('Page introuvable')).toBeVisible();
});
