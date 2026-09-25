<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useData } from "vitepress";
import {
  MsAlert,
  MsBadge,
  MsButton,
  MsCodeBlock,
  MsColorPicker,
  MsField,
  MsInput,
  MsNativeSelect,
  MsProvider,
  MsSegmentedControl,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTabPanels,
  MsTabs,
  checkMsThemeContrast,
  defineMsTheme,
  msThemeToCss,
  type MsThemeDefinition,
  type MsThemeValues,
} from "@magic-style/vue";
import AppPreview from "../landing/AppPreview.vue";
import { LANDING } from "../landing/copy.ts";
import { THEMES } from "../composables/themes.ts";
import { data as themes } from "./themes.data.ts";
import { PAGES } from "./strings.ts";
import { siteLang } from "../i18n/ui.ts";
import { downloadJson, toDtcg, toTokensStudio, type ResolvedTheme } from "./theme-export.ts";

// Tailwind 600 (light) and 400 (dark) steps: sensible primaries with AA-ready contents.
const LIGHT_SWATCHES = [
  "#2563eb",
  "#7c3aed",
  "#db2777",
  "#dc2626",
  "#ea580c",
  "#16a34a",
  "#0d9488",
  "#18181b",
];
const DARK_SWATCHES = [
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#f87171",
  "#fb923c",
  "#4ade80",
  "#2dd4bf",
  "#fafafa",
];

const TINTS = {
  base: null,
  slate: { hue: 255, chroma: 0.012 },
  zinc: { hue: 285, chroma: 0.005 },
  stone: { hue: 60, chroma: 0.007 },
  sage: { hue: 150, chroma: 0.01 },
} as const;
type Tint = keyof typeof TINTS;

const RADII = {
  none: { selector: "0px", field: "0px", box: "0px" },
  sm: { selector: "2px", field: "4px", box: "6px" },
  md: { selector: "4px", field: "6px", box: "8px" },
  lg: { selector: "6px", field: "10px", box: "14px" },
} as const;
type Radius = keyof typeof RADII;

const DEFAULTS = {
  name: "acme",
  base: "magic",
  primary: "#2563eb",
  primaryDark: "#60a5fa",
  tint: "base" as Tint,
  radius: "md" as Radius,
  depth: "1",
};

const { lang, isDark } = useData();
const s = computed(() => PAGES[siteLang(lang.value)]);
const preview = computed(() => LANDING[siteLang(lang.value)].preview);

const state = reactive({ ...DEFAULTS });
const mode = ref<"light" | "dark">("light");
onMounted(() => {
  mode.value = isDark.value ? "dark" : "light";
});
const reset = () => Object.assign(state, DEFAULTS);

const baseOptions = THEMES.map((theme) => ({ label: theme.label, value: theme.name }));
const tintOptions = computed(() =>
  (Object.keys(TINTS) as Tint[]).map((value) => ({
    label: value === "base" ? s.value.builder.base : value[0]!.toUpperCase() + value.slice(1),
    value,
  })),
);
const radiusOptions = (Object.keys(RADII) as Radius[]).map((value) => ({
  label: value.toUpperCase(),
  value,
}));
const depthOptions = computed(() => [
  { label: s.value.builder.flat, value: "0" },
  { label: s.value.builder.soft, value: "1" },
]);
const modeOptions = computed(() => [
  { label: PAGES[siteLang(lang.value)].gallery.light, value: "light" as const },
  { label: PAGES[siteLang(lang.value)].gallery.dark, value: "dark" as const },
]);

/** WCAG relative luminance of a #rrggbb color. */
function luminance(hex: string): number {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r! + 0.7152 * g! + 0.0722 * b!;
}

/** White or near-black, whichever contrasts more with the fill. */
function contentFor(hex: string): string {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return "#ffffff";
  const l = luminance(hex);
  return 1.05 / (l + 0.05) >= (l + 0.05) / 0.05 ? "#ffffff" : "#09090b";
}

