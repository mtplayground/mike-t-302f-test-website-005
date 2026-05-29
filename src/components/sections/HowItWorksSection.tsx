import type { StepsSectionContent } from "../../types/content";
import { Card, Section } from "../ui";

export type HowItWorksSectionProps = {
  readonly content: StepsSectionContent;
};

export function HowItWorksSection({ content }: HowItWorksSectionProps) {
  return (
    <Section
      id={content.id}
      innerClassName="space-y-12"
      spacing="default"
      variant="muted"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-normal text-brand-700">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
          {content.heading}
        </h2>
        <p className="mt-5 text-base leading-8 text-ink-muted sm:text-lg">
          {content.description}
        </p>
      </div>

      <ol className="relative grid gap-6 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-border lg:grid-cols-4 lg:gap-4 lg:before:left-[12.5%] lg:before:right-[12.5%] lg:before:top-6 lg:before:h-px lg:before:w-auto">
        {content.items.map((item, index) => (
          <li className="relative pl-16 lg:pl-0 lg:pt-12" key={item.title}>
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-10 grid size-12 place-items-center rounded-full border border-brand-200 bg-surface text-sm font-bold text-brand-700 shadow-card lg:left-1/2 lg:-translate-x-1/2"
            >
              {index + 1}
            </div>
            <Card className="h-full min-h-48">
              <p className="text-xs font-semibold uppercase tracking-normal text-ink-soft">
                Step {index + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-muted">
                {item.description}
              </p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
