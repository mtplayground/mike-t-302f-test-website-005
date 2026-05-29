import { expect, test } from "@playwright/test";
import { siteContent } from "../../src/content/siteContent";

const configuredCtaUrl = "https://example.com/waitlist";

const sectionHeadings = [
  siteContent.steps.heading,
  siteContent.features.heading,
  siteContent.benefits.heading,
  siteContent.faq.heading,
  siteContent.footer.heading,
] as const;

test("loads the landing page and renders every section", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(siteContent.siteName);
  await expect(
    page.getByRole("heading", { level: 1, name: siteContent.hero.headline }),
  ).toBeVisible();

  for (const heading of sectionHeadings) {
    await expect(page.getByRole("heading", { level: 2, name: heading })).toBeVisible();
  }

  for (const sectionId of [
    siteContent.hero.id,
    siteContent.steps.id,
    siteContent.features.id,
    siteContent.benefits.id,
    siteContent.faq.id,
  ]) {
    await expect(page.locator(`#${sectionId}`)).toBeVisible();
  }
});

test("scrolls to primary navigation anchor targets", async ({ page }) => {
  await page.goto("/");

  const primaryNav = page.getByRole("navigation", { name: "Primary" });

  for (const item of siteContent.navItems) {
    await page.evaluate(() => window.scrollTo(0, 0));
    await primaryNav.getByRole("link", { name: item.label }).click();

    const target = page.locator(item.href);

    await expect(page).toHaveURL(new RegExp(`${item.href}$`));
    await expect(target).toBeInViewport({ ratio: 0.2 });
    await expect
      .poll(async () =>
        target.evaluate((element) => element.getBoundingClientRect().top),
      )
      .toBeGreaterThanOrEqual(0);
  }
});

test("uses the configured CTA URL for every page CTA", async ({ page }) => {
  await page.goto("/");

  const ctaLinks = page.getByRole("link", {
    name: siteContent.hero.primaryCta.ariaLabel,
  });

  await expect(ctaLinks).toHaveCount(3);

  for (let index = 0; index < 3; index += 1) {
    await expect(ctaLinks.nth(index)).toHaveAttribute("href", configuredCtaUrl);
  }
});
