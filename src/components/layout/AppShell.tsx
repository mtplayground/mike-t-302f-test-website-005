import type { ReactNode } from "react";
import type { SectionId, SiteContent } from "../../types/content";
import { Footer } from "./Footer";
import { Header } from "./Header";

export type AppShellProps = {
  readonly children?: ReactNode;
  readonly content: SiteContent;
  readonly ctaUrl: string;
  readonly renderedSectionIds?: readonly SectionId[];
};

type SectionAnchor = {
  readonly id: SectionId;
  readonly label: string;
};

function getSectionAnchors(
  content: SiteContent,
  excludedIds: readonly SectionId[] = [],
): readonly SectionAnchor[] {
  const sections = [
    { id: content.hero.id, label: content.hero.headline },
    { id: content.steps.id, label: content.steps.heading },
    { id: content.features.id, label: content.features.heading },
    { id: content.benefits.id, label: content.benefits.heading },
    { id: content.faq.id, label: content.faq.heading },
  ];

  return sections.filter((section) => !excludedIds.includes(section.id));
}

function SectionAnchorTargets({
  content,
  excludedIds,
}: Pick<AppShellProps, "content"> & {
  readonly excludedIds?: readonly SectionId[];
}) {
  return (
    <>
      {getSectionAnchors(content, excludedIds).map((section) => (
        <section
          aria-label={section.label}
          className="min-h-24 scroll-mt-24"
          id={section.id}
          key={section.id}
        />
      ))}
    </>
  );
}

export function AppShell({
  children,
  content,
  ctaUrl,
  renderedSectionIds = [],
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-transparent text-ink">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-card focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-600"
        href="#main"
      >
        Skip to content
      </a>
      <Header
        cta={content.hero.primaryCta}
        ctaUrl={ctaUrl}
        navItems={content.navItems}
        siteName={content.siteName}
      />
      <main className="min-h-[60vh]" id="main">
        {children ?? <SectionAnchorTargets content={content} />}
        {children ? (
          <SectionAnchorTargets content={content} excludedIds={renderedSectionIds} />
        ) : null}
      </main>
      <Footer
        content={content.footer}
        ctaUrl={ctaUrl}
        navItems={content.navItems}
        siteName={content.siteName}
      />
    </div>
  );
}
