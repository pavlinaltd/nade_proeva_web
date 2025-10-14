import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.pause();
});
