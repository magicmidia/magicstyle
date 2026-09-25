<script setup lang="ts">
import { computed, provide } from "vue";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import MsAvatar from "./MsAvatar.vue";
import {
  AVATAR_GROUP_CONTEXT_KEY,
  type MsAvatarGroupContext,
  type MsAvatarGroupProps,
} from "./types.ts";

defineOptions({
  name: "MsAvatarGroup",
});

const props = withDefaults(defineProps<MsAvatarGroupProps>(), {
  size: "md",
  spacing: "normal",
  bordered: true,
});

defineSlots<{
  default?(): unknown;
}>();

const context: MsAvatarGroupContext = {
  get size() {
    return props.size;
  },
  get bordered() {
    return props.bordered;
  },
};

provide(AVATAR_GROUP_CONTEXT_KEY, context);

const t = useMsMessages();

const groupClasses = computed(() =>
  [
    "ms-avatar-group",
    props.spacing !== "normal" ? `ms-avatar-group--spacing-${props.spacing}` : null,
  ].filter(Boolean),
);

const visibleItems = computed(() => {
  if (!props.items) return [];
  if (props.max !== undefined && props.items.length > props.max) {
    return props.items.slice(0, props.max);
  }
  return props.items;
});

const excessCount = computed(() => {
  if (!props.items || props.max === undefined) return 0;
  return Math.max(0, props.items.length - props.max);
});
</script>

<template>
  <div class="ms-avatar-group" :class="groupClasses" :data-size="props.size">
    <template v-if="props.items && props.items.length > 0">
      <MsAvatar
        v-for="(item, idx) in visibleItems"
        :key="idx"
        v-bind="item"
        :size="item.size ?? props.size"
        :bordered="item.bordered ?? props.bordered"
      />
      <div
        v-if="excessCount > 0"
        class="ms-avatar ms-avatar--excess"
        :data-size="props.size"
        :data-bordered="props.bordered || undefined"
        :aria-label="t.avatar.more"
      >
        +{{ excessCount }}
      </div>
    </template>
    <slot v-else />
  </div>
</template>
