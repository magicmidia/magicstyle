/* Magic-Style preview: light/dark mode toggle + indeterminate bootstraps. */
(() => {
  const KEY = "ms-color-mode";
  const root = document.documentElement;

  function apply(mode) {
    root.dataset.msColorMode = mode;
    document.querySelectorAll("[data-mode-toggle]").forEach((btn) => {
      const label = btn.querySelector("[data-mode-label]");
      if (label !== null) label.textContent = mode === "dark" ? "Light mode" : "Dark mode";
    });
  }

  const stored = localStorage.getItem(KEY);
  apply(stored === "dark" ? "dark" : "light");

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-mode-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = root.dataset.msColorMode === "dark" ? "light" : "dark";
        localStorage.setItem(KEY, next);
        apply(next);
      });
    });
    document.querySelectorAll("[data-indeterminate]").forEach((el) => {
      el.indeterminate = true;
    });
    /* Number steppers: [data-stepper] buttons adjust the sibling input. */
    document.querySelectorAll("[data-stepper]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const group = btn.closest(".ms-input-group");
        const input = group?.querySelector('input[type="number"]');
        if (!input) return;
        const step = Number(btn.getAttribute("data-stepper")) || 0;
        const min = input.min === "" ? -Infinity : Number(input.min);
        const max = input.max === "" ? Infinity : Number(input.max);
        const next = Math.min(max, Math.max(min, (Number(input.value) || 0) + step));
        input.value = String(next);
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
  });
})();
