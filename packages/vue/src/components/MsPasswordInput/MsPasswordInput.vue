<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { type MsPasswordInputProps, type MsPasswordInputEmits, defaultCriteria } from "./types.ts";
import { controlAttrs, rootAttrs, useFieldControl } from "../../composables/use-field-context.ts";
import { useMsMessages } from "../../composables/use-ms-messages.ts";

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<MsPasswordInputProps>(), {
  modelValue: "",
  size: "md",
  disabled: false,
  invalid: false,
  showToggle: true,
  showStrengthMeter: false,
  showCriteria: false,
});

const emit = defineEmits<MsPasswordInputEmits>();

const t = useMsMessages();
const resolvedPlaceholder = computed(() => props.placeholder ?? t.value.passwordInput.placeholder);

const fieldControl = useFieldControl("ms-password-input");
const isInvalid = computed(() => props.invalid === true || fieldControl.fieldInvalid.value);

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const activeCriteria = computed(() => {
  if (props.criteria && props.criteria.length > 0) return props.criteria;
  // Built-in criteria keep their validators; labels come from the messages.
  const labels: Partial<Record<string, string>> = t.value.passwordInput.criteria;
  return defaultCriteria.map((c) => ({
    ...c,
    label: labels[c.id] ?? c.label,
  }));
});

const criteriaStatus = computed(() => {
  const val = props.modelValue || "";
  return activeCriteria.value.map((c) => ({
    ...c,
    met: c.validator(val),
  }));
});

const strengthScore = computed(() => {
  const val = props.modelValue || "";
  if (!val) return 0;
  const metCount = criteriaStatus.value.filter((c) => c.met).length;
  if (metCount <= 1) return 1;
  if (metCount <= 2) return 2;
  if (metCount <= 4) return 3;
  return 4;
});

const strengthLabels = computed(() => t.value.passwordInput.levels);

watch(strengthScore, (score) => {
  emit("strength-change", score);
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div
    v-bind="rootAttrs($attrs)"
    class="ms-password-input"
    :class="`ms-password-input--${props.size}`"
    :data-invalid="isInvalid ? '' : undefined"
  >
    <div class="ms-password-input__wrapper">
      <input
        :id="fieldControl.id"
        :type="isVisible ? 'text' : 'password'"
        :aria-invalid="isInvalid || undefined"
        :aria-describedby="fieldControl.describedBy.value"
        class="ms-password-input__field"
        :value="props.modelValue"
        :placeholder="resolvedPlaceholder"
        :disabled="props.disabled"
        :data-size="props.size"
        v-bind="controlAttrs($attrs)"
        @input="handleInput"
      />

      <button
        v-if="props.showToggle"
        type="button"
        class="ms-password-input__toggle"
        :aria-label="isVisible ? t.passwordInput.hide : t.passwordInput.show"
        :title="isVisible ? t.passwordInput.hide : t.passwordInput.show"
        @click="toggleVisibility"
      >
        <svg
          v-if="!isVisible"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <svg
          v-else
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
          />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      </button>
    </div>

    <!-- Strength Meter -->
    <div v-if="props.showStrengthMeter" class="ms-password-input__strength">
      <div class="ms-password-input__bars">
        <div
          v-for="bar in 4"
          :key="bar"
          class="ms-password-input__bar"
          :class="{
            'ms-password-input__bar--active': strengthScore >= bar,
          }"
          :data-score="strengthScore >= bar ? strengthScore : undefined"
        />
      </div>

      <div class="ms-password-input__strength-label">
        <span>{{ t.passwordInput.strength }}</span>
        <strong>{{ strengthLabels[strengthScore] }}</strong>
      </div>
    </div>

    <!-- Criteria List -->
    <ul v-if="props.showCriteria" class="ms-password-input__criteria">
      <li
        v-for="crit in criteriaStatus"
        :key="crit.id"
        class="ms-password-input__criterion"
        :class="{ 'ms-password-input__criterion--met': crit.met }"
      >
        <svg
          class="ms-password-input__criterion-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline v-if="crit.met" points="20 6 9 17 4 12" />
          <circle v-else cx="12" cy="12" r="8" />
        </svg>
        <span>{{ crit.label }}</span>
      </li>
    </ul>
  </div>
</template>
