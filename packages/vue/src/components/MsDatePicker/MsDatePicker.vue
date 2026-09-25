<template>
  <div ref="rootRef" class="ms-date-picker" @focusout="onFocusout">
    <div class="ms-date-picker__input-wrapper">
      <input
        ref="inputRef"
        type="text"
        class="ms-date-picker__input"
        :value="displayValue"
        :placeholder="props.placeholder || defaultPlaceholder"
        :disabled="props.disabled"
        readonly
        aria-haspopup="dialog"
        :aria-expanded="isOpen"
        :aria-controls="isOpen ? dialogId : undefined"
        @click="toggleDropdown"
        @keydown.space.prevent="toggleDropdown"
        @keydown.enter.prevent="toggleDropdown"
        @keydown.down.prevent="openDropdown"
      />
      <button
        v-if="clearable && displayValue && !disabled"
        type="button"
        class="ms-date-picker__clear-btn"
        :aria-label="t.datePicker.clear"
        @click.stop="handleClear"
      >
        ✕
      </button>
      <span class="ms-date-picker__icon" aria-hidden="true">
        <svg
          v-if="mode === 'time'"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      </span>
    </div>

    <div
      v-if="isOpen"
      :id="dialogId"
      class="ms-date-picker__dropdown"
      role="dialog"
      :aria-label="dialogLabel"
    >
      <!-- Calendar View (for date, range, datetime) -->
      <template v-if="mode !== 'time'">
        <div class="ms-date-picker__header">
          <button
            type="button"
            class="ms-date-picker__nav-btn"
            :aria-label="t.datePicker.previousMonth"
            @click="prevMonth"
          >
            ‹
          </button>
          <div :id="titleId" class="ms-date-picker__title" aria-live="polite">
            {{ headerTitle }}
          </div>
          <button
            type="button"
            class="ms-date-picker__nav-btn"
            :aria-label="t.datePicker.nextMonth"
            @click="nextMonth"
          >
            ›
          </button>
        </div>

        <div ref="gridRef" role="grid" :aria-labelledby="titleId" @keydown="onGridKeydown">
          <div class="ms-date-picker__weekdays" role="row">
            <span v-for="w in weekdays" :key="w.short" role="columnheader" :abbr="w.long">
              {{ w.short }}
            </span>
          </div>

          <div class="ms-date-picker__days">
            <div v-for="(week, w) in weeks" :key="w" class="ms-date-picker__week" role="row">
              <button
                v-for="dayObj in week"
                :key="dayObj.dateString"
                type="button"
                role="gridcell"
                class="ms-date-picker__day"
                :class="getDayClasses(dayObj)"
                :data-date="dayObj.dateString"
                :tabindex="dayObj.dateString === tabbableDate ? 0 : -1"
                :aria-label="formatLongDate(dayObj)"
                :aria-selected="isDaySelected(dayObj)"
                :aria-current="dayObj.dateString === todayStr ? 'date' : undefined"
                :aria-disabled="isDateDisabled(dayObj) || undefined"
                @click="handleDayClick(dayObj)"
                @mouseenter="handleDayHover(dayObj)"
                @focus="focusedDate = dayObj.dateString"
              >
                {{ dayObj.day }}
              </button>
            </div>
          </div>
        </div>
      </template>

      <!-- Time Picker Panel (for time or datetime) -->
      <div v-if="mode === 'time' || mode === 'datetime'" class="ms-date-picker__time-panel">
        <div class="ms-date-picker__time-header">{{ t.datePicker.time }}</div>
        <div class="ms-date-picker__time-selectors">
          <select
            v-model="displayHour"
            class="ms-date-picker__time-select"
            :aria-label="t.datePicker.hour"
            @change="onTimeChange"
          >
            <option v-for="h in hourOptions" :key="h" :value="h">
              {{ String(h).padStart(2, "0") }}
            </option>
          </select>
          <span class="ms-date-picker__time-colon">:</span>
          <select
            v-model="selectedMinute"
            class="ms-date-picker__time-select"
            :aria-label="t.datePicker.minutes"
            @change="onTimeChange"
          >
            <option v-for="m in minuteOptions" :key="m" :value="m">
              {{ String(m).padStart(2, "0") }}
            </option>
          </select>
          <select
            v-if="!props.format24h"
            v-model="meridiem"
            class="ms-date-picker__time-select"
            :aria-label="t.datePicker.meridiem"
            @change="onTimeChange"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>

      <!-- Quick Presets -->
      <div v-if="mode === 'date'" class="ms-date-picker__presets">
        <button type="button" class="ms-date-picker__preset-btn" @click="selectPreset('today')">
          {{ t.datePicker.today }}
        </button>
        <button type="button" class="ms-date-picker__preset-btn" @click="selectPreset('tomorrow')">
          {{ t.datePicker.tomorrow }}
        </button>
      </div>

      <div v-else-if="mode === 'range'" class="ms-date-picker__presets">
        <button type="button" class="ms-date-picker__preset-btn" @click="selectRangePreset(7)">
          {{ t.datePicker.nextDays(7) }}
        </button>
        <button type="button" class="ms-date-picker__preset-btn" @click="selectRangePreset(30)">
          {{ t.datePicker.nextDays(30) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue";
import type { MsDatePickerProps, MsDatePickerEmits } from "./types.ts";
import { useMsId } from "../../composables/use-ms-id.ts";
import { useDismissableLayer } from "../../composables/use-dismissable-layer.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

defineOptions({
  name: "MsDatePicker",
});

const props = withDefaults(defineProps<MsDatePickerProps>(), {
  modelValue: "",
  mode: "date",
  placeholder: "",
  minDate: "",
  maxDate: "",
  format24h: true,
  minuteStep: 5,
  disabled: false,
  clearable: true,
});

const emit = defineEmits<MsDatePickerEmits>();

const t = useMsMessages();

const isOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const gridRef = ref<HTMLElement | null>(null);
const dialogId = useMsId("ms-date-picker-dialog");
const titleId = useMsId("ms-date-picker-title");

/** Day that owns the roving tabindex inside the grid ("YYYY-MM-DD"). */
const focusedDate = ref("");

// Range state
const rangeStart = ref<string>("");
const rangeEnd = ref<string>("");
const hoveredDate = ref<string>("");

// Time state
const selectedHour = ref<number>(12);
const selectedMinute = ref<number>(0);

// Calendar navigation state
const now = new Date();
const currentYear = ref(now.getFullYear());
const currentMonth = ref(now.getMonth());
/** "Today" is only known on the client (server timezone may differ): set after mount. */
const todayStr = ref("");
onMounted(() => {
  const today = new Date();
  todayStr.value = formatDateStr(today.getFullYear(), today.getMonth(), today.getDate());
});

/**
 * Parses "YYYY-MM-DD" and "YYYY-MM-DD HH:mm" (the formats this component emits) as
 * local time. `new Date("YYYY-MM-DD")` is UTC (off by a day west of Greenwich) and
 * Safari rejects "YYYY-MM-DD HH:mm".
 */
function parseLocalDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}))?/.exec(value.trim());
  if (match) {
    const [, y, mo, d, h, mi] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), Number(h ?? 0), Number(mi ?? 0));
  }
  const fallback = new Date(value);
  return isNaN(fallback.getTime()) ? null : fallback;
}

