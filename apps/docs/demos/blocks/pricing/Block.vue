<script setup lang="ts">
import { computed, ref, useId } from "vue";
import {
  MsAccordion,
  MsAccordionItem,
  MsBadge,
  MsButton,
  MsCard,
  MsSegmentedControl,
  type MsAccordionValue,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const titleId = useId();
const faqId = useId();
const billing = ref<"monthly" | "yearly">("monthly");
const billingOptions = computed(() => [
  { label: t.monthly, value: "monthly" as const },
  { label: t.yearly, value: "yearly" as const },
]);

const price = computed(
  () =>
    new Intl.NumberFormat(t.locale, {
      style: "currency",
      currency: t.currency,
      maximumFractionDigits: 0,
    }),
);

// Yearly plans cost 20% less per month.
const plans = computed(() => [
  {
    id: "starter",
    name: t.starterName,
    description: t.starterDescription,
    monthly: 0,
    yearly: 0,
    cta: t.starterCta,
    features: [t.featProjects3, t.featMembers2, t.featStorage5, t.featCommunity],
  },
  {
    id: "pro",
    name: t.proName,
    description: t.proDescription,
    monthly: 29,
    yearly: 23,
    cta: t.proCta,
    popular: true,
    features: [
      t.featProjectsUnlimited,
      t.featMembers10,
      t.featStorage100,
      t.featAnalytics,
      t.featPriority,
    ],
  },
  {
    id: "business",
    name: t.businessName,
    description: t.businessDescription,
    monthly: 79,
    yearly: 63,
    cta: t.businessCta,
    features: [t.featEverythingPro, t.featMembersUnlimited, t.featSso, t.featAudit, t.featSla],
  },
]);

const faq = ref<MsAccordionValue | MsAccordionValue[]>("trial");
const questions = computed(() => [
  { id: "trial", q: t.faqTrialQ, a: t.faqTrialA },
  { id: "switch", q: t.faqSwitchQ, a: t.faqSwitchA },
  { id: "payment", q: t.faqPaymentQ, a: t.faqPaymentA },
  { id: "cancel", q: t.faqCancelQ, a: t.faqCancelA },
]);
</script>

<template>
  <section class="pricing" :aria-labelledby="titleId">
    <header class="pricing__header">
      <MsBadge tone="primary" pill>{{ t.eyebrow }}</MsBadge>
      <h3 :id="titleId" class="pricing__title">{{ t.title }}</h3>
      <p class="pricing__muted">{{ t.subtitle }}</p>
      <MsSegmentedControl
        v-model="billing"
        :options="billingOptions"
        :aria-label="t.billingLabel"
        shape="pill"
      />
      <p class="pricing__save ms-u-text-success">{{ t.saveNote }}</p>
    </header>

    <ul class="pricing__plans">
      <li v-for="plan in plans" :key="plan.id">
        <MsCard
          class="pricing__plan"
          :class="{ 'pricing__plan--popular': plan.popular }"
          :variant="plan.popular ? 'raised' : 'outline'"
          padding="lg"
        >
          <div class="pricing__plan-body">
            <div class="pricing__plan-head">
              <h4 class="pricing__plan-name">{{ plan.name }}</h4>
              <MsBadge v-if="plan.popular" tone="primary" variant="solid" size="sm" pill>
                {{ t.popular }}
              </MsBadge>
            </div>
            <p class="pricing__muted">{{ plan.description }}</p>
            <p class="pricing__price">
              <span class="pricing__amount">
                {{ price.format(billing === "yearly" ? plan.yearly : plan.monthly) }}
              </span>
              <span class="pricing__muted">{{ t.perMonth }}</span>
            </p>
            <p class="pricing__muted pricing__billed">
              {{ billing === "yearly" && plan.yearly > 0 ? t.billedYearly : t.billedMonthly }}
            </p>
            <MsButton
              full-width
              :variant="plan.popular ? 'solid' : 'outline'"
              :tone="plan.popular ? 'primary' : 'neutral'"
            >
              {{ plan.cta }}
            </MsButton>
            <ul class="pricing__features" :aria-label="t.featuresLabel">
              <li v-for="feature in plan.features" :key="feature">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </MsCard>
      </li>
    </ul>

    <div class="pricing__faq">
      <h4 :id="faqId" class="pricing__faq-title">{{ t.faqTitle }}</h4>
      <MsAccordion v-model="faq" variant="separated" :aria-labelledby="faqId">
        <MsAccordionItem v-for="item in questions" :key="item.id" :value="item.id" :title="item.q">
          <p class="pricing__answer">{{ item.a }}</p>
        </MsAccordionItem>
      </MsAccordion>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  display: grid;
  gap: var(--ms-space-10);
  padding: var(--ms-space-12) var(--ms-space-8);
}

