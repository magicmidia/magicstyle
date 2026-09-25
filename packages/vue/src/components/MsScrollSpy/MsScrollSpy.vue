<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type { MsScrollSpyProps, MsScrollSpyEmits } from "./types.ts";

const props = withDefaults(defineProps<MsScrollSpyProps>(), {
  offset: 80,
});

const emit = defineEmits<MsScrollSpyEmits>();

const t = useMsMessages();

defineSlots<{
  default?(): unknown;
}>();

const activeId = ref<string>(props.items[0]?.id || "");

const handleScroll = () => {
  if (typeof window === "undefined") return;

  const scrollY = window.scrollY;
  let current = activeId.value;

  for (const item of props.items) {
    const el = document.getElementById(item.id);
    if (!el) continue;

    const top = el.getBoundingClientRect().top + scrollY - props.offset;
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

  const top = el.getBoundingClientRect().top + window.scrollY - props.offset + 2;
  window.scrollTo({
    top,
    behavior: "smooth",
  });
};

onMounted(() => {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", handleScroll);
  }
});
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
  </nav>
</template>
