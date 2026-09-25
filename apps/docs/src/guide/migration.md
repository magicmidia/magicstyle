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

### Textos embutidos em português

Textos que saíam em inglês no meio de uma interface em português agora vêm do dicionário de idiomas, em pt-BR por padrão: `MsSelect` (placeholder, busca, limpar, vazio, criar, remover opção), `MsDrawer`, `MsNavbar`, `MsSidebar`, `MsSidebarMenu`, `MsTabs` e `MsBreadcrumbs`.

Se o seu app é em inglês, ative o dicionário inglês:

```ts
app.use(createMsI18n({ locale: "en-US" }));
```

Veja [Idiomas (i18n)](/guide/i18n) para ajustar textos pontuais.

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

- **Contrato de 27 variáveis.** Os temas agora definem só o contrato, e o resto é derivado. Os nomes de tokens existentes continuam válidos. Se você sobrescrevia muitos tokens semânticos para montar um tema, migre para as variáveis do contrato. Veja [Temas](/guide/theming).
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
- **RTL.** O CSS usa propriedades lógicas. Em LTR nada muda. Veja [RTL](/guide/rtl).

## Checklist

1. Atualize `@magic-style/vue` e `@magic-style/css` juntos. Os dois pacotes são versionados em conjunto.
2. Procure `MsBadge`, `MsTabs`, `MsAlert`, `MsTooltip`, `MsSkeleton` e `MsHoverCard` sem a prop da tabela acima e decida se quer o novo padrão.
3. Passe `items` para todo `MsCommandPalette`.
4. Se o app não é em português, instale `createMsI18n` com o seu `locale`.
5. Revise sobrescritas de CSS que usavam `!important` ou tokens de sombra e foco antigos.
