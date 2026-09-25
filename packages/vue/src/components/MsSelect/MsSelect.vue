<script setup lang="ts">
import { computed, getCurrentInstance, nextTick, onUnmounted, ref, watch } from "vue";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";
import type {
  MsSelectEmits,
  MsSelectGroup,
  MsSelectOption,
  MsSelectOptionOrGroup,
  MsSelectProps,
} from "./types.ts";

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<MsSelectProps>(), {
  size: "md",
  tone: "primary",
  variant: "outline",
  shape: "rounded",
  pill: false,
  multiple: false,
  searchable: false,
  clearable: false,
  loading: false,
  creatable: false,
  placement: "bottom",
  minSearchLength: 0,
  counter: false,
});

const emit = defineEmits<MsSelectEmits>();

const t = useMsMessages();
const placeholderText = computed(() => props.placeholder ?? t.value.select.placeholder);
const searchPlaceholderText = computed(
  () => props.searchPlaceholder ?? t.value.select.searchPlaceholder,
);
/** `select.create(query)` split around the query so it can be emphasized in the option. */
const createParts = computed<{ before: string; after: string } | null>(() => {
  const marker = "\u0000";
  const parts = t.value.select.create(marker).split(marker);
  if (parts.length !== 2) return null;
  return { before: parts[0] ?? "", after: parts[1] ?? "" };
});

defineSlots<{
  default?(): unknown;
  option?(props: { option: MsSelectOption; selected: boolean; active: boolean }): unknown;
  selectedOption?(props: { option: MsSelectOption }): unknown;
  value?(props: {
    selectedOptions: MsSelectOption[];
    remove: (val: string | number) => void;
  }): unknown;
  tag?(props: { option: MsSelectOption; remove: () => void }): unknown;
  counter?(props: { count: number; total: number }): unknown;
  prefix?(): unknown;
  icon?(): unknown;
  suffix?(): unknown;
  empty?(): unknown;
  header?(): unknown;
  footer?(): unknown;
}>();

const rootRef = ref<HTMLElement | null>(null);
const searchInputRef = ref<HTMLInputElement | null>(null);
const triggerRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);

const fieldControl = useFieldControl("ms-select");
const resolvedId = computed(() => fieldControl.id);
const listboxId = computed(() => `${resolvedId.value}-listbox`);
const describedBy = computed(() => fieldControl.describedBy.value);
const isInvalid = computed(() => props.invalid === true || fieldControl.fieldInvalid.value);

const effectiveShape = computed(() => (props.pill ? "pill" : props.shape || "rounded"));

const rootClasses = computed(() => [
  props.tone ? `ms-select--tone-${props.tone}` : null,
  props.variant ? `ms-select--variant-${props.variant}` : null,
  effectiveShape.value ? `ms-select--shape-${effectiveShape.value}` : null,
  effectiveShape.value === "pill" ? "ms-select--pill" : null,
  props.placement ? `ms-select--placement-${props.placement}` : null,
  props.floatingLabel ? "ms-select--floating" : null,
  props.size ? `ms-select--size-${props.size}` : null,
]);

const instance = getCurrentInstance();
const hasOpenProp = computed(() => {
  const vnodeProps = instance?.vnode.props;
  return (
    Boolean(vnodeProps) &&
    ("open" in (vnodeProps as Record<string, unknown>) ||
      "is-open" in (vnodeProps as Record<string, unknown>))
  );
});

const internalOpen = ref(hasOpenProp.value ? props.open === true : false);
const isDropdownOpen = computed(() =>
  hasOpenProp.value ? props.open === true : internalOpen.value,
);

const searchQuery = ref("");
const highlightedIndex = ref(-1);

function isGroup(item: MsSelectOptionOrGroup): item is MsSelectGroup {
  return "group" in item && Array.isArray((item as MsSelectGroup).options);
}

// Normalized flat list of options for lookup
const allFlatOptions = computed<MsSelectOption[]>(() => {
  if (!props.options) return [];
  const list: MsSelectOption[] = [];
  for (const item of props.options) {
    if (isGroup(item)) {
      for (const opt of item.options) {
        list.push({ ...opt, group: item.group });
      }
    } else {
      list.push(item);
    }
  }
  return list;
});

