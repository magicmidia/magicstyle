import type { Ref } from "vue";

const ITEM_SELECTOR = '[role="menuitem"]:not([aria-disabled="true"])';

export interface MenuNavigation {
  /** Keydown handler for the role="menu" element. */
  onKeydown: (event: KeyboardEvent) => void;
  focusFirst: () => void;
  focusLast: () => void;
}

/**
 * WAI-ARIA APG menu keyboard model: ArrowUp/ArrowDown (wrapping), Home/End,
 * printable-character typeahead, Enter/Space activate, Tab closes the menu.
 * Items must be role="menuitem" with tabindex="-1"; disabled ones use aria-disabled.
 */
export function useMenuNavigation(
  menu: Ref<HTMLElement | null | undefined>,
  options: { onClose: (reason: "tab") => void },
): MenuNavigation {
  const items = (): HTMLElement[] =>
    menu.value ? Array.from(menu.value.querySelectorAll<HTMLElement>(ITEM_SELECTOR)) : [];

  const focusAt = (index: number): void => {
    const list = items();
    if (list.length === 0) {
      menu.value?.focus();
      return;
    }
    list[(index + list.length) % list.length]!.focus();
  };

  const currentIndex = (): number => items().indexOf(document.activeElement as HTMLElement);

  function onKeydown(event: KeyboardEvent): void {
    const list = items();
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        focusAt(currentIndex() + 1);
        break;
      case "ArrowUp":
        event.preventDefault();
        focusAt(currentIndex() === -1 ? -1 : currentIndex() - 1);
        break;
      case "Home":
        event.preventDefault();
        focusAt(0);
        break;
      case "End":
        event.preventDefault();
        focusAt(-1);
        break;
      case "Enter":
      case " ": {
        const current = document.activeElement;
        if (current instanceof HTMLElement && list.includes(current)) {
          event.preventDefault();
          current.click();
        }
        break;
      }
      case "Tab":
        options.onClose("tab");
        break;
      default:
        if (event.key.length === 1 && /\S/.test(event.key) && !event.ctrlKey && !event.metaKey) {
          const start = currentIndex() + 1;
          const key = event.key.toLowerCase();
          for (let offset = 0; offset < list.length; offset++) {
            const item = list[(start + offset) % list.length]!;
            if (item.textContent?.trim().toLowerCase().startsWith(key)) {
              item.focus();
              break;
            }
          }
        }
    }
  }

  return { onKeydown, focusFirst: () => focusAt(0), focusLast: () => focusAt(-1) };
}
