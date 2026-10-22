<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import type { MsLightboxProps, MsLightboxEmits } from "./types.ts";
import { useScrollLock } from "../../composables/use-scroll-lock.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";
import { useFocusTrap } from "../../composables/use-focus-trap.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

const props = withDefaults(defineProps<MsLightboxProps>(), {
  modelValue: false,
  items: () => [],
  index: 0,
});

const emit = defineEmits<MsLightboxEmits>();

const t = useMsMessages();

const currentIndex = ref(props.index);

watch(
  () => props.index,
  (val) => {
    currentIndex.value = val;
  },
);

const currentItem = computed(() => {
  return props.items[currentIndex.value] || null;
});

const close = () => {
  emit("update:modelValue", false);
};

const next = () => {
  if (currentIndex.value < props.items.length - 1) {
    currentIndex.value++;
    emit("update:index", currentIndex.value);
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    emit("update:index", currentIndex.value);
  }
};

const isOpen = computed(() => props.modelValue && currentItem.value !== null);
const dialogRef = ref<HTMLElement | null>(null);

useScrollLock(isOpen);
useFocusTrap(dialogRef, isOpen);
useDismissableLayer({
  active: isOpen,
  inside: [dialogRef],
  onDismiss: close,
  closeOnOutside: () => false,
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && currentItem"
      ref="dialogRef"
      class="ms-lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      :aria-label="t.lightbox.label"
      tabindex="-1"
      @click.self="close"
    >
      <div class="ms-lightbox__topbar">
        <span class="ms-lightbox__counter">
          {{ currentIndex + 1 }} / {{ props.items.length }}
        </span>
        <button
          type="button"
          class="ms-lightbox__close"
          :aria-label="t.lightbox.close"
          @click="close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div class="ms-lightbox__stage">
        <button
          v-if="currentIndex > 0"
          type="button"
          class="ms-lightbox__nav-btn ms-lightbox__prev"
          :aria-label="t.lightbox.previous"
          @click="prev"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <img
          :src="currentItem.src"
          :alt="currentItem.alt || currentItem.title || t.lightbox.image"
          class="ms-lightbox__img"
        />

        <button
          v-if="currentIndex < props.items.length - 1"
          type="button"
          class="ms-lightbox__nav-btn ms-lightbox__next"
          :aria-label="t.lightbox.next"
          @click="next"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div v-if="currentItem.title || currentItem.caption" class="ms-lightbox__caption">
        <strong>{{ currentItem.title }}</strong>
        <p v-if="currentItem.caption">{{ currentItem.caption }}</p>
      </div>
    </div>
  </Teleport>
</template>
