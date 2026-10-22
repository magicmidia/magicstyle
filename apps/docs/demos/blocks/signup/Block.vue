<script setup lang="ts">
import { computed, ref, useId } from "vue";
import {
  MsAvatar,
  MsAvatarGroup,
  MsButton,
  MsCheckbox,
  MsField,
  MsInput,
  MsLink,
  MsPasswordInput,
} from "@magic-style/vue";
import strings from "./strings.json";
import { useDemoStrings } from "../../../.vitepress/theme/composables/useDemoStrings.ts";
const t = useDemoStrings(strings);

const titleId = useId();
const name = ref("");
const email = ref("");
const password = ref("");
const terms = ref(false);
const submitted = ref(false);

const termsError = computed(() => (submitted.value && !terms.value ? t.termsError : undefined));

const highlights = computed(() => [t.highlight1, t.highlight2, t.highlight3]);

function createAccount() {
  submitted.value = true;
}
</script>

<template>
  <div class="signup">
    <aside class="signup__panel">
      <div class="signup__brand">
        <span class="signup__logo" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3 3 8l9 5 9-5-9-5Z" />
            <path d="m3 16 9 5 9-5" />
            <path d="m3 12 9 5 9-5" />
          </svg>
        </span>
        <span>{{ t.brand }}</span>
      </div>

      <ul class="signup__highlights">
        <li v-for="item in highlights" :key="item">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {{ item }}
        </li>
      </ul>

      <figure class="signup__quote">
        <blockquote>{{ t.quote }}</blockquote>
        <figcaption>
          <MsAvatar src="/demo/avatar-marina-costa.svg" :name="t.quoteAuthor" size="md" />
          <span>
            <strong>{{ t.quoteAuthor }}</strong>
            <span class="signup__muted">{{ t.quoteRole }}</span>
          </span>
        </figcaption>
      </figure>

      <div class="signup__social-proof">
        <MsAvatarGroup size="sm" bordered>
          <MsAvatar src="/demo/avatar-ana-ribeiro.svg" name="Ana Ribeiro" />
          <MsAvatar src="/demo/avatar-clara-mendes.svg" name="Clara Mendes" />
          <MsAvatar src="/demo/avatar-carolina-vieira.svg" name="Carolina Vieira" />
          <MsAvatar name="Rafael Souza" tone="primary" />
        </MsAvatarGroup>
        <span class="signup__muted">{{ t.socialProof }}</span>
      </div>
    </aside>

    <section class="signup__main" :aria-labelledby="titleId">
      <form class="signup__form" novalidate @submit.prevent="createAccount">
        <header class="signup__header">
          <h3 :id="titleId" class="signup__title">{{ t.title }}</h3>
          <p class="signup__muted">{{ t.subtitle }}</p>
        </header>

        <MsField :label="t.name">
          <MsInput
            v-model="name"
            name="name"
            autocomplete="name"
            :placeholder="t.namePlaceholder"
          />
        </MsField>

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
          <MsPasswordInput
            v-model="password"
            :placeholder="t.passwordPlaceholder"
            show-strength-meter
          />
        </MsField>

        <MsField :error="termsError">
          <MsCheckbox v-model="terms" :label="t.terms" size="sm" />
        </MsField>

        <MsButton type="submit" full-width>{{ t.submit }}</MsButton>

        <p class="signup__footer">
          {{ t.haveAccount }}
          <MsLink href="#" variant="primary" underline="hover">{{ t.signIn }}</MsLink>
        </p>
      </form>
    </section>
  </div>
</template>

<style scoped>
.signup {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-block-size: 640px;
}

.signup__panel {
  display: flex;
  flex-direction: column;
  gap: var(--ms-space-8);
  padding: var(--ms-space-10);
  background: var(--ms-color-surface-sunken);
  border-inline-end: 1px solid var(--ms-color-border-subtle);
}

.signup__brand {
  display: flex;
  align-items: center;
  gap: var(--ms-space-3);
  font-size: var(--ms-typography-size-lg);
  font-weight: var(--ms-typography-weight-semibold);
}

.signup__logo {
  display: grid;
  place-items: center;
  inline-size: 36px;
  block-size: 36px;
  border-radius: var(--ms-radius-md);
  background: var(--ms-color-primary);
  color: var(--ms-color-primary-content);
}

.signup__logo svg {
  inline-size: 18px;
  block-size: 18px;
}

.signup__highlights {
  display: grid;
  gap: var(--ms-space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.signup__highlights li {
  display: flex;
  align-items: flex-start;
  gap: var(--ms-space-3);
}

.signup__highlights svg {
  flex: none;
  inline-size: 18px;
  block-size: 18px;
  margin-block-start: 2px;
  color: var(--ms-color-primary);
}

.signup__quote {
  display: grid;
  gap: var(--ms-space-5);
  margin: auto 0 0;
}

.signup__quote blockquote {
  margin: 0;
  font-size: var(--ms-typography-size-xl);
  line-height: var(--ms-typography-line-height-relaxed);
}

.signup__quote figcaption {
  display: flex;
  align-items: center;
  gap: var(--ms-space-3);
}

.signup__quote figcaption > span {
  display: grid;
}

.signup__social-proof {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ms-space-3);
}

.signup__main {
  display: grid;
  place-items: center;
  padding: var(--ms-space-10) var(--ms-space-8);
}

.signup__form {
  display: grid;
  gap: var(--ms-space-5);
  inline-size: 100%;
  max-inline-size: 24rem;
}

.signup__header {
  display: grid;
  gap: var(--ms-space-2);
}

.signup__title {
  margin: 0;
  font-size: var(--ms-typography-size-2xl);
  font-weight: var(--ms-typography-weight-semibold);
  line-height: var(--ms-typography-line-height-tight);
}

.signup__muted {
  margin: 0;
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

.signup__footer {
  margin: 0;
  text-align: center;
  color: var(--ms-color-text-muted);
  font-size: var(--ms-typography-size-sm);
}

@container (width < 960px) {
  .signup__panel {
    padding: var(--ms-space-8) var(--ms-space-6);
  }

  .signup__quote blockquote {
    font-size: var(--ms-typography-size-lg);
  }
}

@container (width < 640px) {
  .signup {
    grid-template-columns: minmax(0, 1fr);
    min-block-size: 0;
  }

  .signup__main {
    order: -1;
    padding: var(--ms-space-8) var(--ms-space-4);
  }

  .signup__panel {
    gap: var(--ms-space-6);
    padding: var(--ms-space-6) var(--ms-space-4);
    border-inline-end: 0;
    border-block-start: 1px solid var(--ms-color-border-subtle);
  }

  .signup__highlights {
    display: none;
  }
}
</style>
