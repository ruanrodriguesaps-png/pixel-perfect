import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { EmBreve } from "@/components/ui/EmBreve";

export const Route = createFileRoute("/mestre/npcs")({
  head: () => ({
    meta: [
      { title: "NPCs — Herdeiros RPG" },
      { name: "description", content: "Registro de NPCs da sua campanha de Herdeiros RPG." },
      { property: "og:title", content: "NPCs — Herdeiros RPG" },
      { property: "og:description", content: "Crie e organize os NPCs da sua mesa." },
    ],
  }),
  component: Npcs,
});

function Npcs() {
  return (
    <AppShell titulo="NPCs" subtitulo="Área do Mestre" voltarPara="/mestre">
      <EmBreve
        titulo="Criar NPC"
        descricao="O sistema de NPCs será construído sobre a mesma estrutura das fichas de personagem."
        itens={["Nome e papel na história", "Atributos simplificados", "Notas do Mestre"]}
      />
    </AppShell>
  );
}
