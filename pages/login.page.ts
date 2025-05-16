import { Page } from '@playwright/test';
import { BASE_URL } from '../utils/env';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#username';
  readonly passwordInput = '#password';
  readonly loginButton = '#login';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(`${BASE_URL}`);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}