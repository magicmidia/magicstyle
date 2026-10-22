<script setup lang="ts">
import { computed, ref } from "vue";
import { MsButton, MsConfirmDialog, type MsConfirmTone } from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

type Action = "publish" | "archive" | "leave";

const open = ref(false);
const action = ref<Action>("publish");

const actions = computed(() => ({
  publish: {
    tone: "primary" as MsConfirmTone,
    title: t.publishTitle,
    message: t.publishMessage,
    confirm: t.publishConfirm,
  },
  archive: {
    tone: "warning" as MsConfirmTone,
    title: t.archiveTitle,
    message: t.archiveMessage,
    confirm: t.archiveConfirm,
  },
  leave: {
    tone: "danger" as MsConfirmTone,
    title: t.leaveTitle,
    message: t.leaveMessage,
    confirm: t.leaveConfirm,
  },
}));

const current = computed(() => actions.value[action.value]);

function ask(next: Action) {
  action.value = next;
  open.value = true;
}
</script>

<template>
  <MsButton @click="ask('publish')">{{ t.publish }}</MsButton>
  <MsButton tone="warning" variant="soft" @click="ask('archive')">{{ t.archive }}</MsButton>
  <MsButton tone="danger" variant="ghost" @click="ask('leave')">{{ t.leave }}</MsButton>
  <MsConfirmDialog
    v-model:open="open"
    :tone="current.tone"
    :title="current.title"
    :message="current.message"
    :confirm-label="current.confirm"
    :cancel-label="t.cancel"
    @confirm="open = false"
  />
</template>
