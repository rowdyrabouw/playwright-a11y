import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("page should be accessible", async ({ page }) => {
  await page.goto("http://127.0.0.1:8080/");

  const axeResults = await new AxeBuilder({ page }).analyze();

  expect(axeResults.violations).toEqual([]);
});
