<script setup lang="ts">
import { ref, computed, watch } from "vue";
import type { MsFormWizardProps, MsFormWizardEmits } from "./types.ts";
import MsButton from "../MsButton/MsButton.vue";

const props = withDefaults(defineProps<MsFormWizardProps>(), {
  modelValue: 0,
  linear: true,
  prevText: "Voltar",
  nextText: "Avançar",
  finishText: "Concluir",
});

const emit = defineEmits<MsFormWizardEmits>();

const activeIndex = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    activeIndex.value = val;
  },
);

const isFirst = computed(() => activeIndex.value === 0);
const isLast = computed(() => activeIndex.value === props.steps.length - 1);

const goToStep = async (index: number) => {
  if (index < 0 || index >= props.steps.length) return;
  if (props.steps[index]?.disabled) return;
  if (props.linear && index > activeIndex.value + 1) return;

  if (props.beforeChange) {
    const allow = await props.beforeChange(activeIndex.value, index);
    if (!allow) return;
  }

  const from = activeIndex.value;
  activeIndex.value = index;
  emit("update:modelValue", index);
  emit("step-change", from, index);
};

const handleNext = async () => {
  if (isLast.value) {
    if (props.beforeChange) {
      const allow = await props.beforeChange(activeIndex.value, activeIndex.value);
      if (!allow) return;
    }
    emit("finish");
    return;
  }
  await goToStep(activeIndex.value + 1);
};

const handlePrev = async () => {
  await goToStep(activeIndex.value - 1);
};
</script>

<template>
  <div class="ms-form-wizard" :data-step="activeIndex">
    <!-- Header / Steps Tracker -->
    <div class="ms-form-wizard__header">
      <nav class="ms-form-wizard__steps" aria-label="Progresso do formulário">
        <template v-for="(step, idx) in props.steps" :key="step.id">
          <div
            class="ms-form-wizard__step"
            :class="{
              'ms-form-wizard__step--active': activeIndex === idx,
              'ms-form-wizard__step--completed': activeIndex > idx,
            }"
            :aria-current="activeIndex === idx ? 'step' : undefined"
          >
            <div class="ms-form-wizard__step-badge">
              <svg
                v-if="activeIndex > idx"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span v-else>{{ idx + 1 }}</span>
            </div>

            <div class="ms-form-wizard__step-info">
              <span class="ms-form-wizard__step-title">{{ step.title }}</span>
              <span v-if="step.description" class="ms-form-wizard__step-desc">
                {{ step.description }}
              </span>
            </div>
          </div>

          <div
            v-if="idx < props.steps.length - 1"
            class="ms-form-wizard__step-divider"
            :class="{ 'ms-form-wizard__step-divider--completed': activeIndex > idx }"
            aria-hidden="true"
          />
        </template>
      </nav>
    </div>

    <!-- Body / Active Step Slot -->
    <div class="ms-form-wizard__body">
      <slot
        :name="props.steps[activeIndex]?.id || 'step'"
        :step="props.steps[activeIndex]"
        :index="activeIndex"
      >
        <slot :step="props.steps[activeIndex]" :index="activeIndex" />
      </slot>
    </div>

    <!-- Footer / Navigation -->
    <div class="ms-form-wizard__footer">
      <slot
        name="footer"
        :prev="handlePrev"
        :next="handleNext"
        :is-first="isFirst"
        :is-last="isLast"
        :current-index="activeIndex"
      >
        <MsButton variant="outline" :disabled="isFirst" @click="handlePrev">
          {{ props.prevText }}
        </MsButton>

        <MsButton variant="solid" tone="primary" @click="handleNext">
          {{ isLast ? props.finishText : props.nextText }}
        </MsButton>
      </slot>
    </div>
  </div>
</template>
