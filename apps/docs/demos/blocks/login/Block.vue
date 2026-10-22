<script setup lang="ts">
import { ref, useId } from "vue";
import {
  MsButton,
  MsCard,
  MsCheckbox,
  MsField,
  MsInput,
  MsLink,
  MsPasswordInput,
  MsSeparator,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const titleId = useId();
const email = ref("");
const password = ref("");
const remember = ref(true);
const loading = ref(false);

function signIn() {
  loading.value = true;
  setTimeout(() => (loading.value = false), 1200);
}
</script>

<template>
  <div class="login">
    <MsCard class="login__card" padding="lg">
      <form class="login__form" :aria-labelledby="titleId" @submit.prevent="signIn">
        <header class="login__header">
          <span class="login__logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 3 3 8l9 5 9-5-9-5Z" />
              <path d="m3 16 9 5 9-5" />
              <path d="m3 12 9 5 9-5" />
            </svg>
          </span>
          <h3 :id="titleId" class="login__title">{{ t.title }}</h3>
          <p class="login__subtitle">{{ t.subtitle }}</p>
        </header>

        <MsField :label="t.email">
          <MsInput
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            :placeholder="t.emailPlaceholder"
          />
        </MsField>

        <MsField :label="t.password">
          <MsPasswordInput v-model="password" :placeholder="t.passwordPlaceholder" />
        </MsField>

        <div class="login__row">
          <MsCheckbox v-model="remember" :label="t.remember" size="sm" />
          <MsLink href="#" variant="primary" underline="hover">{{ t.forgot }}</MsLink>
        </div>

        <MsButton type="submit" full-width :loading="loading">{{ t.signIn }}</MsButton>

        <MsSeparator :label="t.orContinue" spacing="none" />

        <div class="login__social">
          <MsButton variant="outline" tone="neutral" full-width>
            <svg class="login__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
              />
            </svg>
            {{ t.github }}
          </MsButton>
          <MsButton variant="outline" tone="neutral" full-width>
            <svg class="login__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M21.35 11.1H12v2.98h5.35c-.23 1.38-1.64 4.04-5.35 4.04-3.22 0-5.85-2.67-5.85-5.96S8.78 6.2 12 6.2c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.65 14.54 2.7 12 2.7 6.87 2.7 2.7 6.87 2.7 12s4.17 9.3 9.3 9.3c5.37 0 8.93-3.77 8.93-9.09 0-.61-.07-1.08-.15-1.54Z"
              />
            </svg>
            {{ t.google }}
          </MsButton>
        </div>

        <p class="login__footer">
          {{ t.noAccount }}
          <MsLink href="#" variant="primary" underline="hover">{{ t.signUp }}</MsLink>
        </p>
      </form>
    </MsCard>
  </div>
</template>

<style scoped>
.login {
  display: grid;
  place-items: center;
  min-block-size: 640px;
  padding: var(--ms-space-12) var(--ms-space-6);
  background: var(--ms-color-surface-sunken);
}

.login__card {
  inline-size: 100%;
  max-inline-size: 26rem;
}

.login__form {
  display: grid;
  gap: var(--ms-space-5);
}

.login__header {
  display: grid;
  justify-items: center;
  gap: var(--ms-space-2);
  text-align: center;
}

.login__logo {
  display: grid;
  place-items: center;
  inline-size: 44px;
  block-size: 44px;
  margin-block-end: var(--ms-space-2);
  border-radius: var(--ms-radius-lg);
  background: var(--ms-color-primary);
  color: var(--ms-color-primary-content);
}

.login__logo svg {
  inline-size: 22px;
  block-size: 22px;
}

.login__title {
  margin: 0;
  font-size: var(--ms-typography-size-2xl);
  font-weight: var(--ms-typography-weight-semibold);
  line-height: var(--ms-typography-line-height-tight);
}

.login__subtitle {
  margin: 0;
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

.login__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--ms-space-2) var(--ms-space-4);
  font-size: var(--ms-typography-size-sm);
}

.login__social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ms-space-3);
}

.login__icon {
  display: inline-block;
  vertical-align: -3px;
  margin-inline-end: var(--ms-space-2);
  inline-size: 16px;
  block-size: 16px;
}

.login__footer {
  margin: 0;
  text-align: center;
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

@container (width < 640px) {
  .login {
    min-block-size: 0;
    padding: var(--ms-space-6) var(--ms-space-4);
  }

  .login__social {
    grid-template-columns: 1fr;
  }
}
</style>
