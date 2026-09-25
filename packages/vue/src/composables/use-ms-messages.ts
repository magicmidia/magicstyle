import {
  computed,
  inject,
  provide,
  toValue,
  type App,
  type ComputedRef,
  type InjectionKey,
  type MaybeRefOrGetter,
} from "vue";
import {
  mergeMsMessages,
  msMessagesForLocale,
  msMessagesPtBR,
  type MsMessages,
  type MsMessagesOverride,
} from "../i18n/messages.ts";

export interface MsI18nOptions {
  /** BCP 47 tag; picks the built-in dictionary ("pt-BR", "en-US"…) and the Intl locale. */
  locale?: string | undefined;
  /** Partial overrides on top of the locale's dictionary. */
  messages?: MsMessagesOverride | undefined;
}

export const MS_MESSAGES_KEY: InjectionKey<ComputedRef<MsMessages>> = Symbol("ms-messages");

const defaultMessages = computed(() => msMessagesPtBR);

function resolve(options: MsI18nOptions, parent?: MsMessages): MsMessages {
  const base = options.locale ? msMessagesForLocale(options.locale) : (parent ?? msMessagesPtBR);
  return mergeMsMessages(base, options.messages);
}

/** Strings for the nearest MsProvider / createMsI18n (Portuguese by default). */
export function useMsMessages(): ComputedRef<MsMessages> {
  return inject(MS_MESSAGES_KEY, defaultMessages);
}

/** Provides messages to descendants, inheriting whatever an ancestor provided. */
export function provideMsMessages(
  options: MaybeRefOrGetter<MsI18nOptions>,
): ComputedRef<MsMessages> {
  const parent = inject(MS_MESSAGES_KEY, null);
  const messages = computed(() => resolve(toValue(options), parent?.value));
  provide(MS_MESSAGES_KEY, messages);
  return messages;
}

/** App-wide plugin: `app.use(createMsI18n({ locale: "en-US" }))`. */
export function createMsI18n(options: MsI18nOptions = {}): { install(app: App): void } {
  return {
    install(app) {
      app.provide(
        MS_MESSAGES_KEY,
        computed(() => resolve(options)),
      );
    },
  };
}
