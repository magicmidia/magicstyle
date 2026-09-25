# Análise de concorrentes: leva 2

**Escopo:** comparação do Magic-Style com as bibliotecas de referência no ecossistema Vue e com o shadcn/ui, que hoje define o padrão visual e de documentação. O documento aponta o que já foi resolvido nesta leva e o que fica como backlog.

**Concorrentes analisados:** shadcn/ui (React) e shadcn-vue, Nuxt UI v3, PrimeVue 4, Vuetify 3 e Reka UI (antigo Radix Vue).

As afirmações sobre concorrentes descrevem características públicas e estáveis dos projetos, não números de versão nem métricas que mudam com frequência.

## Resumo

| Eixo           | Referência                                                              | Magic-Style antes                                       | Magic-Style agora                                                                      | Backlog                                                  |
| :------------- | :---------------------------------------------------------------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| Visual padrão  | shadcn/ui (new-york)                                                    | Visual próprio, 5 padrões de foco, sombras azuladas     | Estrutura shadcn em todos os temas; foco único com halo; sombras na escala do Tailwind | Revisar componentes de nicho (FAB, speed dial, lightbox) |
| Temas          | Nuxt UI (app.config + CSS vars), PrimeVue (presets), daisyUI (contrato) | Contrato de 27 variáveis com contraste validado         | Galeria dos 10 temas e gerador de tema com verificação AA no site                      | Exportar para Figma/Tokens Studio                        |
| Documentação   | shadcn/ui, Nuxt UI                                                      | Preview de 34 mil linhas escrito à mão, só em português | Site VitePress em pt-BR, en e es, 95 páginas por idioma com demos, código e API gerada | Playground online (StackBlitz)                           |
| API gerada     | Nuxt UI, PrimeVue                                                       | Duplicada à mão                                         | `vue-component-meta` gera props, eventos e slots do código                             | Descrever as 128 props sem JSDoc e ativar `--strict`     |
| Acessibilidade | Reka UI (primitivas WAI-ARIA)                                           | Padrões APG, foco 3:1                                   | Mesma base, com notas de teclado por componente e bugs de a11y corrigidos              | Auditoria axe no navegador em CI                         |
| i18n           | Vuetify (locale adapter), PrimeVue (locale)                             | pt-BR e en                                              | pt-BR, en e es nos componentes e no site                                               | Mais idiomas via contribuição                            |
| Distribuição   | shadcn (CLI copia o código), Nuxt UI (módulo)                           | Pacote npm                                              | Pacote npm, CSS utilizável sem Vue                                                     | CLI/registry `magic-style add`                           |
| SSR            | Nuxt UI (Nuxt nativo)                                                   | SSR sem mismatch                                        | Guias de Laravel + Inertia com SSR nos 3 idiomas                                       | Módulo Nuxt                                              |

## Por eixo

### Visual

O shadcn/ui virou referência porque tem poucas decisões e todas consistentes: controles de 36px, texto de 14px, `shadow-xs` nos campos, anel de foco de 3px com transparência, cards `rounded-xl`, overlays sem blur e menus densos. O shadcn-vue e o Nuxt UI v3 seguem a mesma linguagem.

**O que mudou:** a estrutura passou a ser a mesma em todos os temas, e cada tema troca só cores, raios, profundidade e fontes (decisão da leva). Houve ainda três correções transversais:

- a variável inexistente `--ms-font-size-body-*` foi eliminada;
- as alturas fixas do Select foram substituídas por tokens;
- o `scale()` no clique do botão foi removido.

**Diferencial mantido:** as bordas de campo seguem em 3:1 (WCAG 1.4.11). O shadcn usa bordas mais claras, que não atingem esse contraste.

### Temas

- **PrimeVue 4:** presets (Aura, Lara, Nora) com design tokens em três camadas (primitive, semantic, component).
- **Nuxt UI v3:** cores configuráveis em `app.config` e variáveis CSS.
- **Magic-Style:** usa o modelo de contrato do daisyUI e do FlyonUI. É menor para o autor do tema e tem uma vantagem que os outros não oferecem prontos: `checkMsThemeContrast` aponta falhas de WCAG AA antes de publicar.

O gerador de tema do site expõe isso visualmente, com prévia nos componentes reais e código `defineMsTheme` e CSS prontos. É o equivalente ao gerador de temas do shadcn/ui, mas com verificação de contraste.

**Backlog:** exportar o tema gerado em DTCG ou Tokens Studio; permitir editar todas as cores do contrato, não só a primária e a matiz dos neutros.

### Documentação

O shadcn/ui e o Nuxt UI definem o padrão esperado hoje:

