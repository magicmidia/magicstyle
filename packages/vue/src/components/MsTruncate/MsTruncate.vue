<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { MsTruncateProps, MsTruncateEmits } from "./types.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

const props = withDefaults(defineProps<MsTruncateProps>(), {
  text: "",
  lines: 1,
  expandable: false,
  expanded: false,
  showTooltip: true,
  position: "end",
  middleChars: 10,
});

const emit = defineEmits<MsTruncateEmits>();

const t = useMsMessages();
const expandLabel = computed(() => props.expandText ?? t.value.truncate.more);
const collapseLabel = computed(() => props.collapseText ?? t.value.truncate.less);

const internalExpanded = ref(props.expanded);

watch(
  () => props.expanded,
  (val) => {
    internalExpanded.value = val;
  },
);

const isMultiline = computed(() => props.lines > 1);
const isMiddle = computed(() => props.position === "middle" && !isMultiline.value);

const middleParts = computed(() => {
  if (!isMiddle.value || !props.text) return { start: props.text, end: "" };
  const len = props.text.length;
  const count = props.middleChars;
  if (len <= count * 2) return { start: props.text, end: "" };
  return {
    start: props.text.slice(0, len - count),
    end: props.text.slice(len - count),
  };
});

const classes = computed(() => [
  "ms-truncate",
  {
    "ms-truncate--single": !isMultiline.value && !isMiddle.value && !internalExpanded.value,
    "ms-truncate--multiline": isMultiline.value && !internalExpanded.value,
    "ms-truncate--middle": isMiddle.value,
  },
]);

const style = computed(() => {
  if (isMultiline.value && !internalExpanded.value) {
    return {
      WebkitLineClamp: String(props.lines),
    };
  }
  return undefined;
});

const toggleExpand = () => {
  internalExpanded.value = !internalExpanded.value;
  emit("update:expanded", internalExpanded.value);
  emit("toggle", internalExpanded.value);
};
</script>

<template>
  <div
    :class="classes"
    :data-lines="props.lines"
    :data-expanded="internalExpanded ? '' : undefined"
    :data-expandable="props.expandable ? '' : undefined"
    :data-position="props.position"
    :title="props.showTooltip && !internalExpanded && props.text ? props.text : undefined"
  >
    <!-- Middle truncation -->
    <template v-if="isMiddle">
      <span class="ms-truncate__start">{{ middleParts.start }}</span>
      <span class="ms-truncate__end">{{ middleParts.end }}</span>
    </template>

    <!-- Normal / Multiline truncation -->
    <template v-else>
      <div class="ms-truncate__content" :style="style">
        <slot>{{ props.text }}</slot>
      </div>

      <slot
        v-if="props.expandable"
        name="expand-trigger"
        :expanded="internalExpanded"
        :toggle="toggleExpand"
      >
        <button type="button" class="ms-truncate__toggle" @click="toggleExpand">
          {{ internalExpanded ? collapseLabel : expandLabel }}
        </button>
      </slot>
    </template>
  </div>
</template>