function parseInitialValue() {
  if (!props.modelValue) return;

  if (props.mode === "range") {
    if (Array.isArray(props.modelValue)) {
      rangeStart.value = props.modelValue[0] || "";
      rangeEnd.value = props.modelValue[1] || "";
    } else if (typeof props.modelValue === "object") {
      rangeStart.value = props.modelValue.start || "";
      rangeEnd.value = props.modelValue.end || "";
    } else if (typeof props.modelValue === "string" && props.modelValue.includes(" - ")) {
      const parts = props.modelValue.split(" - ");
      rangeStart.value = parts[0]?.trim() || "";
      rangeEnd.value = parts[1]?.trim() || "";
    }
    const start = rangeStart.value ? parseLocalDate(rangeStart.value) : null;
    if (start) {
      currentYear.value = start.getFullYear();
      currentMonth.value = start.getMonth();
    }
  } else if (props.mode === "time") {
    if (typeof props.modelValue === "string" && props.modelValue.includes(":")) {
      const parts = props.modelValue.split(":").map(Number);
      const h = parts[0];
      const m = parts[1];
      if (h !== undefined && !isNaN(h)) selectedHour.value = h;
      if (m !== undefined && !isNaN(m)) selectedMinute.value = m;
    }
  } else {
    // date or datetime
    if (typeof props.modelValue === "string") {
      const d = parseLocalDate(props.modelValue);
      if (d) {
        currentYear.value = d.getFullYear();
        currentMonth.value = d.getMonth();
        selectedHour.value = d.getHours();
        selectedMinute.value = d.getMinutes();
      }
    }
  }
}

watch(() => props.modelValue, parseInitialValue, { immediate: true });

const defaultPlaceholder = computed(() => {
  const m = t.value.datePicker;
  if (props.mode === "range") return m.placeholderRange;
  if (props.mode === "time") return m.placeholderTime;
  if (props.mode === "datetime") return m.placeholderDateTime;
  return m.placeholderDate;
});

