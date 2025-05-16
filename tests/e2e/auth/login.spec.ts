// tests/e2e/auth/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.page';
import { TEST_DATA } from '../../../utils/env';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  // await page.pause();
  await loginPage.login(TEST_DATA.validUser.username, TEST_DATA.validUser.password);
  await page.pause();
  //await expect(page).toHaveURL(/.*dashboard/);
});
