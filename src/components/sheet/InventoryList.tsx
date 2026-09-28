import { Plus, Trash2 } from "lucide-react";

import { Field } from "./Field";
import type { InventoryItem } from "@/rpg/types";

interface InventoryListProps {
  inventario: InventoryItem[];
  onChange: (inventario: InventoryItem[]) => void;
}

function novo(): InventoryItem {
  return { id: crypto.randomUUID(), item: "", quantidade: 1, descricao: "" };
}

export function InventoryList({ inventario, onChange }: InventoryListProps) {
  const atualizar = (id: string, patch: Partial<InventoryItem>) =>
    onChange(inventario.map((entry) => (entry.id === id ? { ...entry, ...patch } : entry)));

  return (
    <div className="space-y-3">
      {inventario.length === 0 ? (
        <p className="text-sm text-muted-foreground">Inventário vazio.</p>
      ) : null}

      {inventario.map((entry) => (
        <div key={entry.id} className="space-y-3 rounded-xl border border-border/70 p-3">
          <div className="grid grid-cols-[minmax(0,1fr)_5rem_auto] items-end gap-2">
            <Field
              rotulo="Item"
              valor={entry.item}
              onChange={(item) => atualizar(entry.id, { item })}
            />
            <label className="block">
              <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Qtd
              </span>
              <input
                type="number"
                inputMode="numeric"
                value={entry.quantidade}
                onChange={(event) =>
                  atualizar(entry.id, {
                    quantidade: Math.max(0, Number(event.target.value) || 0),
                  })
                }
                className="w-full rounded-lg border border-input bg-background/60 px-2 py-2.5 text-center text-sm outline-none focus:border-primary/70"
              />
            </label>
            <button
              type="button"
              aria-label="Remover item"
              onClick={() => onChange(inventario.filter((other) => other.id !== entry.id))}
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-destructive/50 bg-destructive/12 text-destructive"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
          <Field
            rotulo="Descrição"
            multilinha
            linhas={2}
            valor={entry.descricao}
            onChange={(descricao) => atualizar(entry.id, { descricao })}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => onChange([...inventario, novo()])}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/12 font-display text-xs uppercase tracking-[0.16em] text-primary"
      >
        <Plus className="size-4" /> Adicionar item
      </button>
    </div>
  );
}
