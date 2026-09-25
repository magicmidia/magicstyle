<script setup lang="ts">
import { computed, defineAsyncComponent, ref, type Component } from "vue";
import { useData } from "vitepress";
import {
  MsButton,
  MsSegmentedControl,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTabPanels,
  MsTabs,
} from "@magic-style/vue";
import { useUi } from "../composables/useUi.ts";
import { openInStackBlitz } from "../playground.ts";

const props = defineProps<{ src: string; code: string; wide?: boolean }>();
const ui = useUi();
const { lang, page } = useData();

const modules = import.meta.glob<{ default: Component }>("../../../demos/**/*.vue");
const loader = modules[`../../../demos/${props.src}.vue`];
const Live = loader ? defineAsyncComponent(loader) : undefined;

const view = ref<"preview" | "code">("preview");
const copied = ref(false);
const source = computed(() => {
  const binary = atob(props.code);
  return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)));
});

// Wide demos (blocks) can be previewed at common breakpoints; the frame is a size
// container, so blocks adapt with @container queries.
type Viewport = "desktop" | "tablet" | "mobile";
const viewport = ref<Viewport>("desktop");
const VIEWPORT_WIDTH: Record<Viewport, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};
const viewportOptions = computed(() =>
  (["desktop", "tablet", "mobile"] as const).map((value) => ({
    label: ui.value.viewports[value],
    value,
  })),
);

// Enabled with MS_DOCS_PLAYGROUND=1 once @magic-style/* is published on npm.
const playground = __MS_PLAYGROUND__;

async function copy() {
  try {
    await navigator.clipboard.writeText(source.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1600);
  } catch {
    /* clipboard unavailable */
  }
}

function openPlayground() {
  openInStackBlitz({
    code: source.value,
    locale: lang.value,
    version: __MS_VERSION__,
    title: `${page.value.title} — ${props.src}`,
  });
}
</script>

<template>
  <MsTabs v-model="view" size="sm" class="docs-demo" :class="{ 'docs-demo--wide': props.wide }">
    <div class="docs-demo__bar">
      <MsTabList :aria-label="ui.preview">
        <MsTab value="preview">{{ ui.preview }}</MsTab>
        <MsTab value="code">{{ ui.code }}</MsTab>
      </MsTabList>
      <div class="docs-demo__actions">
        <MsSegmentedControl
          v-if="props.wide && view === 'preview'"
          v-model="viewport"
          class="docs-demo__viewports"
          :options="viewportOptions"
          :aria-label="ui.viewport"
          size="sm"
        />
        <MsButton
          v-if="playground"
          variant="ghost"
          tone="neutral"
          size="sm"
          @click="openPlayground"
        >
          {{ ui.openStackBlitz }}
        </MsButton>
        <MsButton variant="ghost" tone="neutral" size="sm" @click="copy">
          {{ copied ? ui.copied : ui.copy }}
        </MsButton>
      </div>
    </div>
    <MsTabPanels>
      <MsTabPanel value="preview" class="docs-demo__preview vp-raw">
        <div
          v-if="props.wide"
          class="docs-demo__frame"
          :style="{ inlineSize: VIEWPORT_WIDTH[viewport] }"
        >
          <component :is="Live" v-if="Live" />
        </div>
        <component :is="Live" v-else-if="Live" />
      </MsTabPanel>
      <MsTabPanel value="code" class="docs-demo__code">
        <slot name="code" />
      </MsTabPanel>
    </MsTabPanels>
  </MsTabs>
</template>