function applySearchLimit(list: MsSelectOptionOrGroup[]): MsSelectOptionOrGroup[] {
  if (!props.searchLimit || props.searchLimit <= 0) return list;
  let count = 0;
  const limited: MsSelectOptionOrGroup[] = [];
  for (const item of list) {
    if (count >= props.searchLimit) break;
    if (isGroup(item)) {
      const remaining = props.searchLimit - count;
      const sliced = item.options.slice(0, remaining);
      if (sliced.length > 0) {
        limited.push({ group: item.group, options: sliced });
        count += sliced.length;
      }
    } else {
      limited.push(item);
      count++;
    }
  }
  return limited;
}

// Filtered options based on search query, minSearchLength and searchLimit
const filteredGroupsOrOptions = computed<MsSelectOptionOrGroup[]>(() => {
  if (!props.options) return [];
  const query = searchQuery.value.trim().toLowerCase();
  if (!query || (props.minSearchLength && query.length < props.minSearchLength)) {
    return applySearchLimit(props.options);
  }

  const defaultFilter = (opt: MsSelectOption, q: string) => opt.label.toLowerCase().includes(q);
  const filterFn = props.filterFn ?? defaultFilter;

  const result: MsSelectOptionOrGroup[] = [];
  for (const item of props.options) {
    if (isGroup(item)) {
      const matched = item.options.filter((opt) => filterFn(opt, query));
      if (matched.length > 0) {
        result.push({ group: item.group, options: matched });
      }
    } else {
      if (filterFn(item, query)) {
        result.push(item);
      }
    }
  }
  return applySearchLimit(result);
});

// Flat list of selectable options currently visible
const visibleSelectableOptions = computed<MsSelectOption[]>(() => {
  const list: MsSelectOption[] = [];
  for (const item of filteredGroupsOrOptions.value) {
    if (isGroup(item)) {
      list.push(...item.options);
    } else {
      list.push(item);
    }
  }
  return list;
});

// Check if search query exactly matches an existing option
const hasExactMatch = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return true;
  return allFlatOptions.value.some((opt) => opt.label.toLowerCase() === query);
});

// Selected values calculation
const selectedValues = computed<(string | number)[]>(() => {
  if (props.modelValue === undefined || props.modelValue === null) return [];
  if (Array.isArray(props.modelValue)) return props.modelValue;
  return [props.modelValue];
});

const selectedOptions = computed<MsSelectOption[]>(() => {
  return selectedValues.value.map((val) => {
    const found = allFlatOptions.value.find((opt) => opt.value === val);
    return found ?? { value: val, label: String(val) };
  });
});

// Multiple Tag & Counter calculations
const isCounterOnly = computed(() => {
  return props.multiple && (props.counter === true || props.maxTagCount === 0);
});

const effectiveMaxTags = computed(() => {
  if (props.conditionalCounter !== undefined) {
    return selectedOptions.value.length > props.conditionalCounter
      ? props.conditionalCounter
      : undefined;
  }
  return props.maxTagCount;
});

const displayedTags = computed(() => {
  if (isCounterOnly.value) return [];
  if (effectiveMaxTags.value !== undefined && effectiveMaxTags.value > 0) {
    return selectedOptions.value.slice(0, effectiveMaxTags.value);
  }
  return selectedOptions.value;
});

const remainingTagCount = computed(() => {
  return selectedOptions.value.length - displayedTags.value.length;
});

function isSelected(opt: MsSelectOption): boolean {
  return selectedValues.value.includes(opt.value);
}

/** Deterministic, collision-free id: "a b" and "a_b" (or 1 and "1") map to different ids. */
function getOptionId(val: string | number): string {
  const encoded = String(val).replace(
    /[^a-zA-Z0-9-]/g,
    (char) => `_${char.charCodeAt(0).toString(16)}`,
  );
  return `${resolvedId.value}-opt-${typeof val === "number" ? "n" : "s"}${encoded}`;
}

const activeOptionId = computed(() => {
  if (
    highlightedIndex.value < 0 ||
    highlightedIndex.value >= visibleSelectableOptions.value.length
  ) {
    return undefined;
  }
  const opt = visibleSelectableOptions.value[highlightedIndex.value];
  return opt ? getOptionId(opt.value) : undefined;
});

