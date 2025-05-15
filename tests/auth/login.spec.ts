import { test, expect } from '@playwright/test';
import { currentEnv } from '../../utils/environment';
import { LoginPage } from '../../pages/layouts/login.page';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login with valid admin credentials', async () => {
    await loginPage.login(
      currentEnv.auth.admin.username,
      currentEnv.auth.admin.password
    );
    await expect(loginPage.page).toHaveURL(/worldmap/);
  });

  // test('should login with valid standard credentials', async () => {
  //   await loginPage.login(
  //     currentEnv.auth.standard.username,
  //     currentEnv.auth.standard.password
  //   );
  //   await expect(loginPage.page).toHaveURL(/worldmap/);
  // });
});