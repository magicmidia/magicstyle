<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsCard, MsField, MsInput, MsNativeSelect } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const name = ref("");
const framework = ref("");
const frameworks = computed(() => [
  { label: "Vue", value: "vue" },
  { label: "Nuxt", value: "nuxt" },
  { label: "Astro", value: "astro" },
  { label: "SvelteKit", value: "sveltekit" },
]);
</script>

<template>
  <MsCard :title="t.createTitle" :description="t.createDesc" style="width: 100%; max-width: 360px">
    <form style="display: grid; gap: 16px" @submit.prevent>
      <MsField :label="t.name">
        <MsInput v-model="name" :placeholder="t.namePlaceholder" />
      </MsField>
      <MsField :label="t.framework">
        <MsNativeSelect v-model="framework" :options="frameworks" :placeholder="t.select" />
      </MsField>
    </form>
    <template #footer>
      <div class="ms-u-flex ms-u-justify-between ms-u-w-full">
        <MsButton variant="outline" tone="neutral">{{ t.cancel }}</MsButton>
        <MsButton>{{ t.deploy }}</MsButton>
      </div>
    </template>
  </MsCard>
</template>
