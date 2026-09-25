<script setup lang="ts">
import { computed, ref } from "vue";
import {
  MsAnimatedNumber,
  MsAvatar,
  MsAvatarGroup,
  MsBadge,
  MsButton,
  MsCard,
  MsField,
  MsInput,
  MsProgress,
  MsSwitch,
  MsTab,
  MsTabList,
  MsTabs,
  MsTable,
  MsTableBody,
  MsTableCell,
  MsTableHead,
  MsTableHeaderCell,
  MsTableRow,
} from "@magic-style/vue";
import type { LandingCopy } from "./copy.ts";

const props = defineProps<{ copy: LandingCopy["preview"]; lang: string }>();

const email = ref("");
const password = ref("");
const notify = ref(true);
const tab = ref("overview");

const team = [
  { name: "Ana Ribeiro" },
  { name: "Lucas Martins" },
  { name: "Sofia Almeida" },
  { name: "Diego Torres" },
  { name: "Emma Wilson" },
];

const payments = [
  { email: "ana@acme.com", amount: 1250, status: "paid" },
  { email: "lucas@globex.io", amount: 842.9, status: "pending" },
  { email: "sofia@initech.dev", amount: 310, status: "paid" },
  { email: "diego@umbrella.co", amount: 96.5, status: "failed" },
] as const;

const currency = computed(
  () => new Intl.NumberFormat(props.lang, { style: "currency", currency: "USD" }),
);

const tone = { paid: "success", pending: "warning", failed: "danger" } as const;
const variant = { paid: "soft", pending: "outline", failed: "soft" } as const;
</script>

<template>
  <div class="landing-preview">
    <div class="landing-preview__toolbar">
      <MsTabs v-model="tab" size="sm">
        <MsTabList :aria-label="props.copy.tabs.overview">
          <MsTab value="overview">{{ props.copy.tabs.overview }}</MsTab>
          <MsTab value="analytics">{{ props.copy.tabs.analytics }}</MsTab>
          <MsTab value="reports">{{ props.copy.tabs.reports }}</MsTab>
        </MsTabList>
      </MsTabs>
    </div>

    <div class="landing-preview__grid">
      <MsCard
        class="landing-preview__signup"
        :title="props.copy.signUp"
        :description="props.copy.signUpHint"
      >
        <form class="landing-stack" @submit.prevent>
          <MsField label="E-mail">
            <MsInput v-model="email" type="email" :placeholder="props.copy.email" />
          </MsField>
          <MsField :label="props.copy.password">
            <MsInput v-model="password" type="password" password-toggle />
          </MsField>
          <MsButton type="submit" block>{{ props.copy.create }}</MsButton>
          <MsButton variant="outline" tone="neutral" block>
            <template #icon-start>
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
                />
              </svg>
            </template>
            {{ props.copy.orContinue }}
          </MsButton>
        </form>
      </MsCard>

      <div class="landing-stack">
        <MsCard :description="props.copy.revenue">
          <div class="landing-preview__metric">
            <MsAnimatedNumber :value="45231.89" :format="(v) => currency.format(v)" />
          </div>
          <p class="landing-preview__muted">{{ props.copy.revenueDelta }}</p>
          <MsProgress :model-value="72" size="sm" :label="props.copy.goal" show-value />
        </MsCard>

        <MsCard :title="props.copy.team" :description="props.copy.teamHint">
          <div class="landing-preview__team">
            <MsAvatarGroup :items="team" :max="4" size="md" bordered />
            <MsButton size="sm" variant="outline" tone="neutral">+</MsButton>
          </div>
        </MsCard>

        <MsCard>
          <MsSwitch
            v-model="notify"
            :label="props.copy.notifications"
            :description="props.copy.notificationsHint"
            label-placement="left"
          />
        </MsCard>
      </div>

      <MsCard class="landing-preview__payments" :title="props.copy.payments">
        <MsTable hoverable>
          <MsTableHead>
            <MsTableRow>
              <MsTableHeaderCell>E-mail</MsTableHeaderCell>
              <MsTableHeaderCell>Status</MsTableHeaderCell>
              <MsTableHeaderCell align="right">Total</MsTableHeaderCell>
            </MsTableRow>
          </MsTableHead>
          <MsTableBody>
            <MsTableRow v-for="row in payments" :key="row.email">
              <MsTableCell>
                <span class="landing-preview__user">
                  <MsAvatar :name="row.email" size="xs" />
                  {{ row.email }}
                </span>
              </MsTableCell>
              <MsTableCell>
                <MsBadge :tone="tone[row.status]" :variant="variant[row.status]">
                  {{ props.copy.status[row.status] }}
                </MsBadge>
              </MsTableCell>
              <MsTableCell align="right" class="landing-preview__amount">{{
                currency.format(row.amount)
              }}</MsTableCell>
            </MsTableRow>
          </MsTableBody>
        </MsTable>
      </MsCard>
    </div>
  </div>
</template>
