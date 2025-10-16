import { Page } from '@playwright/test';

/**
 * Page Object for Leaftaps Login Page
 */
export class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://leaftaps.com/opentaps/control/main');
  }

  async login(username: string, password: string) {
    await this.page.locator('#username').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.click('.decorativeSubmit');
  }

  async clickCRMSFA() {
    await this.page.click('text=CRM/SFA');
  }
}
