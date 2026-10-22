<script setup lang="ts">
import { ref } from "vue";
import { MsButton, MsCard, MsField, MsInput, MsProvider, MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const email = ref("");
const marketing = ref(true);
</script>

<template>
  <!-- target="wrapper" (default) scopes the theme to this subtree; the rest of the page is untouched. -->
  <MsProvider theme="shadcn" style="width: 100%; max-width: 380px">
    <MsCard :title="t.newsletterTitle" :description="t.newsletterDesc">
      <div style="display: grid; gap: 16px">
        <MsField :label="t.email">
          <MsInput v-model="email" type="email" :placeholder="t.emailPlaceholder" />
        </MsField>
        <MsSwitch v-model="marketing" :label="t.productNews" />
      </div>
      <template #footer>
        <MsButton variant="outline" tone="neutral">{{ t.cancel }}</MsButton>
        <MsButton>{{ t.subscribe }}</MsButton>
      </template>
    </MsCard>
  </MsProvider>
</template>
