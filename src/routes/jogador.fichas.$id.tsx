import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Dices, HeartCrack, ScrollText, Sparkles, Swords, Backpack } from "lucide-react";

import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { ActionLink } from "@/components/ui/ActionButton";
import { Field } from "@/components/sheet/Field";
import { ResourceControl, ResourceMaxField } from "@/components/sheet/ResourceControl";
import { AttributeControl } from "@/components/sheet/AttributeControl";
import { AbilityList } from "@/components/sheet/AbilityList";
import { NomenclatureList } from "@/components/sheet/NomenclatureList";
import { InventoryList } from "@/components/sheet/InventoryList";
import { useSheet } from "@/data/useSheets";
import { ATTRIBUTE_KEYS, ATTRIBUTE_LABELS } from "@/rpg/attributes";
import type { AttributeValue } from "@/rpg/types";

export const Route = createFileRoute("/jogador/fichas/$id")({
  head: () => ({
    meta: [
      { title: "Ficha de Personagem — Herdeiros RPG" },
      {
        name: "description",
        content:
          "Ficha de personagem de Herdeiros RPG: identificação, recursos, atributos, combate e narrativa.",
      },
      { property: "og:title", content: "Ficha de Personagem — Herdeiros RPG" },
      {
        property: "og:description",
        content: "Controle PV, PF, Karma, Exaustão, atributos e habilidades durante a sessão.",
      },
    ],
  }),
  component: FichaPersonagem,
});

function FichaPersonagem() {
  const { id } = Route.useParams();
  const { sheet, carregando, atualizar } = useSheet(id);

  if (carregando) {
    return (
      <AppShell titulo="Ficha" voltarPara="/jogador">
        <p className="text-sm text-muted-foreground">Carregando ficha…</p>
      </AppShell>
    );
  }

  if (!sheet) {
    return (
      <AppShell titulo="Ficha não encontrada" voltarPara="/jogador">
        <Panel>
          <p className="text-sm text-muted-foreground">
            Esta ficha não existe mais neste aparelho.
          </p>
        </Panel>
      </AppShell>
    );
  }

  return (
    <AppShell
      titulo={sheet.nome || "Sem nome"}
      subtitulo={[sheet.linhagem, sheet.caminho].filter(Boolean).join(" · ") || "Ficha do herdeiro"}
      voltarPara="/jogador"
    >
      <div className="space-y-4">
        <Panel titulo="Identificação" icone={<ScrollText className="size-4" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field rotulo="Nome" valor={sheet.nome} onChange={(nome) => atualizar({ nome })} />
            <Field
              rotulo="Linhagem"
              valor={sheet.linhagem}
              onChange={(linhagem) => atualizar({ linhagem })}
            />
            <Field
              rotulo="Caminho / Classe"
              valor={sheet.caminho}
              onChange={(caminho) => atualizar({ caminho })}
            />
            <Field rotulo="Ego" valor={sheet.ego} onChange={(ego) => atualizar({ ego })} />
          </div>
        </Panel>

        <Panel titulo="Recursos" icone={<Sparkles className="size-4" />}>
          <div className="space-y-3">
            <div>
              <ResourceControl rotulo="PV" recurso={sheet.pv} onChange={(pv) => atualizar({ pv })} />
              <ResourceMaxField rotulo="PV" recurso={sheet.pv} onChange={(pv) => atualizar({ pv })} />
            </div>
            <div>
              <ResourceControl rotulo="PF" recurso={sheet.pf} onChange={(pf) => atualizar({ pf })} />
              <ResourceMaxField rotulo="PF" recurso={sheet.pf} onChange={(pf) => atualizar({ pf })} />
            </div>
            <ResourceControl
              rotulo="Karma"
              recurso={sheet.karma}
              onChange={(karma) => atualizar({ karma })}
            />
            <ResourceControl
              rotulo="Exaustão"
              recurso={sheet.exaustao}
              onChange={(exaustao) => atualizar({ exaustao })}
              perigo
            />
          </div>
        </Panel>

        <Panel titulo="Atributos">
          <div className="space-y-3">
            {ATTRIBUTE_KEYS.map((key) => (
              <AttributeControl
                key={key}
                rotulo={ATTRIBUTE_LABELS[key]}
                valor={sheet.atributos[key]}
                onChange={(valor: AttributeValue) =>
                  atualizar({ atributos: { ...sheet.atributos, [key]: valor } })
                }
              />
            ))}
          </div>
        </Panel>

        <Panel titulo="Combate" icone={<Swords className="size-4" />}>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              rotulo="Esquiva"
              valor={sheet.esquiva}
              onChange={(esquiva) => atualizar({ esquiva })}
            />
            <Field
              rotulo="Bloqueio"
              valor={sheet.bloqueio}
              onChange={(bloqueio) => atualizar({ bloqueio })}
            />
            <Field
              rotulo="Deslocamento"
              valor={sheet.deslocamento}
              onChange={(deslocamento) => atualizar({ deslocamento })}
            />
            <Field
              rotulo="Iniciativa"
              valor={sheet.iniciativa}
              onChange={(iniciativa) => atualizar({ iniciativa })}
            />
          </div>
        </Panel>

        <Panel titulo="⚓ Âncora Sentimental" icone={<Anchor className="size-4" />}>
          <Field
            rotulo="Âncora"
            multilinha
            linhas={3}
            valor={sheet.ancoraSentimental}
            onChange={(ancoraSentimental) => atualizar({ ancoraSentimental })}
          />
        </Panel>

        <Panel titulo="Machucado" icone={<HeartCrack className="size-4" />}>
          <Field
            rotulo="Descrição do machucado atual"
            multilinha
            linhas={3}
            valor={sheet.machucado}
            onChange={(machucado) => atualizar({ machucado })}
          />
        </Panel>

        <Panel titulo="História do Personagem">
          <Field
            rotulo="Background"
            multilinha
            linhas={10}
            valor={sheet.historia}
            onChange={(historia) => atualizar({ historia })}
          />
        </Panel>

        <Panel titulo="Passiva">
          <Field
            rotulo="Passiva"
            multilinha
            linhas={3}
            valor={sheet.passiva}
            onChange={(passiva) => atualizar({ passiva })}
          />
        </Panel>

        <Panel titulo="Habilidades">
          <AbilityList
            habilidades={sheet.habilidades}
            onChange={(habilidades) => atualizar({ habilidades })}
          />
        </Panel>

        <Panel titulo="Nomenclaturas">
          <NomenclatureList
            nomenclaturas={sheet.nomenclaturas}
            onChange={(nomenclaturas) => atualizar({ nomenclaturas })}
          />
        </Panel>

        <Panel titulo="Inventário" icone={<Backpack className="size-4" />}>
          <InventoryList
            inventario={sheet.inventario}
            onChange={(inventario) => atualizar({ inventario })}
          />
        </Panel>

        <div className="space-y-3">
          <ActionLink to="/rolador" variante="gold" icone={<Dices className="size-5" />}>
            Rolador de dados
          </ActionLink>
          <ActionLink to="/jogador/combate" variante="arcane" icone={<Swords className="size-5" />}>
            Simulação de combate
          </ActionLink>
        </div>

        <p className="px-1 text-xs text-muted-foreground">
          Alterações são salvas automaticamente neste aparelho.
        </p>
      </div>
    </AppShell>
  );
}
