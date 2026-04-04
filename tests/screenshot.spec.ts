import { test, expect } from '@playwright/test';

test('local app shell renders and updates', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('app-shell')).toBeVisible();
    await expect(page.getByTestId('greeting-text')).toHaveText('Hello, Lucas!');

    await page.getByTestId('name-input').fill('Playwright');
    await expect(page.getByTestId('greeting-text')).toHaveText('Hello, Playwright!');

    await expect(page.getByTestId('counter-value')).toHaveText('Count: 0');
    await page.getByTestId('increment-button').click();
    await expect(page.getByTestId('counter-value')).toHaveText('Count: 1');
});


test('local screenshot', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('app-shell')).toBeVisible();
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('home.png')
});

