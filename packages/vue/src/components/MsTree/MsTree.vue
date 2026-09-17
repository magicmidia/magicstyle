<script setup lang="ts">
import { ref, watch, provide } from "vue";
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

provide(MS_TREE_KEY, {
  isSelected,
  isExpanded,
  selectNode,
  toggleExpand,
});
</script>

<template>
  <ul class="ms-tree" role="tree" data-ms-tree>
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