- uma página por componente, com exemplo ao vivo e código ao lado;
- tabela de API gerada do código;
- busca;
- URLs estáveis;
- modo escuro;
- seletor de tema.

**Novo site (`apps/docs`):**

- VitePress 2, com páginas geradas a partir de um catálogo tipado;
- demos em SFC reais que passam por `vue-tsc` e ESLint;
- código exibido com os textos já traduzidos para o idioma da página;
- tabelas de API com `vue-component-meta` e traduções de descrição sinalizadas quando desatualizadas;
- busca local por idioma, `hreflang` e sitemap;
- notas de teclado e ARIA conferidas no código-fonte.

**Backlog:**

- playground (StackBlitz ou Vue SFC Playground) a partir da demo;
- página de "blocks" com telas completas (login, dashboard, configurações), como os blocks do shadcn;
- smoke e2e com Playwright e axe no CI.

### Distribuição

O CLI do shadcn copia o código do componente para o projeto, o que dá controle total ao usuário. O Nuxt UI e o PrimeVue distribuem pacotes.

O Magic-Style distribui dois pacotes: `@magic-style/vue` e `@magic-style/css`. O pacote de CSS funciona sem Vue (HTML e Blade), algo que nenhum dos concorrentes Vue oferece.

**Backlog:** um registry compatível com o CLI do shadcn-vue (JSON por componente) permitiria o fluxo "copiar para o projeto" sem manter um CLI próprio.

### Acessibilidade

O Reka UI é a referência em primitivas acessíveis; o shadcn-vue e o Nuxt UI v3 são construídos sobre ele. O Magic-Style implementa os padrões APG por conta própria.

Os agentes que escreveram as demos auditaram o código-fonte de cada componente e encontraram lacunas reais, listadas abaixo. As corrigidas nesta leva estão no changeset `a11y-i18n-fixes`.

- `MsSegmentedControl` não move o foco com as setas.
- `MsProgressRadial` tem `aria-valuenow` inconsistente.
- `MsRadioGroup` fica sem alvo para o `<label for>`.
- `MsField` e `MsRating` têm textos fixos em português.
- O ícone de `MsCommandPalette` é ignorado.

**Backlog (encontrado, ainda não corrigido):**

- `MsEmojiPicker` e `MsIconPicker`: sem `aria-expanded`, sem fechar com Esc e com nomes só em português.
- `MsDatePicker`: o input não recebe o id do `MsField`, e os atalhos ignoram `minDate`/`maxDate`.
- `MsFab`: o speed dial não fecha com Esc.
- `MsMenu`: não devolve o foco ao gatilho.
- `MsBanner`: `role="region"` sem nome acessível.
- `MsFileInput`: não valida `accept` em arquivos arrastados.
- `MsChoicebox`: sem navegação por setas.
- `MsButton`: sem renderização como link (`as`/`href`). O shadcn resolve isso com `asChild`.
- `MsListGroup` / `MsListItem`: `role="group"` dentro de `<ul>` e `aria-selected` em `<li>` de lista simples; `interactive` sem teclado.
- `MsCollapse` / `MsAccordionItem`: `<div>` dentro do `<button>` do cabeçalho (modelo de conteúdo inválido).
- `MsGlimpse`: `aria-expanded` em elemento não interativo. `MsTruncate`: botão sem `aria-expanded`, que aparece mesmo sem truncamento.
- `MsMarquee`, `MsParallax`, `MsPointer`: ignoram `prefers-reduced-motion`; o marquee não tem pausa (WCAG 2.2.2).
- `MsBlockquote`: o `cite` vai para o atributo nativo, que espera uma URL. `MsTimelineItem`: título sempre `<h4>`.
- `MsCarousel`: `totalSlides` informado à mão, embora os slides se registrem.

### API

- **Reka UI e shadcn-vue:** `as` e `asChild` permitem trocar o elemento raiz.
- **Nuxt UI v3:** prop `ui` para sobrescrever classes por slot.
- **PrimeVue:** `pt` (pass-through).

O Magic-Style não tem nenhum desses mecanismos, e o caso mais sentido é o do botão como link (a landing usa uma âncora com as classes do botão).

**Backlog:** `as` em `MsButton`, `MsBadge` e `MsCard` como primeiro passo; avaliar um `pt` simples por slot depois.

## Prioridades sugeridas para a próxima leva

1. `as`/`href` em `MsButton` (a demanda mais citada pelos agentes e pela landing).
2. Corrigir o backlog de acessibilidade acima e rodar axe no navegador em CI.
3. Completar o JSDoc das 128 props sem descrição e ativar `gen-api --strict`.
4. Blocks (telas completas) no site.
5. Registry compatível com o shadcn-vue.
