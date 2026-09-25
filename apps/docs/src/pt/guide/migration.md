---
title: Migração
description: O que mudou do visual da fase de preview para o novo padrão no estilo shadcn/ui, e como voltar ao comportamento anterior quando precisar.
---

# Migração

A próxima versão troca o visual da fase de preview por um padrão no estilo shadcn/ui, aplicado a todos os temas. A API continua a mesma. O que muda são alguns valores padrão de props, o visual e os textos embutidos. Esta página lista cada mudança e como voltar ao comportamento anterior.

## Props com novo padrão

| Componente    | Prop        | Antes       | Agora       | Para voltar           |
| :------------ | :---------- | :---------- | :---------- | :-------------------- |
| `MsBadge`     | `variant`   | `"soft"`    | `"solid"`   | `variant="soft"`      |
| `MsTabs`      | `variant`   | `"line"`    | `"pill"`    | `variant="line"`      |
| `MsAlert`     | `tone`      | `"info"`    | `"neutral"` | `tone="info"`         |
| `MsTooltip`   | `tone`      | `"dark"`    | `"primary"` | `tone="dark"`         |
| `MsSkeleton`  | `animation` | `"shimmer"` | `"pulse"`   | `animation="shimmer"` |
| `MsHoverCard` | `width`     | `"300px"`   | `"256px"`   | `width="300px"`       |

```vue
<!-- Visual anterior, explícito -->
<MsBadge variant="soft">Novo</MsBadge>
<MsTabs variant="line">…</MsTabs>
<MsAlert tone="info">…</MsAlert>
```

## Mudanças de comportamento

### `MsCommandPalette` sem demonstração

Sem `items`, a paleta agora mostra o estado vazio. Antes, ela exibia 6 comandos de demonstração embutidos. Passe seus comandos explicitamente:

```vue
<MsCommandPalette v-model="open" :items="commands" />
```

### Textos embutidos em inglês por padrão

Textos que saíam em inglês no meio de uma interface em português agora vêm do dicionário de idiomas: `MsSelect` (placeholder, busca, limpar, vazio, criar, remover opção), `MsDrawer`, `MsNavbar`, `MsSidebar`, `MsSidebarMenu`, `MsTabs` e `MsBreadcrumbs`.

O dicionário padrão agora é o inglês (`en-US`). Se o seu app é em português, defina o idioma ao instalar o plugin:

```ts
app.use(createMsI18n({ locale: "pt-BR" }));
```

Veja [Idiomas (i18n)](/pt/guide/i18n) para ajustar textos pontuais.

### `v-model` em checkbox e switch

`MsCheckbox` e `MsSwitch` aceitam o `v-model` padrão, além do `v-model:checked`, que continua funcionando. Não é preciso mudar nada, mas o código fica mais simples com o `useForm` do Inertia:

```vue
<!-- Antes -->
<MsCheckbox v-model:checked="form.remember" label="Lembrar de mim" />
<!-- Agora também -->
<MsCheckbox v-model="form.remember" label="Lembrar de mim" />
```

### Ícone de fechar do `MsDrawer`

O botão de fechar usa um ícone SVG no lugar do caractere `✕`. Para usar outro ícone, preencha o slot `close`.

## Mudanças de marcação e de API

### `MsButton` e `aria-expanded`

O `MsButton` não renderiza mais `aria-expanded="false"` em todo botão. O atributo só aparece quando você passa `open`, então gatilhos de menus e popovers precisam ligá-lo:

```vue
<MsButton caret :open="menuAberto" @click="menuAberto = !menuAberto">Opções</MsButton>
```

O `MsButton` agora também renderiza links: `href` gera um `<a>`, e `as` aceita uma tag ou um componente como o `RouterLink` ou o `Link` do Inertia.

### `MsPagination` sem `update:pageSize`

O `MsPagination` não declara mais o evento `update:pageSize`, que nunca era emitido. Troque `v-model:page-size` pela prop `page-size` e por um seletor de tamanho de página próprio.

### `MsTag` clicável e removível

Uma tag `clickable` e `closable` ao mesmo tempo não coloca mais o botão de fechar dentro de um `role="button"`. A parte clicável virou um `span.ms-tag__action` com `role="button"`, irmão do botão de fechar, e a raiz fica sem papel. Atualize seletores de CSS e testes que miravam `.ms-tag[role="button"]` nessas tags.

### Grupos do `MsList` e `aria-current`

- O `MsListGroup` precisa ser filho do `MsList`. Ele renderiza um `<li role="none">` com um `<ul role="group">` aninhado, rotulado pelo cabeçalho. Mova para dentro do `MsList` os grupos que envolviam uma lista inteira.
- `active` no `MsListItem` agora vira `aria-current="true"` (antes era `aria-selected`). Para seleção única, use a nova prop `selectable`, que transforma a lista em um `role="listbox"` com opções `aria-selected`.

