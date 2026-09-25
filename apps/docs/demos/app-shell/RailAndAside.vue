<script setup lang="ts">
import { computed, ref } from "vue";
import {
  MsAppShell,
  MsAppShellFooter,
  MsAside,
  MsAvatar,
  MsContent,
  MsIconButton,
  MsNavigationRail,
  MsTopbar,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const section = ref("chat");
const sections = computed(() => [
  {
    id: "chat",
    label: t.chat,
    paths: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"],
  },
  {
    id: "calls",
    label: t.calls,
    paths: [
      "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    ],
  },
  {
    id: "files",
    label: t.files,
    paths: ["M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", "M14 2v5h5"],
  },
]);
const messages = computed(() => [
  { id: 1, author: t.author1, text: t.message1 },
  { id: 2, author: t.author2, text: t.message2 },
  { id: 3, author: t.author1, text: t.message3 },
]);
</script>

<template>
  <div
    style="
      width: 100%;
      max-width: 880px;
      height: 420px;
      overflow: hidden;
      border: 1px solid var(--ms-color-border-subtle);
      border-radius: 12px;
    "
  >
    <MsAppShell :full-height="false" style="height: 100%; min-height: 0">
      <template #topbar>
        <MsTopbar>
          <template #leading>
            <strong>{{ t.channel }}</strong>
          </template>
          <template #trailing>
            <span class="ms-u-text-muted">{{ t.members }}</span>
          </template>
        </MsTopbar>
      </template>

      <template #rail>
        <MsNavigationRail width="64px">
          <MsIconButton
            v-for="item in sections"
            :key="item.id"
            :label="item.label"
            :active="section === item.id"
            :variant="section === item.id ? 'soft' : 'ghost'"
            tone="neutral"
            @click="section = item.id"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path v-for="d in item.paths" :key="d" :d="d" />
            </svg>
          </MsIconButton>
        </MsNavigationRail>
      </template>

      <MsContent>
        <div style="display: grid; gap: 16px">
          <div v-for="msg in messages" :key="msg.id" class="ms-u-flex ms-u-gap-3">
            <MsAvatar size="sm" :name="msg.author" />
            <div>
              <div class="ms-u-font-semibold">{{ msg.author }}</div>
              <div>{{ msg.text }}</div>
            </div>
          </div>
        </div>
      </MsContent>

      <template #aside>
        <MsAside width="220px">
          <div class="ms-u-p-4" style="display: grid; gap: 8px">
            <strong>{{ t.about }}</strong>
            <p class="ms-u-text-muted" style="margin: 0; font-size: var(--ms-typography-size-sm)">
              {{ t.aboutBody }}
            </p>
          </div>
        </MsAside>
      </template>

      <template #footer>
        <MsAppShellFooter>
          <span>{{ t.typing }}</span>
        </MsAppShellFooter>
      </template>
    </MsAppShell>
  </div>
</template>
