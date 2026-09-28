import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { EmBreve } from "@/components/ui/EmBreve";
import { DiceRoller } from "@/components/dice/DiceRoller";

export const Route = createFileRoute("/jogador/combate")({
  head: () => ({
    meta: [
      { title: "Simulação de Combate — Herdeiros RPG" },
      {
        name: "description",
        content: "Espaço de simulação de combate de Herdeiros RPG com rolagens de apoio.",
      },
      { property: "og:title", content: "Simulação de Combate — Herdeiros RPG" },
      {
        property: "og:description",
        content: "Treine rolagens de combate antes e durante a sessão.",
      },
    ],
  }),
  component: SimulacaoCombate,
});

function SimulacaoCombate() {
  return (
    <AppShell titulo="Simulação de Combate" subtitulo="Área do Jogador" voltarPara="/jogador">
      <div className="space-y-4">
        <EmBreve
          titulo="Simulador"
          descricao="As regras automáticas de combate serão implementadas depois. Por enquanto use as rolagens abaixo como apoio."
          itens={["Iniciativa e turnos", "Esquiva e bloqueio", "Dano e machucado"]}
        />
        <DiceRoller />
      </div>
    </AppShell>
  );
}