### `label` no `MsIconButton`

O `MsIconButton` recebe o nome acessível na nova prop `label`. A prop `ariaLabel` está obsoleta; o atributo `aria-label="…"` continua funcionando.

```vue
<MsIconButton label="Fechar"><XIcon /></MsIconButton>
```

### Classes do app shell

As classes da barra lateral e do rodapé do `MsAppShell` não conflitam mais com o `MsSidebar` e o `MsFooter`. Atualize o seu CSS:

| Antes                    | Agora                               |
| :----------------------- | :---------------------------------- |
| `.ms-sidebar`            | `.ms-app-shell__sidebar`            |
| `.ms-sidebar--collapsed` | `.ms-app-shell__sidebar--collapsed` |
| `.ms-sidebar__header`    | `.ms-app-shell__sidebar-header`     |
| `.ms-sidebar__content`   | `.ms-app-shell__sidebar-content`    |
| `.ms-sidebar__footer`    | `.ms-app-shell__sidebar-footer`     |
| `.ms-footer`             | `.ms-app-shell__footer`             |

## Mudanças visuais

Valem para todos os temas. Cada tema continua trocando só cores, raios, profundidade e fontes.

- **Controles:** altura padrão de 36px e texto de 14px. Campos com fundo transparente e sombra `xs`.
- **Botões:** sem `scale` no clique e sem letter-spacing. O botão só de ícone fica quadrado. `outline` e `ghost` ficam neutros. `soft` volta a ser fundo claro com texto no tom (também em tag e banner).
- **Checkbox, radio e switch:** seguem as medidas do shadcn/ui.
- **Superfícies:** cards com `radius-xl` e padding de 24px. Dialog com até 512px e overlay preto a 50% sem blur. Popover e menus com `radius-md`, sombra `dropdown` e hover neutro.
- **Dados e feedback:** tabela sem fundo no cabeçalho, toast sem faixa lateral colorida, avatar de 32px.
- **Tipografia:** `typography-size-xs` passa a 12px, e os tamanhos de fonte passam a ser em `rem`, acompanhando o tamanho de fonte escolhido pelo usuário.
- **Tema Magic:** superfícies neutras (sem o tom azulado no escuro), com o primário azul mantido.
- **Tema Graphite:** paleta própria (antes era o Magic com outro `accent`), raios mais compactos e `depth` 0,6.

## Tokens e temas

- **Contrato de 27 variáveis.** Os temas agora definem só o contrato, e o resto é derivado. Os nomes de tokens existentes continuam válidos. Se você sobrescrevia muitos tokens semânticos para montar um tema, migre para as variáveis do contrato. Veja [Temas](/pt/guide/theming).
- **Sombras.** A escala nova é `--ms-elevation-xs` a `--ms-elevation-xl`, proporcional a `--ms-depth`. `--ms-elevation-1`, `-2` e `-3` continuam como aliases de `sm`, `md` e `lg`.
- **Foco.** Um único padrão em toda a biblioteca: `--ms-focus-ring-color` (3:1 em todas as superfícies) e `--ms-focus-ring-shadow` para o halo dos campos.
- **Bordas de campo mais fortes.** Inputs, selects, checkbox e radio usam `--ms-color-border-field`, com 3:1 (WCAG 1.4.11). Para o visual anterior, mais suave:

```css
:root {
  --ms-color-border-field: var(--ms-color-base-300);
  --ms-color-border-field-hover: var(--ms-color-border-strong);
}
```

- **Sem `!important`.** Sidebar, bento grid e scrollbar não usam mais `!important`, então suas sobrescritas passam a funcionar por especificidade normal.
- **Movimento reduzido.** Animações decorativas (accordion, ping do badge, popover, hover card…) agora respeitam `prefers-reduced-motion` e `data-ms-motion="reduced"`.
- **RTL.** O CSS usa propriedades lógicas. Em LTR nada muda. Veja [RTL](/pt/guide/rtl).

## Checklist

1. Atualize `@magic-style/vue` e `@magic-style/css` juntos. Os dois pacotes são versionados em conjunto.
2. Procure `MsBadge`, `MsTabs`, `MsAlert`, `MsTooltip`, `MsSkeleton` e `MsHoverCard` sem a prop da tabela acima e decida se quer o novo padrão.
3. Passe `items` para todo `MsCommandPalette`.
4. Se o app não é em inglês, instale `createMsI18n` com o seu `locale` (por exemplo `pt-BR`).
5. Revise sobrescritas de CSS que usavam `!important` ou tokens de sombra e foco antigos.
6. Passe `:open` para todo `MsButton` que abre menu ou popover e troque `v-model:page-size` no `MsPagination`.
7. Mova o `MsListGroup` para dentro do `MsList`, use `label` no `MsIconButton` e renomeie as classes do app shell no seu CSS.
