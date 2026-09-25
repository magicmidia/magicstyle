<template>
  <div ref="rootRef" class="ms-glimpse" @keydown.esc="handleCloseImmediate">
    <!-- Trigger link / anchor -->
    <div
      class="ms-glimpse__trigger"
      :aria-expanded="isOpen"
      :aria-haspopup="'dialog'"
      @mouseenter="handleTriggerEnter"
      @mouseleave="handleTriggerLeave"
      @focusin="handleTriggerEnter"
      @focusout="handleTriggerLeave"
      @click="handleTriggerClick"
    >
      <slot>
        <a
          :href="safeHref(href)"
          :target="target"
          :rel="safeRel(rel, target)"
          class="ms-link ms-link--primary"
        >
          {{ label || href }}
        </a>
      </slot>
    </div>

    <!-- Floating Preview Hovercard -->
    <div
      v-if="!disabled"
      :id="cardId"
      ref="cardRef"
      role="dialog"
      aria-label="Pré-visualização do link"
      :class="cardClasses"
      @mouseenter="handleCardEnter"
      @mouseleave="handleCardLeave"
    >
      <slot name="preview" :loading="loading" :open="isOpen">
        <!-- Skeleton loading state -->
        <template v-if="loading">
          <div class="ms-glimpse__skeleton-image" />
          <div class="ms-glimpse__content">
            <div class="ms-glimpse__skeleton-line" style="width: 40%; margin-bottom: 4px" />
            <div class="ms-glimpse__skeleton-line" style="width: 90%; margin-bottom: 2px" />
            <div class="ms-glimpse__skeleton-line" style="width: 70%" />
          </div>
        </template>

        <!-- Normal preview state -->
        <template v-else>
          <!-- Thumbnail Image -->
          <div v-if="image || $slots.image" class="ms-glimpse__image-wrapper">
            <slot name="image">
              <img
                :src="image"
                :alt="title || 'Pré-visualização do link'"
                class="ms-glimpse__image"
                loading="lazy"
              />
            </slot>
          </div>

          <!-- Metadata content -->
          <div class="ms-glimpse__content">
            <!-- Site & Domain header -->
            <div v-if="computedDomain || badge || $slots.meta" class="ms-glimpse__site-header">
              <slot name="meta">
                <div class="ms-glimpse__domain-wrap">
                  <img
                    v-if="favicon"
                    :src="favicon"
                    alt=""
                    class="ms-glimpse__favicon"
                    aria-hidden="true"
                  />
                  <span>{{ computedDomain }}</span>
                </div>
                <span v-if="badge" class="ms-glimpse__badge">{{ badge }}</span>
              </slot>
            </div>

            <!-- Title -->
            <h4 v-if="title || $slots.title" class="ms-glimpse__title">
              <slot name="title">{{ title }}</slot>
            </h4>

            <!-- Description -->
            <p v-if="description || $slots.description" class="ms-glimpse__description">
              <slot name="description">{{ description }}</slot>
            </p>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsGlimpseProps, MsGlimpseEmits } from "./types.ts";
import { safeHref, safeRel } from "../../composables/safe-url.ts";

defineOptions({
  name: "MsGlimpse",
});

const props = withDefaults(defineProps<MsGlimpseProps>(), {
  href: "#",
  label: "",
  title: "",
  description: "",
  image: "",
  domain: "",
  favicon: "",
  badge: "",
  placement: "top",
  showDelay: 180,
  hideDelay: 150,
  loading: false,
  disabled: false,
  target: "_blank",
});

const emit = defineEmits<MsGlimpseEmits>();

const rootRef = ref<HTMLElement | null>(null);
const cardRef = ref<HTMLElement | null>(null);
const cardId = useMsId("glimpse-card");
const isOpen = ref(false);

let openTimer: ReturnType<typeof setTimeout> | null = null;
let closeTimer: ReturnType<typeof setTimeout> | null = null;

const computedDomain = computed(() => {
  if (props.domain) return props.domain;
  if (props.href && props.href.startsWith("http")) {
    try {
      const parsed = new URL(props.href);
      return parsed.hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  }
  return "";
});

const cardClasses = computed(() => [
  "ms-glimpse__card",
  `ms-glimpse__card--${props.placement}`,
  {
    "ms-glimpse__card--open": isOpen.value,
  },
]);

function clearTimers() {
  if (openTimer !== null) {
    clearTimeout(openTimer);
    openTimer = null;
  }
  if (closeTimer !== null) {
    clearTimeout(closeTimer);
    closeTimer = null;
  }
}

function handleTriggerEnter() {
  if (props.disabled) return;
  clearTimers();
  if (props.showDelay > 0) {
    openTimer = setTimeout(() => {
      isOpen.value = true;
      emit("open");
    }, props.showDelay);
  } else {
    isOpen.value = true;
    emit("open");
  }
}

function handleTriggerLeave() {
  clearTimers();
  if (props.hideDelay > 0) {
    closeTimer = setTimeout(() => {
      isOpen.value = false;
      emit("close");
    }, props.hideDelay);
  } else {
    isOpen.value = false;
    emit("close");
  }
}

function handleCardEnter() {
  clearTimers();
}

function handleCardLeave() {
  handleTriggerLeave();
}

function handleTriggerClick(e: MouseEvent) {
  // On touch/mobile devices, first tap opens card instead of immediately navigating
  if ("ontouchstart" in window && !isOpen.value) {
    e.preventDefault();
    isOpen.value = true;
    emit("open");
  }
}

function handleCloseImmediate() {
  clearTimers();
  if (isOpen.value) {
    isOpen.value = false;
    emit("close");
  }
}

onUnmounted(() => {
  clearTimers();
});
</script>
