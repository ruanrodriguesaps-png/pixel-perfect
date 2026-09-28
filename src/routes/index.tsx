import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Swords, UserCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Herdeiros RPG — Ferramenta de mesa" },
      {
        name: "description",
        content:
          "Plataforma de mesa para o sistema Herdeiros: O Despertar. Fichas, recursos e rolador de dados no celular.",
      },
      { property: "og:title", content: "Herdeiros RPG — Ferramenta de mesa" },
      {
        property: "og:description",
        content: "Fichas, recursos e rolador de dados para jogar Herdeiros: O Despertar.",
      },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <div className="veins-bg flex min-h-screen flex-col px-5 py-10">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
        <div className="text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.35em] text-gold-soft">
            O Despertar
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-gold">
            HERDEIROS
            <span className="block">RPG</span>
          </h1>
          <div className="rune-divider mx-auto mt-5 w-40" />
          <p className="mt-4 text-sm text-muted-foreground">
            Escolha seu lugar à mesa para começar.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <Link
            to="/jogador"
            className="flex min-h-20 items-center gap-4 rounded-2xl border border-primary/55 bg-primary/12 px-5 text-primary transition-colors active:bg-primary/20"
          >
            <Swords className="size-7 shrink-0" />
            <span className="min-w-0">
              <span className="block font-display text-lg uppercase tracking-[0.18em]">Jogador</span>
              <span className="block text-xs text-gold-soft">Fichas, dados e combate</span>
            </span>
          </Link>

          <Link
            to="/mestre"
            className="flex min-h-20 items-center gap-4 rounded-2xl border border-accent/55 bg-accent/15 px-5 text-accent-foreground transition-colors active:bg-accent/25"
          >
            <Shield className="size-7 shrink-0" />
            <span className="min-w-0">
              <span className="block font-display text-lg uppercase tracking-[0.18em]">Mestre</span>
              <span className="block text-xs text-muted-foreground">
                Campanhas, NPCs e eventos
              </span>
            </span>
          </Link>
        </div>

        <Link
          to="/conta"
          className="mx-auto mt-10 flex min-h-12 items-center gap-2 rounded-xl border border-border bg-card/60 px-4 text-xs uppercase tracking-[0.18em] text-muted-foreground"
        >
          <UserCircle2 className="size-4" /> Minha conta
        </Link>
      </div>
    </div>
  );
}
