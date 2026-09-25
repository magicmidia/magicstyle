<script setup lang="ts">
import { computed } from "vue";
import { MsButton, MsPopover, MsSegmentedControl } from "@magic-style/vue";
import { THEMES } from "../composables/themes.ts";
import { resetSitePrefs, useSitePrefs, type SitePrefs } from "../composables/useSitePrefs.ts";
import { useUi } from "../composables/useUi.ts";

const prefs = useSitePrefs();
const ui = useUi();

const densityOptions = computed(() =>
  (["compact", "comfortable", "spacious"] as const).map((value) => ({
    value,
    label: ui.value.densities[value],
  })),
);
const radiusOptions = computed(() =>
  (["sharp", "subtle", "medium", "rounded"] as const).map((value) => ({
    value,
    label: ui.value.radii[value],
  })),
);
const contrastOptions = computed(() =>
  (["normal", "high"] as const).map((value) => ({ value, label: ui.value.contrasts[value] })),
);

function setTheme(theme: string) {
  prefs.theme = theme;
}
function set<K extends keyof SitePrefs>(key: K, value: unknown) {
  prefs[key] = value as SitePrefs[K];
}
</script>

<template>
  <MsPopover placement="bottom-end" width="lg" class="docs-theme-switcher">
    <template #trigger>
      <MsButton variant="ghost" size="sm" class="docs-theme-switcher__trigger">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
          />
        </svg>
        <span class="docs-theme-switcher__label">{{ ui.customize }}</span>
      </MsButton>
    </template>

    <div class="docs-theme-switcher__panel">
      <fieldset class="docs-theme-switcher__group">
        <legend>{{ ui.theme }}</legend>
        <div class="docs-theme-switcher__themes">
          <button
            v-for="theme in THEMES"
            :key="theme.name"
            type="button"
            class="docs-theme-switcher__theme"
            :aria-pressed="prefs.theme === theme.name"
            :data-ms-theme="theme.name"
            @click="setTheme(theme.name)"
          >
            <span class="docs-theme-switcher__swatch" aria-hidden="true" />
            {{ theme.label }}
          </button>
        </div>
      </fieldset>
      <fieldset class="docs-theme-switcher__group">
        <legend>{{ ui.density }}</legend>
        <MsSegmentedControl
          :model-value="prefs.density"
          :options="densityOptions"
          size="sm"
          full-width
          @update:model-value="set('density', $event)"
        />
      </fieldset>
      <fieldset class="docs-theme-switcher__group">
        <legend>{{ ui.radius }}</legend>
        <MsSegmentedControl
          :model-value="prefs.radius"
          :options="radiusOptions"
          size="sm"
          full-width
          @update:model-value="set('radius', $event)"
        />
      </fieldset>
      <fieldset class="docs-theme-switcher__group">
        <legend>{{ ui.contrast }}</legend>
        <MsSegmentedControl
          :model-value="prefs.contrast"
          :options="contrastOptions"
          size="sm"
          full-width
          @update:model-value="set('contrast', $event)"
        />
      </fieldset>
      <MsButton variant="outline" size="sm" block @click="resetSitePrefs">{{ ui.reset }}</MsButton>
    </div>
  </MsPopover>
</template>
