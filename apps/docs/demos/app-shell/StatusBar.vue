<script setup lang="ts">
import { MsAppShell, MsContent, MsStatusBar, MsTopbar } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      width: 100%;
      max-width: 720px;
      height: 260px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-subtle);
      border-radius: 12px;
    "
  >
    <MsAppShell :full-height="false" style="height: 100%; min-height: 0">
      <template #topbar>
        <MsTopbar>
          <template #leading>
            <span class="ms-u-font-mono">{{ t.fileName }}</span>
          </template>
        </MsTopbar>
      </template>
      <MsContent>
        <pre class="ms-u-font-mono ms-u-m-0">{{ t.codeSample }}</pre>
      </MsContent>
      <template #statusbar>
        <MsStatusBar tone="warning">
          <span>{{ t.lintWarnings }}</span>
          <span>{{ t.cursor }}</span>
        </MsStatusBar>
      </template>
    </MsAppShell>
  </div>
</template>