const displayValue = computed(() => {
  const sep = t.value.datePicker.rangeSeparator;
  if (!props.modelValue) {
    if (props.mode === "range" && (rangeStart.value || rangeEnd.value)) {
      return `${rangeStart.value}${sep}${rangeEnd.value || "..."}`;
    }
    return "";
  }

  if (props.mode === "range") {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue[0] && props.modelValue[1]
        ? `${props.modelValue[0]}${sep}${props.modelValue[1]}`
        : props.modelValue[0] || "";
    }
    if (typeof props.modelValue === "object") {
      return props.modelValue.start && props.modelValue.end
        ? `${props.modelValue.start}${sep}${props.modelValue.end}`
        : props.modelValue.start || "";
    }
    return String(props.modelValue);
  }

  if (props.mode === "time") {
    return String(props.modelValue);
  }

  return String(props.modelValue);
});

function capitalize(text: string): string {
  return text.charAt(0).toLocaleUpperCase(t.value.locale) + text.slice(1);
}

/** Month, weekday and long-date names come from Intl in the messages' locale. */
const monthFormatter = computed(() => new Intl.DateTimeFormat(t.value.locale, { month: "long" }));
const longDateFormatter = computed(
  () => new Intl.DateTimeFormat(t.value.locale, { day: "numeric", month: "long", year: "numeric" }),
);

const headerTitle = computed(() => {
  const month = monthFormatter.value.format(new Date(currentYear.value, currentMonth.value, 1));
  return `${capitalize(month)} ${currentYear.value}`;
});

/** Sunday-first column headers; 2023-01-01 (local time) is a Sunday. */
const weekdays = computed(() => {
  const short = new Intl.DateTimeFormat(t.value.locale, { weekday: "short" });
  const long = new Intl.DateTimeFormat(t.value.locale, { weekday: "long" });
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(2023, 0, 1 + i);
    return {
      short: capitalize(short.format(date).replace(/\.$/, "")),
      long: capitalize(long.format(date)),
    };
  });
});

const dialogLabel = computed(() => {
  if (props.mode === "range") return t.value.datePicker.chooseRange;
  if (props.mode === "time") return t.value.datePicker.chooseTime;
  return t.value.datePicker.chooseDate;
});

// Hours are stored as 0-23; the 12h format only changes presentation (1-12 + AM/PM).
const hourOptions = computed(() =>
  props.format24h
    ? Array.from({ length: 24 }, (_, i) => i)
    : Array.from({ length: 12 }, (_, i) => i + 1),
);

const displayHour = computed<number>({
  get: () => (props.format24h ? selectedHour.value : selectedHour.value % 12 || 12),
  set: (hour) => {
    if (props.format24h) {
      selectedHour.value = hour;
      return;
    }
    const pm = selectedHour.value >= 12;
    selectedHour.value = (hour % 12) + (pm ? 12 : 0);
  },
});

const meridiem = computed<"AM" | "PM">({
  get: () => (selectedHour.value >= 12 ? "PM" : "AM"),
  set: (value) => {
    const base = selectedHour.value % 12;
    selectedHour.value = value === "PM" ? base + 12 : base;
  },
});

const minuteOptions = computed(() => {
  const step = props.minuteStep || 5;
  const list: number[] = [];
  for (let m = 0; m < 60; m += step) {
    list.push(m);
  }
  return list;
});

function prevMonth() {
  shiftFocusedMonth(-1);
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  shiftFocusedMonth(1);
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
}

/** Header month buttons carry the focused day along, so the grid keeps a sensible tab stop. */
function shiftFocusedMonth(months: number) {
  const date = focusedDate.value ? parseLocalDate(focusedDate.value) : null;
  if (!date) return;
  const next = addMonths(date, months);
  focusedDate.value = formatDateStr(next.getFullYear(), next.getMonth(), next.getDate());
}

interface DayItem {
  day: number;
  month: number;
  year: number;
  isOtherMonth: boolean;
  dateString: string;
}

const daysInMonth = computed<DayItem[]>(() => {
  const year = currentYear.value;
  const month = currentMonth.value;

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days: DayItem[] = [];

  const prevMonthTotalDays = new Date(year, month, 0).getDate();
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const d = prevMonthTotalDays - i;
    const m = month === 0 ? 11 : month - 1;
    const y = month === 0 ? year - 1 : year;
    days.push({
      day: d,
      month: m,
      year: y,
      isOtherMonth: true,
      dateString: formatDateStr(y, m, d),
    });
  }

  for (let d = 1; d <= totalDays; d++) {
    days.push({
      day: d,
      month,
      year,
      isOtherMonth: false,
      dateString: formatDateStr(year, month, d),
    });
  }

  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    const m = month === 11 ? 0 : month + 1;
    const y = month === 11 ? year + 1 : year;
    days.push({
      day: i,
      month: m,
      year: y,
      isOtherMonth: true,
      dateString: formatDateStr(y, m, i),
    });
  }

  return days;
});

