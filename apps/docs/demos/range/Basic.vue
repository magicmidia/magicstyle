<script setup lang="ts">
import { ref } from "vue";
import { MsField, MsRange } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const volume = ref(65);
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.volume">
      <MsRange v-model="volume" show-value />
    </MsField>
  </div>
</template>
