<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount } from "vue";
import type { MsToastProps, MsToastEmits } from "./types.ts";

const props = defineProps<MsToastProps>();
const emit = defineEmits<MsToastEmits>();

let timer: ReturnType<typeof setTimeout> | null = null;
let remaining = props.toast.duration;
let startTime = 0;

const defaultIcons: Record<string, string> = {
  info: "ℹ️",
  success: "✅",
  warning: "⚠️",
  danger: "🚫",
  primary: "✨",
  neutral: "💬",
};

const toastClasses = computed(() => ["ms-toast", `ms-toast--tone-${props.toast.tone}`]);

const handleDismiss = () => {
  emit("dismiss", props.toast.id);
};

const startTimer = () => {
  if (remaining <= 0) return;
  startTime = Date.now();
  timer = setTimeout(() => {
    handleDismiss();
  }, remaining);
};

const pauseTimer = () => {
  if (!timer) return;
  clearTimeout(timer);
  timer = null;
  remaining -= Date.now() - startTime;
};

const resumeTimer = () => {
  if (remaining > 0) {
    startTimer();
  }
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <div
    :class="toastClasses"
    role="status"
    aria-live="polite"
    data-ms-toast
    @mouseenter="pauseTimer"
    @mouseleave="resumeTimer"
  >
    <span class="ms-toast__icon" aria-hidden="true">
      {{ defaultIcons[props.toast.tone] }}
    </span>

    <div class="ms-toast__body">
      <h5 v-if="props.toast.title" class="ms-toast__title">
        {{ props.toast.title }}
      </h5>
      <p class="ms-toast__message">
        {{ props.toast.message }}
      </p>
    </div>

    <button
      v-if="props.toast.dismissible"
      type="button"
      class="ms-toast__close"
      aria-label="Fechar notificação"
      @click="handleDismiss"
    >
      ✕
    </button>
  </div>
</template>
