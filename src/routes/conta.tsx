import { createFileRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/layout/AppShell";
import { EmBreve } from "@/components/ui/EmBreve";
import { Panel } from "@/components/ui/Panel";

export const Route = createFileRoute("/conta")({
  head: () => ({
    meta: [
      { title: "Minha Conta — Herdeiros RPG" },
      {
        name: "description",
        content: "Acesso à conta do usuário de Herdeiros RPG e sincronização das fichas.",
      },
      { property: "og:title", content: "Minha Conta — Herdeiros RPG" },
      {
        property: "og:description",
        content: "Conta do usuário e futura sincronização de fichas entre dispositivos.",
      },
    ],
  }),
  component: Conta,
});

function Conta() {
  return (
    <AppShell titulo="Minha Conta" subtitulo="Acesso do usuário" voltarPara="/">
      <div className="space-y-4">
        <Panel titulo="Situação atual">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Você está usando o app em modo local: suas fichas ficam guardadas neste aparelho.
          </p>
        </Panel>

        <EmBreve
          titulo="Login e sincronização"
          descricao="Quando o login for ativado, suas fichas passam a acompanhar você em qualquer aparelho."
          itens={[
            "Entrar com e-mail e senha",
            "Fichas salvas na nuvem",
            "Entrar em campanhas e salas",
            "Sessões em tempo real com o Mestre",
          ]}
        />
      </div>
    </AppShell>
  );
}
