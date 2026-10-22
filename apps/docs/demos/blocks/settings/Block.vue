<script setup lang="ts">
import { computed, ref, useId } from "vue";
import {
  MsAvatar,
  MsBadge,
  MsButton,
  MsCard,
  MsField,
  MsInput,
  MsPasswordInput,
  MsSelect,
  MsSwitch,
  MsTab,
  MsTabList,
  MsTabPanel,
  MsTabPanels,
  MsTabs,
  MsTextarea,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const titleId = useId();
const tab = ref("profile");

// Profile
const firstName = ref("Marina");
const lastName = ref("Costa");
const email = ref("marina.costa@nuvempay.com");
const username = ref("marinacosta");
const bio = ref("");
const language = ref(t.locale);
const timezone = ref("America/Sao_Paulo");
const languages = computed(() => [
  { value: "pt-BR", label: t.langPt },
  { value: "en-US", label: t.langEn },
  { value: "es-ES", label: t.langEs },
]);
const timezones = computed(() => [
  { value: "America/Sao_Paulo", label: t.tzSaoPaulo },
  { value: "America/New_York", label: t.tzNewYork },
  { value: "Europe/Madrid", label: t.tzMadrid },
  { value: "Europe/Lisbon", label: t.tzLisbon },
]);

// Notifications
const notifications = ref({
  comments: true,
  mentions: true,
  invoices: true,
  product: false,
  marketing: false,
});
const digest = ref("weekly");
const digestOptions = computed(() => [
  { value: "daily", label: t.digestDaily },
  { value: "weekly", label: t.digestWeekly },
  { value: "never", label: t.digestNever },
]);

// Security
const currentPassword = ref("");
const newPassword = ref("");
const twoFactor = ref(true);
const lastActive = computed(() =>
  new Intl.DateTimeFormat(t.locale, {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date("2026-09-21T14:32:00Z")),
);
const sessions = computed(() => [
  { id: "mac", device: t.sessionMac, where: t.sessionMacWhere, current: true },
  { id: "iphone", device: t.sessionPhone, where: t.sessionPhoneWhere, current: false },
]);

const saved = ref(false);
function save() {
  saved.value = true;
  setTimeout(() => (saved.value = false), 2500);
}
</script>

<template>
  <section class="settings" :aria-labelledby="titleId">
    <header class="settings__header">
      <h3 :id="titleId" class="settings__title">{{ t.title }}</h3>
      <p class="settings__muted">{{ t.subtitle }}</p>
    </header>

    <form class="settings__form" @submit.prevent="save">
      <MsTabs v-model="tab" scrollable>
        <MsTabList :aria-label="t.tabsLabel">
          <MsTab value="profile">{{ t.tabProfile }}</MsTab>
          <MsTab value="notifications">{{ t.tabNotifications }}</MsTab>
          <MsTab value="security">{{ t.tabSecurity }}</MsTab>
        </MsTabList>

        <MsTabPanels class="settings__panels">
          <MsTabPanel value="profile">
            <div class="settings__section">
              <div class="settings__intro">
                <h4 class="settings__section-title">{{ t.profileTitle }}</h4>
                <p class="settings__muted">{{ t.profileText }}</p>
              </div>
              <MsCard variant="outline" padding="lg">
                <div class="settings__fields">
                  <div class="settings__photo settings__full">
                    <MsAvatar src="/demo/avatar-marina-costa.svg" name="Marina Costa" size="xl" />
                    <div class="settings__photo-actions">
                      <MsButton variant="outline" tone="neutral" size="sm">
                        {{ t.changePhoto }}
                      </MsButton>
                      <MsButton variant="ghost" tone="danger" size="sm">{{
                        t.removePhoto
                      }}</MsButton>
                    </div>
                  </div>
                  <MsField :label="t.firstName">
                    <MsInput v-model="firstName" autocomplete="given-name" />
                  </MsField>
                  <MsField :label="t.lastName">
                    <MsInput v-model="lastName" autocomplete="family-name" />
                  </MsField>
                  <MsField class="settings__full" :label="t.email" :description="t.emailHint">
                    <MsInput v-model="email" type="email" autocomplete="email" />
                  </MsField>
                  <MsField class="settings__full" :label="t.username">
                    <MsInput v-model="username" autocomplete="username" />
                  </MsField>
                  <MsField class="settings__full" :label="t.bio" optional>
                    <MsTextarea
                      v-model="bio"
                      :rows="3"
                      :max-length="160"
                      show-count
                      :placeholder="t.bioPlaceholder"
                    />
                  </MsField>
                  <MsField :label="t.language">
                    <MsSelect v-model="language" :options="languages" />
                  </MsField>
                  <MsField :label="t.timezone">
                    <MsSelect v-model="timezone" :options="timezones" />
                  </MsField>
                </div>
              </MsCard>
            </div>
          </MsTabPanel>

          <MsTabPanel value="notifications">
            <div class="settings__section">
              <div class="settings__intro">
                <h4 class="settings__section-title">{{ t.notificationsTitle }}</h4>
                <p class="settings__muted">{{ t.notificationsText }}</p>
              </div>
              <MsCard variant="outline" padding="lg">
                <div class="settings__stack">
                  <fieldset class="settings__group">
                    <legend class="settings__legend">{{ t.emailGroup }}</legend>
                    <MsSwitch
                      v-model="notifications.comments"
                      :label="t.notifComments"
                      :description="t.notifCommentsHint"
                    />
                    <MsSwitch
                      v-model="notifications.mentions"
                      :label="t.notifMentions"
                      :description="t.notifMentionsHint"
                    />
                    <MsSwitch
                      v-model="notifications.invoices"
                      :label="t.notifInvoices"
                      :description="t.notifInvoicesHint"
                    />
                  </fieldset>
                  <fieldset class="settings__group">
                    <legend class="settings__legend">{{ t.newsGroup }}</legend>
                    <MsSwitch
                      v-model="notifications.product"
                      :label="t.notifProduct"
                      :description="t.notifProductHint"
                    />
                    <MsSwitch
                      v-model="notifications.marketing"
                      :label="t.notifMarketing"
                      :description="t.notifMarketingHint"
                    />
                  </fieldset>
                  <MsField :label="t.digest" :description="t.digestHint" class="settings__narrow">
                    <MsSelect v-model="digest" :options="digestOptions" />
                  </MsField>
                </div>
              </MsCard>
            </div>
          </MsTabPanel>

          <MsTabPanel value="security">
            <div class="settings__section">
              <div class="settings__intro">
                <h4 class="settings__section-title">{{ t.securityTitle }}</h4>
                <p class="settings__muted">{{ t.securityText }}</p>
              </div>
              <div class="settings__stack">
                <MsCard variant="outline" padding="lg">
                  <div class="settings__fields">
                    <MsField class="settings__full" :label="t.currentPassword">
                      <MsInput
                        v-model="currentPassword"
                        type="password"
                        autocomplete="current-password"
                      />
                    </MsField>
                    <MsField class="settings__full" :label="t.newPassword">
                      <MsPasswordInput v-model="newPassword" show-strength-meter />
                    </MsField>
                  </div>
                </MsCard>
                <MsCard variant="outline" padding="lg">
                  <MsSwitch
                    v-model="twoFactor"
                    tone="success"
                    :label="t.twoFactor"
                    :description="t.twoFactorHint"
                  />
                </MsCard>
                <MsCard variant="outline" padding="lg">
                  <h5 class="settings__legend">{{ t.sessions }}</h5>
                  <ul class="settings__sessions">
                    <li v-for="session in sessions" :key="session.id">
                      <span class="settings__session-text">
                        <strong>{{ session.device }}</strong>
                        <span class="settings__muted">{{ session.where }}</span>
                        <span v-if="!session.current" class="settings__muted">
                          {{ lastActive }}
                        </span>
                      </span>
                      <MsBadge v-if="session.current" tone="success" size="sm">
                        {{ t.thisDevice }}
                      </MsBadge>
                      <MsButton v-else variant="outline" tone="danger" size="sm">
                        {{ t.signOutSession }}
                      </MsButton>
                    </li>
                  </ul>
                </MsCard>
              </div>
            </div>
          </MsTabPanel>
        </MsTabPanels>
      </MsTabs>

      <footer class="settings__footer">
        <p class="settings__muted" role="status">{{ saved ? t.saved : "" }}</p>
        <MsButton variant="outline" tone="neutral">{{ t.cancel }}</MsButton>
        <MsButton type="submit">{{ t.save }}</MsButton>
      </footer>
    </form>
  </section>
</template>

<style scoped>
.settings {
  display: grid;
  gap: var(--ms-space-6);
  padding: var(--ms-space-8);
}

.settings__header {
  display: grid;
  gap: var(--ms-space-1);
}

.settings__title {
  margin: 0;
  font-size: var(--ms-typography-size-2xl);
  font-weight: var(--ms-typography-weight-semibold);
}

.settings__muted {
  margin: 0;
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

.settings__form {
  display: grid;
  gap: var(--ms-space-6);
}

.settings__panels {
  padding-block-start: var(--ms-space-6);
}

.settings__section {
  display: grid;
  grid-template-columns: minmax(0, 18rem) minmax(0, 1fr);
  gap: var(--ms-space-8);
  align-items: start;
}

.settings__intro {
  display: grid;
  gap: var(--ms-space-1);
}

.settings__section-title {
  margin: 0;
  font-size: var(--ms-typography-size-lg);
  font-weight: var(--ms-typography-weight-semibold);
}

.settings__fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--ms-space-5) var(--ms-space-4);
}

.settings__full {
  grid-column: 1 / -1;
}

.settings__photo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ms-space-4);
}

