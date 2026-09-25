# Proposta: documentação em VitePress

**Status:** implementada. O site está em `apps/docs` (VitePress 2, pt-BR/en/es) e substituiu o preview antigo. Este documento fica como registro da decisão.

## Problema

O preview antigo tem cerca de 26 mil linhas de JavaScript escrito à mão em 5 páginas HTML. Os templates são compilados no navegador, e a documentação de API é duplicada manualmente (`studio-api-docs.js`). Isso traz três problemas:

- **A API documentada diverge do código.** Props, eventos e slots são reescritos à mão, e nada acusa quando mudam.
- **Não há busca, navegação por URL estável nem SEO.** O roteamento é por hash dentro de uma única página.
- **Contribuir é difícil.** Um exemplo novo exige editar arquivos de milhares de linhas, sem tipos nem lint de template.

## Proposta

Criar `apps/docs` com **VitePress** (Vue 3 + Vite, o mesmo stack da biblioteca) e migrar o conteúdo aos poucos:

1. **Uma página Markdown por componente** (`components/button.md`), com demos como SFCs reais importados (`<<< @/demos/button/Basic.vue` para o código, e o componente renderizado ao lado). As demos passam pelo `vue-tsc` e pelo ESLint do monorepo.
2. **Tabelas de API geradas** com `vue-component-meta`, lendo props, eventos, slots e JSDoc direto dos `.vue`/`types.ts`. Um script de build gera `api/<componente>.json`, e um componente `<ApiTable>` renderiza. Isso elimina o `studio-api-docs.js`.
3. **Seletor de tema, modo, densidade e idioma** no tema do VitePress, usando `MsProvider` (`theme`, `color-mode`, `density`, `locale`). As mesmas páginas servem de verificação visual dos 10 temas.
4. **Busca local** (a nativa do VitePress) e URLs estáveis (`/components/select#async`).
5. **Gate de CI:** `vitepress build` entra no `pnpm validate` só depois que a migração estiver completa. Com páginas reais por componente, dá para somar ao teste de axe do Vitest (que hoje usa happy-dom) uma auditoria axe em navegador sobre o site gerado.

## Migração

| Etapa | Escopo                                                                                | Critério de pronto                                         |
| :---- | :------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| 1     | Esqueleto `apps/docs`, tema com `MsProvider`, geração de API com `vue-component-meta` | Build verde; 3 componentes piloto (Button, Select, Dialog) |
| 2     | Fundamentos: tokens, temas (`docs/theming.md`), i18n (`docs/i18n.md`), RTL            | Guias existentes renderizados no site                      |
| 3     | Componentes restantes, em lotes por categoria (formulários, overlays, layout, dados)  | Nenhum componente só no preview                            |
| 4     | Remoção do preview antigo                                                             | `pnpm validate` inclui o build das docs                    |

## Custos e riscos

- **Esforço:** a maior parte é mover exemplos. A geração de API é a parte que reduz trabalho no longo prazo.
- **Duas fontes durante a migração:** o preview continua funcionando até a etapa 4; nenhum exemplo é apagado antes de existir no VitePress.
- **Dependências novas** (`vitepress`, `vue-component-meta`) só em `apps/docs`, privado. Os packages publicados não mudam.

## Alternativas consideradas

- **Storybook:** bom para isolar estados, mas pesado e com outro modelo mental (stories em vez de páginas). A documentação narrativa (tema, i18n, contrato) encaixa melhor em Markdown.
- **Histoire:** feito para Vue, mas com manutenção menos ativa que a do VitePress.
- **Manter o preview e só gerar a API:** resolve a divergência de props, mas não a busca, as URLs nem a dificuldade de contribuir.
