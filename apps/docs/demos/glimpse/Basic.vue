<script setup lang="ts">
import { MsGlimpse } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="max-width: 560px; line-height: 1.7; padding-top: 240px">
    {{ t.basicBefore }}
    <MsGlimpse
      href="https://vuejs.org/guide/introduction.html"
      label="Vue.js"
      :title="t.vueTitle"
      :description="t.vueDescription"
      :badge="t.docsBadge"
    >
      <template #image>
        <div
          style="width: 100%; height: 100%; background: linear-gradient(135deg, #42b883, #35495e)"
        />
      </template>
    </MsGlimpse>
    {{ t.basicAfter }}
  </div>
</template>
