import type { FooterContent, NavItem } from "../../types/content";
import { Button } from "../ui";

export type FooterProps = {
  readonly content: FooterContent;
  readonly ctaUrl: string;
  readonly navItems: readonly NavItem[];
  readonly siteName: string;
};

export function Footer({ content, ctaUrl, navItems, siteName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-surface"
      aria-labelledby="footer-cta-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-[var(--spacing-gutter)] py-[var(--spacing-section-tight)]">
        <div className="grid gap-8 rounded-card border border-border bg-surface-muted p-6 shadow-card md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-normal text-brand-700">
              {content.eyebrow}
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-normal text-ink md:text-4xl"
              id="footer-cta-heading"
            >
              {content.heading}
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              {content.description}
            </p>
          </div>

          <Button
            aria-label={content.cta.ariaLabel}
            className="w-full sm:w-fit"
            href={ctaUrl}
            size="lg"
          >
            {content.cta.label}
          </Button>
        </div>

        <div className="mt-8 flex flex-col gap-5 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <a
              className="font-display font-bold text-ink transition-colors hover:text-brand-700 focus-visible:rounded-control focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
              href="#hero"
            >
              {siteName}
            </a>
            <p>
              &copy; {year} {content.copyright}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="transition-colors hover:text-ink focus-visible:rounded-control focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
