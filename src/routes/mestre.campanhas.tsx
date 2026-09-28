import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { EmBreve } from "@/components/ui/EmBreve";

export const Route = createFileRoute("/mestre/campanhas")({
  head: () => ({
    meta: [
      { title: "Campanhas — Herdeiros RPG" },
      {
        name: "description",
        content: "Crie e organize campanhas e salas de Herdeiros RPG como Mestre.",
      },
      { property: "og:title", content: "Campanhas — Herdeiros RPG" },
      { property: "og:description", content: "Campanhas e salas da sua mesa de Herdeiros RPG." },
    ],
  }),
  component: Campanhas,
});

function Campanhas() {
  return (
    <AppShell titulo="Campanhas" subtitulo="Área do Mestre" voltarPara="/mestre">
      <EmBreve
        titulo="Criar e gerenciar campanhas"
        descricao="Aqui você vai criar campanhas, convidar jogadores e abrir salas de sessão."
        itens={[
          "Criar campanha com nome e descrição",
          "Convidar jogadores por código",
          "Salas de sessão com o Mestre no controle",
          "Sincronização em tempo real das fichas",
        ]}
      />
    </AppShell>
  );
}
