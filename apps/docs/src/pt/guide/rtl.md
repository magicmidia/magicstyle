---
title: RTL
description: Suporte a idiomas da direita para a esquerda com propriedades lógicas, dir no MsProvider e as exceções que continuam físicas.
---

# RTL

O CSS do Magic-Style usa propriedades lógicas (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`, `text-align: start`…). Com `dir="rtl"`, os componentes se espelham sozinhos, sem folha de estilo extra.

## Ativar

No documento inteiro:

```html
<html lang="ar" dir="rtl"></html>
```

Ou pelo `MsProvider`, que grava `dir` no wrapper ou, com `target="root"`, no `<html>`:

```vue
<MsProvider dir="rtl" target="root">
  <App />
</MsProvider>
```

Para um trecho da página, use `MsThemeScope`:

```vue
<MsThemeScope dir="rtl">
  <MsCard>…</MsCard>
</MsThemeScope>
```

A direção também pode mudar em tempo de execução com `useThemeContext().setDir("rtl")`.

::: tip SSR
Com `target="root"`, o `dir` só chega ao `<html>` no cliente. Em apps com SSR, escreva `dir` também no template do servidor, como no exemplo do [modo escuro](/pt/guide/dark-mode).
:::

## O que se espelha

- Espaçamentos, bordas, raios de canto e alinhamento de texto de todos os componentes.
- `MsCarousel` e `MsMarquee` invertem o movimento em `:dir(rtl)`, e as setas do carrossel ficam nas bordas lógicas.
- No calendário do `MsDatePicker`, as setas esquerda e direita se invertem.
- O separador do `MsSplitPane` responde ao teclado de acordo com a direção.

## Exceções (continuam físicas)

Alguns casos continuam físicos de propósito:

| Caso                                                                              | Motivo                                                                  |
| :-------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| Props com nome de lado: `placement="left"`, cantos como `top-right`               | O nome promete um lado da tela. Troque o valor se quiser espelhar.      |
| Painéis posicionados por JavaScript (`MsSelect`), tooltip, glimpse, FAB e pointer | A posição é calculada em coordenadas da tela.                           |
| `MsCodeBlock`                                                                     | Força `direction: ltr`, porque código se lê da esquerda para a direita. |

Se você escreve CSS próprio ao lado da biblioteca, prefira propriedades lógicas também. Assim o layout inteiro se espelha junto.

## Veja também

- [Idiomas (i18n)](/pt/guide/i18n)
- [Carousel](/pt/components/carousel) e [Marquee](/pt/components/marquee)
