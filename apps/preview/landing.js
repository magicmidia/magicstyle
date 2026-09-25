/*
 * Magic-Style Landing Page Controller (landing.js)
 * Bespoke interactive engine:
 * 1. 1-Click Install commands (pnpm, npm, yarn, bun) + clipboard
 * 2. Hero Living Component Mosaic Theme Transformer (morphs across all 10 themes)
 * 3. Physical Theme Laboratory (interactive token inspector & live sandbox)
 * 4. Blocks & Templates Gallery (Flyon UI signature with Vue SFC code view & copy)
 * 5. Command Palette (⌘K) Quick Component Finder with category pills
 * 6. Global color mode synchronization
 */

(() => {
  // =========================================================================
  // 1. Quick Install Commands Map
  // =========================================================================
  const INSTALL_COMMANDS = {
    pnpm: "pnpm add @magic-style/vue @magic-style/css",
    npm: "npm install @magic-style/vue @magic-style/css",
    yarn: "yarn add @magic-style/vue @magic-style/css",
    bun: "bun add @magic-style/vue @magic-style/css",
  };

  let currentInstallTab = "pnpm";

  function initQuickInstall() {
    const codeEl = document.getElementById("install-code-text");
    const tabBtns = document.querySelectorAll(".lp-install-tab-btn");
    const copyBtn = document.getElementById("install-copy-btn");

    if (!codeEl || !copyBtn) return;

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        if (!tab || !INSTALL_COMMANDS[tab]) return;

        tabBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        currentInstallTab = tab;
        codeEl.textContent = INSTALL_COMMANDS[tab];
      });
    });

    copyBtn.addEventListener("click", async () => {
      const textToCopy = INSTALL_COMMANDS[currentInstallTab];
      try {
        if (window.navigator?.clipboard) {
          await window.navigator.clipboard.writeText(textToCopy);
        } else {
          throw new Error("No clipboard API");
        }
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span style="color: #4ade80;">Copiado!</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
        }, 2000);
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    });
  }

  // =========================================================================
  // 2. Hero Living Component Mosaic Theme Transformer
  // =========================================================================
  function initHeroMosaicThemeTransformer() {
    const scope = document.getElementById("hero-mosaic-scope");
    const chips = document.querySelectorAll(".lp-theme-chip");
    if (!scope || !chips.length) return;

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const theme = chip.getAttribute("data-mosaic-theme");
        if (!theme) return;

        chips.forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");

        scope.setAttribute("data-ms-theme", theme);

        // Adjust radius attribute according to theme signature
        if (theme === "material") {
          scope.setAttribute("data-ms-radius", "rounded");
        } else if (theme === "shadcn" || theme === "vercel" || theme === "bootstrap") {
          scope.setAttribute("data-ms-radius", "subtle");
        } else if (theme === "linear" || theme === "nord") {
          scope.setAttribute("data-ms-radius", "medium");
        } else {
          scope.removeAttribute("data-ms-radius");
        }
      });
    });
  }

  // =========================================================================
  // 3. Physical Theme Laboratory (Beyond Color Swapping)
  // =========================================================================
  const THEMES_LAB_DATA = {
    magic: {
      name: "Magic (Oficial)",
      tag: "Default OKLCH Design System",
      radius: "8px (--ms-radius-md)",
      elevation: "Specular Top Lip + Soft Ambient Glow",
      halo: "Electric Indigo 0 0 0 3px rgba(46, 134, 222, 0.4)",
      font: "SF Pro / Inter (-apple-system, sans-serif)",
      css: `[data-ms-theme="magic"] {
  --ms-color-primary: oklch(0.60 0.22 255);
  --ms-radius: 8px;
  --ms-shadow-md: 0 4px 14px rgba(46, 134, 222, 0.15);
  --ms-focus-ring: 0 0 0 3px rgba(46, 134, 222, 0.40);
}`,
      radiusAttr: "medium",
    },
    shadcn: {
      name: "Shadcn / UI",
      tag: "Radical Flat Monochrome",
      radius: "6px (--ms-radius-sm)",
      elevation: "Zero Elevation (Crisp 1px Zinc Border)",
      halo: "2px Ring with 2px Background Offset",
      font: "Geist Sans / Inter",
      css: `[data-ms-theme="shadcn"] {
  --ms-color-primary: #18181b;
  --ms-radius: 6px;
  --ms-shadow-md: none;
  --ms-focus-ring: 0 0 0 2px #18181b;
}`,
      radiusAttr: "subtle",
    },
    bootstrap: {
      name: "Bootstrap 5",
      tag: "Classic Inset Bevel & Royal Blue",
      radius: "0.375rem (6px)",
      elevation: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
      halo: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
      font: "system-ui, -apple-system, 'Segoe UI', Roboto",
      css: `[data-ms-theme="bootstrap"] {
  --ms-color-primary: #0d6efd;
  --ms-radius: 0.375rem;
  --ms-button-bevel: inset 0 1px 0 rgba(255, 255, 255, 0.15);
  --ms-focus-ring: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}`,
      radiusAttr: "subtle",
    },
    material: {
      name: "MaterialUI (Google M3)",
      tag: "Pill Shape & M3 Dual Elevation",
      radius: "9999px (Pill / Full Round)",
      elevation: "Ambient (0 1px 3px) + Key (0 1px 2px) M3",
      halo: "Ripple Effect + 0 0 0 3px rgba(103, 80, 164, 0.35)",
      font: "Roboto, 'Google Sans', sans-serif",
      css: `[data-ms-theme="material"] {
  --ms-color-primary: #6750a4;
  --ms-radius-button: 9999px;
  --ms-shadow-elevation-2: 0 2px 6px 2px rgba(0, 0, 0, 0.15);
  --ms-font-family: "Roboto", sans-serif;
}`,
      radiusAttr: "rounded",
    },
    linear: {
      name: "Linear SaaS",
      tag: "Obsidian High-Depth & Specular Edge",
      radius: "8px (--ms-radius-md)",
      elevation: "High-contrast dark shadow + specular lip",
      halo: "Electric Indigo Glow (0 0 0 3px rgba(94, 106, 210, 0.45))",
      font: "SF Pro Text, -apple-system",
      css: `[data-ms-theme="linear"] {
  --ms-color-surface: #08090a;
  --ms-color-primary: #5e6ad2;
  --ms-specular-edge: inset 0 1px 0 rgba(255, 255, 255, 0.12);
  --ms-focus-ring: 0 0 0 3px rgba(94, 106, 210, 0.45);
}`,
      radiusAttr: "medium",
    },
    vercel: {
      name: "Vercel Geist",
      tag: "Razor Sharp & Pure Monochrome",
      radius: "6px (--ms-radius-sm)",
      elevation: "Zero Shadow, High-Contrast Borders",
      halo: "2px solid white / black focus halo",
      font: "'Geist', ui-monospace, sans-serif",
      css: `[data-ms-theme="vercel"] {
  --ms-color-primary: #000000;
  --ms-radius: 6px;
  --ms-shadow-md: none;
  --ms-focus-ring: 0 0 0 2px #ffffff, 0 0 0 4px #000000;
}`,
      radiusAttr: "subtle",
    },
    supabase: {
      name: "Supabase Studio",
      tag: "Studio Charcoal & Neon Emerald",
      radius: "8px (--ms-radius-md)",
      elevation: "Deep charcoal layered shadows",
      halo: "0 0 0 3px rgba(36, 180, 126, 0.35)",
      font: "Circular, -apple-system, sans-serif",
      css: `[data-ms-theme="supabase"] {
  --ms-color-surface: #1c1c1c;
  --ms-color-primary: #24b47e;
  --ms-color-accent: #3ecf8e;
  --ms-focus-ring: 0 0 0 3px rgba(36, 180, 126, 0.35);
}`,
      radiusAttr: "medium",
    },
    github: {
      name: "GitHub Primer",
      tag: "Primer Bevel & Commit Green",
      radius: "6px (--ms-radius-sm)",
      elevation: "0 1px 0 rgba(27, 31, 36, 0.04)",
      halo: "0 0 0 3px rgba(31, 136, 61, 0.40)",
      font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica",
      css: `[data-ms-theme="github"] {
  --ms-color-surface: #0d1117;
  --ms-color-primary: #1f883d;
  --ms-button-bevel: inset 0 1px 0 rgba(255, 255, 255, 0.20);
  --ms-focus-ring: 0 0 0 3px rgba(31, 136, 61, 0.40);
}`,
      radiusAttr: "subtle",
    },
    nord: {
      name: "Nord Arctic",
      tag: "Polar Night & Glacial Cyan",
      radius: "10px (--ms-radius-lg)",
      elevation: "Cold ambient shadow (rgba(46, 52, 64, 0.25))",
      halo: "0 0 0 3px rgba(136, 192, 208, 0.45)",
      font: "Inter, -apple-system, sans-serif",
      css: `[data-ms-theme="nord"] {
  --ms-color-surface: #2e3440;
  --ms-color-primary: #5e81ac;
  --ms-color-accent: #88c0d0;
  --ms-radius: 10px;
  --ms-focus-ring: 0 0 0 3px rgba(136, 192, 208, 0.45);
}`,
      radiusAttr: "medium",
    },
    graphite: {
      name: "Graphite Carbon",
      tag: "Editorial Neutral & Carbon Steel",
      radius: "6px (--ms-radius-sm)",
      elevation: "Subtle neutral shadow 0 2px 8px rgba(0, 0, 0, 0.12)",
      halo: "0 0 0 2px rgba(156, 163, 175, 0.40)",
      font: "'Newsreader', 'Inter', serif/sans hybrid",
      css: `[data-ms-theme="graphite"] {
  --ms-color-surface: #111827;
  --ms-color-primary: #4b5563;
  --ms-color-text-secondary: #9ca3af;
  --ms-radius: 6px;
  --ms-focus-ring: 0 0 0 2px rgba(156, 163, 175, 0.40);
}`,
      radiusAttr: "subtle",
    },
  };

  function initThemeLab() {
    const pills = document.querySelectorAll(".lp-lab-pill");
    const canvasScope = document.getElementById("lab-canvas-scope");
    const titleEl = document.getElementById("lab-theme-title");
    const tagEl = document.getElementById("lab-theme-tag");
    const valRadiusEl = document.getElementById("lab-val-radius");
    const valElevationEl = document.getElementById("lab-val-elevation");
    const valHaloEl = document.getElementById("lab-val-halo");
    const valFontEl = document.getElementById("lab-val-font");
    const codeEl = document.getElementById("lab-code-box");

    if (!pills.length || !canvasScope) return;

    function applyTheme(themeKey) {
      const data = THEMES_LAB_DATA[themeKey];
      if (!data) return;

      canvasScope.setAttribute("data-ms-theme", themeKey);
      if (data.radiusAttr) {
        canvasScope.setAttribute("data-ms-radius", data.radiusAttr);
      } else {
        canvasScope.removeAttribute("data-ms-radius");
      }

      if (titleEl) titleEl.textContent = data.name;
      if (tagEl) tagEl.textContent = data.tag;
      if (valRadiusEl) valRadiusEl.textContent = data.radius;
      if (valElevationEl) valElevationEl.textContent = data.elevation;
      if (valHaloEl) valHaloEl.textContent = data.halo;
      if (valFontEl) valFontEl.textContent = data.font;
      if (codeEl) codeEl.textContent = data.css;

      pills.forEach((p) => {
        if (p.getAttribute("data-theme") === themeKey) {
          p.classList.add("is-active");
        } else {
          p.classList.remove("is-active");
        }
      });
    }

    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const theme = pill.getAttribute("data-theme");
        if (theme) applyTheme(theme);
      });
    });

    applyTheme("magic");
  }

  // =========================================================================
  // 3.5 Interactive Component Workbench (Flyon UI Killer Feature)
  // =========================================================================
  const WORKBENCH_STATE = {
    component: "button",
    variant: "solid",
    tone: "primary",
    size: "md",
  };

  function initComponentWorkbench() {
    const compBtns = document.querySelectorAll(".lp-wb-comp-btn");
    const variantPills = document.querySelectorAll("[data-wb-variant]");
    const tonePills = document.querySelectorAll("[data-wb-tone]");
    const sizePills = document.querySelectorAll("[data-wb-size]");
    const stageEl = document.getElementById("lp-wb-stage");
    const codePreEl = document.getElementById("lp-wb-code-pre");
    const copyCodeBtn = document.getElementById("lp-wb-copy-code-btn");

    if (!stageEl || !codePreEl) return;

    function renderWorkbench() {
      const { component, variant, tone, size } = WORKBENCH_STATE;

      let renderedHtml = "";
      let vueCode = "";

      if (component === "button") {
        renderedHtml = `<button class="ms-button" data-variant="${variant}" data-tone="${tone}" data-size="${size}">Explorar Componente</button>`;
        vueCode = `<MsButton variant="${variant}" tone="${tone}" size="${size}">Explorar Componente</MsButton>`;
      } else if (component === "input") {
        renderedHtml = `
          <div class="ms-input" data-size="${size}" style="max-width: 320px; width: 100%;">
            <span class="ms-input-prefix">🔍</span>
            <input class="ms-input-native" placeholder="Buscar componente..." value="MsSelect Avançado" />
          </div>
        `;
        vueCode = `<MsInput v-model="searchQuery" prefix="search" size="${size}" placeholder="Buscar componente..." />`;
      } else if (component === "badge") {
        renderedHtml = `<span class="ms-badge" data-variant="${variant}" data-tone="${tone}" data-size="${size}">● WAI-ARIA Pass</span>`;
        vueCode = `<MsBadge variant="${variant}" tone="${tone}" size="${size}">● WAI-ARIA Pass</MsBadge>`;
      } else if (component === "switch") {
        renderedHtml = `
          <div style="display: flex; align-items: center; gap: 12px;">
            <label class="ms-switch" data-size="${size}">
              <input type="checkbox" checked />
              <span class="ms-switch-track"></span>
            </label>
            <span style="font-size: 13.5px; font-weight: 600;">Notificações Ativas</span>
          </div>
        `;
        vueCode = `<MsSwitch v-model="notifications" size="${size}" label="Notificações Ativas" />`;
      } else if (component === "card") {
        renderedHtml = `
          <div class="ms-card" data-variant="${variant}" style="max-width: 380px; width: 100%; padding: 22px; box-shadow: var(--lp-card-shadow);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <span style="font-size: 15px; font-weight: 750;">Arquitetura Token-First</span>
              <span class="ms-badge" data-tone="${tone}" data-variant="soft">DTCG</span>
            </div>
            <p style="font-size: 13px; color: var(--ms-color-text-secondary); margin: 0 0 16px 0;">Componentes desacoplados com conformidade W3C e suporte aos 10 temas físicos.</p>
            <button class="ms-button" data-variant="solid" data-tone="${tone}" data-size="${size}">Acessar Documentação →</button>
          </div>
        `;
        vueCode = `<MsCard variant="${variant}">
  <template #header>
    <h4>Arquitetura Token-First</h4>
    <MsBadge tone="${tone}" variant="soft">DTCG</MsBadge>
  </template>
  <p>Componentes desacoplados com conformidade W3C e suporte aos 10 temas físicos.</p>
  <MsButton variant="solid" tone="${tone}" size="${size}">Acessar Documentação →</MsButton>
</MsCard>`;
      }

      stageEl.innerHTML = renderedHtml;
      codePreEl.textContent = vueCode;
    }

    compBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const comp = btn.getAttribute("data-wb-comp");
        if (!comp) return;
        compBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        WORKBENCH_STATE.component = comp;
        renderWorkbench();
      });
    });

    variantPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const v = pill.getAttribute("data-wb-variant");
        if (!v) return;
        variantPills.forEach((p) => p.classList.remove("is-active"));
        pill.classList.add("is-active");
        WORKBENCH_STATE.variant = v;
        renderWorkbench();
      });
    });

    tonePills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const t = pill.getAttribute("data-wb-tone");
        if (!t) return;
        tonePills.forEach((p) => p.classList.remove("is-active"));
        pill.classList.add("is-active");
        WORKBENCH_STATE.tone = t;
        renderWorkbench();
      });
    });

    sizePills.forEach((pill) => {
      pill.addEventListener("click", () => {
        const s = pill.getAttribute("data-wb-size");
        if (!s) return;
        sizePills.forEach((p) => p.classList.remove("is-active"));
        pill.classList.add("is-active");
        WORKBENCH_STATE.size = s;
        renderWorkbench();
      });
    });

    if (copyCodeBtn) {
      copyCodeBtn.addEventListener("click", async () => {
        try {
          if (window.navigator?.clipboard) {
            await window.navigator.clipboard.writeText(codePreEl.textContent);
          }
          const orig = copyCodeBtn.textContent;
          copyCodeBtn.textContent = "Copiado! ✓";
          setTimeout(() => {
            copyCodeBtn.textContent = orig;
          }, 2000);
        } catch {
          // ignore clipboard errors in unsupported environments
        }
      });
    }

    renderWorkbench();
  }

  // =========================================================================
  // 4. Blocks & Templates Gallery (Real Application Blocks)
  // =========================================================================
  const BLOCKS_DATA = {
    ecommerce: {
      title: "Card de Produto E-Commerce",
      previewHtml: `
        <div class="ms-card" style="width: 100%; max-width: 360px; box-shadow: var(--lp-card-shadow); padding: 20px; border-radius: 16px;">
          <div style="width: 100%; height: 180px; border-radius: 12px; background: linear-gradient(135deg, #0ea5e9, #6366f1); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 16px;">
            <span style="font-size: 48px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));">👟</span>
            <span class="ms-badge" data-tone="success" data-variant="solid" style="position: absolute; top: 12px; right: 12px; font-size: 11px;">Novo</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #38bdf8; letter-spacing: 0.05em;">Sneakers • Elite Series</span>
            <span style="font-size: 12px; color: #f59e0b; font-weight: 700;">★ 4.9 (128)</span>
          </div>

          <h4 style="margin: 0 0 6px 0; font-size: 17px; font-weight: 800;">AeroGlide Horizon Pro</h4>
          <p style="margin: 0 0 16px 0; font-size: 12.5px; color: var(--ms-color-text-secondary); line-height: 1.4;">Amortecimento responsivo em fibra de carbono com retorno de energia de 82%.</p>

          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid var(--lp-card-border);">
            <div>
              <span style="font-size: 11px; color: var(--ms-color-text-secondary); display: block;">Preço à vista</span>
              <span style="font-size: 20px; font-weight: 850; font-family: var(--lp-font-mono); color: var(--ms-color-text-primary);">R$ 789,90</span>
            </div>
            <button class="ms-button" data-variant="solid" data-tone="primary" style="padding: 8px 16px; font-size: 13px;">Adicionar à Sacola</button>
          </div>
        </div>
      `,
      vueCode: `<script setup lang="ts">
import { MsCard, MsBadge, MsButton } from "@magic-style/vue";
import "@magic-style/css";
</script>

<template>
  <MsCard class="product-card">
    <div class="product-media">
      <span class="product-icon">👟</span>
      <MsBadge tone="success" variant="solid">Novo</MsBadge>
    </div>

    <div class="product-meta">
      <span class="category">Sneakers • Elite Series</span>
      <span class="rating">★ 4.9 (128)</span>
    </div>

    <h4 class="product-title">AeroGlide Horizon Pro</h4>
    <p class="product-desc">Amortecimento responsivo em fibra de carbono com retorno de energia de 82%.</p>

    <div class="product-footer">
      <div class="price-box">
        <span class="price-lbl">Preço à vista</span>
        <span class="price-val">R$ 789,90</span>
      </div>
      <MsButton variant="solid" tone="primary">Adicionar à Sacola</MsButton>
    </div>
  </MsCard>
</template>`,
    },
    pricing: {
      title: "Planos & Assinaturas SaaS",
      previewHtml: `
        <div class="ms-card" style="width: 100%; max-width: 440px; box-shadow: var(--lp-card-shadow); padding: 28px; border-radius: 16px; position: relative;">
          <span class="ms-badge" data-tone="primary" data-variant="solid" style="position: absolute; top: 16px; right: 16px; font-size: 11px;">Mais Popular</span>
          
          <h4 style="margin: 0 0 4px 0; font-size: 20px; font-weight: 850;">Plano Enterprise Pro</h4>
          <p style="margin: 0 0 20px 0; font-size: 13px; color: var(--ms-color-text-secondary);">Para squads que exigem design system com governança estrita e 10 temas.</p>

          <div style="display: flex; align-items: baseline; gap: 6px; margin-bottom: 20px;">
            <span style="font-size: 36px; font-weight: 900; font-family: var(--lp-font-mono);">R$ 149</span>
            <span style="font-size: 13px; color: var(--ms-color-text-secondary);">/mês por desenvolvedor</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; font-size: 13px; color: var(--ms-color-text-secondary);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #10b981; font-weight: 700;">✓</span>
              <span>Todos os <strong>82 componentes enterprise</strong> Vue 3</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #10b981; font-weight: 700;">✓</span>
              <span>10 temas físicos com geometria real (Shadcn, M3, etc.)</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #10b981; font-weight: 700;">✓</span>
              <span>Zero overhead de runtime CSS compilado em OKLCH</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #10b981; font-weight: 700;">✓</span>
              <span>Suporte prioritário e governança arquitetural</span>
            </div>
          </div>

          <button class="ms-button" data-variant="solid" data-tone="primary" style="width: 100%; padding: 12px; font-size: 14px; font-weight: 700;">Iniciar Teste Grátis de 14 Dias →</button>
        </div>
      `,
      vueCode: `<script setup lang="ts">
import { MsCard, MsBadge, MsButton } from "@magic-style/vue";
import "@magic-style/css";
</script>

<template>
  <MsCard class="pricing-card">
    <MsBadge tone="primary" variant="solid" class="popular-badge">Mais Popular</MsBadge>
    <h4>Plano Enterprise Pro</h4>
    <p>Para squads que exigem design system com governança estrita e 10 temas.</p>

    <div class="pricing-header">
      <span class="amount">R$ 149</span>
      <span class="period">/mês por desenvolvedor</span>
    </div>

    <ul class="features-list">
      <li>✓ Todos os 82 componentes enterprise Vue 3</li>
      <li>✓ 10 temas físicos com geometria real</li>
      <li>✓ Zero overhead de runtime CSS em OKLCH</li>
      <li>✓ Suporte prioritário e governança arquitetural</li>
    </ul>

    <MsButton variant="solid" tone="primary" class="cta-button">Iniciar Teste Grátis de 14 Dias →</MsButton>
  </MsCard>
</template>`,
    },
    forms: {
      title: "Segurança & Chaves de API",
      previewHtml: `
        <div class="ms-card" style="width: 100%; max-width: 460px; box-shadow: var(--lp-card-shadow); padding: 24px; border-radius: 14px;">
          <h4 style="margin: 0 0 6px 0; font-size: 17px; font-weight: 750;">Chave de Acesso da API</h4>
          <p style="margin: 0 0 18px 0; font-size: 12.5px; color: var(--ms-color-text-secondary);">Utilize este token secreto nos cabeçalhos Authorization de produção.</p>
          
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div>
              <label style="display: block; font-size: 12px; font-weight: 700; margin-bottom: 4px;">Identificador do Projeto</label>
              <div class="ms-input" style="width: 100%;">
                <input class="ms-input-native" type="text" value="ms_live_enterprise_prod_941" readonly />
              </div>
            </div>

            <div>
              <label style="display: block; font-size: 12px; font-weight: 700; margin-bottom: 4px;">Chave Secreta (Token Bearer)</label>
              <div class="ms-input" style="width: 100%;">
                <input class="ms-input-native" type="password" value="sk_live_9481023849102837482910" readonly />
              </div>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 4px;">
              <div>
                <div style="font-size: 12.5px; font-weight: 600;">Modo Estrito de IP</div>
                <div style="font-size: 11.5px; color: var(--ms-color-text-secondary);">Bloquear requisições fora do range corporativo</div>
              </div>
              <label class="ms-switch">
                <input type="checkbox" checked />
                <span class="ms-switch-track"></span>
              </label>
            </div>

            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <button class="ms-button" data-variant="solid" data-tone="primary" style="flex: 1;">Copiar Chave</button>
              <button class="ms-button" data-variant="outline" data-tone="danger">Revogar</button>
            </div>
          </div>
        </div>
      `,
      vueCode: `<script setup lang="ts">
import { ref } from "vue";
import { MsCard, MsInput, MsSwitch, MsButton } from "@magic-style/vue";
import "@magic-style/css";

const projectId = ref("ms_live_enterprise_prod_941");
const secretToken = ref("sk_live_9481023849102837482910");
const ipRestricted = ref(true);
</script>

<template>
  <MsCard class="api-key-card">
    <h4>Chave de Acesso da API</h4>
    <p>Utilize este token secreto nos cabeçalhos Authorization de produção.</p>

    <MsInput v-model="projectId" label="Identificador do Projeto" readonly />
    <MsInput v-model="secretToken" type="password" label="Chave Secreta" readonly />

    <div class="toggle-row">
      <span>Modo Estrito de IP</span>
      <MsSwitch v-model="ipRestricted" />
    </div>

    <div class="actions">
      <MsButton variant="solid" tone="primary">Copiar Chave</MsButton>
      <MsButton variant="outline" tone="danger">Revogar</MsButton>
    </div>
  </MsCard>
</template>`,
    },
    audit: {
      title: "Feed de Atividade & Auditoria",
      previewHtml: `
        <div class="ms-card" style="width: 100%; max-width: 520px; box-shadow: var(--lp-card-shadow); padding: 24px; border-radius: 14px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <h4 style="margin: 0; font-size: 16px; font-weight: 750;">Auditoria do Sistema</h4>
            <span class="ms-badge" data-tone="success" data-variant="soft">Tempo Real</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; gap: 12px; align-items: flex-start;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #2563eb; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">BC</div>
              <div style="flex: 1;">
                <div style="font-size: 13px; font-weight: 600;">Deploy do Release v0.1.0 para produção</div>
                <div style="font-size: 11.5px; color: var(--ms-color-text-secondary); margin-top: 2px;">82 componentes e 10 temas publicados via Changesets • há 14 min</div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; align-items: flex-start;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #10b981; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">GS</div>
              <div style="flex: 1;">
                <div style="font-size: 13px; font-weight: 600;">Validação de Acessibilidade 100% WAI-ARIA Pass</div>
                <div style="font-size: 11.5px; color: var(--ms-color-text-secondary); margin-top: 2px;">Auditoria automatizada em todos os formulários e modais • há 2 horas</div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; align-items: flex-start;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #a855f7; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">MS</div>
              <div style="flex: 1;">
                <div style="font-size: 13px; font-weight: 600;">Tokens DTCG OKLCH sincronizados</div>
                <div style="font-size: 11.5px; color: var(--ms-color-text-secondary); margin-top: 2px;">277 tokens compilados com zero distorção perceptual • há 4 horas</div>
              </div>
            </div>
          </div>
        </div>
      `,
      vueCode: `<script setup lang="ts">
import { MsCard, MsBadge } from "@magic-style/vue";
import "@magic-style/css";
</script>

<template>
  <MsCard class="audit-feed-card">
    <div class="feed-header">
      <h4>Auditoria do Sistema</h4>
      <MsBadge tone="success" variant="soft">Tempo Real</MsBadge>
    </div>

    <div class="timeline-items">
      <div class="timeline-item">
        <div class="avatar">BC</div>
        <div class="content">
          <span class="title">Deploy do Release v0.1.0 para produção</span>
          <span class="meta">82 componentes e 10 temas publicados via Changesets • há 14 min</span>
        </div>
      </div>
    </div>
  </MsCard>
</template>`,
    },
  };

  let currentBlockTab = "ecommerce";
  let blockViewMode = "preview";

  function initBlocksShowcase() {
    const canvasEl = document.getElementById("lp-block-canvas");
    const codeAreaEl = document.getElementById("lp-block-code-area");
    const codePreEl = document.getElementById("lp-block-code-pre");
    const blockTabBtns = document.querySelectorAll(".lp-block-tab-btn");
    const toggleViewBtn = document.getElementById("lp-block-toggle-view-btn");
    const copyBlockCodeBtn = document.getElementById("lp-block-copy-code-btn");

    if (!canvasEl || !codeAreaEl || !codePreEl) return;

    function renderBlock() {
      const data = BLOCKS_DATA[currentBlockTab];
      if (!data) return;

      canvasEl.innerHTML = data.previewHtml;
      codePreEl.textContent = data.vueCode;

      if (blockViewMode === "code") {
        codeAreaEl.classList.add("is-visible");
        if (toggleViewBtn) toggleViewBtn.textContent = "Ver Prévia Visual 👁";
      } else {
        codeAreaEl.classList.remove("is-visible");
        if (toggleViewBtn) toggleViewBtn.textContent = "Ver Código Vue SFC ‹/›";
      }
    }

    blockTabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-block-tab");
        if (!tab || !BLOCKS_DATA[tab]) return;

        blockTabBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        currentBlockTab = tab;
        renderBlock();
      });
    });

    if (toggleViewBtn) {
      toggleViewBtn.addEventListener("click", () => {
        blockViewMode = blockViewMode === "preview" ? "code" : "preview";
        renderBlock();
      });
    }

    if (copyBlockCodeBtn) {
      copyBlockCodeBtn.addEventListener("click", async () => {
        const data = BLOCKS_DATA[currentBlockTab];
        if (!data) return;

        try {
          if (window.navigator?.clipboard) {
            await window.navigator.clipboard.writeText(data.vueCode);
          }
          const orig = copyBlockCodeBtn.textContent;
          copyBlockCodeBtn.textContent = "Copiado! ✓";
          setTimeout(() => {
            copyBlockCodeBtn.textContent = orig;
          }, 2000);
        } catch {
          // fallback
        }
      });
    }

    renderBlock();
  }

  // =========================================================================
  // 5. Command Palette (⌘K) & 82 Components Finder
  // =========================================================================
  function initCommandPaletteFinder() {
    const searchInput = document.querySelector(".lp-cmd-input");
    const catBtns = document.querySelectorAll(".lp-cat-filter-btn");
    const tags = document.querySelectorAll(".lp-dir-item-tag");
    const categories = document.querySelectorAll(".lp-dir-cat-card");

    if (!searchInput || !tags.length) return;

    let currentCat = "all";
    let currentQuery = "";

    function filterDirectory() {
      tags.forEach((tag) => {
        const name = tag.textContent.toLowerCase();
        const cat = tag.getAttribute("data-cat") || "";

        const matchesQuery = !currentQuery || name.includes(currentQuery);
        const matchesCat = currentCat === "all" || cat === currentCat;

        if (matchesQuery && matchesCat) {
          tag.classList.remove("is-hidden");
        } else {
          tag.classList.add("is-hidden");
        }
      });

      categories.forEach((card) => {
        const visibleTags = card.querySelectorAll(".lp-dir-item-tag:not(.is-hidden)");
        if (visibleTags.length === 0) {
          card.style.display = "none";
        } else {
          card.style.display = "";
        }
      });
    }

    searchInput.addEventListener("input", (e) => {
      currentQuery = (e.target.value || "").trim().toLowerCase();
      filterDirectory();
    });

    catBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-cat");
        if (!cat) return;

        catBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        currentCat = cat;
        filterDirectory();
      });
    });

    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  // =========================================================================
  // 6. Global Color Mode Toggle
  // =========================================================================
  function initGlobalModeToggle() {
    const toggleBtn = document.getElementById("lp-global-mode-toggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
      const root = document.documentElement;
      const currentMode = root.getAttribute("data-ms-color-mode") || "dark";
      const nextMode = currentMode === "dark" ? "light" : "dark";
      root.setAttribute("data-ms-color-mode", nextMode);
      try {
        localStorage.setItem("ms-color-mode", nextMode);
      } catch {
        /* storage unavailable: preference just won't persist */
      }
    });
  }

  // =========================================================================
  // Lifecycle Initialization
  // =========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initQuickInstall();
    initHeroMosaicThemeTransformer();
    initComponentWorkbench();
    initThemeLab();
    initBlocksShowcase();
    initCommandPaletteFinder();
    initGlobalModeToggle();
  });
})();
