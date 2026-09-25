<script setup lang="ts">
import { computed, ref } from "vue";
import { MsScrollSpy, type MsScrollSpyItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const scrollBox = ref<HTMLElement | null>(null);

const sections = computed(() => [
  { id: "spy-install", label: t.install, body: t.installBody },
  { id: "spy-config", label: t.config, body: t.configBody },
  { id: "spy-deploy", label: t.deploy, body: t.deployBody },
  { id: "spy-monitor", label: t.monitor, body: t.monitorBody },
]);
const items = computed<MsScrollSpyItem[]>(() =>
  sections.value.map(({ id, label }) => ({ id, label })),
);
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 32px;
      width: 100%;
      max-width: 720px;
    "
  >
    <aside>
      <p class="ms-u-text-muted ms-u-font-semibold ms-u-mb-2">{{ t.onThisPage }}</p>
      <MsScrollSpy :items="items" :container="scrollBox" :offset="16" />
    </aside>
    <article
      ref="scrollBox"
      class="ms-u-border ms-u-rounded-lg"
      style="display: grid; gap: 32px; height: 320px; overflow-y: auto; padding: 16px 16px 240px"
    >
      <section v-for="section in sections" :id="section.id" :key="section.id">
        <h4 style="margin: 0 0 8px">{{ section.label }}</h4>
        <p style="margin: 0; line-height: 1.7">{{ section.body }}</p>
      </section>
    </article>
  </div>
</template>
