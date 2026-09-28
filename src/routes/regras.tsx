import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { EmBreve } from "@/components/ui/EmBreve";
import { ATTRIBUTE_KEYS, ATTRIBUTE_LABELS, dieLabelForAttribute } from "@/rpg/attributes";
import type { AttributeValue } from "@/rpg/types";

export const Route = createFileRoute("/regras")({
  head: () => ({
    meta: [
      { title: "Regras — Herdeiros RPG" },
      {
        name: "description",
        content: "Referência rápida de Herdeiros RPG: escala de atributos e dados correspondentes.",
      },
      { property: "og:title", content: "Regras — Herdeiros RPG" },
      {
        property: "og:description",
        content: "Escala de atributos e dados de Herdeiros: O Despertar.",
      },
    ],
  }),
  component: Regras,
});

const VALORES: AttributeValue[] = [1, 2, 3, 4, 5];

function Regras() {
  return (
    <AppShell titulo="Regras" subtitulo="Referência rápida" voltarPara="/">
      <div className="space-y-4">
        <Panel titulo="Atributos e dados">
          <ul className="space-y-2">
            {VALORES.map((valor) => (
              <li
                key={valor}
                className="flex items-center justify-between border-b border-border/60 pb-2 text-sm last:border-0"
              >
                <span className="text-muted-foreground">Valor {valor}</span>
                <span className="font-display text-gold">{dieLabelForAttribute(valor)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Atributos: {ATTRIBUTE_KEYS.map((key) => ATTRIBUTE_LABELS[key]).join(" · ")}.
          </p>
        </Panel>

        <EmBreve
          titulo="Demais regras"
          descricao="O conteúdo completo das regras será registrado aqui conforme você fornecer os textos oficiais do sistema."
          itens={[
            "Testes e dificuldades",
            "Combate e iniciativa",
            "Karma e Fluxo",
            "Nomenclaturas",
          ]}
        />
      </div>
    </AppShell>
  );
}
