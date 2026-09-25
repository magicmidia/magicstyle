<script setup lang="ts">
import { ref } from "vue";
import { MsColorPicker, MsField } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const accent = ref("#8b5cf6");
</script>

<template>
  <div style="width: 100%; max-width: 360px">
    <MsField :label="t.accentLabel" :description="t.accentHelp">
      <MsColorPicker v-model="accent" />
    </MsField>
  </div>
</template>
