import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { createHtmlReport } from "axe-html-reporter";

test("Page should be accessible", async ({ page }, testInfo) => {
  await page.goto("http://127.0.0.1:8080/");

  await test.step("Run accessibility scan", async () => {
    const axeResults = await new AxeBuilder({ page }).analyze();

    const reportHTML = createHtmlReport({
      results: axeResults,
      options: {
        projectKey: "Playwright A11Y Test",
      },
    });

    await testInfo.attach("axe-results-html", {
      body: reportHTML,
      contentType: "text/html",
    });

    expect(axeResults.violations.length).toBe(0);
  });
});
