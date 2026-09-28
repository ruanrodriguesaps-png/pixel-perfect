import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { DiceRoller } from "@/components/dice/DiceRoller";

export const Route = createFileRoute("/rolador")({
  head: () => ({
    meta: [
      { title: "Rolador de Dados — Herdeiros RPG" },
      {
        name: "description",
        content: "Role d4, d6, d8, d10, d12 e d20 com resultados individuais e total.",
      },
      { property: "og:title", content: "Rolador de Dados — Herdeiros RPG" },
      {
        property: "og:description",
        content: "Rolagens rápidas de d4 a d20 durante a sessão.",
      },
    ],
  }),
  component: Rolador,
});

function Rolador() {
  return (
    <AppShell titulo="Rolador de Dados" subtitulo="d4 · d6 · d8 · d10 · d12 · d20" voltarPara="/">
      <DiceRoller />
    </AppShell>
  );
}
