<script setup lang="ts">
import { computed } from "vue";
import { MsFooter, type MsFooterColumn } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const columns = computed<MsFooterColumn[]>(() => [
  {
    title: t.product,
    links: [
      { label: t.features, href: "#" },
      { label: t.pricing, href: "#" },
      { label: t.changelog, href: "#" },
    ],
  },
  {
    title: t.resources,
    links: [
      { label: t.docs, href: "#" },
      { label: t.guides, href: "#" },
      { label: t.community, href: "#" },
    ],
  },
  {
    title: t.company,
    links: [
      { label: t.about, href: "#" },
      { label: t.careers, href: "#" },
      { label: t.contact, href: "#" },
    ],
  },
]);
</script>

<template>
  <div class="ms-u-w-full ms-u-border ms-u-rounded-lg" style="overflow: hidden">
    <MsFooter
      layout="multi-column"
      variant="sunken"
      :columns="columns"
      :copyright="t.copyright"
      container
    >
      <template #brand>
        <div style="display: grid; gap: 4px">
          <strong>{{ t.brand }}</strong>
          <span class="ms-u-text-muted">{{ t.tagline }}</span>
        </div>
      </template>
    </MsFooter>
  </div>
</template>
