import type { NavItem } from "../../types/content";

export type FooterProps = {
  readonly copyright: string;
  readonly navItems: readonly NavItem[];
  readonly siteName: string;
};

export function Footer({ copyright, navItems, siteName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-[var(--spacing-gutter)] py-8 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <a
            className="font-display font-bold text-ink transition-colors hover:text-brand-700 focus-visible:rounded-control focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
            href="#hero"
          >
            {siteName}
          </a>
          <p>
            &copy; {year} {copyright}
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
    </footer>
  );
}
