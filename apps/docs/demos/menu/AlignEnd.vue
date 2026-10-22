<script setup lang="ts">
import { computed, ref } from "vue";
import { MsAvatar, MsButton, MsMenu, type MsMenuItem } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const open = ref(false);
const wrapper = ref<HTMLElement | null>(null);

const items = computed<MsMenuItem[]>(() => [
  { label: t.viewProfile, value: "view" },
  { label: t.changeRole, value: "role" },
  { label: t.resendInvite, value: "resend" },
  { label: t.removeMember, value: "remove", tone: "danger", divider: true },
]);

function onDismiss(reason: string) {
  open.value = false;
  // Return focus to the trigger after Escape or a selection.
  if (reason === "escape" || reason === "select") wrapper.value?.querySelector("button")?.focus();
}
</script>

<template>
  <div
    style="
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      max-width: 420px;
      padding: 12px;
      border: 1px solid var(--ms-color-border-default);
      border-radius: 8px;
    "
  >
    <MsAvatar name="Lucas Almeida" size="sm" />
    <div style="flex: 1; font-size: 14px">
      <strong>Lucas Almeida</strong>
      <div style="color: var(--ms-color-text-muted)">lucas@acme.com.br</div>
    </div>
    <div ref="wrapper" class="ms-dropdown">
      <MsButton
        variant="ghost"
        tone="neutral"
        size="sm"
        :aria-label="t.memberActions"
        aria-haspopup="menu"
        :open="open"
        @click="open = !open"
      >
        ⋯
      </MsButton>
      <MsMenu
        v-if="open"
        class="ms-menu--right"
        :items="items"
        :open="open"
        :anchor="wrapper"
        @dismiss="onDismiss"
      />
    </div>
  </div>
</template>
