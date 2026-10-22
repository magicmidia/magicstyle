<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsFileInput } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const avatar = ref<File | File[] | null>(null);
const error = ref("");

function onReject(_file: File, reason: "maxSize" | "accept"): void {
  error.value = reason === "maxSize" ? t.tooLarge : t.wrongType;
}
</script>

<template>
  <div style="width: 100%; max-width: 440px">
    <MsField :label="t.avatar" :error="error">
      <MsFileInput
        v-model="avatar"
        accept="image/png,image/jpeg"
        :max-size="1024 * 1024"
        :label="t.avatarPrompt"
        :hint="t.avatarHint"
        @change="error = ''"
        @reject="onReject"
      >
        <template #icon>🖼️</template>
      </MsFileInput>
    </MsField>
  </div>
</template>
