import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { App } from "./App";
import { siteContent } from "./content/siteContent";

const testCtaUrl = "https://example.com/waitlist";

function renderAppWithEnv() {
  vi.stubEnv("VITE_CTA_URL", testCtaUrl);
  render(<App />);
}

describe("App", () => {
  it("renders landing page sections from the content module", () => {
    renderAppWithEnv();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: siteContent.hero.headline,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: siteContent.steps.heading,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: siteContent.features.heading,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: siteContent.benefits.heading,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: siteContent.faq.heading,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: siteContent.footer.heading,
      }),
    ).toBeInTheDocument();

    for (const item of siteContent.steps.items) {
      expect(
        screen.getByRole("heading", { level: 3, name: item.title }),
      ).toBeInTheDocument();
    }

    for (const item of siteContent.features.items) {
      expect(
        screen.getByRole("heading", { level: 3, name: item.title }),
      ).toBeInTheDocument();
    }

    for (const item of siteContent.benefits.items) {
      expect(
        screen.getByRole("heading", { level: 3, name: item.title }),
      ).toBeInTheDocument();
    }
  });

  it("renders semantic landmarks and navigation links", () => {
    renderAppWithEnv();

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    const footerNav = screen.getByRole("navigation", { name: "Footer" });

    for (const item of siteContent.navItems) {
      expect(
        within(primaryNav).getByRole("link", { name: item.label }),
      ).toHaveAttribute("href", item.href);
      expect(within(footerNav).getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        item.href,
      );
    }

    expect(
      screen.getByAltText(
        "Software workflow dashboard showing planning, code, deployment, and operations panels",
      ),
    ).toBeInTheDocument();
  });

  it("uses the configured CTA URL for every page CTA", () => {
    renderAppWithEnv();

    const ctaLinks = screen.getAllByRole("link", {
      name: siteContent.hero.primaryCta.ariaLabel,
    });

    expect(ctaLinks).toHaveLength(3);

    for (const link of ctaLinks) {
      expect(link).toHaveAttribute("href", testCtaUrl);
    }
  });
});
