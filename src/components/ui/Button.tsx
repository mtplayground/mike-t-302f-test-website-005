import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/classNames";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly size?: ButtonSize;
  readonly variant?: ButtonVariant;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    readonly href?: never;
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    readonly href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-control hover:bg-brand-700 focus-visible:outline-brand-600",
  secondary:
    "border border-border bg-surface text-ink shadow-sm hover:border-border-strong hover:bg-surface-muted focus-visible:outline-brand-600",
  ghost:
    "text-ink-muted hover:bg-surface-raised hover:text-ink focus-visible:outline-brand-600",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 gap-2 px-3 text-sm",
  md: "h-11 gap-2.5 px-5 text-sm",
  lg: "h-12 gap-3 px-6 text-base",
};

function getButtonClasses({
  className,
  size = "md",
  variant = "primary",
}: Pick<ButtonBaseProps, "className" | "size" | "variant">): string {
  return cn(
    "inline-flex items-center justify-center rounded-control font-semibold transition-colors duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );
}

function getAnchorProps(
  props: ButtonAsAnchorProps,
): Omit<ButtonAsAnchorProps, keyof ButtonBaseProps> {
  const anchorProps = {
    ...props,
  } as Omit<ButtonAsAnchorProps, keyof ButtonBaseProps>;

  Reflect.deleteProperty(anchorProps, "children");
  Reflect.deleteProperty(anchorProps, "className");
  Reflect.deleteProperty(anchorProps, "size");
  Reflect.deleteProperty(anchorProps, "variant");

  return anchorProps;
}

function getNativeButtonProps(
  props: ButtonAsButtonProps,
): Omit<ButtonAsButtonProps, keyof ButtonBaseProps> {
  const buttonProps = {
    ...props,
  } as Omit<ButtonAsButtonProps, keyof ButtonBaseProps>;

  Reflect.deleteProperty(buttonProps, "children");
  Reflect.deleteProperty(buttonProps, "className");
  Reflect.deleteProperty(buttonProps, "size");
  Reflect.deleteProperty(buttonProps, "variant");

  return buttonProps;
}

export function Button(props: ButtonProps) {
  const { className, size, variant } = props;
  const buttonClasses = getButtonClasses({ className, size, variant });

  if ("href" in props && props.href !== undefined) {
    const anchorProps = getAnchorProps(props);

    return (
      <a className={buttonClasses} {...anchorProps}>
        {props.children}
      </a>
    );
  }

  const buttonProps = getNativeButtonProps(props);

  return (
    <button className={buttonClasses} type="button" {...buttonProps}>
      {props.children}
    </button>
  );
}
