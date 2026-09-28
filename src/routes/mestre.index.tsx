import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarClock,
  Dices,
  FolderPlus,
  Ghost,
  Library,
  Skull,
  Swords,
} from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";
import { ActionLink } from "@/components/ui/ActionButton";

export const Route = createFileRoute("/mestre/")({
  head: () => ({
    meta: [
      { title: "Área do Mestre — Herdeiros RPG" },
      {
        name: "description",
        content: "Painel do Mestre de Herdeiros RPG: campanhas, NPCs, inimigos, combate e eventos.",
      },
      { property: "og:title", content: "Área do Mestre — Herdeiros RPG" },
      {
        property: "og:description",
        content: "Organize campanhas, NPCs, inimigos e eventos da sua mesa.",
      },
    ],
  }),
  component: AreaMestre,
});

function AreaMestre() {
  return (
    <AppShell titulo="Área do Mestre" subtitulo="Condução da mesa" voltarPara="/">
      <div className="space-y-3">
        <ActionLink to="/mestre/campanhas" variante="gold" icone={<FolderPlus className="size-5" />}>
          Criar campanha
        </ActionLink>
        <ActionLink to="/mestre/campanhas" variante="arcane" icone={<Library className="size-5" />}>
          Minhas campanhas
        </ActionLink>
        <ActionLink to="/mestre/npcs" variante="ghost" icone={<Ghost className="size-5" />}>
          Criar NPC
        </ActionLink>
        <ActionLink to="/mestre/inimigos" variante="ghost" icone={<Skull className="size-5" />}>
          Criar inimigo
        </ActionLink>
        <ActionLink to="/mestre/combate" variante="ghost" icone={<Swords className="size-5" />}>
          Combate
        </ActionLink>
        <ActionLink to="/rolador" variante="ghost" icone={<Dices className="size-5" />}>
          Rolador de dados
        </ActionLink>
        <ActionLink to="/mestre/eventos" variante="ghost" icone={<CalendarClock className="size-5" />}>
          Eventos
        </ActionLink>
        <ActionLink to="/regras" variante="ghost" icone={<BookOpen className="size-5" />}>
          Regras
        </ActionLink>
      </div>
    </AppShell>
  );
}
