import { Plus, Trash2 } from "lucide-react";

import { Field } from "./Field";
import type { Nomenclature } from "@/rpg/types";

interface NomenclatureListProps {
  nomenclaturas: Nomenclature[];
  onChange: (nomenclaturas: Nomenclature[]) => void;
}

function nova(): Nomenclature {
  return {
    id: crypto.randomUUID(),
    nome: "",
    descricao: "",
    custoPf: "",
    dano: "",
    alcance: "",
    efeitos: "",
    observacoes: "",
  };
}

export function NomenclatureList({ nomenclaturas, onChange }: NomenclatureListProps) {
  const atualizar = (id: string, patch: Partial<Nomenclature>) =>
    onChange(nomenclaturas.map((item) => (item.id === id ? { ...item, ...patch } : item)));

  return (
    <div className="space-y-3">
      {nomenclaturas.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhuma Nomenclatura registrada.</p>
      ) : null}

      {nomenclaturas.map((nomenclatura) => (
        <div key={nomenclatura.id} className="space-y-3 rounded-xl border border-border/70 p-3">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2">
            <Field
              rotulo="Nome"
              valor={nomenclatura.nome}
              onChange={(nome) => atualizar(nomenclatura.id, { nome })}
            />
            <button
              type="button"
              aria-label="Remover Nomenclatura"
              onClick={() => onChange(nomenclaturas.filter((item) => item.id !== nomenclatura.id))}
              className="grid size-11 shrink-0 place-items-center rounded-xl border border-destructive/50 bg-destructive/12 text-destructive"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Field
              rotulo="Custo de PF"
              valor={nomenclatura.custoPf}
              onChange={(custoPf) => atualizar(nomenclatura.id, { custoPf })}
            />
            <Field
              rotulo="Dano"
              valor={nomenclatura.dano}
              onChange={(dano) => atualizar(nomenclatura.id, { dano })}
            />
            <Field
              rotulo="Alcance"
              valor={nomenclatura.alcance}
              onChange={(alcance) => atualizar(nomenclatura.id, { alcance })}
            />
          </div>
          <Field
            rotulo="Descrição"
            multilinha
            linhas={3}
            valor={nomenclatura.descricao}
            onChange={(descricao) => atualizar(nomenclatura.id, { descricao })}
          />
          <Field
            rotulo="Efeitos"
            multilinha
            linhas={2}
            valor={nomenclatura.efeitos}
            onChange={(efeitos) => atualizar(nomenclatura.id, { efeitos })}
          />
          <Field
            rotulo="Observações"
            multilinha
            linhas={2}
            valor={nomenclatura.observacoes}
            onChange={(observacoes) => atualizar(nomenclatura.id, { observacoes })}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => onChange([...nomenclaturas, nova()])}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/12 font-display text-xs uppercase tracking-[0.16em] text-primary"
      >
        <Plus className="size-4" /> Adicionar Nomenclatura
      </button>
    </div>
  );
}
