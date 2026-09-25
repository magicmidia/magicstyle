<script setup lang="ts">
import { computed, ref, useId } from "vue";
import {
  MsAvatar,
  MsBadge,
  MsButton,
  MsEmptyState,
  MsField,
  MsIconButton,
  MsNativeSelect,
  MsSearchField,
  MsSidebarMenu,
  MsSidebarMenuItem,
  MsTextarea,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const titleId = useId();
const listId = useId();

type Folder = "inbox" | "starred" | "sent" | "archive" | "spam";
interface Message {
  id: number;
  folder: Folder;
  from: string;
  email: string;
  avatar?: string;
  subject: string;
  preview: string;
  body: string[];
  sentAt: string;
  starred?: boolean;
}

const folder = ref<Folder>("inbox");
const selectedId = ref(1);
// On narrow screens the list and the conversation take turns.
const reading = ref(false);
const search = ref("");
const reply = ref("");
// Unread counts per conversation id; opening a conversation marks it as read.
const unread = ref<Record<number, number>>({ 1: 2, 2: 1 });

const messages = computed<Message[]>(() => [
  {
    id: 1,
    folder: "inbox",
    from: "Ana Ribeiro",
    email: "ana.ribeiro@nuvempay.com",
    avatar: "/demo/avatar-ana-ribeiro.svg",
    subject: t.msg1Subject,
    preview: t.msg1Preview,
    body: [t.msg1Body1, t.msg1Body2, t.msg1Body3],
    sentAt: "2026-09-25T13:24:00Z",
    starred: true,
  },
  {
    id: 2,
    folder: "inbox",
    from: "Pedro Nunes",
    email: "pedro@rotalogistica.com",
    subject: t.msg2Subject,
    preview: t.msg2Preview,
    body: [t.msg2Preview, t.msg2Body2],
    sentAt: "2026-09-25T10:02:00Z",
  },
  {
    id: 3,
    folder: "inbox",
    from: "Clara Mendes",
    email: "clara.mendes@studioonda.com",
    avatar: "/demo/avatar-clara-mendes.svg",
    subject: t.msg3Subject,
    preview: t.msg3Preview,
    body: [t.msg3Preview, t.msg3Body2],
    sentAt: "2026-09-24T18:45:00Z",
    starred: true,
  },
  {
    id: 4,
    folder: "inbox",
    from: "Carolina Vieira",
    email: "carolina@cafeaurora.com",
    avatar: "/demo/avatar-carolina-vieira.svg",
    subject: t.msg4Subject,
    preview: t.msg4Preview,
    body: [t.msg4Preview],
    sentAt: "2026-09-23T09:15:00Z",
  },
  {
    id: 5,
    folder: "sent",
    from: "Marina Costa",
    email: "marina.costa@nuvempay.com",
    avatar: "/demo/avatar-marina-costa.svg",
    subject: t.msg5Subject,
    preview: t.msg5Preview,
    body: [t.msg5Preview],
    sentAt: "2026-09-22T16:40:00Z",
  },
]);

const visible = computed(() =>
  messages.value.filter((m) =>
    folder.value === "starred" ? m.starred : m.folder === folder.value,
  ),
);
const selected = computed(() => visible.value.find((m) => m.id === selectedId.value));
const unreadCount = computed(
  () => messages.value.filter((m) => m.folder === "inbox" && (unread.value[m.id] ?? 0) > 0).length,
);

const folders = computed(() => [
  {
    id: "inbox",
    label: t.folderInbox,
    badge: unreadCount.value || undefined,
    icon: [
      "M22 12h-6l-2 3h-4l-2-3H2",
      "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    ],
  },
  {
    id: "starred",
    label: t.folderStarred,
    icon: [
      "m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    ],
  },
  { id: "sent", label: t.folderSent, icon: ["m22 2-7 20-4-9-9-4Z", "M22 2 11 13"] },
  { id: "archive", label: t.folderArchive, icon: ["M21 8v13H3V8", "M1 3h22v5H1z", "M10 12h4"] },
  {
    id: "spam",
    label: t.folderSpam,
    icon: [
      "M12 9v4",
      "M12 17h.01",
      "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
    ],
  },
]);
const folderOptions = computed(() => folders.value.map((f) => ({ label: f.label, value: f.id })));
const folderLabel = computed(() => folders.value.find((f) => f.id === folder.value)?.label);

const time = computed(
  () => new Intl.DateTimeFormat(t.locale, { hour: "2-digit", minute: "2-digit", timeZone: "UTC" }),
);
const day = computed(
  () => new Intl.DateTimeFormat(t.locale, { day: "numeric", month: "short", timeZone: "UTC" }),
);
const full = computed(
  () =>
    new Intl.DateTimeFormat(t.locale, {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "UTC",
    }),
);
// Messages from "today" (the demo's fixed date) show the time, older ones the date.
const when = (iso: string) =>
  iso.startsWith("2026-09-25") ? time.value.format(new Date(iso)) : day.value.format(new Date(iso));

function openFolder(id: string) {
  folder.value = id as Folder;
  selectedId.value = visible.value[0]?.id ?? 0;
  reading.value = false;
}

function openMessage(message: Message) {
  selectedId.value = message.id;
  unread.value[message.id] = 0;
  reading.value = true;
}
</script>

<template>
  <section class="inbox" :class="{ 'inbox--reading': reading }" :aria-labelledby="titleId">
    <aside class="inbox__folders">
      <MsButton full-width>{{ t.compose }}</MsButton>
      <MsSidebarMenu
        :model-value="folder"
        :aria-label="t.foldersLabel"
        density="compact"
        @update:model-value="openFolder"
      >
        <MsSidebarMenuItem
          v-for="item in folders"
          :id="item.id"
          :key="item.id"
          :label="item.label"
          :badge="item.badge"
        >
          <template #icon>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path v-for="d in item.icon" :key="d" :d="d" />
            </svg>
          </template>
        </MsSidebarMenuItem>
      </MsSidebarMenu>
    </aside>

    <div class="inbox__list">
      <header class="inbox__list-header">
        <h3 :id="titleId" class="inbox__title">{{ folderLabel }}</h3>
        <MsField :label="t.folderSelect" class="inbox__folder-select">
          <MsNativeSelect
            :model-value="folder"
            :options="folderOptions"
            size="sm"
            @update:model-value="openFolder(String($event))"
          />
        </MsField>
        <MsSearchField v-model="search" size="sm" :placeholder="t.searchPlaceholder" />
      </header>

      <ul v-if="visible.length" :id="listId" class="inbox__items" :aria-label="t.conversations">
        <li v-for="message in visible" :key="message.id">
          <button
            type="button"
            class="inbox__item"
            :class="{
              'inbox__item--active': message.id === selectedId,
              'inbox__item--unread': (unread[message.id] ?? 0) > 0,
            }"
            :aria-current="message.id === selectedId ? 'true' : undefined"
            @click="openMessage(message)"
          >
            <MsAvatar :src="message.avatar ?? ''" tone="primary" :name="message.from" size="md" />
            <span class="inbox__item-body">
              <span class="inbox__item-top">
                <span class="inbox__item-from">{{ message.from }}</span>
                <time class="inbox__muted" :datetime="message.sentAt">{{
                  when(message.sentAt)
                }}</time>
              </span>
              <span class="inbox__item-subject">{{ message.subject }}</span>
              <span class="inbox__item-preview inbox__muted">{{ message.preview }}</span>
            </span>
            <MsBadge
              v-if="(unread[message.id] ?? 0) > 0"
              class="inbox__item-badge"
              :count="unread[message.id] ?? 0"
              tone="primary"
              variant="solid"
              size="sm"
              pill
            />
          </button>
        </li>
      </ul>
      <div v-else class="inbox__empty">
        <MsEmptyState
          variant="plain"
          icon-tone="success"
          :title="t.emptyTitle"
          :description="t.emptyText"
        >
          <template #icon>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </template>
          <MsButton variant="outline" tone="neutral" size="sm" @click="openFolder('inbox')">
            {{ t.backToInbox }}
          </MsButton>
        </MsEmptyState>
      </div>
    </div>

    <article v-if="selected" class="inbox__detail" :aria-label="selected.subject">
      <header class="inbox__detail-header">
        <MsButton
          class="inbox__back"
          variant="ghost"
          tone="neutral"
          size="sm"
          @click="reading = false"
        >
          {{ t.back }}
        </MsButton>
        <div class="inbox__toolbar">
          <MsIconButton variant="ghost" tone="neutral" size="sm" :label="t.archive">
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
              <path d="M21 8v13H3V8" />
              <path d="M1 3h22v5H1z" />
              <path d="M10 12h4" />
            </svg>
          </MsIconButton>
          <MsIconButton variant="ghost" tone="neutral" size="sm" :label="t.delete">
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
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </MsIconButton>
        </div>
      </header>
      <div class="inbox__detail-body">
        <h4 class="inbox__subject">{{ selected.subject }}</h4>
        <div class="inbox__sender">
          <MsAvatar :src="selected.avatar ?? ''" tone="primary" :name="selected.from" size="md" />
          <div class="inbox__sender-text">
            <strong>{{ selected.from }}</strong>
            <span class="inbox__muted">{{ selected.email }}</span>
          </div>
          <time class="inbox__muted inbox__sent" :datetime="selected.sentAt">
            {{ full.format(new Date(selected.sentAt)) }}
          </time>
        </div>
        <div class="inbox__message">
          <p v-for="(paragraph, index) in selected.body" :key="index">{{ paragraph }}</p>
        </div>
      </div>
      <form class="inbox__reply" @submit.prevent="reply = ''">
        <MsField :label="t.replyLabel">
          <MsTextarea v-model="reply" :rows="3" auto-grow :placeholder="t.replyPlaceholder" />
        </MsField>
        <div class="inbox__reply-actions">
          <MsButton type="submit" size="sm" :disabled="!reply.trim()">{{ t.send }}</MsButton>
        </div>
      </form>
    </article>
    <div v-else class="inbox__detail inbox__detail--empty">
      <p class="inbox__muted">{{ t.noSelection }}</p>
    </div>
  </section>
</template>

<style scoped>
.inbox {
  display: grid;
  grid-template-columns: 220px minmax(0, 20rem) minmax(0, 1fr);
  min-block-size: 640px;
}

.inbox__folders {
  display: flex;
  flex-direction: column;
  gap: var(--ms-space-4);
  padding: var(--ms-space-4) var(--ms-space-3);
  border-inline-end: 1px solid var(--ms-color-border-subtle);
}

.inbox__list {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  border-inline-end: 1px solid var(--ms-color-border-subtle);
}

.inbox__list-header {
  display: grid;
  gap: var(--ms-space-3);
  padding: var(--ms-space-4);
  border-block-end: 1px solid var(--ms-color-border-subtle);
}

.inbox__title {
  margin: 0;
  font-size: var(--ms-typography-size-lg);
  font-weight: var(--ms-typography-weight-semibold);
}

.inbox__folder-select {
  display: none;
}

.inbox__items {
  margin: 0;
  padding: var(--ms-space-2);
  list-style: none;
}

.inbox__item {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-space-3);
  inline-size: 100%;
  padding: var(--ms-space-3);
  border: 0;
  border-radius: var(--ms-radius-md);
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.inbox__item:hover {
  background: var(--ms-color-surface-hover);
}

.inbox__item:focus-visible {
  outline: 2px solid var(--ms-color-border-focus);
  outline-offset: -2px;
}

.inbox__item--active {
  background: var(--ms-color-surface-sunken);
}

.inbox__item-body {
  display: grid;
  flex: 1;
  gap: 2px;
  min-inline-size: 0;
}

.inbox__item-top {
  display: flex;
  justify-content: space-between;
  gap: var(--ms-space-2);
}

.inbox__item-top time {
  flex: none;
  white-space: nowrap;
}

.inbox__item-from,
.inbox__item-subject,
.inbox__item-preview {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.inbox__item-subject {
  font-size: var(--ms-typography-size-sm);
}

.inbox__item--unread .inbox__item-from,
.inbox__item--unread .inbox__item-subject {
  font-weight: var(--ms-typography-weight-semibold);
}

.inbox__item-badge {
  flex: none;
  align-self: center;
}

.inbox__muted {
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

.inbox__empty {
  display: grid;
  flex: 1;
  place-items: center;
  padding: var(--ms-space-6);
}

.inbox__detail {
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
}

.inbox__detail--empty {
  align-items: center;
  justify-content: center;
}

.inbox__detail-header {
  display: flex;
  align-items: center;
  gap: var(--ms-space-2);
  padding: var(--ms-space-3) var(--ms-space-4);
  border-block-end: 1px solid var(--ms-color-border-subtle);
}

.inbox__back {
  display: none;
}

.inbox__toolbar {
  display: flex;
  gap: var(--ms-space-1);
  margin-inline-start: auto;
}

.inbox__detail-body {
  display: grid;
  flex: 1;
  align-content: start;
  gap: var(--ms-space-5);
  padding: var(--ms-space-6);
}

.inbox__subject {
  margin: 0;
  font-size: var(--ms-typography-size-xl);
  font-weight: var(--ms-typography-weight-semibold);
}

.inbox__sender {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ms-space-3);
}

.inbox__sender-text {
  display: grid;
}

.inbox__sent {
  margin-inline-start: auto;
}

.inbox__message {
  display: grid;
  gap: var(--ms-space-3);
  line-height: var(--ms-typography-line-height-relaxed);
}

.inbox__message p {
  margin: 0;
}

.inbox__reply {
  display: grid;
  gap: var(--ms-space-3);
  padding: var(--ms-space-4) var(--ms-space-6) var(--ms-space-6);
  border-block-start: 1px solid var(--ms-color-border-subtle);
}

.inbox__reply-actions {
  display: flex;
  justify-content: flex-end;
}

@container (width < 960px) {
  .inbox {
    grid-template-columns: minmax(0, 18rem) minmax(0, 1fr);
  }

  .inbox__folders {
    display: none;
  }

  .inbox__folder-select {
    display: grid;
  }
}

@container (width < 640px) {
  .inbox {
    grid-template-columns: minmax(0, 1fr);
    min-block-size: 560px;
  }

  .inbox__list {
    border-inline-end: 0;
  }

  .inbox__detail,
  .inbox--reading .inbox__list {
    display: none;
  }

  .inbox--reading .inbox__detail {
    display: flex;
  }

  .inbox__back {
    display: inline-flex;
  }

  .inbox__detail-body,
  .inbox__reply {
    padding-inline: var(--ms-space-4);
  }
}
</style>
