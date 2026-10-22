<script setup lang="ts">
import { ref } from "vue";
import { MsToggleGroup, MsToggleGroupItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const channel = ref("email");
</script>

<template>
  <MsToggleGroup v-model="channel" variant="outline" disabled :aria-label="t.channel">
    <MsToggleGroupItem value="email">{{ t.email }}</MsToggleGroupItem>
    <MsToggleGroupItem value="sms">{{ t.sms }}</MsToggleGroupItem>
    <MsToggleGroupItem value="push">{{ t.push }}</MsToggleGroupItem>
  </MsToggleGroup>
</template>
