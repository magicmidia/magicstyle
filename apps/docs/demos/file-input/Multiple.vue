<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsFileInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const attachments = ref<File | File[] | null>([]);
</script>

<template>
  <div style="width: 100%; max-width: 440px">
    <MsField :label="t.attachments" :description="t.attachmentsHint">
      <MsFileInput
        v-model="attachments"
        multiple
        accept=".pdf,.docx,image/*"
        :label="t.attachPrompt"
        :hint="t.attachFormats"
      />
    </MsField>
  </div>
</template>
