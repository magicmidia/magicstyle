<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useData } from "vitepress";
import {
  MsBadge,
  MsButton,
  MsInput,
  MsProgress,
  MsProvider,
  MsSegmentedControl,
  MsSwitch,
} from "@magic-style/vue";
import { data as themes } from "./themes.data.ts";
import { PAGES } from "./strings.ts";
import { siteLang } from "../i18n/ui.ts";
import { useSitePrefs } from "../composables/useSitePrefs.ts";
import { useCopy } from "./useCopy.ts";

const ROLES = ["primary", "secondary", "accent", "neutral", "info", "success", "warning", "danger"];

const { lang, isDark } = useData();
const prefs = useSitePrefs();
const s = computed(() => PAGES[siteLang(lang.value)]);
const { copied, copy } = useCopy();

const mode = ref<"light" | "dark">("light");
onMounted(() => {
  mode.value = isDark.value ? "dark" : "light";
});
const modeOptions = computed(() => [
  { label: s.value.gallery.light, value: "light" as const },
  { label: s.value.gallery.dark, value: "dark" as const },
]);
const copyAttribute = (name: string) => copy(`data-ms-theme="${name}"`, name);
const switches = ref<Record<string, boolean>>({});
</script>

<template>
  <div class="docs-gallery">
    <div class="docs-gallery__toolbar">
      <span>{{ s.gallery.mode }}</span>
      <MsSegmentedControl v-model="mode" :options="modeOptions" size="sm" />
    </div>

    <div class="docs-gallery__grid">
      <article v-for="theme in themes" :key="theme.name" class="docs-gallery__item">
        <MsProvider
          class="docs-gallery__stage"
          target="wrapper"
          :theme="theme.name"
          :color-mode="mode"
          :locale="lang"
        >
          <div class="docs-gallery__sample">
            <div class="docs-gallery__sample-head">
              <strong>{{ s.gallery.sample.title }}</strong>
              <MsBadge>Pro</MsBadge>
            </div>
            <p>{{ s.gallery.sample.text }}</p>
            <MsInput
              :placeholder="s.gallery.sample.input"
              size="sm"
              :aria-label="s.gallery.sample.input"
            />
            <MsProgress :model-value="64" size="xs" :label="s.gallery.sample.title" />
            <div class="docs-gallery__sample-actions">
              <MsSwitch
                :model-value="switches[theme.name] ?? true"
                :label="theme.label"
                size="sm"
                @update:model-value="switches[theme.name] = $event"
              />
              <span class="docs-gallery__spacer" />
              <MsButton size="sm" variant="outline" tone="neutral">
                {{ s.gallery.sample.secondary }}
              </MsButton>
              <MsButton size="sm">{{ s.gallery.sample.primary }}</MsButton>
            </div>
            <ul class="docs-gallery__palette" :aria-label="theme.label">
              <li
                v-for="role in ROLES"
                :key="role"
                :style="{ background: `var(--ms-color-${role})` }"
                :title="s.roles[role]"
              />
            </ul>
          </div>
        </MsProvider>

        <div class="docs-gallery__meta">
          <div class="docs-gallery__title">
            <h3 :id="`theme-${theme.name}`">{{ theme.label }}</h3>
            <MsBadge v-if="prefs.theme === theme.name" variant="outline" tone="success">
              {{ s.gallery.active }}
            </MsBadge>
          </div>
          <p>{{ s.gallery.descriptions[theme.name] }}</p>
          <div class="docs-gallery__actions">
            <MsButton
              size="sm"
              variant="outline"
              tone="neutral"
              :disabled="prefs.theme === theme.name"
              @click="prefs.theme = theme.name"
            >
              {{ s.gallery.apply }}
            </MsButton>
            <MsButton
              size="sm"
              variant="ghost"
              tone="neutral"
              :title="s.gallery.copy"
              @click="copyAttribute(theme.name)"
            >
              <span aria-live="polite">
                <template v-if="copied === theme.name">{{ s.gallery.copied }}</template>
                <code v-else>data-ms-theme="{{ theme.name }}"</code>
              </span>
            </MsButton>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
