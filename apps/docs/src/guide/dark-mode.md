---
title: Modo escuro
description: Modo claro, escuro ou do sistema com data-ms-color-mode, troca em tempo de execução e como evitar o flash no SSR.
---

# Modo escuro

Todo tema tem modo claro e escuro. O modo é escolhido pelo atributo `data-ms-color-mode`, que aceita três valores:

| Valor    | Comportamento                                                                       |
| :------- | :---------------------------------------------------------------------------------- |
| `light`  | Sempre claro.                                                                       |
| `dark`   | Sempre escuro.                                                                      |
| `system` | Segue o sistema operacional via `prefers-color-scheme`, só com CSS, sem JavaScript. |

Cada bloco de tema também define `color-scheme`, então barras de rolagem e controles nativos acompanham o modo.

## Só com CSS

```html
<html data-ms-theme="magic" data-ms-color-mode="system">
  …
</html>
```

## Com `MsProvider`

`color-mode` é `system` por padrão:

```vue
<MsProvider theme="magic" color-mode="system">
  <App />
</MsProvider>
```

Por padrão, os atributos vão para o `div` do provider. Com `target="root"`, vão para o `<html>`, o que também pinta o fundo da página e os elementos teleportados para o `body`. Ao desmontar, o provider devolve ao `<html>` os atributos que ele tinha antes.

Para mudar o modo só num trecho da página, use `MsThemeScope`:

```vue
<MsThemeScope color-mode="dark">
  <MsCard>Sempre escuro</MsCard>
</MsThemeScope>
```

## Trocar em tempo de execução

`useThemeContext()` (ou o alias `useMagicStyle()`) devolve o contexto do provider mais próximo:

```vue
<script setup lang="ts">
import { computed } from "vue";
import { MsButton, useThemeContext } from "@magic-style/vue";

const theme = useThemeContext()!;
const isDark = computed(() => theme.resolvedColorMode.value === "dark");

function toggle() {
  theme.setColorMode(isDark.value ? "light" : "dark");
}
</script>

<template>
  <MsButton variant="outline" @click="toggle">
    {{ isDark ? "Modo claro" : "Modo escuro" }}
  </MsButton>
</template>
```

| Campo                 | Tipo                                 | Descrição                                         |
| :-------------------- | :----------------------------------- | :------------------------------------------------ |
| `colorModePreference` | `Ref<"light" \| "dark" \| "system">` | O que o usuário escolheu.                         |
| `resolvedColorMode`   | `ComputedRef<"light" \| "dark">`     | O modo em uso, com `system` já resolvido.         |
| `setColorMode(mode)`  | função                               | Muda a preferência (`light`, `dark` ou `system`). |

O contexto também expõe `setTheme`, `setDensity`, `setRadius`, `setContrast` e `setDir`.

::: tip
Em `system`, o `resolvedColorMode` vale `light` no servidor e na primeira renderização do cliente. O valor real do sistema chega depois da montagem. O visual não depende disso, porque o CSS resolve `system` sozinho.
:::

## Sem flash no SSR

Com `color-mode="system"`, o provider renderiza `data-ms-color-mode="system"` no servidor e no cliente. Quem escolhe entre claro e escuro é o CSS, então não há flash nem hydration mismatch.

O flash aparece quando o usuário escolhe `light` ou `dark` e essa escolha só existe no navegador. Duas formas de evitar:

**1. Guarde a escolha num cookie e renderize no servidor.** É o caminho mais robusto com Laravel:

```blade
<html data-ms-theme="magic" data-ms-color-mode="{{ request()->cookie('ms-color-mode', 'system') }}">
```

Passe o mesmo valor para o `MsProvider` (por exemplo, como shared prop do Inertia) e grave o cookie quando o usuário trocar o modo.

**2. Aplique a escolha antes da primeira pintura** com um script inline no `<head>`, antes do CSS:

```html
<script>
  try {
    const mode = localStorage.getItem("ms-color-mode");
    if (mode) document.documentElement.setAttribute("data-ms-color-mode", mode);
  } catch {}
</script>
```

::: warning
Com `target="root"`, o provider sobrescreve os atributos do `<html>` ao montar. Passe para ele o mesmo modo que o servidor ou o script aplicou, senão a página troca de modo logo após carregar.
:::

## Veja também

- [Temas](/guide/theming)
- [SSR](/guide/ssr)
- [Provider](/components/provider) e [Theme Scope](/components/theme-scope)
