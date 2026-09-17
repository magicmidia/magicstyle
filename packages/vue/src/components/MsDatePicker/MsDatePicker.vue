<template>
  <div class="ms-date-picker">
    <div class="ms-date-picker__input-wrapper">
      <input
        type="text"
        class="ms-date-picker__input"
        :value="displayValue"
        :placeholder="props.placeholder || defaultPlaceholder"
        :disabled="props.disabled"
        readonly
        @click="toggleDropdown"
        @keydown.space.prevent="toggleDropdown"
        @keydown.enter.prevent="toggleDropdown"
        @keydown.esc="isOpen = false"
      />
      <button
        v-if="clearable && displayValue && !disabled"
        type="button"
        class="ms-date-picker__clear-btn"
        aria-label="Limpar data"
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

    <div v-if="isOpen" class="ms-date-picker__dropdown">
      <!-- Calendar View (for date, range, datetime) -->
      <template v-if="mode !== 'time'">
        <div class="ms-date-picker__header">
          <button
            type="button"
            class="ms-date-picker__nav-btn"
            aria-label="Mês anterior"
            @click="prevMonth"
          >
            ‹
          </button>
          <div class="ms-date-picker__title">{{ headerTitle }}</div>
          <button
            type="button"
            class="ms-date-picker__nav-btn"
            aria-label="Próximo mês"
            @click="nextMonth"
          >
            ›
          </button>
        </div>

        <div class="ms-date-picker__weekdays">
          <span v-for="d in ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']" :key="d">
            {{ d }}
          </span>
        </div>

        <div class="ms-date-picker__days">
          <button
            v-for="(dayObj, idx) in daysInMonth"
            :key="idx"
            type="button"
            class="ms-date-picker__day"
            :class="getDayClasses(dayObj)"
            :disabled="isDateDisabled(dayObj)"
            @click="handleDayClick(dayObj)"
            @mouseenter="handleDayHover(dayObj)"
          >
            {{ dayObj.day }}
          </button>
        </div>
      </template>

      <!-- Time Picker Panel (for time or datetime) -->
      <div v-if="mode === 'time' || mode === 'datetime'" class="ms-date-picker__time-panel">
        <div class="ms-date-picker__time-header">Horário</div>
        <div class="ms-date-picker__time-selectors">
          <select v-model="selectedHour" class="ms-date-picker__time-select" @change="onTimeChange">
            <option v-for="h in hourOptions" :key="h" :value="h">
              {{ String(h).padStart(2, "0") }}
            </option>
          </select>
          <span class="ms-date-picker__time-colon">:</span>
          <select
            v-model="selectedMinute"
            class="ms-date-picker__time-select"
            @change="onTimeChange"
          >
            <option v-for="m in minuteOptions" :key="m" :value="m">
              {{ String(m).padStart(2, "0") }}
            </option>
          </select>
        </div>
      </div>

      <!-- Quick Presets -->
      <div v-if="mode === 'date'" class="ms-date-picker__presets">
        <button type="button" class="ms-date-picker__preset-btn" @click="selectPreset('today')">
          Hoje
        </button>
        <button type="button" class="ms-date-picker__preset-btn" @click="selectPreset('tomorrow')">
          Amanhã
        </button>
      </div>

      <div v-else-if="mode === 'range'" class="ms-date-picker__presets">
        <button type="button" class="ms-date-picker__preset-btn" @click="selectRangePreset(7)">
          Próximos 7 dias
        </button>
        <button type="button" class="ms-date-picker__preset-btn" @click="selectRangePreset(30)">
          Próximos 30 dias
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { MsDatePickerProps, MsDatePickerEmits, MsDatePickerModelValue } from "./types.ts";

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

const isOpen = ref(false);

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
      const d = new Date(props.modelValue);
      if (!isNaN(d.getTime())) {
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
  if (props.mode === "range") return "Selecione o período (início até fim)...";
  if (props.mode === "time") return "Selecione o horário (HH:mm)...";
  if (props.mode === "datetime") return "Selecione data e horário...";
  return "Selecione uma data...";
});

const displayValue = computed(() => {
  if (!props.modelValue) {
    if (props.mode === "range" && (rangeStart.value || rangeEnd.value)) {
      return `${rangeStart.value} até ${rangeEnd.value || "..."}`;
    }
    return "";
  }

  if (props.mode === "range") {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue[0] && props.modelValue[1]
        ? `${props.modelValue[0]} até ${props.modelValue[1]}`
        : props.modelValue[0] || "";
    }
    if (typeof props.modelValue === "object") {
      return props.modelValue.start && props.modelValue.end
        ? `${props.modelValue.start} até ${props.modelValue.end}`
        : props.modelValue.start || "";
    }
    return String(props.modelValue);
  }

  if (props.mode === "time") {
    return String(props.modelValue);
  }

  return String(props.modelValue);
});

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const headerTitle = computed(() => {
  return `${monthNames[currentMonth.value]} ${currentYear.value}`;
});

const hourOptions = computed(() => {
  const max = props.format24h ? 24 : 12;
  return Array.from({ length: max }, (_, i) => i);
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
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
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

function formatDateStr(y: number, m: number, d: number): string {
  const mm = String(m + 1).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
}

function isDateDisabled(dayObj: DayItem): boolean {
  if (props.minDate && dayObj.dateString < props.minDate) return true;
  if (props.maxDate && dayObj.dateString > props.maxDate) return true;
  return false;
}

function getDayClasses(dayObj: DayItem) {
  const todayStr = formatDateStr(now.getFullYear(), now.getMonth(), now.getDate());
  const isToday = dayObj.dateString === todayStr;

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
      isOpen.value = false;
    }
  } else if (props.mode === "datetime") {
    const timeStr = `${String(selectedHour.value).padStart(2, "0")}:${String(selectedMinute.value).padStart(2, "0")}`;
    const result = `${dayObj.dateString} ${timeStr}`;
    emit("update:modelValue", result);
    emit("change", result);
    isOpen.value = false;
  } else {
    // single date
    emit("update:modelValue", dayObj.dateString);
    emit("change", dayObj.dateString);
    isOpen.value = false;
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
  isOpen.value = false;
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
  isOpen.value = false;
}

function handleClear() {
  rangeStart.value = "";
  rangeEnd.value = "";
  emit("update:modelValue", "");
  emit("change", "");
}

function toggleDropdown() {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
}
</script>
