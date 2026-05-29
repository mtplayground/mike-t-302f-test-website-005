import type { FeatureItem, FeaturesSectionContent } from "../../types/content";
import { Card, Section } from "../ui";

export type FeaturesSectionProps = {
  readonly content: FeaturesSectionContent;
};

const markerClasses = [
  "bg-brand-600 text-white",
  "bg-accent-700 text-white",
  "bg-ink text-white",
  "bg-surface-raised text-brand-700",
] as const;

function FeatureCard({
  feature,
  index,
}: {
  readonly feature: FeatureItem;
  readonly index: number;
}) {
  return (
    <Card
      className="group h-full min-h-60 p-7"
      variant={index === 1 ? "accent" : "default"}
    >
      <div className="flex h-full flex-col">
        <div
          className={`grid size-11 place-items-center rounded-control text-sm font-bold shadow-sm ${markerClasses[index % markerClasses.length]}`}
        >
          {index + 1}
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-ink">
          {feature.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink-muted">{feature.description}</p>
      </div>
    </Card>
  );
}

export function FeaturesSection({ content }: FeaturesSectionProps) {
  return (
    <Section id={content.id} innerClassName="space-y-12">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-brand-700">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {content.heading}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-ink-muted lg:justify-self-end">
          {content.description}
        </p>
      </div>

      <ul className="grid gap-5 md:grid-cols-2">
        {content.items.map((feature, index) => (
          <li key={feature.title}>
            <FeatureCard feature={feature} index={index} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
