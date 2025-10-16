import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CreateLeadPage } from '../pages/CreateLeadPage';
let faker: any;

/**
 * Test to create a lead in Leaftaps using Page Object Model
 */
test('Create Lead in Leaftaps', async ({ page }) => {
  // Login
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('democsr', 'crmsfa');
  await loginPage.clickCRMSFA();

  // Create Lead
  const createLeadPage = new CreateLeadPage(page);
  await createLeadPage.navigateToCreateLead();

  // Dynamically import faker for ES module compatibility
  faker = await import('@faker-js/faker');
  const company = faker.faker.company.name();
  const firstName = faker.faker.person.firstName();
  const lastName = faker.faker.person.lastName();
  const email = faker.faker.internet.email();
  const phone = faker.faker.phone.number();

  await createLeadPage.createLead(company, firstName, lastName, email, phone);

  // Assert lead creation (check for confirmation or title)
  await expect(page).toHaveTitle(/View Lead/);
});
