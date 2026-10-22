<script setup lang="ts">
import { reactive } from "vue";
import { MsSwitch } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
const prefs = reactive({ comments: true, mentions: true, digest: false });
</script>

<template>
  <div style="display: grid; gap: 16px; width: 100%; max-width: 420px">
    <strong>{{ t.notifications }}</strong>
    <MsSwitch
      v-model="prefs.comments"
      label-placement="left"
      :label="t.comments"
      :description="t.commentsHint"
    />
    <MsSwitch
      v-model="prefs.mentions"
      label-placement="left"
      :label="t.mentions"
      :description="t.mentionsHint"
    />
    <MsSwitch
      v-model="prefs.digest"
      label-placement="left"
      :label="t.digest"
      :description="t.digestHint"
    />
  </div>
</template>
