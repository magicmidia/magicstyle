---
name: magic-style-component
description: Step-by-step workflow to scaffold, implement, test, and register new components in @magic-style/vue and @magic-style/css according to Doc 19 Component Specification Template and Baseline 1.2 rules.
---

# Magic-Style Component Development Runbook

Este runbook define os passos padronizados para criar ou evoluir componentes no **Magic-Style**, mantendo a separação estrita entre estilos (`@magic-style/css`) e lógica/acessibilidade (`@magic-style/vue`).

---

## 1. Especificação Prévia (Doc 19)

Antes da implementação, defina mentalmente ou no plano:

- **Nome do componente:** Prefixo `Ms` (ex: `MsDialog`, `MsBadge`).
- **Anatomia do DOM:** Elementos raiz, subpartes e slots.
- **Props e Variações:** Variantes visuais (`variant`), tamanhos (`size`), estados (`disabled`, `loading`, `invalid`).
- **Acessibilidade:** Função WAI-ARIA correspondente, gerenciamento de foco e navegação via teclado (WCAG 2.2 AA).
- **Responsividade:** Comportamento em telas menores ou containers estreitos.

---

## 2. Camada CSS (`packages/css`)

1. Crie o arquivo de regras em `packages/css/src/components/<component-name>.css`:
   - Use classes com prefixo `ms-` (ex: `.ms-badge`, `.ms-badge--primary`, `.ms-badge--sm`).
   - Use exclusivamente variáveis do sistema de tokens (`var(--ms-color-...)`, `var(--ms-space-...)`, `var(--ms-radius-...)`).
   - Evite valores mágicos de pixels sem token correspondente.
2. Registre o novo arquivo em:
   - `packages/css/src/components/index.css` (via `@import "./<component-name>.css";`).
   - Atualize `packages/css/scripts/check-package.mjs` se novas entradas de exportação forem expostas.

---

## 3. Camada Vue (`packages/vue`)

1. Crie o diretório do componente: `packages/vue/src/components/Ms<Name>/`
2. Crie `types.ts`:
   ```typescript
   export type Ms<Name>Variant = "primary" | "secondary" | "outline" | "ghost";
   export type Ms<Name>Size = "sm" | "md" | "lg";

   export interface Ms<Name>Props {
     variant?: Ms<Name>Variant;
     size?: Ms<Name>Size;
     disabled?: boolean;
     // ...
   }

   export interface Ms<Name>Emits {
     (e: "update:modelValue", value: unknown): void;
     // eventos semânticos em kebab-case
   }
   ```
3. Crie `Ms<Name>.vue`:
   - Use `<script setup lang="ts">`.
   - Adicione suporte a `withDefaults(defineProps<Ms<Name>Props>(), { ... })`.
   - Classes calculadas gerando a lista de classes `ms-*`.
   - Gerenciamento de atributos e acessibilidade (`aria-*`, `role`).
4. Exporte o componente em `packages/vue/src/index.ts`:
   ```typescript
   export { default as Ms<Name> } from "./components/Ms<Name>/Ms<Name>.vue";
   export * from "./components/Ms<Name>/types";
   ```

---

## 4. Testes com Vitest (`packages/vue/tests`)

1. Crie o teste unitário em `packages/vue/tests/ms-<name>.test.ts`:
   - Renderização básica e classes CSS padrão.
   - Aplicação correta de variantes e tamanhos.
   - Atributos de acessibilidade (`role`, `aria-disabled`, etc.).
   - Disparo de eventos e bindings de `v-model`.
   - Suporte a slots padrão e nomeados.
2. Execute o teste isolado:
   ```powershell
   pnpm.cmd --filter @magic-style/vue test
   ```

---

## 5. Preview & Validação Visual (`apps/preview`)

1. Adicione ou atualize uma fixture em `apps/preview/` demonstrando o componente em suas diversas variantes, tamanhos e temas (light, dark, high contrast).
2. Para testar no navegador:
   ```powershell
   pnpm.cmd dev:preview
   ```
   Acesse `http://localhost:4173/apps/preview/index.html`.

---

## 6. Gate de Conclusão

Execute o health gate completo:

```powershell
pnpm.cmd validate
```

Se o componente for adicionado à API pública, crie um changeset:

```powershell
pnpm.cmd changeset
```
