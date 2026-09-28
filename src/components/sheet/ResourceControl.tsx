import { Minus, Plus } from "lucide-react";

import type { Resource } from "@/rpg/types";

interface ResourceControlProps {
  rotulo: string;
  recurso: Resource;
  onChange: (next: Resource) => void;
  perigo?: boolean;
}

export function ResourceControl({ rotulo, recurso, onChange, perigo }: ResourceControlProps) {
  const ajustar = (delta: number) =>
    onChange({ ...recurso, atual: Math.max(0, recurso.atual + delta) });

  const valorTexto =
    recurso.max === null ? `${recurso.atual}` : `${recurso.atual} / ${recurso.max}`;

  return (
    <div className="panel flex items-center gap-3 p-3">
      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{rotulo}</p>
        <p
          className={`font-display text-xl ${perigo && recurso.atual > 0 ? "text-destructive" : "text-gold"}`}
        >
          {valorTexto}
        </p>
      </div>
      <button
        type="button"
        aria-label={`Diminuir ${rotulo}`}
        onClick={() => ajustar(-1)}
        className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-card/70 text-foreground active:bg-muted"
      >
        <Minus className="size-5" />
      </button>
      <button
        type="button"
        aria-label={`Aumentar ${rotulo}`}
        onClick={() => ajustar(1)}
        className="grid size-12 shrink-0 place-items-center rounded-xl border border-primary/60 bg-primary/15 text-primary active:bg-primary/25"
      >
        <Plus className="size-5" />
      </button>
    </div>
  );
}

interface MaxFieldProps {
  rotulo: string;
  recurso: Resource;
  onChange: (next: Resource) => void;
}

export function ResourceMaxField({ rotulo, recurso, onChange }: MaxFieldProps) {
  if (recurso.max === null) return null;
  return (
    <label className="flex items-center justify-between gap-3 px-3 py-1.5 text-xs text-muted-foreground">
      <span className="uppercase tracking-[0.14em]">{rotulo} máximo</span>
      <input
        type="number"
        inputMode="numeric"
        value={recurso.max}
        onChange={(event) =>
          onChange({ ...recurso, max: Math.max(0, Number(event.target.value) || 0) })
        }
        className="w-20 rounded-lg border border-input bg-background/60 px-2 py-1.5 text-center text-sm text-foreground outline-none focus:border-primary/70"
      />
    </label>
  );
}
