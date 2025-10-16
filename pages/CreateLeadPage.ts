import { Page } from '@playwright/test';

/**
 * Page Object for Leaftaps Create Lead Page
 */
export class CreateLeadPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCreateLead() {
    await this.page.click('a:has-text("Leads")');
    await this.page.click('a:has-text("Create Lead")');
  }

  async createLead(company: string, firstName: string, lastName: string, email: string, phone: string) {
    await this.page.fill('#createLeadForm_companyName', company);
    await this.page.fill('#createLeadForm_firstName', firstName);
    await this.page.fill('#createLeadForm_lastName', lastName);
    await this.page.fill('#createLeadForm_primaryEmail', email);
    await this.page.fill('#createLeadForm_primaryPhoneNumber', phone);
    await this.page.click('input[name="submitButton"]');
  }
}
