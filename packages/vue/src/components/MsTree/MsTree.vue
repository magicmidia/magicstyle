<script setup lang="ts">
import { computed, nextTick, ref, watch, provide } from "vue";
import type { MsTreeProps, MsTreeEmits, MsTreeNodeData, MsTreeKey } from "./types.ts";
import { MS_TREE_KEY } from "./types.ts";
import MsTreeNode from "./MsTreeNode.vue";

const props = withDefaults(defineProps<MsTreeProps>(), {
  items: () => [],
});

const emit = defineEmits<MsTreeEmits>();

defineSlots<{
  default?(props: { node: MsTreeNodeData }): unknown;
  icon?(props: { node: MsTreeNodeData }): unknown;
}>();

const internalSelected = ref<MsTreeKey | undefined>(props.selectedKey);
const internalExpanded = ref<MsTreeKey[]>(props.expandedKeys ? [...props.expandedKeys] : []);

watch(
  () => props.selectedKey,
  (val) => {
    internalSelected.value = val;
  },
);

watch(
  () => props.expandedKeys,
  (val) => {
    if (val) {
      internalExpanded.value = [...val];
    }
  },
);

const isSelected = (key: MsTreeKey) => internalSelected.value === key;
const isExpanded = (key: MsTreeKey) => internalExpanded.value.includes(key);

const selectNode = (node: MsTreeNodeData) => {
  internalSelected.value = node.key;
  emit("update:selectedKey", node.key);
  emit("select", node);
};

const toggleExpand = (node: MsTreeNodeData) => {
  const index = internalExpanded.value.indexOf(node.key);
  const next = [...internalExpanded.value];
  const nowExpanded = index === -1;

  if (nowExpanded) {
    next.push(node.key);
  } else {
    next.splice(index, 1);
  }

  internalExpanded.value = next;
  emit("update:expandedKeys", next);
  emit("toggle", node, nowExpanded);
};

interface VisibleNode {
  node: MsTreeNodeData;
  parent: MsTreeNodeData | undefined;
}

const treeRef = ref<HTMLElement | null>(null);

/** Nodes currently rendered, in document order (children only when expanded). */
const visibleNodes = computed(() => {
  const list: VisibleNode[] = [];
  const walk = (nodes: MsTreeNodeData[], parent: MsTreeNodeData | undefined) => {
    for (const node of nodes) {
      list.push({ node, parent });
      if (node.children?.length && isExpanded(node.key)) walk(node.children, node);
    }
  };
  walk(props.items, undefined);
  return list;
});

const focusedKey = ref<MsTreeKey | undefined>(undefined);

/** The tab stop: the focused node, else the selected one, else the first visible node. */
const tabStopKey = computed(() => {
  const keys = visibleNodes.value.map((entry) => entry.node.key);
  if (focusedKey.value !== undefined && keys.includes(focusedKey.value)) return focusedKey.value;
  if (internalSelected.value !== undefined && keys.includes(internalSelected.value)) {
    return internalSelected.value;
  }
  return keys[0];
});

const focusNode = (key: MsTreeKey | undefined) => {
  if (key === undefined) return;
  focusedKey.value = key;
  void nextTick(() => {
    const items = treeRef.value?.querySelectorAll<HTMLElement>("[data-ms-tree-key]") ?? [];
    Array.from(items)
      .find((item) => item.dataset.msTreeKey === String(key))
      ?.focus();
  });
};

// WAI-ARIA APG tree view keyboard model.
const onKeydown = (event: KeyboardEvent) => {
  const list = visibleNodes.value;
  const index = list.findIndex((entry) => entry.node.key === tabStopKey.value);
  const current = list[index];
  if (!current) return;
  const { node, parent } = current;
  const hasChildren = Boolean(node.children?.length);

  switch (event.key) {
    case "ArrowDown":
      focusNode(list[index + 1]?.node.key);
      break;
    case "ArrowUp":
      focusNode(list[index - 1]?.node.key);
      break;
    case "ArrowRight":
      if (hasChildren && !isExpanded(node.key)) {
        if (!node.disabled) toggleExpand(node);
      } else if (hasChildren) {
        focusNode(node.children![0]!.key);
      }
      break;
    case "ArrowLeft":
      if (hasChildren && isExpanded(node.key)) {
        if (!node.disabled) toggleExpand(node);
      } else if (parent) {
        focusNode(parent.key);
      }
      break;
    case "Home":
      focusNode(list[0]?.node.key);
      break;
    case "End":
      focusNode(list[list.length - 1]?.node.key);
      break;
    case "Enter":
    case " ":
      if (!node.disabled) selectNode(node);
      break;
    default:
      return;
  }
  event.preventDefault();
};

provide(MS_TREE_KEY, {
  isSelected,
  isExpanded,
  selectNode,
  toggleExpand,
  isFocused: (key) => tabStopKey.value === key,
  setFocused: (key) => {
    focusedKey.value = key;
  },
});
</script>

<template>
  <ul ref="treeRef" class="ms-tree" role="tree" data-ms-tree @keydown="onKeydown">
    <MsTreeNode v-for="item in props.items" :key="item.key" :node="item">
      <template #default="slotProps">
        <slot :node="slotProps.node" />
      </template>
      <template #icon="slotProps">
        <slot name="icon" :node="slotProps.node" />
      </template>
    </MsTreeNode>
  </ul>
</template>
