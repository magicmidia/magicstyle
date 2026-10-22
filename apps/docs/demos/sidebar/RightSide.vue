<script setup lang="ts">
import { MsButton, MsSeparator, MsSidebar, MsTag } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);
</script>

<template>
  <div
    style="
      display: flex;
      width: 100%;
      max-width: 760px;
      height: 360px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-subtle);
      border-radius: 12px;
    "
  >
    <main style="flex: 1; padding: 24px">
      <h3 style="margin: 0 0 8px">{{ t.ticketTitle }}</h3>
      <p class="ms-u-text-muted" style="margin: 0; line-height: 1.6">{{ t.ticketBody }}</p>
    </main>
    <MsSidebar
      side="right"
      position="relative"
      width="wide"
      variant="raised"
      style="min-block-size: 0"
    >
      <template #header>
        <strong>{{ t.details }}</strong>
      </template>
      <dl
        style="
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 10px 16px;
          margin: 0;
          padding: 4px;
        "
      >
        <dt class="ms-u-text-muted">{{ t.status }}</dt>
        <dd style="margin: 0">
          <MsTag tone="warning" size="sm" dot>{{ t.inProgress }}</MsTag>
        </dd>
        <dt class="ms-u-text-muted">{{ t.assignee }}</dt>
        <dd style="margin: 0">{{ t.userName }}</dd>
        <dt class="ms-u-text-muted">{{ t.priority }}</dt>
        <dd style="margin: 0">{{ t.high }}</dd>
        <dt class="ms-u-text-muted">{{ t.due }}</dt>
        <dd style="margin: 0">{{ t.dueDate }}</dd>
      </dl>
      <MsSeparator spacing="md" />
      <template #footer>
        <MsButton size="sm" block>{{ t.resolve }}</MsButton>
      </template>
    </MsSidebar>
  </div>
</template>