.settings__photo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ms-space-2);
}

.settings__stack {
  display: grid;
  gap: var(--ms-space-6);
}

.settings__group {
  display: grid;
  gap: var(--ms-space-4);
  margin: 0;
  padding: 0;
  border: 0;
}

.settings__legend {
  margin: 0 0 var(--ms-space-3);
  padding: 0;
  font-size: var(--ms-typography-size-sm);
  font-weight: var(--ms-typography-weight-semibold);
}

.settings__narrow {
  max-inline-size: 20rem;
}

.settings__sessions {
  display: grid;
  gap: var(--ms-space-4);
  margin: 0;
  padding: 0;
  list-style: none;
}

.settings__sessions li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-space-3);
}

.settings__session-text {
  display: grid;
}

.settings__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--ms-space-3);
  padding-block-start: var(--ms-space-5);
  border-block-start: 1px solid var(--ms-color-border-subtle);
}

.settings__footer p {
  margin-inline-end: auto;
}

@container (width < 960px) {
  .settings__section {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--ms-space-4);
  }
}

@container (width < 640px) {
  .settings {
    padding: var(--ms-space-5) var(--ms-space-4);
  }

  .settings__fields {
    grid-template-columns: minmax(0, 1fr);
  }

  .settings__narrow {
    max-inline-size: none;
  }

  .settings__footer > :deep(.ms-button) {
    flex: 1;
  }

  .settings__footer p {
    flex-basis: 100%;
  }
}
</style>
