import { Plus, Trash2 } from "lucide-react";

import { Field } from "./Field";
import type { Ability } from "@/rpg/types";

interface AbilityListProps {
  habilidades: Ability[];
  onChange: (habilidades: Ability[]) => void;
}

function nova(): Ability {
  return {
    id: crypto.randomUUID(),
    nome: "",
    descricao: "",
    custo: "",
    efeito: "",
    observacoes: "",
  };
}

export function AbilityList({ habilidades, onChange }: AbilityListProps) {
  const atualizar = (id: string, patch: Partial<Ability>) =>
    onChange(habilidades.map((item) => (item.id === id ? { ...item, ...patch } : item)));

  return (
    <div className="space-y-3">
      {habilidades.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhuma habilidade registrada.</p>
      ) : null}

      {habilidades.map((habilidade) => (
        <div key={habilidade.id} className="space-y-3 rounded-xl border border-border/70 p-3">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2">
            <Field
              rotulo="Nome"
              valor={habilidade.nome}
              onChange={(nome) => atualizar(habilidade.id, { nome })}
            />
            <button
              type="button"
              aria-label="Remover habilidade"
              onClick={() => onChange(habilidades.filter((item) => item.id !== habilidade.id))}
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-destructive/50 bg-destructive/12 text-destructive"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
          <Field
            rotulo="Custo"
            valor={habilidade.custo}
            onChange={(custo) => atualizar(habilidade.id, { custo })}
          />
          <Field
            rotulo="Descrição"
            multilinha
            linhas={3}
            valor={habilidade.descricao}
            onChange={(descricao) => atualizar(habilidade.id, { descricao })}
          />
          <Field
            rotulo="Efeito"
            multilinha
            linhas={2}
            valor={habilidade.efeito}
            onChange={(efeito) => atualizar(habilidade.id, { efeito })}
          />
          <Field
            rotulo="Observações"
            multilinha
            linhas={2}
            valor={habilidade.observacoes}
            onChange={(observacoes) => atualizar(habilidade.id, { observacoes })}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => onChange([...habilidades, nova()])}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/12 font-display text-xs uppercase tracking-[0.16em] text-primary"
      >
        <Plus className="size-4" /> Adicionar habilidade
      </button>
    </div>
  );
}
