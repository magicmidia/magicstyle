<script setup lang="ts">
import { computed, inject } from "vue";
import type { MsTreeNodeData } from "./types.ts";
import { MS_TREE_KEY } from "./types.ts";

const props = defineProps<{
  /** Node to render; its `children` render recursively as nested tree items. */
  node: MsTreeNodeData;
}>();

defineSlots<{
  /** Node label content (defaults to `node.label`). */
  default?(props: { node: MsTreeNodeData }): unknown;
  /** Node icon. */
  icon?(props: { node: MsTreeNodeData }): unknown;
}>();

const tree = inject(MS_TREE_KEY, null);

const hasChildren = computed(() => Boolean(props.node.children && props.node.children.length > 0));
const isExpanded = computed(() => (tree ? tree.isExpanded(props.node.key) : false));
const isSelected = computed(() => (tree ? tree.isSelected(props.node.key) : false));
const isTabStop = computed(() => (tree ? tree.isFocused(props.node.key) : false));

const handleRowClick = () => {
  if (props.node.disabled || !tree) return;
  tree.selectNode(props.node);
};

const handleToggle = (event: MouseEvent) => {
  event.stopPropagation();
  if (props.node.disabled || !tree) return;
  tree.toggleExpand(props.node);
};

const nodeClasses = computed(() => [
  "ms-tree-node",
  isSelected.value ? "ms-tree-node--selected" : "",
  isExpanded.value ? "ms-tree-node--expanded" : "",
  props.node.disabled ? "ms-tree-node--disabled" : "",
]);
</script>

<template>
  <li
    :class="nodeClasses"
    role="treeitem"
    :tabindex="isTabStop ? 0 : -1"
    :aria-expanded="hasChildren ? isExpanded : undefined"
    :aria-selected="isSelected"
    :aria-disabled="props.node.disabled || undefined"
    :data-ms-tree-key="String(props.node.key)"
    data-ms-tree-node
    @focus.self="tree?.setFocused(props.node.key)"
  >
    <div class="ms-tree-node__row" @click="handleRowClick">
      <!-- Chevron Toggle or Placeholder -->
      <button
        v-if="hasChildren"
        type="button"
        class="ms-tree-node__toggle"
        tabindex="-1"
        aria-hidden="true"
        @click="handleToggle"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="4 2 8 6 4 10" />
        </svg>
      </button>
      <span v-else class="ms-tree-node__toggle-placeholder" aria-hidden="true" />

      <!-- Icon -->
      <span v-if="props.node.icon || $slots.icon" class="ms-tree-node__icon" aria-hidden="true">
        <slot name="icon" :node="props.node">
          <span>{{ props.node.icon }}</span>
        </slot>
      </span>
      <span v-else class="ms-tree-node__icon" aria-hidden="true">
        <span>{{ hasChildren ? (isExpanded ? "📂" : "📁") : "📄" }}</span>
      </span>

      <!-- Label -->
      <span class="ms-tree-node__label">
        <slot :node="props.node">{{ props.node.label }}</slot>
      </span>
    </div>

    <!-- Recursive Children -->
    <ul v-if="hasChildren && isExpanded" class="ms-tree-node__children" role="group">
      <MsTreeNode v-for="child in props.node.children" :key="child.key" :node="child">
        <template #default="slotProps">
          <slot :node="slotProps.node" />
        </template>
        <template #icon="slotProps">
          <slot name="icon" :node="slotProps.node" />
        </template>
      </MsTreeNode>
    </ul>
  </li>
</template>
