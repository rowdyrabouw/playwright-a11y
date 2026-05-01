import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("page should be accessible", async ({ page }, testInfo) => {
  await page.goto("http://127.0.0.1:8080/");

  await test.step("run accessibility scan", async () => {
    const axeResults = await new AxeBuilder({ page }).analyze();

    await testInfo.attach("axe-results", {
      body: JSON.stringify(axeResults.violations, null, 2),
      contentType: "application/json",
    });

    expect(axeResults.violations.length).toBe(0);
  });
});
