import { defineConfig, devices } from "@playwright/test";

const port = 8080;
const baseURL = `http://127.0.0.1:${port}`;
const testCtaUrl = "https://example.com/waitlist";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev",
    env: {
      VITE_CTA_URL: testCtaUrl,
    },
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    url: baseURL,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
