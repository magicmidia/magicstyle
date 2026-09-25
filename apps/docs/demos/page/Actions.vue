<script setup lang="ts">
import { ref } from "vue";
import {
  MsButton,
  MsField,
  MsInput,
  MsPage,
  MsPageActions,
  MsPageHeader,
  MsTextarea,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const title = ref("");
const summary = ref("");
</script>

<template>
  <MsPage compact>
    <MsPageHeader :title="t.newRelease" :description="t.newReleaseDesc" />
    <form style="display: grid; gap: 16px" @submit.prevent>
      <MsField :label="t.releaseTitle">
        <MsInput v-model="title" :placeholder="t.releaseTitlePlaceholder" />
      </MsField>
      <MsField :label="t.summary" :description="t.summaryHint">
        <MsTextarea v-model="summary" :rows="3" />
      </MsField>
      <MsPageActions align="end">
        <MsButton variant="ghost" tone="neutral">{{ t.cancel }}</MsButton>
        <MsButton variant="outline" tone="neutral">{{ t.saveDraft }}</MsButton>
        <MsButton type="submit">{{ t.publish }}</MsButton>
      </MsPageActions>
    </form>
  </MsPage>
</template>
