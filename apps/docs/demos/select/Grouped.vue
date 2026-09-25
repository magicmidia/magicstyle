<script setup lang="ts">
import { computed, ref } from "vue";
import { MsField, MsSelect, type MsSelectOptionOrGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const framework = ref<string | number | (string | number)[] | null>("nuxt");

const options = computed<MsSelectOptionOrGroup[]>(() => [
  {
    group: t.frontend,
    options: [
      { value: "nuxt", label: "Nuxt", description: t.nuxtDesc },
      { value: "next", label: "Next.js", description: t.nextDesc },
      { value: "sveltekit", label: "SvelteKit", description: t.svelteKitDesc },
    ],
  },
  {
    group: t.backend,
    options: [
      { value: "nest", label: "NestJS", description: t.nestDesc },
      { value: "django", label: "Django", description: t.djangoDesc },
      { value: "rails", label: "Ruby on Rails", description: t.railsDesc },
    ],
  },
]);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.framework">
      <MsSelect v-model="framework" :options="options" />
    </MsField>
  </div>
</template>
