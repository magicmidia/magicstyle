import { ref, readonly } from "vue";
import type { MsToastOptions, MsToastItem, MsToastTone } from "./types.ts";

const toasts = ref<MsToastItem[]>([]);
let counter = 0;

function createToast(options: MsToastOptions): MsToastItem {
  const id = options.id || `ms-toast-${Date.now()}-${++counter}`;
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
  const add = (options: MsToastOptions): string => {
    const item = createToast(options);
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
