<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsTextarea } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const bio = ref("");
</script>

<template>
  <div style="width: 100%; max-width: 420px">
    <MsField :label="t.bio" :description="t.bioHint">
      <MsTextarea v-model="bio" :placeholder="t.bioPlaceholder" />
    </MsField>
  </div>
</template>
