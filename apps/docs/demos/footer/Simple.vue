<script setup lang="ts">
import { MsFooter, MsLink } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div class="ms-u-w-full ms-u-border ms-u-rounded-lg" style="overflow: hidden">
    <MsFooter :copyright="t.copyright">
      <template #social>
        <nav :aria-label="t.legal" class="ms-u-flex ms-u-gap-4">
          <MsLink href="#" variant="muted" underline="hover">{{ t.privacy }}</MsLink>
          <MsLink href="#" variant="muted" underline="hover">{{ t.terms }}</MsLink>
          <MsLink href="#" variant="muted" underline="hover">{{ t.status }}</MsLink>
        </nav>
      </template>
    </MsFooter>
  </div>
</template>
