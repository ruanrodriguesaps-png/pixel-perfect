import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { EmBreve } from "@/components/ui/EmBreve";
import { DiceRoller } from "@/components/dice/DiceRoller";

export const Route = createFileRoute("/mestre/combate")({
  head: () => ({
    meta: [
      { title: "Combate — Herdeiros RPG" },
      { name: "description", content: "Painel de combate do Mestre em Herdeiros RPG." },
      { property: "og:title", content: "Combate — Herdeiros RPG" },
      { property: "og:description", content: "Conduza o combate da sua mesa com apoio de rolagens." },
    ],
  }),
  component: CombateMestre,
});

function CombateMestre() {
  return (
    <AppShell titulo="Combate" subtitulo="Área do Mestre" voltarPara="/mestre">
      <div className="space-y-4">
        <EmBreve
          titulo="Painel de combate"
          descricao="A ordem de turnos e o controle dos participantes entram nas próximas etapas."
          itens={["Ordem de iniciativa", "Participantes e recursos", "Registro de dano"]}
        />
        <DiceRoller />
      </div>
    </AppShell>
  );
}
