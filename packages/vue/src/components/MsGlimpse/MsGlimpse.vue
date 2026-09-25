<template>
  <span ref="rootRef" class="ms-glimpse" @keydown.esc="handleCloseImmediate">
    <!-- Phrasing content only (spans): MsGlimpse is meant to sit inline inside a <p>. -->
    <!-- Trigger link / anchor -->
    <!-- aria-expanded/aria-controls live on the focusable element (the link), not this span. -->
    <span
      ref="triggerRef"
      class="ms-glimpse__trigger"
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
          aria-haspopup="dialog"
          :aria-expanded="disabled ? undefined : isOpen"
          :aria-controls="disabled ? undefined : cardId"
          data-ms-glimpse-link
        >
          {{ label || href }}
        </a>
      </slot>
    </span>

    <!-- Floating Preview Hovercard -->
    <span
      v-if="!disabled"
      :id="cardId"
      ref="cardRef"
      role="dialog"
      :aria-label="t.glimpse.label"
      :class="cardClasses"
      @mouseenter="handleCardEnter"
      @mouseleave="handleCardLeave"
    >
      <slot name="preview" :loading="loading" :open="isOpen">
        <!-- Skeleton loading state -->
        <template v-if="loading">
          <span class="ms-glimpse__skeleton-image" />
          <span class="ms-glimpse__content">
            <span class="ms-glimpse__skeleton-line" style="width: 40%; margin-bottom: 4px" />
            <span class="ms-glimpse__skeleton-line" style="width: 90%; margin-bottom: 2px" />
            <span class="ms-glimpse__skeleton-line" style="width: 70%" />
          </span>
        </template>

        <!-- Normal preview state -->
        <template v-else>
          <!-- Thumbnail Image -->
          <span v-if="image || $slots.image" class="ms-glimpse__image-wrapper">
            <slot name="image">
              <img
                :src="image"
                :alt="title || t.glimpse.label"
                class="ms-glimpse__image"
                loading="lazy"
              />
            </slot>
          </span>

          <!-- Metadata content -->
          <span class="ms-glimpse__content">
            <!-- Site & Domain header -->
            <span v-if="computedDomain || badge || $slots.meta" class="ms-glimpse__site-header">
              <slot name="meta">
                <span class="ms-glimpse__domain-wrap">
                  <img
                    v-if="favicon"
                    :src="favicon"
                    alt=""
                    class="ms-glimpse__favicon"
                    aria-hidden="true"
                  />
                  <span>{{ computedDomain }}</span>
                </span>
                <span v-if="badge" class="ms-glimpse__badge">{{ badge }}</span>
              </slot>
            </span>

            <!-- Title -->
            <span v-if="title || $slots.title" class="ms-glimpse__title">
              <slot name="title">{{ title }}</slot>
            </span>

            <!-- Description -->
            <span v-if="description || $slots.description" class="ms-glimpse__description">
              <slot name="description">{{ description }}</slot>
            </span>
          </span>
        </template>
      </slot>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useMsId } from "../../composables/use-ms-id.ts";
import type { MsGlimpseProps, MsGlimpseEmits } from "./types.ts";
import { safeHref, safeRel } from "../../composables/safe-url.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

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

const t = useMsMessages();

const rootRef = ref<HTMLElement | null>(null);
const cardRef = ref<HTMLElement | null>(null);
const cardId = useMsId("glimpse-card");
const isOpen = ref(false);
const triggerRef = ref<HTMLElement | null>(null);

const FOCUSABLE = "a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])";

/**
 * Custom trigger content (default slot) gets the disclosure state on its first focusable
 * element; the built-in link binds it in the template (so it is also in the SSR markup).
 */
function syncSlotTriggerAria(): void {
  const trigger = triggerRef.value?.querySelector<HTMLElement>(FOCUSABLE);
  if (!trigger || trigger.hasAttribute("data-ms-glimpse-link")) return;
  if (props.disabled) {
    for (const name of ["aria-expanded", "aria-controls", "aria-haspopup"]) {
      trigger.removeAttribute(name);
    }
    return;
  }
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-expanded", String(isOpen.value));
  trigger.setAttribute("aria-controls", cardId);
}

onMounted(syncSlotTriggerAria);
watch([isOpen, () => props.disabled], syncSlotTriggerAria, { flush: "post" });

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