// Teleport support & fixed positioning
const teleportTarget = computed(() => {
  if (typeof props.teleport === "string") return props.teleport;
  if (props.teleport) return "body";
  return undefined;
});

const dropdownStyle = ref<Record<string, string>>({});

function updateDropdownPosition(): void {
  if (!teleportTarget.value || !triggerRef.value || !isDropdownOpen.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  const placement = props.placement || "bottom";

  if (placement === "top") {
    dropdownStyle.value = {
      position: "fixed",
      bottom: `${window.innerHeight - rect.top + 4}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      zIndex: "1050",
    };
  } else {
    dropdownStyle.value = {
      position: "fixed",
      top: `${rect.bottom + 4}px`,
      left: `${rect.left}px`,
      width: `${rect.width}px`,
      zIndex: "1050",
    };
  }
}

function handleWindowUpdate(): void {
  if (isDropdownOpen.value && teleportTarget.value) {
    updateDropdownPosition();
  }
}

function setOpen(open: boolean): void {
  if (props.disabled) return;
  // Compare with the effective state so a controlled parent always gets the request.
  const changed = isDropdownOpen.value !== open;
  internalOpen.value = open;
  if (changed) {
    emit("update:open", open);
    emit("open-change", open);
  }
  if (open) {
    searchQuery.value = "";
    highlightedIndex.value = visibleSelectableOptions.value.findIndex((o) => !o.disabled);
    nextTick(() => {
      updateDropdownPosition();
      searchInputRef.value?.focus();
    });
  } else {
    searchQuery.value = "";
    highlightedIndex.value = -1;
  }
}

function toggleOpen(): void {
  setOpen(!isDropdownOpen.value);
}

function selectOption(opt: MsSelectOption): void {
  if (opt.disabled) return;

  if (props.multiple) {
    const current = [...selectedValues.value];
    const idx = current.indexOf(opt.value);
    if (idx >= 0) {
      current.splice(idx, 1);
    } else {
      current.push(opt.value);
    }
    emit("update:modelValue", current);
    emit("change", current);
  } else {
    emit("update:modelValue", opt.value);
    emit("change", opt.value);
    setOpen(false);
    triggerRef.value?.focus();
  }
}

function removeValue(val: string | number, event?: Event): void {
  event?.stopPropagation();
  if (props.disabled) return;
  if (props.multiple) {
    const current = selectedValues.value.filter((v) => v !== val);
    emit("update:modelValue", current);
    emit("change", current);
  }
}

function clear(event?: Event): void {
  event?.stopPropagation();
  if (props.disabled) return;
  const emptyVal = props.multiple ? [] : null;
  emit("update:modelValue", emptyVal);
  emit("change", emptyVal);
  emit("clear");
}

function handleCreate(): void {
  const query = searchQuery.value.trim();
  if (!query) return;
  emit("create", query);
  if (props.multiple) {
    const current = [...selectedValues.value, query];
    emit("update:modelValue", current);
    emit("change", current);
  } else {
    emit("update:modelValue", query);
    emit("change", query);
    setOpen(false);
    triggerRef.value?.focus();
  }
  searchQuery.value = "";
}

function onSearchInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  searchQuery.value = target.value;
  emit("search", target.value);
  highlightedIndex.value = visibleSelectableOptions.value.findIndex((o) => !o.disabled);
}

function onTriggerKeyDown(event: KeyboardEvent): void {
  if (props.disabled) return;

  // Select-only combobox: while open, focus stays on the trigger, so it drives the listbox.
  if (isDropdownOpen.value && !props.searchable && event.key !== "Backspace") {
    onDropdownKeyDown(event);
    return;
  }

  switch (event.key) {
    case "ArrowDown":
    case "ArrowUp":
    case "Enter":
    case " ":
      event.preventDefault();
      if (!isDropdownOpen.value) {
        setOpen(true);
      }
      break;
    case "Escape":
      if (isDropdownOpen.value) {
        event.preventDefault();
        setOpen(false);
      }
      break;
    case "Backspace":
      if (props.multiple && selectedValues.value.length > 0 && !searchQuery.value) {
        const last = selectedValues.value[selectedValues.value.length - 1];
        if (last !== undefined) {
          removeValue(last);
        }
      }
      break;
  }
}

function onDropdownKeyDown(event: KeyboardEvent): void {
  const options = visibleSelectableOptions.value;
  const count = options.length;

  switch (event.key) {
    case "ArrowDown": {
      event.preventDefault();
      if (count === 0) break;
      let next = (highlightedIndex.value + 1) % count;
      while (options[next]?.disabled && next !== highlightedIndex.value) {
        next = (next + 1) % count;
      }
      highlightedIndex.value = next;
      break;
    }
    case "ArrowUp": {
      event.preventDefault();
      if (count === 0) break;
      let prev = (highlightedIndex.value - 1 + count) % count;
      while (options[prev]?.disabled && prev !== highlightedIndex.value) {
        prev = (prev - 1 + count) % count;
      }
      highlightedIndex.value = prev;
      break;
    }
    case "Home":
    case "End": {
      event.preventDefault();
      const enabled = options.flatMap((o, i) => (o.disabled ? [] : [i]));
      if (enabled.length > 0) {
        highlightedIndex.value = event.key === "Home" ? enabled[0]! : enabled[enabled.length - 1]!;
      }
      break;
    }
    case " ":
      // Space types into the search box; in a select-only combobox it selects like Enter.
      if (props.searchable) break;
    // falls through
    case "Enter": {
      event.preventDefault();
      if (highlightedIndex.value >= 0 && highlightedIndex.value < count) {
        const selectedOpt = options[highlightedIndex.value];
        if (selectedOpt && !selectedOpt.disabled) {
          selectOption(selectedOpt);
        }
      } else if (props.creatable && !hasExactMatch.value && searchQuery.value.trim()) {
        handleCreate();
      }
      break;
    }
    case "Escape":
      event.preventDefault();
      setOpen(false);
      triggerRef.value?.focus();
      break;
    case "Tab":
      setOpen(false);
      break;
  }
}

function handlePointerDown(event: PointerEvent): void {
  const target = event.target as Node;
  if (rootRef.value?.contains(target)) return;
  if (dropdownRef.value?.contains(target)) return;
  setOpen(false);
}

watch(
  () => props.open,
  (val) => {
    if (typeof val === "boolean") {
      internalOpen.value = val;
    }
  },
);

watch(
  internalOpen,
  (isOpen) => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      document.addEventListener("pointerdown", handlePointerDown);
      if (teleportTarget.value && typeof window !== "undefined") {
        window.addEventListener("scroll", handleWindowUpdate, true);
        window.addEventListener("resize", handleWindowUpdate);
      }
    } else {
      document.removeEventListener("pointerdown", handlePointerDown);
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleWindowUpdate, true);
        window.removeEventListener("resize", handleWindowUpdate);
      }
    }
  },
  { immediate: true },
);

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.removeEventListener("pointerdown", handlePointerDown);
  }
  if (typeof window !== "undefined") {
    window.removeEventListener("scroll", handleWindowUpdate, true);
    window.removeEventListener("resize", handleWindowUpdate);
  }
});
</script>

<template>
  <div
    v-bind="rootAttrs($attrs)"
    ref="rootRef"
    class="ms-select"
    :class="rootClasses"
    :data-size="props.size"
    :data-tone="props.tone"
    :data-variant="props.variant"
    :data-shape="effectiveShape"
    :data-placement="props.placement"
    :data-pill="effectiveShape === 'pill' || undefined"
    :data-disabled="props.disabled || undefined"
    :data-focused="isDropdownOpen || undefined"
    :data-has-value="selectedValues.length > 0 || undefined"
  >
    <!-- Hidden input for form submission -->
    <input
      v-if="props.name && !props.multiple"
      type="hidden"
      :name="props.name"
      :value="props.modelValue ?? ''"
    />

    <!-- Combobox Trigger -->
    <div
      :id="resolvedId"
      ref="triggerRef"
      class="ms-select__control"
      role="combobox"
      tabindex="0"
      :aria-expanded="isDropdownOpen"
      aria-haspopup="listbox"
      :aria-controls="listboxId"
      :aria-activedescendant="activeOptionId"
      :aria-invalid="isInvalid || undefined"
      :aria-describedby="describedBy"
      :aria-labelledby="fieldControl.labelledBy.value"
      :aria-disabled="props.disabled || undefined"
      :data-invalid="isInvalid || undefined"
      :data-disabled="props.disabled || undefined"
      :data-focused="isDropdownOpen || undefined"
      v-bind="controlAttrs($attrs)"
      @click="toggleOpen"
      @keydown="onTriggerKeyDown"
    >
      <div class="ms-select__value-container">
        <!-- Optional Prepend / Prefix Slot / Icon -->
        <div v-if="props.prefix || $slots.prefix || $slots.icon" class="ms-select__prefix">
          <slot name="prefix">
            <slot name="icon">{{ props.prefix }}</slot>
          </slot>
        </div>

        <!-- Floating Label -->
        <label v-if="props.floatingLabel" class="ms-select__floating-label">
          {{ props.floatingLabel }}
        </label>

        <!-- Custom Full Value Slot -->
        <slot
          v-if="$slots.value"
          name="value"
          :selected-options="selectedOptions"
          :remove="removeValue"
        />

        <!-- Multi-select Tags / Counter -->
        <template v-else-if="props.multiple && selectedOptions.length > 0">
          <!-- Counter only mode -->
          <template v-if="isCounterOnly">
            <slot name="counter" :count="selectedOptions.length" :total="allFlatOptions.length">
              <span class="ms-select__counter">
                {{ t.select.selectedCount(selectedOptions.length) }}
              </span>
            </slot>
          </template>

          <!-- Normal / Conditional tags -->
          <template v-else>
            <span v-for="opt in displayedTags" :key="String(opt.value)" class="ms-select__tag">
              <slot name="tag" :option="opt" :remove="() => removeValue(opt.value)">
                <span class="ms-select__tag-label">{{ opt.label }}</span>
                <button
                  v-if="!props.disabled"
                  type="button"
                  class="ms-select__tag-remove"
                  :aria-label="t.select.removeOption(opt.label)"
                  @click="removeValue(opt.value, $event)"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4l8 8m0-8l-8 8" />
                  </svg>
                </button>
              </slot>
            </span>

            <!-- Remaining counter badge if conditional counter is active -->
            <span v-if="remainingTagCount > 0" class="ms-select__counter">
              {{ t.select.more(remainingTagCount) }}
            </span>
          </template>
        </template>

        <!-- Single Selected Value -->
        <template v-else-if="!props.multiple && selectedOptions.length > 0 && selectedOptions[0]">
          <span class="ms-select__single-value">
            <slot name="selectedOption" :option="selectedOptions[0]">
              {{ selectedOptions[0].label }}
            </slot>
          </span>
        </template>

        <!-- Placeholder -->
        <span
          v-if="selectedOptions.length === 0 && (!props.floatingLabel || isDropdownOpen)"
          class="ms-select__placeholder"
        >
          {{ placeholderText }}
        </span>
      </div>

      <!-- Actions (Clear, Loading Spinner, Chevron) -->
      <div class="ms-select__actions">
        <slot name="suffix" />

        <button
          v-if="props.clearable && selectedValues.length > 0 && !props.disabled"
          type="button"
          class="ms-select__clear"
          :aria-label="t.select.clear"
          @click="clear"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4l8 8m0-8l-8 8" />
          </svg>
        </button>

        <span v-if="props.loading" class="ms-select__spinner" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="8" cy="8" r="6" stroke-dasharray="28" stroke-dashoffset="14" />
          </svg>
        </span>

        <span class="ms-select__chevron" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m4 6 4 4 4-4" />
          </svg>
        </span>
      </div>
    </div>

    <!-- Dropdown Popup with optional Teleport -->
    <Teleport :disabled="!teleportTarget" :to="teleportTarget || 'body'">
      <div
        v-if="isDropdownOpen"
        ref="dropdownRef"
        class="ms-select__dropdown"
        :class="{ 'ms-select__dropdown--teleported': Boolean(teleportTarget) }"
        :style="teleportTarget ? dropdownStyle : undefined"
        :data-placement="props.placement"
        data-ms-floating
        @keydown="onDropdownKeyDown"
      >
        <slot name="header" />

        <!-- Search Box inside Dropdown -->
        <div v-if="props.searchable" class="ms-select__search-box">
          <input
            ref="searchInputRef"
            type="text"
            class="ms-select__search-input"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="true"
            :aria-controls="listboxId"
            :aria-activedescendant="activeOptionId"
            :aria-label="searchPlaceholderText"
            :placeholder="searchPlaceholderText"
            :value="searchQuery"
            @input="onSearchInput"
          />
        </div>

        <!-- Listbox -->
        <ul
          :id="listboxId"
          class="ms-select__listbox"
          role="listbox"
          :aria-multiselectable="props.multiple || undefined"
        >
          <template v-if="filteredGroupsOrOptions.length > 0">
            <template
              v-for="item in filteredGroupsOrOptions"
              :key="isGroup(item) ? item.group : String(item.value)"
            >
              <!-- Option Group -->
              <li
                v-if="isGroup(item)"
                class="ms-select__group"
                role="group"
                :aria-label="item.group"
              >
                <div class="ms-select__group-label">{{ item.group }}</div>
                <ul class="ms-select__listbox" role="none">
                  <li
                    v-for="opt in item.options"
                    :id="getOptionId(opt.value)"
                    :key="String(opt.value)"
                    class="ms-select__option"
                    role="option"
                    :aria-selected="isSelected(opt)"
                    :aria-disabled="opt.disabled || undefined"
                    :data-highlighted="
                      visibleSelectableOptions[highlightedIndex]?.value === opt.value || undefined
                    "
                    :data-disabled="opt.disabled || undefined"
                    @click="selectOption(opt)"
                  >
                    <slot
                      name="option"
                      :option="opt"
                      :selected="isSelected(opt)"
                      :active="visibleSelectableOptions[highlightedIndex]?.value === opt.value"
                    >
                      <div class="ms-select__option-content">
                        <span class="ms-select__option-label">{{ opt.label }}</span>
                        <span v-if="opt.description" class="ms-select__option-desc">
                          {{ opt.description }}
                        </span>
                      </div>
                      <span
                        v-if="isSelected(opt)"
                        class="ms-select__option-check"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                    </slot>
                  </li>
                </ul>
              </li>

              <!-- Standalone Option -->
              <li
                v-else
                :id="getOptionId(item.value)"
                class="ms-select__option"
                role="option"
                :aria-selected="isSelected(item)"
                :aria-disabled="item.disabled || undefined"
                :data-highlighted="
                  visibleSelectableOptions[highlightedIndex]?.value === item.value || undefined
                "
                :data-disabled="item.disabled || undefined"
                @click="selectOption(item)"
              >
                <slot
                  name="option"
                  :option="item"
                  :selected="isSelected(item)"
                  :active="visibleSelectableOptions[highlightedIndex]?.value === item.value"
                >
                  <div class="ms-select__option-content">
                    <span class="ms-select__option-label">{{ item.label }}</span>
                    <span v-if="item.description" class="ms-select__option-desc">
                      {{ item.description }}
                    </span>
                  </div>
                  <span v-if="isSelected(item)" class="ms-select__option-check" aria-hidden="true">
                    ✓
                  </span>
                </slot>
              </li>
            </template>
          </template>

          <!-- Empty State -->
          <li
            v-else-if="!props.creatable || hasExactMatch"
            class="ms-select__empty"
            role="presentation"
          >
            <slot name="empty">{{ t.select.empty }}</slot>
          </li>

          <!-- Creatable option when query has no exact match -->
          <li
            v-if="props.creatable && !hasExactMatch && searchQuery.trim()"
            class="ms-select__create"
            role="button"
            tabindex="0"
            @click="handleCreate"
          >
            <span v-if="createParts"
              >{{ createParts.before }}<strong>{{ searchQuery }}</strong
              >{{ createParts.after }}</span
            >
            <span v-else>{{ t.select.create(searchQuery) }}</span>
          </li>
        </ul>

        <slot name="footer" />
      </div>
    </Teleport>
  </div>
</template>
