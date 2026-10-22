<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, toValue, watch } from "vue";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsScrollSpyProps, MsScrollSpyEmits } from "./types.ts";

const props = withDefaults(defineProps<MsScrollSpyProps>(), {
  offset: 80,
});

const emit = defineEmits<MsScrollSpyEmits>();

const t = useMsMessages();

defineSlots<{
  /** Extra content rendered inside the nav, after the section links. */
  default?(): unknown;
}>();

const activeId = ref<string>(props.items[0]?.id || "");

/** The scrolling element being observed; `null` means the window. */
let scroller: HTMLElement | null = null;
let bound: HTMLElement | Window | null = null;

function resolveContainer(): HTMLElement | null {
  const value = toValue(props.container);
  if (!value || typeof document === "undefined") return null;
  if (typeof value === "string") return document.querySelector<HTMLElement>(value);
  return value;
}

/** Current scroll offset and an element's position in the same coordinate space. */
function scrollPosition(): number {
  return scroller ? scroller.scrollTop : window.scrollY;
}

function sectionTop(el: HTMLElement): number {
  const viewportTop = scroller ? scroller.getBoundingClientRect().top : 0;
  return el.getBoundingClientRect().top - viewportTop + scrollPosition();
}

const handleScroll = () => {
  if (typeof window === "undefined") return;

  const scrollY = scrollPosition();
  let current = activeId.value;

  for (const item of props.items) {
    const el = document.getElementById(item.id);
    if (!el) continue;

    const top = sectionTop(el) - props.offset;
    if (scrollY >= top) {
      current = item.id;
    }
  }

  if (current !== activeId.value) {
    activeId.value = current;
    emit("activeChange", current);
  }
};

const scrollTo = (id: string) => {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const top = sectionTop(el) - props.offset + 2;
  (scroller ?? window).scrollTo({
    top,
    behavior: "smooth",
  });
};

function unbind(): void {
  bound?.removeEventListener("scroll", handleScroll);
  bound = null;
}

function bind(): void {
  if (typeof window === "undefined") return;
  unbind();
  scroller = resolveContainer();
  bound = scroller ?? window;
  bound.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

onMounted(bind);
watch(() => toValue(props.container), bind, { flush: "post" });
onBeforeUnmount(unbind);
</script>

<template>
  <nav class="ms-scroll-spy" :aria-label="t.scrollSpy.label" data-ms-scroll-spy>
    <ul style="list-style: none; margin: 0; padding: 0">
      <li
        v-for="item in props.items"
        :key="item.id"
        class="ms-scroll-spy__item"
        :class="{ 'ms-scroll-spy__item--active': activeId === item.id }"
      >
        <button
          type="button"
          class="ms-scroll-spy__link"
          :aria-current="activeId === item.id ? 'true' : undefined"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
    <slot />
  </nav>
</template>
