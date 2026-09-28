import { dieLabelForAttribute } from "@/rpg/attributes";
import type { AttributeValue } from "@/rpg/types";

interface AttributeControlProps {
  rotulo: string;
  valor: AttributeValue;
  onChange: (value: AttributeValue) => void;
}

const VALORES: AttributeValue[] = [1, 2, 3, 4, 5];

export function AttributeControl({ rotulo, valor, onChange }: AttributeControlProps) {
  return (
    <div className="panel p-3">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="truncate text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {rotulo}
        </p>
        <p className="shrink-0 font-display text-base text-gold">
          {valor} · {dieLabelForAttribute(valor)}
        </p>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-2">
        {VALORES.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            aria-pressed={v === valor}
            className={`min-h-11 rounded-lg border font-display text-sm ${
              v === valor
                ? "border-primary bg-primary/20 text-primary"
                : "border-border bg-card/60 text-muted-foreground"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
