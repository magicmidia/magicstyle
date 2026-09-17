<template>
  <div :class="classes">
    <!-- Header with Tabs if tabs prop provided -->
    <div v-if="tabs && tabs.length > 0" class="ms-snippet__header">
      <div class="ms-snippet__tabs" role="tablist" aria-label="Gerenciadores e comandos">
        <button
          v-for="(tab, index) in tabs"
          :id="`${snippetId}-tab-${index}`"
          :key="tab.id || index"
          type="button"
          role="tab"
          class="ms-snippet__tab"
          :aria-selected="currentTabIndex === index"
          :aria-controls="`${snippetId}-panel-${index}`"
          :tabindex="currentTabIndex === index ? 0 : -1"
          @click="selectTab(index)"
          @keydown.arrow-left.prevent="navigateTab(-1)"
          @keydown.arrow-right.prevent="navigateTab(1)"
        >
          <slot name="tab" :tab="tab" :active="currentTabIndex === index" :index="index">
            {{ tab.label }}
          </slot>
        </button>
      </div>

      <div class="ms-snippet__header-actions">
        <slot name="header-extra" />
        <button
          v-if="copyable"
          type="button"
          class="ms-snippet__copy-btn"
          :data-copied="copied"
          :aria-label="copied ? 'Copiado para a área de transferência' : 'Copiar comando'"
          :title="copied ? 'Copiado!' : 'Copiar'"
          @click="handleCopy"
        >
          <slot name="copy-button" :copied="copied">
            <svg
              v-if="!copied"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </slot>
        </button>
      </div>
    </div>

    <!-- Body snippet -->
    <div
      :id="tabs && tabs.length > 0 ? `${snippetId}-panel-${currentTabIndex}` : undefined"
      class="ms-snippet__body"
      :role="tabs && tabs.length > 0 ? 'tabpanel' : undefined"
      :aria-labelledby="tabs && tabs.length > 0 ? `${snippetId}-tab-${currentTabIndex}` : undefined"
    >
      <div class="ms-snippet__code-wrapper">
        <span v-if="activePrompt" class="ms-snippet__prompt" aria-hidden="true">
          <slot name="prefix">{{ activePrompt }}</slot>
        </span>
        <pre
          class="ms-snippet__code"
        ><code><slot name="default">{{ activeCode }}</slot></code></pre>
      </div>

      <!-- Single snippet copy button (when no tabs header) -->
      <button
        v-if="copyable && (!tabs || tabs.length === 0)"
        type="button"
        class="ms-snippet__copy-btn"
        :data-copied="copied"
        :aria-label="copied ? 'Copiado para a área de transferência' : 'Copiar comando'"
        :title="copied ? 'Copiado!' : 'Copiar'"
        @click="handleCopy"
      >
        <slot name="copy-button" :copied="copied">
          <svg
            v-if="!copied"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </slot>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsSnippetProps, MsSnippetEmits } from "./types.ts";

defineOptions({
  name: "MsSnippet",
});

const props = withDefaults(defineProps<MsSnippetProps>(), {
  code: "",
  tabs: () => [],
  activeTab: 0,
  prompt: "$ ",
  copyPrompt: false,
  copyTimeout: 2000,
  variant: "default",
  size: "md",
  wrapLines: false,
  copyable: true,
});

const emit = defineEmits<MsSnippetEmits>();

const snippetId = useMsId("snippet");
const copied = ref(false);
const internalActiveIndex = ref(0);

// Synchronize activeTab prop
watch(
  () => props.activeTab,
  (val) => {
    if (typeof val === "number") {
      internalActiveIndex.value = Math.max(0, Math.min(val, (props.tabs?.length || 1) - 1));
    } else if (typeof val === "string" && props.tabs) {
      const idx = props.tabs.findIndex((t) => (t.id || t.label) === val);
      if (idx !== -1) internalActiveIndex.value = idx;
    }
  },
  { immediate: true },
);

const currentTabIndex = computed(() => internalActiveIndex.value);

const activeItem = computed(() => {
  if (props.tabs && props.tabs.length > 0) {
    return props.tabs[currentTabIndex.value] || props.tabs[0];
  }
  return null;
});

const activeCode = computed(() => {
  if (activeItem.value) return activeItem.value.code;
  return props.code;
});

const activePrompt = computed(() => {
  if (activeItem.value && activeItem.value.prompt !== undefined) {
    return activeItem.value.prompt;
  }
  return props.prompt;
});

const classes = computed(() => [
  "ms-snippet",
  `ms-snippet--${props.variant}`,
  `ms-snippet--${props.size}`,
  props.tone ? `ms-snippet--tone-${props.tone}` : undefined,
  {
    "ms-snippet--wrap": props.wrapLines,
    "ms-snippet--has-tabs": props.tabs && props.tabs.length > 0,
  },
]);

function selectTab(index: number) {
  if (!props.tabs || index < 0 || index >= props.tabs.length) return;
  internalActiveIndex.value = index;
  const item = props.tabs[index];
  if (!item) return;
  emit("update:activeTab", item.id || index);
  emit("tab-change", item, index);
}

function navigateTab(delta: number) {
  if (!props.tabs || props.tabs.length === 0) return;
  const count = props.tabs.length;
  const nextIndex = (internalActiveIndex.value + delta + count) % count;
  selectTab(nextIndex);
}

let copyTimer: ReturnType<typeof setTimeout> | null = null;

async function handleCopy() {
  const codeToCopy = activeCode.value;
  if (!codeToCopy) return;

  const fullText =
    props.copyPrompt && activePrompt.value ? `${activePrompt.value}${codeToCopy}` : codeToCopy;

  if (typeof navigator !== "undefined" && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(fullText);
      copied.value = true;
      emit("copy", {
        code: fullText,
        tab: activeItem.value?.id || currentTabIndex.value,
      });

      if (copyTimer) clearTimeout(copyTimer);
      copyTimer = setTimeout(() => {
        copied.value = false;
      }, props.copyTimeout);
    } catch {
      // ignore clipboard error
    }
  }
}
</script>
