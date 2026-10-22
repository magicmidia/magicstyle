<script setup lang="ts">
import { ref } from "vue";
import { MsCheckbox } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const backups = ref(true);
const support = ref(false);
const domain = ref(false);
</script>

<template>
  <div style="display: grid; gap: 12px; width: 100%; max-width: 400px">
    <MsCheckbox v-model="backups" card :label="t.backups" :description="t.backupsHint" />
    <MsCheckbox v-model="support" card :label="t.support" :description="t.supportHint" />
    <MsCheckbox v-model="domain" card :label="t.domain" :description="t.domainHint" />
  </div>
</template>