/** Re-tints the base theme's neutral surfaces, keeping their lightness. */
function tinted(values: Record<string, string>): MsThemeValues {
  const tint = TINTS[state.tint];
  if (!tint) return {};
  const out: Record<string, string> = {};
  for (const key of [
    "color-base-100",
    "color-base-200",
    "color-base-300",
    "color-base-content",
    "color-base-raised",
  ]) {
    const match = /^oklch\(\s*([\d.]+)/.exec(values[key] ?? "");
    if (match) out[key] = `oklch(${match[1]} ${tint.chroma} ${tint.hue})`;
  }
  return out;
}

const definition = computed<MsThemeDefinition>(() => {
  const base = themes.find((theme) => theme.name === state.base) ?? themes[0]!;
  const radius = RADII[state.radius];
  return defineMsTheme({
    name:
      state.name
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-") || "custom",
    extends: state.base,
    shared: {
      "radius-selector": radius.selector,
      "radius-field": radius.field,
      "radius-box": radius.box,
      depth: state.depth,
    },
    light: {
      ...tinted(base.light),
      "color-primary": state.primary,
      "color-primary-content": contentFor(state.primary),
    },
    dark: {
      ...tinted(base.dark),
      "color-primary": state.primaryDark,
      "color-primary-content": contentFor(state.primaryDark),
    },
  });
});

const overrides = computed<MsThemeValues>(() => ({
  ...definition.value.shared,
  ...definition.value[mode.value],
}));

const issues = computed(() => {
  try {
    return checkMsThemeContrast(definition.value);
  } catch {
    return [];
  }
});

const tsCode = computed(
  () =>
    `import { defineMsTheme } from "@magic-style/vue";\n\nexport const ${definition.value.name.replace(/-(\w)/g, (_, c: string) => c.toUpperCase())} = defineMsTheme(${JSON.stringify(definition.value, null, 2).replace(/"([a-z]+)":/g, "$1:")});\n`,
);
/** Base theme + generator overrides, per mode: what design tools need. */
const resolved = computed<ResolvedTheme>(() => {
  const base = themes.find((theme) => theme.name === state.base) ?? themes[0]!;
  return {
    name: definition.value.name,
    shared: { ...base.shared, ...(definition.value.shared as Record<string, string>) },
    light: { ...base.light, ...(definition.value.light as Record<string, string>) },
    dark: { ...base.dark, ...(definition.value.dark as Record<string, string>) },
  };
});
const dtcg = computed(() => toDtcg(resolved.value));
const tokensStudio = computed(() => toTokensStudio(resolved.value));
const json = (data: unknown) => `${JSON.stringify(data, null, 2)}\n`;

const cssCode = computed(() => {
  try {
    return msThemeToCss(definition.value);
  } catch (error) {
    return `/* ${String(error)} */`;
  }
});
</script>

<template>
  <div class="docs-builder">
    <form class="docs-builder__controls" @submit.prevent>
      <MsField :label="s.builder.name">
        <MsInput v-model="state.name" size="sm" autocomplete="off" />
      </MsField>
      <MsField :label="s.builder.base">
        <MsNativeSelect v-model="state.base" :options="baseOptions" size="sm" />
      </MsField>
      <MsField :label="s.builder.primary">
        <MsColorPicker v-model="state.primary" :swatches="LIGHT_SWATCHES" show-input />
      </MsField>
      <MsField :label="s.builder.primaryDark">
        <MsColorPicker v-model="state.primaryDark" :swatches="DARK_SWATCHES" show-input />
      </MsField>
      <MsField :label="s.builder.neutralTint">
        <MsSegmentedControl v-model="state.tint" :options="tintOptions" size="sm" full-width />
      </MsField>
      <div class="docs-builder__row">
        <MsField :label="s.builder.radius">
          <MsSegmentedControl v-model="state.radius" :options="radiusOptions" size="sm" />
        </MsField>
        <MsField :label="s.builder.depth">
          <MsSegmentedControl v-model="state.depth" :options="depthOptions" size="sm" />
        </MsField>
      </div>
      <div class="docs-builder__row">
        <MsSegmentedControl v-model="mode" :options="modeOptions" size="sm" />
        <MsButton size="sm" variant="ghost" tone="neutral" @click="reset">
          {{ s.builder.reset }}
        </MsButton>
      </div>

      <MsAlert v-if="issues.length === 0" tone="success" variant="soft">
        {{ s.builder.contrastOk }}
      </MsAlert>
      <MsAlert
        v-else
        tone="warning"
        variant="soft"
        :title="`${issues.length} ${s.builder.contrastIssues}`"
      >
        <ul class="docs-builder__issues">
          <li v-for="issue in issues.slice(0, 6)" :key="`${issue.mode}-${issue.fg}-${issue.bg}`">
            <MsBadge size="sm" variant="outline" tone="neutral">{{ issue.mode }}</MsBadge>
            <code>{{ issue.fg }}</code> / <code>{{ issue.bg }}</code
            >: {{ issue.ratio.toFixed(2) }}:1 (min {{ issue.min }}:1)
          </li>
        </ul>
      </MsAlert>
    </form>

    <div class="docs-builder__output">
      <MsProvider
        class="docs-builder__stage"
        target="wrapper"
        :theme="state.base"
        :color-mode="mode"
        :overrides="overrides"
        :locale="lang"
      >
        <AppPreview :copy="preview" :lang="lang" />
      </MsProvider>

      <MsTabs default-value="ts">
        <MsTabList :aria-label="s.builder.definition">
          <MsTab value="ts">{{ s.builder.definition }}</MsTab>
          <MsTab value="css">{{ s.builder.css }}</MsTab>
          <MsTab value="dtcg">DTCG</MsTab>
          <MsTab value="studio">Tokens Studio</MsTab>
        </MsTabList>
        <MsTabPanels>
          <MsTabPanel value="ts">
            <MsCodeBlock
              :code="tsCode"
              language="ts"
              :filename="`${definition.name}.ts`"
              max-height="360px"
            />
          </MsTabPanel>
          <MsTabPanel value="css">
            <MsCodeBlock
              :code="cssCode"
              language="css"
              :filename="`${definition.name}.css`"
              max-height="360px"
            />
          </MsTabPanel>
          <MsTabPanel value="dtcg">
            <p class="docs-builder__export-hint">{{ s.builder.dtcgHint }}</p>
            <MsCodeBlock
              :code="json(dtcg)"
              language="json"
              :filename="`${definition.name}.tokens.json`"
              max-height="360px"
            />
            <MsButton
              size="sm"
              variant="outline"
              tone="neutral"
              @click="downloadJson(`${definition.name}.tokens.json`, dtcg)"
            >
              {{ s.builder.download }}
            </MsButton>
          </MsTabPanel>
          <MsTabPanel value="studio">
            <p class="docs-builder__export-hint">{{ s.builder.studioHint }}</p>
            <MsCodeBlock
              :code="json(tokensStudio)"
              language="json"
              :filename="`${definition.name}.tokens-studio.json`"
              max-height="360px"
            />
            <MsButton
              size="sm"
              variant="outline"
              tone="neutral"
              @click="downloadJson(`${definition.name}.tokens-studio.json`, tokensStudio)"
            >
              {{ s.builder.download }}
            </MsButton>
          </MsTabPanel>
        </MsTabPanels>
      </MsTabs>
    </div>
  </div>
</template>
