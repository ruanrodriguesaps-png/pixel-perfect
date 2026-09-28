import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { EmBreve } from "@/components/ui/EmBreve";

export const Route = createFileRoute("/mestre/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Herdeiros RPG" },
      { name: "description", content: "Eventos e ganchos narrativos da sua campanha de Herdeiros RPG." },
      { property: "og:title", content: "Eventos — Herdeiros RPG" },
      { property: "og:description", content: "Organize eventos e ganchos narrativos da campanha." },
    ],
  }),
  component: Eventos,
});

function Eventos() {
  return (
    <AppShell titulo="Eventos" subtitulo="Área do Mestre" voltarPara="/mestre">
      <EmBreve
        titulo="Eventos da campanha"
        descricao="Espaço para registrar acontecimentos, ganchos e consequências entre sessões."
        itens={["Linha do tempo da campanha", "Eventos vinculados a jogadores", "Notas privadas do Mestre"]}
      />
    </AppShell>
  );
}
