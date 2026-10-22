---
title: Acessibilidade
description: Metas WCAG 2.2 AA, padrões WAI-ARIA APG implementados, foco, contraste, movimento reduzido e como a biblioteca é testada.
---

# Acessibilidade

O Magic-Style mira **WCAG 2.2 nível AA**. A biblioteca cuida da parte que depende dela (semântica, teclado, foco, contraste dos tokens), mas a conformidade final depende de como você monta a página: rótulos, ordem dos títulos, textos alternativos e o conteúdo em si.

## Contraste

- **Texto:** todos os pares de texto e fundo do contrato passam AA (4,5:1) nos 10 temas, em modo claro e escuro. Um teste reprova qualquer tema que caia abaixo disso.
- **Anel de foco:** `--ms-focus-ring-color` atinge 3:1 contra as superfícies padrão, elevada e rebaixada de todos os temas (WCAG 1.4.11).
- **Bordas de campo:** `--ms-color-border-field` garante 3:1 nas bordas de input, select, checkbox, radio e outros controles de formulário (WCAG 1.4.11).
- **Contraste alto:** `contrast="high"` no `MsProvider` (ou `data-ms-contrast="high"`) reforça textos secundários e bordas.

Se você sobrescrever cores do tema, valide com `checkMsThemeContrast` (veja [Temas](/pt/guide/theming)).

## Foco visível

Todos os componentes usam o mesmo padrão de foco:

- **Campos:** borda na cor do anel mais um halo de 3px (`--ms-focus-ring-shadow`).
- **Demais elementos:** contorno sólido com recuo, na cor `--ms-focus-ring-color`.

Em modo de alto contraste do sistema (`forced-colors`), o contorno usa a cor `Highlight`.

## Teclado e padrões APG

Os componentes interativos seguem os padrões do [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/):

| Padrão APG         | Componentes                                                                                                                             |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Accordion          | [Accordion](/pt/components/accordion)                                                                                                   |
| Alert              | [Alert](/pt/components/alert)                                                                                                           |
| Alert Dialog       | [Confirm Dialog](/pt/components/confirm-dialog)                                                                                         |
| Breadcrumb         | [Breadcrumbs](/pt/components/breadcrumbs)                                                                                               |
| Carousel           | [Carousel](/pt/components/carousel)                                                                                                     |
| Checkbox           | [Checkbox](/pt/components/checkbox)                                                                                                     |
| Combobox           | [Select](/pt/components/select), [Command Palette](/pt/components/command-palette)                                                      |
| Date Picker Dialog | [Date Picker](/pt/components/date-picker)                                                                                               |
| Dialog (Modal)     | [Dialog](/pt/components/dialog), [Drawer](/pt/components/drawer), [Lightbox](/pt/components/lightbox)                                   |
| Disclosure         | [Collapse](/pt/components/collapse)                                                                                                     |
| Menu / Menu Button | [Menu](/pt/components/menu), [Context Menu](/pt/components/context-menu), [Dropdown Button](/pt/components/dropdown-button)             |
| Radio Group        | [Radio Group](/pt/components/radio-group), [Segmented Control](/pt/components/segmented-control), [Choicebox](/pt/components/choicebox) |
| Slider             | [Range](/pt/components/range), [Rating](/pt/components/rating)                                                                          |
| Switch             | [Switch](/pt/components/switch)                                                                                                         |
| Tabs               | [Tabs](/pt/components/tabs)                                                                                                             |
| Toolbar            | [Dock](/pt/components/dock)                                                                                                             |
| Tooltip            | [Tooltip](/pt/components/tooltip)                                                                                                       |
| Tree View          | [Tree](/pt/components/tree)                                                                                                             |
| Window Splitter    | [Split Pane](/pt/components/split-pane)                                                                                                 |

Por trás disso, três primitivas cuidam de camadas e foco:

- **`useFocusTrap`:** foco inicial, Tab cíclico dentro da camada e devolução do foco ao fechar.
- **`useDismissableLayer`:** pilha de camadas para Esc e clique fora. Só a camada do topo fecha.
- **`useScrollLock`:** trava a rolagem da página com contagem de referências, para overlays aninhados.

Menus, árvores, abas e o calendário usam tabindex itinerante (roving tabindex): um único tab stop por grupo, com setas e Home/End dentro dele (e busca por digitação nos menus). As três primitivas acima são exportadas para você usar em componentes próprios.

## Formulários

- `MsField` liga rótulo, descrição e erro ao controle com `for`, `aria-describedby` e `aria-invalid`. A mensagem de erro fica numa região `aria-live="polite"`.
- Cada controle recebe um id único, mesmo com vários controles no mesmo campo.
- Atributos como `required`, `autocomplete` e `aria-*` chegam ao elemento nativo, não ao wrapper.

## Movimento reduzido

As durações de animação multiplicam por `--ms-motion-scale`. Ele vale `0` quando:

- o sistema pede `prefers-reduced-motion: reduce`; ou
- a página (ou um trecho) tem `data-ms-motion="reduced"`, para um controle próprio da aplicação.

```html
<html data-ms-motion="reduced"></html>
```

Indicadores de carregamento (spinner, progress radial, progress indeterminado) continuam animando, porque o movimento é essencial para comunicar o estado. O carrossel pausa a rotação automática com foco, hover ou movimento reduzido, e tem botão de pausar (WCAG 2.2.2).

## Como é testado

- **axe-core:** `packages/vue/tests/axe.test.ts` audita componentes em estados interativos (menus abertos, diálogos, formulários com erro, abas, árvore…). As regras que dependem de layout real, como contraste, ficam com os testes de contraste dos temas.
- **Contraste:** pares de texto, anel de foco e bordas de campo são medidos em todos os temas e modos no health gate do repositório (`pnpm validate`).
- **Comportamento:** testes de teclado e ARIA por componente.

::: warning
Testes automatizados pegam só parte dos problemas. Teste suas telas com teclado e com um leitor de tela (NVDA, VoiceOver) antes de publicar.
:::
