<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { MsPaginationProps, MsPaginationEmits } from "./types.ts";

const props = withDefaults(defineProps<MsPaginationProps>(), {
  pageSize: 10,
  currentPage: 1,
  siblingCount: 1,
  showEdges: true,
  showJumper: false,
  showTotal: true,
  disabled: false,
  size: "md",
});

const emit = defineEmits<MsPaginationEmits>();

const jumperValue = ref("");

const totalPages = computed(() => {
  if (props.total <= 0) return 1;
  return Math.max(1, Math.ceil(props.total / props.pageSize));
});

const pageList = computed(() => {
  const total = totalPages.value;
  const current = props.currentPage;
  const siblings = props.siblingCount;

  // Total numbers to show: siblings * 2 + 1 (current) + 2 (first/last) + 2 (ellipses) = siblings * 2 + 5
  const totalPageNumbers = siblings * 2 + 5;

  if (total <= totalPageNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(current - siblings, 1);
  const rightSiblingIndex = Math.min(current + siblings, total);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < total - 2;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblings;
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, "...", total];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblings;
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => total - rightItemCount + i + 1,
    );
    return [1, "...", ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i,
  );
  return [1, "...", ...middleRange, "...", total];
});

const setPage = (page: number) => {
  if (props.disabled) return;
  if (page < 1 || page > totalPages.value) return;
  if (page === props.currentPage) return;
  emit("update:currentPage", page);
  emit("change", page);
};

const handleJumper = () => {
  const num = parseInt(jumperValue.value, 10);
  if (!isNaN(num)) {
    const clamped = Math.max(1, Math.min(num, totalPages.value));
    setPage(clamped);
    jumperValue.value = "";
  }
};
</script>

<template>
  <nav
    class="ms-pagination"
    :class="`ms-pagination--${props.size}`"
    aria-label="Paginação"
    :data-size="props.size"
  >
    <div v-if="props.showTotal" class="ms-pagination__total">
      <slot name="total" :total="props.total" :total-pages="totalPages">
        Total de {{ props.total }} itens
      </slot>
    </div>

    <ul class="ms-pagination__list">
      <!-- First page -->
      <li v-if="props.showEdges">
        <button
          type="button"
          class="ms-pagination__item ms-pagination__first"
          :disabled="props.disabled || props.currentPage <= 1"
          aria-label="Primeira página"
          title="Primeira página"
          @click="setPage(1)"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="11 17 6 12 11 7" />
            <polyline points="18 17 13 12 18 7" />
          </svg>
        </button>
      </li>

      <!-- Prev button -->
      <li>
        <button
          type="button"
          class="ms-pagination__item ms-pagination__prev"
          :disabled="props.disabled || props.currentPage <= 1"
          aria-label="Página anterior"
          title="Página anterior"
          @click="setPage(props.currentPage - 1)"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </li>

      <!-- Page Numbers -->
      <template v-for="(item, idx) in pageList" :key="idx">
        <li v-if="item === '...'" class="ms-pagination__ellipsis" aria-hidden="true">…</li>
        <li v-else>
          <button
            type="button"
            class="ms-pagination__item"
            :class="{ 'ms-pagination__item--active': item === props.currentPage }"
            :aria-current="item === props.currentPage ? 'page' : undefined"
            :disabled="props.disabled"
            @click="setPage(item as number)"
          >
            {{ item }}
          </button>
        </li>
      </template>

      <!-- Next button -->
      <li>
        <button
          type="button"
          class="ms-pagination__item ms-pagination__next"
          :disabled="props.disabled || props.currentPage >= totalPages"
          aria-label="Próxima página"
          title="Próxima página"
          @click="setPage(props.currentPage + 1)"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </li>

      <!-- Last page -->
      <li v-if="props.showEdges">
        <button
          type="button"
          class="ms-pagination__item ms-pagination__last"
          :disabled="props.disabled || props.currentPage >= totalPages"
          aria-label="Última página"
          title="Última página"
          @click="setPage(totalPages)"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </button>
      </li>
    </ul>

    <!-- Jumper -->
    <div v-if="props.showJumper" class="ms-pagination__jumper">
      <span>Ir para</span>
      <input
        v-model="jumperValue"
        type="number"
        class="ms-pagination__jumper-input"
        :min="1"
        :max="totalPages"
        :disabled="props.disabled"
        @keydown.enter="handleJumper"
      />
      <span>/ {{ totalPages }}</span>
    </div>
  </nav>
</template>