const weeks = computed<DayItem[][]>(() =>
  Array.from({ length: 6 }, (_, w) => daysInMonth.value.slice(w * 7, w * 7 + 7)),
);

/** The roving tab stop: the focused day when visible, else the selected day, today or the 1st. */
const tabbableDate = computed(() => {
  const visible = daysInMonth.value.filter((d) => !d.isOtherMonth).map((d) => d.dateString);
  const candidates = [focusedDate.value, selectedDateStr(), todayStr.value];
  return candidates.find((c) => c && visible.includes(c)) ?? visible[0] ?? "";
});

function formatLongDate(dayObj: DayItem): string {
  return longDateFormatter.value.format(new Date(dayObj.year, dayObj.month, dayObj.day));
}

function selectedDateStr(): string {
  if (props.mode === "range") return rangeStart.value;
  return typeof props.modelValue === "string" ? props.modelValue.slice(0, 10) : "";
}

function isDaySelected(dayObj: DayItem): boolean {
  if (props.mode === "range") {
    if (!rangeStart.value) return false;
    const end = rangeEnd.value || rangeStart.value;
    return dayObj.dateString >= rangeStart.value && dayObj.dateString <= end;
  }
  return Boolean(props.modelValue) && String(props.modelValue).startsWith(dayObj.dateString);
}

