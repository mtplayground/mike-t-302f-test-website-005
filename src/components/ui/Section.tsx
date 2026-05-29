import type { HTMLAttributes, ReactNode } from "react";
import type { SectionId } from "../../types/content";
import { cn } from "../../lib/classNames";

type SectionSpacing = "default" | "tight";
type SectionVariant = "default" | "muted";

export type SectionProps = Omit<HTMLAttributes<HTMLElement>, "children" | "id"> & {
  readonly children: ReactNode;
  readonly id?: SectionId;
  readonly innerClassName?: string;
  readonly spacing?: SectionSpacing;
  readonly variant?: SectionVariant;
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-[var(--spacing-section)]",
  tight: "py-[var(--spacing-section-tight)]",
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-transparent",
  muted: "bg-surface-muted",
};

export function Section({
  children,
  className,
  id,
  innerClassName,
  spacing = "default",
  variant = "default",
  ...sectionProps
}: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-24",
        spacingClasses[spacing],
        variantClasses[variant],
        className,
      )}
      id={id}
      {...sectionProps}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-[var(--spacing-gutter)]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
