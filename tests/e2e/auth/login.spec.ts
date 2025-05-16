import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/login.page';
import testData from '../../../fixtures/testdata.json';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await page.pause(); // Pause to inspect the page
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  // Add assertion after login, e.g. URL check or user profile element
  await expect(page).toHaveURL(/.*worldmap/);
  await page.context().storageState({ 
    path: 'fixtures/auth/userAuthState.json' 
  });
});