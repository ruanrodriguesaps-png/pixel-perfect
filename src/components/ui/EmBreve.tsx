import { Sparkles } from "lucide-react";

import { Panel } from "./Panel";

interface EmBreveProps {
  titulo: string;
  descricao: string;
  itens?: string[];
}

export function EmBreve({ titulo, descricao, itens }: EmBreveProps) {
  return (
    <Panel titulo={titulo} icone={<Sparkles className="size-4" />}>
      <p className="text-sm leading-relaxed text-muted-foreground">{descricao}</p>
      {itens?.length ? (
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {itens.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gold">•</span>
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-xs text-accent-foreground">
        Estrutura pronta — funcionalidade será ativada nas próximas etapas.
      </p>
    </Panel>
  );
}
