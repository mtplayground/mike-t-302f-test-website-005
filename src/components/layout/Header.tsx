import type { CtaContent, NavItem } from "../../types/content";
import { Button } from "../ui";

export type HeaderProps = {
  readonly cta: CtaContent;
  readonly ctaUrl: string;
  readonly navItems: readonly NavItem[];
  readonly siteName: string;
};

export function Header({ cta, ctaUrl, navItems, siteName }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-[var(--spacing-gutter)] py-4">
        <a
          className="font-display text-sm font-bold tracking-normal text-ink transition-colors hover:text-brand-700 focus-visible:rounded-control focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          href="#hero"
        >
          {siteName}
        </a>

        <nav aria-label="Primary" className="order-last w-full md:order-none md:w-auto">
          <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-ink-muted md:justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-control px-3 py-2 transition-colors hover:bg-surface-raised hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button aria-label={cta.ariaLabel} href={ctaUrl} size="sm">
          {cta.label}
        </Button>
      </div>
    </header>
  );
}
