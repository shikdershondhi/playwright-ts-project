import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/layouts/home.page';

test.describe('Example Test Suite', () => {
  test('basic test', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await expect(page).toHaveTitle(/NeuString Online/);
  });
});