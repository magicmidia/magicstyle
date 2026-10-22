import {
  hasInjectionContext,
  inject,
  readonly,
  ref,
  type App,
  type InjectionKey,
  type Plugin,
  type Ref,
} from "vue";
import type { MsToastOptions, MsToastItem, MsToastTone } from "./types.ts";

export interface MsToastStore {
  toasts: Ref<MsToastItem[]>;
  nextId: () => number;
}

export const TOAST_STORE_KEY: InjectionKey<MsToastStore> = Symbol("ms-toast-store");

export function createToastStore(): MsToastStore {
  let counter = 0;
  return { toasts: ref<MsToastItem[]>([]), nextId: () => ++counter };
}

/**
 * Per-app toast store: `app.use(createMsToast())`. Required for SSR (Inertia/Nuxt),
 * where a module-level store would leak toasts between requests.
 */
export function createMsToast(): Plugin {
  return {
    install(app: App) {
      app.provide(TOAST_STORE_KEY, createToastStore());
    },
  };
}

let browserStore: MsToastStore | undefined;

function resolveStore(): MsToastStore {
  const provided = hasInjectionContext() ? inject(TOAST_STORE_KEY, null) : null;
  if (provided) return provided;
  // Without the plugin: one shared store in the browser, never shared on the server.
  if (typeof window === "undefined") return createToastStore();
  browserStore ??= createToastStore();
  return browserStore;
}

function createToast(options: MsToastOptions, store: MsToastStore): MsToastItem {
  const id = options.id || `ms-toast-${Date.now()}-${store.nextId()}`;
  return {
    ...options,
    id,
    tone: options.tone || "info",
    placement: options.placement || "top-right",
    duration: options.duration !== undefined ? options.duration : 4000,
    dismissible: options.dismissible !== undefined ? options.dismissible : true,
  };
}

export function useToast() {
  const store = resolveStore();
  const toasts = store.toasts;

  const add = (options: MsToastOptions): string => {
    const item = createToast(options, store);
    toasts.value.push(item);
    return item.id;
  };

  const remove = (id: string) => {
    const index = toasts.value.findIndex((t) => t.id === id);
    if (index > -1) {
      toasts.value.splice(index, 1);
    }
  };

  const clear = () => {
    toasts.value = [];
  };

  const notify = (tone: MsToastTone, message: string, options?: Partial<MsToastOptions>) => {
    return add({
      ...options,
      message,
      tone,
    });
  };

  return {
    toasts: readonly(toasts),
    add,
    remove,
    clear,
    info: (message: string, options?: Partial<MsToastOptions>) => notify("info", message, options),
    success: (message: string, options?: Partial<MsToastOptions>) =>
      notify("success", message, options),
    warning: (message: string, options?: Partial<MsToastOptions>) =>
      notify("warning", message, options),
    danger: (message: string, options?: Partial<MsToastOptions>) =>
      notify("danger", message, options),
    primary: (message: string, options?: Partial<MsToastOptions>) =>
      notify("primary", message, options),
    secondary: (message: string, options?: Partial<MsToastOptions>) =>
      notify("secondary", message, options),
    accent: (message: string, options?: Partial<MsToastOptions>) =>
      notify("accent", message, options),
    neutral: (message: string, options?: Partial<MsToastOptions>) =>
      notify("neutral", message, options),
  };
}
