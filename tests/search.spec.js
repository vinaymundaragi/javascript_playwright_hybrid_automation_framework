import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('login test', async ({page})=> {
    const home = new HomePage(page);
    await home.openUrl();
    await home.login('standard_user', 'secret_sauce');

    
});

test('flaky test demo', async ({ page }) => {
  await page.goto('/');
  expect(Math.random()).toBeGreaterThan(0.3);
});