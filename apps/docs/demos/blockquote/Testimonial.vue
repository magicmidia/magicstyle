<script setup lang="ts">
import { MsBlockquote } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div style="max-width: 560px">
    <MsBlockquote
      variant="card"
      tone="primary"
      size="lg"
      icon
      author="Carolina Vieira"
      :author-role="t.founderRole"
      author-avatar="/demo/avatar-carolina-vieira.svg"
    >
      <p>{{ t.quoteTestimonial }}</p>
    </MsBlockquote>
  </div>
</template>
