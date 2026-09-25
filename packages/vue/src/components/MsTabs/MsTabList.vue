<template>
  <div class="ms-tab-list-wrapper" :class="{ 'ms-tab-list-wrapper--scrollable': isScrollable }">
    <!-- Left Navigation Arrow -->
    <button
      v-if="arrowsVisible && canScrollLeft"
      type="button"
      class="ms-tab-list__arrow ms-tab-list__arrow--left"
      :aria-label="t.tabs.previous"
      @click="scrollLeft"
    >
      <svg
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
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <!-- Tab List -->
    <div
      ref="tabListRef"
      role="tablist"
      :aria-orientation="context?.orientation.value"
      :aria-label="ariaLabel"
      :class="classes"
      @scroll="onScroll"
    >
      <slot />
    </div>

    <!-- Right Navigation Arrow -->
    <button
      v-if="arrowsVisible && canScrollRight"
      type="button"
      class="ms-tab-list__arrow ms-tab-list__arrow--right"
      :aria-label="t.tabs.next"
      @click="scrollRight"
    >
      <svg
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
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { TABS_CONTEXT_KEY, type MsTabListProps } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

defineOptions({
  name: "MsTabList",
});

const props = defineProps<MsTabListProps>();

const t = useMsMessages();

const instance = getCurrentInstance();
const hasProp = (key: string) => {
  const vnodeProps = instance?.vnode.props;
  if (!vnodeProps) return false;
  const kebab = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  return key in vnodeProps || kebab in vnodeProps;
};

const context = inject(TABS_CONTEXT_KEY, undefined);

const tabListRef = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const isScrollable = computed(() => {
  if (hasProp("scrollable")) return Boolean(props.scrollable);
  if (context?.scrollable.value !== undefined) return context.scrollable.value;
  return true;
});

const arrowsVisible = computed(() => {
  if (context?.orientation.value === "vertical") return false;
  if (hasProp("showArrows")) return Boolean(props.showArrows);
  if (context?.showArrows.value !== undefined) return context.showArrows.value;
  return true;
});

function checkScrollability() {
  const el = tabListRef.value;
  if (!el || !isScrollable.value) {
    canScrollLeft.value = false;
    canScrollRight.value = false;
    return;
  }
  canScrollLeft.value = el.scrollLeft > 2;
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
}

function onScroll() {
  checkScrollability();
}

function scrollLeft() {
  if (tabListRef.value) {
    tabListRef.value.scrollBy({ left: -200, behavior: "smooth" });
  }
}

function scrollRight() {
  if (tabListRef.value) {
    tabListRef.value.scrollBy({ left: 200, behavior: "smooth" });
  }
}

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  checkScrollability();
  if (typeof ResizeObserver !== "undefined" && tabListRef.value) {
    resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });
    resizeObserver.observe(tabListRef.value);
  }
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});

watch(
  () => context?.activeTab.value,
  () => {
    nextTick(() => {
      checkScrollability();
      const activeEl = tabListRef.value?.querySelector<HTMLElement>('[aria-selected="true"]');
      if (activeEl && tabListRef.value) {
        const listRect = tabListRef.value.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        if (activeRect.left < listRect.left || activeRect.right > listRect.right) {
          activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        }
      }
    });
  },
);

const classes = computed(() => {
  return [
    "ms-tab-list",
    context ? `ms-tab-list--${context.variant.value}` : "",
    context?.fitted.value ? "ms-tab-list--fitted" : "",
    isScrollable.value ? "ms-tab-list--scrollable" : "",
  ].filter(Boolean);
});
</script>