.pricing__header {
  display: grid;
  justify-items: center;
  gap: var(--ms-space-3);
  text-align: center;
}

.pricing__title {
  margin: 0;
  font-size: var(--ms-typography-size-3xl);
  font-weight: var(--ms-typography-weight-bold);
  line-height: var(--ms-typography-line-height-tight);
}

.pricing__muted {
  margin: 0;
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

.pricing__header > .pricing__muted {
  max-inline-size: 36rem;
  margin-block-end: var(--ms-space-3);
  font-size: var(--ms-typography-size-md);
}

.pricing__save {
  margin: 0;
  font-size: var(--ms-typography-size-sm);
}

.pricing__plans {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--ms-space-5);
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pricing__plan {
  block-size: 100%;
}

.pricing__plan--popular {
  outline: 2px solid var(--ms-color-primary);
  outline-offset: -2px;
}

.pricing__plan-body {
  display: grid;
  gap: var(--ms-space-3);
}

.pricing__plan-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-space-2);
}

.pricing__plan-name {
  margin: 0;
  font-size: var(--ms-typography-size-lg);
  font-weight: var(--ms-typography-weight-semibold);
}

.pricing__price {
  display: flex;
  align-items: baseline;
  gap: var(--ms-space-1);
  margin: var(--ms-space-2) 0 0;
}

.pricing__amount {
  font-size: var(--ms-typography-size-4xl);
  font-weight: var(--ms-typography-weight-bold);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.pricing__billed {
  margin-block-end: var(--ms-space-2);
}

.pricing__features {
  display: grid;
  gap: var(--ms-space-2);
  margin: var(--ms-space-3) 0 0;
  padding: var(--ms-space-4) 0 0;
  list-style: none;
  border-block-start: 1px solid var(--ms-color-border-subtle);
  font-size: var(--ms-typography-size-sm);
}

.pricing__features li {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-space-2);
}

.pricing__features svg {
  flex: none;
  inline-size: 16px;
  block-size: 16px;
  margin-block-start: 2px;
  color: var(--ms-color-primary);
}

.pricing__faq {
  display: grid;
  gap: var(--ms-space-4);
  inline-size: 100%;
  max-inline-size: 44rem;
  margin-inline: auto;
}

.pricing__faq-title {
  margin: 0;
  font-size: var(--ms-typography-size-xl);
  font-weight: var(--ms-typography-weight-semibold);
  text-align: center;
}

.pricing__answer {
  margin: 0;
}

@container (width < 960px) {
  .pricing {
    padding: var(--ms-space-10) var(--ms-space-6);
  }

  .pricing__plans {
    grid-template-columns: minmax(0, 1fr);
    max-inline-size: 30rem;
    margin-inline: auto;
    inline-size: 100%;
  }
}

@container (width < 640px) {
  .pricing {
    gap: var(--ms-space-8);
    padding: var(--ms-space-8) var(--ms-space-4);
  }

  .pricing__title {
    font-size: var(--ms-typography-size-2xl);
  }
}
</style>
