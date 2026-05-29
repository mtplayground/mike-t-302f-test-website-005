import type { BenefitItem, BenefitsSectionContent } from "../../types/content";
import { Card, Section } from "../ui";

export type BenefitsSectionProps = {
  readonly content: BenefitsSectionContent;
};

function BenefitCard({
  benefit,
  index,
}: {
  readonly benefit: BenefitItem;
  readonly index: number;
}) {
  return (
    <Card className="h-full min-h-56 p-7" variant={index === 0 ? "accent" : "muted"}>
      <div className="flex h-full flex-col">
        <p className="text-sm font-semibold text-brand-700">0{index + 1}</p>
        <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-ink">
          {benefit.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink-muted">{benefit.description}</p>
      </div>
    </Card>
  );
}

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <Section id={content.id} innerClassName="space-y-12" variant="muted">
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

      <ul className="grid gap-5 md:grid-cols-3">
        {content.items.map((benefit, index) => (
          <li key={benefit.title}>
            <BenefitCard benefit={benefit} index={index} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
