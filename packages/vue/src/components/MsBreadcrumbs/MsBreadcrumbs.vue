<template>
  <nav :aria-label="ariaLabel" :class="classes">
    <ol class="ms-breadcrumbs__list">
      <template v-if="displayItems && displayItems.length">
        <template v-for="(entry, idx) in displayItems" :key="idx">
          <!-- Ellipsis collapse button -->
          <li v-if="entry.isEllipsis" class="ms-breadcrumbs__item">
            <button
              type="button"
              class="ms-breadcrumbs__ellipsis"
              aria-label="Show all breadcrumb items"
              @click="isExpanded = true"
            >
              &hellip;
            </button>
            <MsBreadcrumbSeparator />
          </li>

          <!-- Standard item -->
          <template v-else>
            <MsBreadcrumbItem
              :href="safeHref(entry.item.href)"
              :current="entry.item.current || entry.isLast"
              :disabled="entry.item.disabled"
              :icon="entry.item.icon"
            >
              {{ entry.item.label }}
            </MsBreadcrumbItem>
            <MsBreadcrumbSeparator v-if="!entry.isLast" />
          </template>
        </template>
      </template>
      <slot v-else />
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed, provide, ref } from "vue";
import MsBreadcrumbItem from "./MsBreadcrumbItem.vue";
import MsBreadcrumbSeparator from "./MsBreadcrumbSeparator.vue";
import {
  BREADCRUMBS_CONTEXT_KEY,
  type BreadcrumbItemData,
  type MsBreadcrumbsContext,
  type MsBreadcrumbsProps,
  type MsBreadcrumbsSize,
  type MsBreadcrumbsVariant,
} from "./types.ts";
import { safeHref } from "../../composables/safe-url.ts";

defineOptions({
  name: "MsBreadcrumbs",
});

const props = withDefaults(defineProps<MsBreadcrumbsProps>(), {
  variant: "plain",
  size: "md",
  separator: "›",
  ariaLabel: "Navegação estrutural",
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
});

const isExpanded = ref(false);

const separatorSymbol = computed(() => {
  if (props.separatorType === "slash") return "/";
  if (props.separatorType === "arrow") return "→";
  if (props.separatorType === "dot") return "•";
  if (props.separatorType === "chevron") return "›";
  return props.separator;
});

interface ProcessedEntry {
  isEllipsis?: boolean;
  item: BreadcrumbItemData;
  isLast: boolean;
}

const displayItems = computed<ProcessedEntry[] | null>(() => {
  if (!props.items || props.items.length === 0) return null;
  const items = props.items;
  const total = items.length;

  if (!props.maxItems || total <= props.maxItems || isExpanded.value || props.maxItems < 2) {
    return items.map((item, idx) => ({
      item,
      isLast: idx === total - 1,
    }));
  }

  const beforeCount = Math.max(1, props.itemsBeforeCollapse ?? 1);
  const afterCount = Math.max(1, props.itemsAfterCollapse ?? 1);

  if (beforeCount + afterCount >= total) {
    return items.map((item, idx) => ({
      item,
      isLast: idx === total - 1,
    }));
  }

  const result: ProcessedEntry[] = [];

  for (let i = 0; i < beforeCount; i++) {
    const it = items[i];
    if (it) {
      result.push({ item: it, isLast: false });
    }
  }

  // Placeholder for ellipsis
  result.push({
    isEllipsis: true,
    item: { label: "..." },
    isLast: false,
  });

  const startIndex = total - afterCount;
  for (let i = startIndex; i < total; i++) {
    const it = items[i];
    if (it) {
      result.push({ item: it, isLast: i === total - 1 });
    }
  }

  return result;
});

const variantComputed = computed<MsBreadcrumbsVariant>(() => props.variant);
const sizeComputed = computed<MsBreadcrumbsSize>(() => props.size);

const context: MsBreadcrumbsContext = {
  separator: separatorSymbol,
  variant: variantComputed,
  size: sizeComputed,
};

provide(BREADCRUMBS_CONTEXT_KEY, context);

const classes = computed(() => {
  return ["ms-breadcrumbs", `ms-breadcrumbs--${props.variant}`, `ms-breadcrumbs--${props.size}`];
});
</script>
