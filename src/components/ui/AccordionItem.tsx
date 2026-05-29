import type { HTMLAttributes, ReactNode } from "react";
import { useId, useState } from "react";
import { cn } from "../../lib/classNames";

export type AccordionItemProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children" | "title"
> & {
  readonly children: ReactNode;
  readonly defaultOpen?: boolean;
  readonly id?: string;
  readonly onOpenChange?: (open: boolean) => void;
  readonly open?: boolean;
  readonly title: ReactNode;
};

export function AccordionItem({
  children,
  className,
  defaultOpen = false,
  id,
  onOpenChange,
  open,
  title,
  ...itemProps
}: AccordionItemProps) {
  const generatedId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;
  const itemId = id ?? generatedId;
  const buttonId = `${itemId}-button`;
  const panelId = `${itemId}-panel`;

  function handleToggle() {
    const nextOpen = !isOpen;

    if (!isControlled) {
      setUncontrolledOpen(nextOpen);
    }

    onOpenChange?.(nextOpen);
  }

  return (
    <div
      className={cn(
        "rounded-card border border-border bg-surface shadow-sm",
        className,
      )}
      {...itemProps}
    >
      <h3>
        <button
          aria-controls={panelId}
          aria-expanded={isOpen}
          className={cn(
            "flex w-full items-center justify-between gap-4 rounded-card px-5 py-4 text-left font-semibold text-ink",
            "transition-colors duration-200 hover:bg-surface-muted",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
          )}
          id={buttonId}
          onClick={handleToggle}
          type="button"
        >
          <span>{title}</span>
          <span
            aria-hidden="true"
            className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 text-lg leading-none text-brand-700"
          >
            {isOpen ? "-" : "+"}
          </span>
        </button>
      </h3>
      <div
        aria-labelledby={buttonId}
        className="px-5 pb-5 text-sm leading-7 text-ink-muted"
        hidden={!isOpen}
        id={panelId}
      >
        {children}
      </div>
    </div>
  );
}
