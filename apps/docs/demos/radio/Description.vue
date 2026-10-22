<script setup lang="ts">
import { ref } from "vue";
import { MsRadio, MsRadioGroup } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const visibility = ref("team");
</script>

<template>
  <div style="width: 100%; max-width: 400px">
    <MsRadioGroup v-model="visibility" orientation="vertical" :aria-label="t.visibility">
      <MsRadio value="private" :label="t.private" :description="t.privateHint" />
      <MsRadio value="team" :label="t.team" :description="t.teamHint" />
      <MsRadio value="public" :label="t.public" :description="t.publicHint" />
    </MsRadioGroup>
  </div>
</template>
