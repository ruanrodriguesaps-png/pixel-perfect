<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Herdeiros RPG — decisões de arquitetura

- Regras do sistema ficam em `src/rpg/` (puro TypeScript, sem React) — para que testes/combate/Karma possam ser adicionados sem tocar na UI.
- Persistência passa por `SheetRepository` em `src/data/sheetRepository.ts` — hoje localStorage, depois Supabase com a mesma interface.
- Hooks de dados ficam em `src/data/` e componentes visuais em `src/components/{layout,ui,sheet,dice}` — componentes não contêm regras de RPG.
- Tema é dark-only (preto/roxo/dourado) definido em `src/styles.css`; nenhum toggle de tema claro.
- Mobile-first: alvos de toque com no mínimo 44px, pois o app é usado durante sessões no celular.
