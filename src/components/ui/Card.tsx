import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/classNames";

type CardVariant = "default" | "muted" | "accent";

export type CardProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  readonly children: ReactNode;
  readonly variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  default: "border-border bg-surface",
  muted: "border-border bg-surface-muted",
  accent: "border-brand-200 bg-brand-50",
};

export function Card({
  children,
  className,
  variant = "default",
  ...cardProps
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border p-6 shadow-card transition-shadow duration-200",
        variantClasses[variant],
        className,
      )}
      {...cardProps}
    >
      {children}
    </div>
  );
}
