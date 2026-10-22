<script setup lang="ts">
import { ref } from "vue";
import { MsList, MsListItem, MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const backups = ref(true);
const domain = ref(false);
const support = ref(true);
</script>

<template>
  <div style="width: 100%; max-width: 480px">
    <MsList variant="separated">
      <MsListItem :title="t.feature1" :description="t.feature1Desc">
        <template #trailing>
          <MsSwitch v-model="backups" :aria-label="t.feature1" />
        </template>
      </MsListItem>
      <MsListItem :title="t.feature2" :description="t.feature2Desc">
        <template #trailing>
          <MsSwitch v-model="domain" :aria-label="t.feature2" />
        </template>
      </MsListItem>
      <MsListItem :title="t.feature3" :description="t.feature3Desc">
        <template #trailing>
          <MsSwitch v-model="support" :aria-label="t.feature3" />
        </template>
      </MsListItem>
    </MsList>
  </div>
</template>