function formatDateStr(y: number, m: number, d: number): string {
  const mm = String(m + 1).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

function isDateDisabled(dayObj: Pick<DayItem, "dateString">): boolean {
  if (props.minDate && dayObj.dateString < props.minDate) return true;
  if (props.maxDate && dayObj.dateString > props.maxDate) return true;
  return false;
}

function getDayClasses(dayObj: DayItem) {
  const isToday = todayStr.value !== "" && dayObj.dateString === todayStr.value;

  if (props.mode === "range") {
    const isStart = rangeStart.value && dayObj.dateString === rangeStart.value;
    const isEnd = rangeEnd.value && dayObj.dateString === rangeEnd.value;
    const effectiveEnd = rangeEnd.value || hoveredDate.value;
    const inRange =
      rangeStart.value &&
      effectiveEnd &&
      dayObj.dateString > rangeStart.value &&
      dayObj.dateString < effectiveEnd;

    return {
      "ms-date-picker__day--other-month": dayObj.isOtherMonth,
      "ms-date-picker__day--today": isToday,
      "ms-date-picker__day--range-start": isStart,
      "ms-date-picker__day--range-end": isEnd,
      "ms-date-picker__day--in-range": inRange,
    };
  }

  const isSelected = props.modelValue && String(props.modelValue).startsWith(dayObj.dateString);
  return {
    "ms-date-picker__day--other-month": dayObj.isOtherMonth,
    "ms-date-picker__day--today": isToday,
    "ms-date-picker__day--selected": isSelected,
  };
}

function handleDayClick(dayObj: DayItem) {
  if (isDateDisabled(dayObj)) return;

  if (props.mode === "range") {
    if (!rangeStart.value || (rangeStart.value && rangeEnd.value)) {
      rangeStart.value = dayObj.dateString;
      rangeEnd.value = "";
    } else {
      if (dayObj.dateString < rangeStart.value) {
        rangeEnd.value = rangeStart.value;
        rangeStart.value = dayObj.dateString;
      } else {
        rangeEnd.value = dayObj.dateString;
      }
      const rangeResult: [string, string] = [rangeStart.value, rangeEnd.value];
      emit("update:modelValue", rangeResult);
      emit("change", rangeResult);
      close(true);
    }
  } else if (props.mode === "datetime") {
    const timeStr = `${String(selectedHour.value).padStart(2, "0")}:${String(selectedMinute.value).padStart(2, "0")}`;
    const result = `${dayObj.dateString} ${timeStr}`;
    emit("update:modelValue", result);
    emit("change", result);
    close(true);
  } else {
    // single date
    emit("update:modelValue", dayObj.dateString);
    emit("change", dayObj.dateString);
    close(true);
  }
}

function handleDayHover(dayObj: DayItem) {
  if (props.mode === "range" && rangeStart.value && !rangeEnd.value) {
    hoveredDate.value = dayObj.dateString;
  }
}

function onTimeChange() {
  const timeStr = `${String(selectedHour.value).padStart(2, "0")}:${String(selectedMinute.value).padStart(2, "0")}`;
  if (props.mode === "time") {
    emit("update:modelValue", timeStr);
    emit("change", timeStr);
  } else if (props.mode === "datetime" && props.modelValue) {
    const datePart = String(props.modelValue).split(" ")[0];
    const result = `${datePart} ${timeStr}`;
    emit("update:modelValue", result);
    emit("change", result);
  }
}

function selectPreset(type: "today" | "tomorrow") {
  const target = new Date();
  if (type === "tomorrow") target.setDate(target.getDate() + 1);
  const str = formatDateStr(target.getFullYear(), target.getMonth(), target.getDate());
  emit("update:modelValue", str);
  emit("change", str);
  close(true);
}

function selectRangePreset(days: number) {
  const start = new Date();
  const end = new Date();
  end.setDate(end.getDate() + days);

  const startStr = formatDateStr(start.getFullYear(), start.getMonth(), start.getDate());
  const endStr = formatDateStr(end.getFullYear(), end.getMonth(), end.getDate());
  rangeStart.value = startStr;
  rangeEnd.value = endStr;

  const result: [string, string] = [startStr, endStr];
  emit("update:modelValue", result);
  emit("change", result);
  close(true);
}

function handleClear() {
  rangeStart.value = "";
  rangeEnd.value = "";
  emit("update:modelValue", "");
  emit("change", "");
}

function toggleDropdown() {
  if (isOpen.value) close(false);
  else openDropdown();
}

/** Opens the calendar and moves focus to the selected day (or today), per the APG date picker. */
function openDropdown() {
  if (props.disabled || isOpen.value) return;
  isOpen.value = true;
  if (props.mode === "time") return;
  const start = selectedDateStr() || todayStr.value;
  const date = start ? parseLocalDate(start) : null;
  if (date) {
    currentYear.value = date.getFullYear();
    currentMonth.value = date.getMonth();
  }
  focusedDate.value = start;
  focusDay();
}

function close(restoreFocus: boolean) {
  if (!isOpen.value) return;
  isOpen.value = false;
  hoveredDate.value = "";
  if (restoreFocus) void nextTick(() => inputRef.value?.focus());
}

useDismissableLayer({
  active: isOpen,
  inside: [rootRef],
  onDismiss: (reason) => close(reason === "escape"),
});

/** Keyboard focus leaving the whole picker (Tab past the last control) closes it. */
function onFocusout(event: FocusEvent) {
  const next = event.relatedTarget;
  if (isOpen.value && next instanceof Node && !rootRef.value?.contains(next)) close(false);
}

function focusDay() {
  void nextTick(() => {
    gridRef.value?.querySelector<HTMLElement>(`[data-date="${tabbableDate.value}"]`)?.focus();
  });
}

/** Moves the focused day, switching the visible month when the target falls outside it. */
function moveFocus(to: Date) {
  const str = formatDateStr(to.getFullYear(), to.getMonth(), to.getDate());
  currentYear.value = to.getFullYear();
  currentMonth.value = to.getMonth();
  focusedDate.value = str;
  if (props.mode === "range" && rangeStart.value && !rangeEnd.value) hoveredDate.value = str;
  focusDay();
}

function addMonths(date: Date, months: number): Date {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  target.setDate(Math.min(date.getDate(), lastDay));
  return target;
}

function onGridKeydown(event: KeyboardEvent) {
  const target = event.target as HTMLElement;
  const current = target.dataset.date ? parseLocalDate(target.dataset.date) : null;
  if (!current) return;
  const rtl = getComputedStyle(target).direction === "rtl";
  const day = (offset: number) =>
    new Date(current.getFullYear(), current.getMonth(), current.getDate() + offset);

  let next: Date;
  switch (event.key) {
    case "ArrowLeft":
      next = day(rtl ? 1 : -1);
      break;
    case "ArrowRight":
      next = day(rtl ? -1 : 1);
      break;
    case "ArrowUp":
      next = day(-7);
      break;
    case "ArrowDown":
      next = day(7);
      break;
    case "Home":
      next = day(-current.getDay());
      break;
    case "End":
      next = day(6 - current.getDay());
      break;
    case "PageUp":
      next = addMonths(current, event.shiftKey ? -12 : -1);
      break;
    case "PageDown":
      next = addMonths(current, event.shiftKey ? 12 : 1);
      break;
    default:
      return;
  }
  event.preventDefault();
  moveFocus(next);
}
</script>
