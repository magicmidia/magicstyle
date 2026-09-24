---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Elevate visual aesthetics to FlyonUI & Shadcn UI benchmarks, expand component variations gallery, and standardize Studio code examples:

- **CSS & Design System Modernization:**
  - `alert.css`: Fixed soft alert background & text color inversion; added FlyonUI-style 4px saturated left-accent strip (`[data-accent="left"]` / `.ms-alert--accent-left`).
  - `badge.css`: Added ghost variant (`data-variant="ghost"`), live pulsing dot indicator (`[data-pulse]` with keyframe pulse animation), and removable tag dismiss button (`.ms-badge__remove`).
  - `card.css`: Added glassmorphism variant (`data-variant="glass"` with 16px backdrop blur), enterprise SaaS KPI metric cards (`.ms-card-stat` for label, stat value, trend indicator, footer metadata), and cover image badge positioning (`.ms-card-cover-badge`).
  - `input.css`: Added soft tinted surface variant (`data-variant="soft"`), ghost variant (`data-variant="ghost"`), input prefix/suffix addons (`.ms-input-addon`), and attached action input groups (`.ms-input-group`).
  - `tabs.css`: Added Shadcn-style boxed segmented track (`.ms-tab-list--boxed`) with floating active pill and micro-shadow (`.ms-tab--boxed` / `.ms-tab--segmented`).
  - `avatar.css`: Extended brand tone coverage to all 8 semantic tones (`secondary` and `info` fallbacks).
- **Studio Variations Overhaul:**
  - Expanded component variations galleries across inputs (10 enterprise patterns), cards (8 variations), tabs (7 variations), alerts (7 variations), badges (6 variations), avatars (6 variations), tables (4 enterprise variations), dialogs/drawers, and selections.
  - Replaced all raw `<pre><code>` blocks across `studio-variations.js` and playground templates in `preview-studio.js` with the official `<MsCodeBlock>` component (featuring syntax highlighting, copy button, and theme tokens).
