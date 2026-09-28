import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { BookOpen, Dices, FilePlus2, ScrollText, Swords, Trash2 } from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { ActionButton, ActionLink } from "@/components/ui/ActionButton";
import { useSheets } from "@/data/useSheets";

export const Route = createFileRoute("/jogador/")({
  head: () => ({
    meta: [
      { title: "Área do Jogador — Herdeiros RPG" },
      {
        name: "description",
        content: "Crie, abra e jogue com suas fichas de Herdeiros RPG direto do celular.",
      },
      { property: "og:title", content: "Área do Jogador — Herdeiros RPG" },
      {
        property: "og:description",
        content: "Suas fichas, rolador de dados e simulação de combate.",
      },
    ],
  }),
  component: AreaJogador,
});

function AreaJogador() {
  const navigate = useNavigate();
  const { sheets, carregando, criar, remover } = useSheets();

  const criarFicha = async () => {
    const ficha = await criar();
    void navigate({ to: "/jogador/fichas/$id", params: { id: ficha.id } });
  };

  return (
    <AppShell titulo="Área do Jogador" subtitulo="Minhas fichas" voltarPara="/">
      <div className="space-y-4">
        <ActionButton variante="gold" icone={<FilePlus2 className="size-5" />} onClick={criarFicha}>
          + Criar ficha
        </ActionButton>

        <Panel titulo="Minhas fichas" icone={<ScrollText className="size-4" />}>
          {carregando ? (
            <p className="text-sm text-muted-foreground">Carregando…</p>
          ) : sheets.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nenhuma ficha ainda. Crie a primeira acima.
            </p>
          ) : (
            <ul className="space-y-2">
              {sheets.map((ficha) => (
                <li
                  key={ficha.id}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-xl border border-border/70 bg-background/40 p-3"
                >
                  <Link
                    to="/jogador/fichas/$id"
                    params={{ id: ficha.id }}
                    className="min-w-0"
                  >
                    <span className="block truncate font-display text-sm text-gold">
                      {ficha.nome || "Sem nome"}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {[ficha.linhagem, ficha.caminho].filter(Boolean).join(" · ") ||
                        "Linhagem e caminho não definidos"}
                    </span>
                  </Link>
                  <button
                    type="button"
                    aria-label={`Excluir ${ficha.nome || "ficha"}`}
                    onClick={() => void remover(ficha.id)}
                    className="grid size-11 shrink-0 place-items-center rounded-xl border border-destructive/50 bg-destructive/12 text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <div className="space-y-3">
          <ActionLink to="/jogador/combate" variante="arcane" icone={<Swords className="size-5" />}>
            Simulação de combate
          </ActionLink>
          <ActionLink to="/rolador" variante="ghost" icone={<Dices className="size-5" />}>
            Rolador de dados
          </ActionLink>
          <ActionLink to="/regras" variante="ghost" icone={<BookOpen className="size-5" />}>
            Regras
          </ActionLink>
        </div>

        <p className="px-1 text-xs text-muted-foreground">
          Abrir, editar e jogar acontecem dentro da própria ficha.
        </p>
      </div>
    </AppShell>
  );
}
