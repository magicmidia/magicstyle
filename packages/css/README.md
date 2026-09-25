# @magic-style/css

Framework-free CSS for the Magic-Style design system: DTCG tokens, 10 themes with light/dark modes, and semantic component classes.

```bash
pnpm add @magic-style/css
```

```css
/* Everything (tokens, themes, base, components, utilities) — reset is opt-in */
@import "@magic-style/css";
@import "@magic-style/css/reset.css";

/* Or granular */
@import "@magic-style/css/tokens.css";
@import "@magic-style/css/themes.css";
@import "@magic-style/css/components/button.css";
```

```html
<html data-ms-theme="bootstrap" data-ms-color-mode="system">
  <button class="ms-button" data-variant="solid" data-tone="primary">Salvar</button>
</html>
```

- All rules live in the `ms` cascade layer (`ms.reset` … `ms.utilities`): unlayered app CSS always wins, and you can place `ms` in your own layer order (e.g. with Tailwind CSS v4: `@layer theme, base, ms, components, utilities;`).
- `data-ms-color-mode="system"` follows the OS preference without JavaScript.

Full documentation: https://github.com/magicmidia/magicstyle#readme — MIT licensed.
