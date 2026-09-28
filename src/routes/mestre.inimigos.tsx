import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { EmBreve } from "@/components/ui/EmBreve";

export const Route = createFileRoute("/mestre/inimigos")({
  head: () => ({
    meta: [
      { title: "Inimigos — Herdeiros RPG" },
      { name: "description", content: "Catálogo de inimigos para suas sessões de Herdeiros RPG." },
      { property: "og:title", content: "Inimigos — Herdeiros RPG" },
      { property: "og:description", content: "Crie inimigos para usar em combate." },
    ],
  }),
  component: Inimigos,
});

function Inimigos() {
  return (
    <AppShell titulo="Inimigos" subtitulo="Área do Mestre" voltarPara="/mestre">
      <EmBreve
        titulo="Criar inimigo"
        descricao="Os inimigos terão fichas próprias, prontas para entrar no combate."
        itens={["Recursos e atributos", "Ações e ataques", "Notas de conduta em combate"]}
      />
    </AppShell>
  );
}
