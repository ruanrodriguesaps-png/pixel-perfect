import { useState } from "react";
import { Dices, Minus, Plus } from "lucide-react";

import { AVAILABLE_DICE, rollDice, type RollResult } from "@/rpg/dice";
import type { DieFaces } from "@/rpg/types";
import { Panel } from "@/components/ui/Panel";
import { ActionButton } from "@/components/ui/ActionButton";

export function DiceRoller() {
  const [faces, setFaces] = useState<DieFaces>(6);
  const [quantidade, setQuantidade] = useState(1);
  const [historico, setHistorico] = useState<RollResult[]>([]);

  const rolar = () => setHistorico((atual) => [rollDice(faces, quantidade), ...atual].slice(0, 12));
  const ultima = historico[0];

  return (
    <div className="space-y-4">
      <Panel titulo="Dado">
        <div className="grid grid-cols-3 gap-2">
          {AVAILABLE_DICE.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setFaces(d)}
              aria-pressed={d === faces}
              className={`min-h-14 rounded-xl border font-display text-base ${
                d === faces
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-border bg-card/60 text-muted-foreground"
              }`}
            >
              d{d}
            </button>
          ))}
        </div>
      </Panel>

      <Panel titulo="Quantidade">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Menos um dado"
            onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
            className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-card/70"
          >
            <Minus className="size-5" />
          </button>
          <p className="flex-1 text-center font-display text-2xl text-gold">
            {quantidade}d{faces}
          </p>
          <button
            type="button"
            aria-label="Mais um dado"
            onClick={() => setQuantidade((q) => Math.min(20, q + 1))}
            className="grid size-12 shrink-0 place-items-center rounded-xl border border-primary/60 bg-primary/15 text-primary"
          >
            <Plus className="size-5" />
          </button>
        </div>
      </Panel>

      <ActionButton variante="gold" icone={<Dices className="size-5" />} onClick={rolar}>
        Rolar {quantidade}d{faces}
      </ActionButton>

      {ultima ? (
        <Panel titulo="Resultado">
          <p className="font-display text-4xl text-gold">{ultima.total}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {ultima.resultados.map((valor, index) => (
              <span
                key={`${ultima.id}-${index}`}
                className="grid min-w-11 place-items-center rounded-lg border border-accent/50 bg-accent/15 px-2 py-1.5 font-display text-sm"
              >
                {valor}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{ultima.notacao}</p>
        </Panel>
      ) : null}

      {historico.length > 1 ? (
        <Panel titulo="Histórico">
          <ul className="space-y-2 text-sm">
            {historico.slice(1).map((rolagem) => (
              <li
                key={rolagem.id}
                className="flex items-center justify-between gap-3 border-b border-border/60 pb-2 last:border-0"
              >
                <span className="truncate text-muted-foreground">
                  {rolagem.notacao} · {rolagem.resultados.join(", ")}
                </span>
                <span className="shrink-0 font-display text-gold">{rolagem.total}</span>
              </li>
            ))}
          </ul>
        </Panel>
      ) : null}
    </div>
  );
}
