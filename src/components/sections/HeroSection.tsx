import heroWorkflowImage from "../../assets/hero-workflow.webp";
import type { HeroContent } from "../../types/content";
import { Button, Section } from "../ui";

export type HeroSectionProps = {
  readonly content: HeroContent;
  readonly ctaUrl: string;
};

export function HeroSection({ content, ctaUrl }: HeroSectionProps) {
  return (
    <Section
      className="overflow-hidden"
      id={content.id}
      innerClassName="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr]"
      spacing="tight"
    >
      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-700">
          {content.eyebrow}
        </p>
        <h1 className="font-display text-5xl font-bold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
          {content.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-ink-muted sm:text-3xl">
          {content.subhead}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
          {content.body}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button aria-label={content.primaryCta.ariaLabel} href={ctaUrl} size="lg">
            {content.primaryCta.label}
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-card bg-brand-100/70 blur-3xl" />
        <figure className="relative overflow-hidden rounded-card border border-border bg-surface shadow-card">
          <img
            alt="Software workflow dashboard showing planning, code, deployment, and operations panels"
            className="aspect-[16/10] h-full w-full object-cover"
            height="992"
            src={heroWorkflowImage}
            width="1586"
          />
        </figure>
      </div>
    </Section>
  );
}
