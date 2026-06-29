# Demo code for Accessibility Testing with Playwright

This repository contains demo code for accessibility testing using Playwright. It includes examples of how to set up and run accessibility tests on web applications to ensure they meet accessibility standards.

## Getting Started

To get started with the accessibility testing code, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rowdyrabouw/playwright-a11y.git
   ```
2. Navigate to the project directory:
   ```bash
   cd playwright-a11y
   ```
3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Start the local server:

   ```bash
   pnpm start
   ```

5. Run the default tests and generate the report:

   ```bash
   pnpm test:example
   pnpm test:report
   ```

6. Run the accessibility tests:

   ```bash
   pnpm test:a11y:basic
   ```

7. Run the accessibility tests with improved reporting:

   ```bash
   pnpm test:a11y:testinfo
   ```

8. Run the accessibility tests with HTML reporting:

   ```bash
   pnpm test:a11y:html
   ```

9. Run the accessibility tests with HTML reporting on the fixed version of the page:
   ```bash
   test:a11y:html:fixed
   ```
