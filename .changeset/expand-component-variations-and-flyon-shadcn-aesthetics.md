---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Elevate visual aesthetics to FlyonUI & Shadcn UI benchmarks, expand component variations gallery across the design system, and standardize Studio code examples:

- **CSS & Design System Modernization:**
  - `alert.css`: Fixed soft alert background & text color inversion; added FlyonUI-style 4px saturated left-accent strip (`[data-accent="left"]` / `.ms-alert--accent-left`).
  - `badge.css`: Added ghost variant (`data-variant="ghost"`), live pulsing dot indicator (`[data-pulse]` with keyframe pulse animation), and removable tag dismiss button (`.ms-badge__remove`).
  - `card.css`: Added glassmorphism variant (`data-variant="glass"` with 16px backdrop blur), enterprise SaaS KPI metric cards (`.ms-card-stat`), and cover image badge positioning (`.ms-card-cover-badge`).
  - `input.css`: Added soft tinted surface variant (`data-variant="soft"`), ghost variant (`data-variant="ghost"`), input prefix/suffix addons (`.ms-input-addon`), and attached action input groups (`.ms-input-group`).
  - `tabs.css`: Added Shadcn-style boxed segmented track (`.ms-tab-list--boxed`) with floating active pill and micro-shadow.
  - `avatar.css`: Extended brand tone coverage to all 8 semantic tones.
  - `chat-bubble.css`: Added all 8 brand semantic tones for soft and solid variants; fixed soft bubble color inversion; added live 3-dot typing indicator balloon (`.ms-chat-bubble--typing`).
  - `empty-state.css`: Added 8-tone icon palettes and subtle outer ring gap signature (`.ms-empty-state__icon--ring`).
  - `skeleton.css`: Added dark mode contrast adaptation (`:root[data-ms-color-mode="dark"]`) with subtle Linear/Vercel opacity shimmer eliminating stark white blocks.
  - `timeline.css`: Added `.ms-timeline-item--solid` node fill and `.ms-timeline-item--active` live pulsing ping ring.
  - `accordion.css`: Added active border highlight and micro-shadow for separated accordion items.
  - `rating.css` & `MsRating`: Added `tone` prop support in Vue and 8 semantic tone classes with soft drop-shadow in CSS.
  - `stepper.css`: Added active subtle ring (`box-shadow`), completed checks, and interactive hover feedback.
  - `list.css` & `MsList`: Added `separated` card variant (`variant="separated"`) and fixed leading/trailing slot rendering.
- **Studio Variations Overhaul:**
  - Expanded enterprise variations across 15+ component categories: `empty-states` (5), `accordions` (5), `skeletons` (5), `timeline` (5), `chat-bubbles` (5), `ratings` (5), `steppers` (5), `lists` (5), `separators` (5), `file-inputs` (5), `drawers` (4), `color-pickers` (4), `tooltips` (3), `inputs` (10), `cards` (8), `tabs` (7), `alerts` (7), `badges` (6), `avatars` (6), `tables` (4).
  - Replaced all raw `<pre><code>` blocks across `studio-variations.js` with `<MsCodeBlock>` (featuring syntax highlighting, copy button, and theme tokens).
