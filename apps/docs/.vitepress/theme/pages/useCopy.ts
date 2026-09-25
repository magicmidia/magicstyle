import { ref } from "vue";

/** Clipboard helper with a short-lived "copied" marker for feedback. */
export function useCopy(timeout = 1600) {
  const copied = ref<string | null>(null);
  let timer: ReturnType<typeof setTimeout> | undefined;

  async function copy(text: string, id: string = text): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    copied.value = id;
    clearTimeout(timer);
    timer = setTimeout(() => {
      copied.value = null;
    }, timeout);
  }

  return { copied, copy };
}
