<script setup lang="ts">
import { computed, defineAsyncComponent, ref, type Component } from "vue";
import { MsButton, MsTab, MsTabList, MsTabPanel, MsTabPanels, MsTabs } from "@magic-style/vue";
import { useUi } from "../composables/useUi.ts";

const props = defineProps<{ src: string; code: string }>();
const ui = useUi();

const modules = import.meta.glob<{ default: Component }>("../../../demos/**/*.vue");
const loader = modules[`../../../demos/${props.src}.vue`];
const Live = loader ? defineAsyncComponent(loader) : undefined;

const view = ref<"preview" | "code">("preview");
const copied = ref(false);
const source = computed(() => {
  const binary = atob(props.code);
  return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)));
});

async function copy() {
  try {
    await navigator.clipboard.writeText(source.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1600);
  } catch {
    /* clipboard unavailable */
  }
}
</script>

<template>
  <MsTabs v-model="view" size="sm" class="docs-demo">
    <div class="docs-demo__bar">
      <MsTabList :aria-label="ui.preview">
        <MsTab value="preview">{{ ui.preview }}</MsTab>
        <MsTab value="code">{{ ui.code }}</MsTab>
      </MsTabList>
      <MsButton variant="ghost" size="sm" @click="copy">
        {{ copied ? ui.copied : ui.copy }}
      </MsButton>
    </div>
    <MsTabPanels>
      <MsTabPanel value="preview" class="docs-demo__preview vp-raw">
        <component :is="Live" v-if="Live" />
      </MsTabPanel>
      <MsTabPanel value="code" class="docs-demo__code">
        <slot name="code" />
      </MsTabPanel>
    </MsTabPanels>
  </MsTabs>
</template>
