import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

interface AppShellProps {
  titulo: string;
  subtitulo?: string;
  voltarPara?: string;
  children: ReactNode;
}

export function AppShell({ titulo, subtitulo, voltarPara, children }: AppShellProps) {
  return (
    <div className="veins-bg min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-3xl grid-cols-[auto_minmax(0,1fr)] items-center gap-3 px-4 py-3">
          {voltarPara ? (
            <Link
              to={voltarPara}
              aria-label="Voltar"
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card/70 text-gold"
            >
              <ChevronLeft className="size-5" />
            </Link>
          ) : (
            <span className="size-11 shrink-0" />
          )}
          <div className="min-w-0">
            <h1 className="truncate font-display text-lg text-gold">{titulo}</h1>
            {subtitulo ? (
              <p className="truncate text-xs text-muted-foreground">{subtitulo}</p>
            ) : null}
          </div>
        </div>
        <div className="rune-divider" />
      </header>
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-5">{children}</main>
    </div>
  );
}
