import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PanelProps {
  titulo?: string;
  icone?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function Panel({ titulo, icone, className, children }: PanelProps) {
  return (
    <section className={cn("panel p-4", className)}>
      {titulo ? (
        <header className="mb-3 flex min-w-0 items-center gap-2">
          {icone ? <span className="shrink-0 text-gold">{icone}</span> : null}
          <h2 className="truncate font-display text-sm uppercase tracking-[0.18em] text-gold-soft">
            {titulo}
          </h2>
        </header>
      ) : null}
      {children}
    </section>
  );
}
