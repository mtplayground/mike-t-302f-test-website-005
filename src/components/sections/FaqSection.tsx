import { useState } from "react";
import type { FaqItem, FaqSectionContent } from "../../types/content";
import { AccordionItem, Section } from "../ui";

export type FaqSectionProps = {
  readonly content: FaqSectionContent;
};

function getFaqItemId(index: number): string {
  return `faq-item-${index + 1}`;
}

export function FaqSection({ content }: FaqSectionProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    content.items[0]?.question ?? null,
  );

  function handleOpenChange(item: FaqItem, open: boolean) {
    setOpenQuestion(open ? item.question : null);
  }

  return (
    <Section id={content.id} innerClassName="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-normal text-brand-700">
          {content.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
          {content.heading}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-ink-muted sm:text-lg">
          {content.description}
        </p>
      </div>

      <div className="space-y-3">
        {content.items.map((item, index) => (
          <AccordionItem
            id={getFaqItemId(index)}
            key={item.question}
            onOpenChange={(open) => handleOpenChange(item, open)}
            open={openQuestion === item.question}
            title={item.question}
          >
            {item.answer}
          </AccordionItem>
        ))}
      </div>
    </Section>
  );
}
