import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left font-display text-sm uppercase tracking-[0.14em] transition-colors active:scale-[0.99]";

const variants = {
  gold: "border-primary/60 bg-primary/12 text-primary hover:bg-primary/20",
  arcane: "border-accent/50 bg-accent/15 text-accent-foreground hover:bg-accent/25",
  ghost: "border-border bg-card/70 text-foreground hover:bg-card",
  danger: "border-destructive/50 bg-destructive/12 text-destructive hover:bg-destructive/20",
} as const;

export type ActionVariant = keyof typeof variants;

interface CommonProps {
  icone?: ReactNode;
  variante?: ActionVariant;
  className?: string;
  children: ReactNode;
}

export function ActionButton({
  icone,
  variante = "ghost",
  className,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={cn(base, variants[variante], className)} {...rest}>
      {icone ? <span className="shrink-0">{icone}</span> : null}
      <span className="min-w-0 flex-1">{children}</span>
    </button>
  );
}

export function ActionLink({
  icone,
  variante = "ghost",
  className,
  children,
  ...linkProps
}: CommonProps & LinkProps) {
  return (
    <Link {...linkProps} className={cn(base, variants[variante], className)}>
      {icone ? <span className="shrink-0">{icone}</span> : null}
      <span className="min-w-0 flex-1">{children}</span>
    </Link>
  );
}
