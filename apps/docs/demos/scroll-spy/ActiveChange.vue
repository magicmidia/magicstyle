<script setup lang="ts">
import { computed, ref } from "vue";
import { MsScrollSpy, MsTag, type MsScrollSpyItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const items = computed<MsScrollSpyItem[]>(() => [
  { id: "spy-profile", label: t.profile },
  { id: "spy-security", label: t.security },
  { id: "spy-notifications", label: t.notifications },
]);
const current = ref("spy-profile");
const currentLabel = computed(() => items.value.find((i) => i.id === current.value)?.label);
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
    <aside style="display: grid; gap: 12px; align-content: start">
      <MsScrollSpy :items="items" :offset="120" @active-change="current = $event" />
      <MsTag tone="primary" size="sm" dot>{{ currentLabel }}</MsTag>
    </aside>
    <div style="display: grid; gap: 24px">
      <section id="spy-profile">
        <h4 style="margin: 0 0 8px">{{ t.profile }}</h4>
        <p style="margin: 0; line-height: 1.7">{{ t.profileBody }}</p>
      </section>
      <section id="spy-security">
        <h4 style="margin: 0 0 8px">{{ t.security }}</h4>
        <p style="margin: 0; line-height: 1.7">{{ t.securityBody }}</p>
      </section>
      <section id="spy-notifications">
        <h4 style="margin: 0 0 8px">{{ t.notifications }}</h4>
        <p style="margin: 0; line-height: 1.7">{{ t.notificationsBody }}</p>
      </section>
    </div>
  </div>
</template>
