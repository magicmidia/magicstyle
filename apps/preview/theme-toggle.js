/* Magic-Style preview: comprehensive theme/dial controls, viewport simulator & LiveReload. */
(() => {
  const root = document.documentElement;
  // Storage can be unavailable (private mode, blocked site data): never let it break the page.
  const store = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        /* preference just won't persist */
      }
    },
  };
  const KEYS = {
    mode: "ms-color-mode",
    contrast: "ms-contrast",
    theme: "ms-theme",
    density: "ms-density",
    radius: "ms-radius",
    viewport: "ms-viewport",
    motion: "ms-motion",
  };

  function applySettings() {
    const mode = store.get(KEYS.mode) || root.getAttribute("data-ms-color-mode") || "dark";
    const contrast = store.get(KEYS.contrast) || "default";
    const theme = store.get(KEYS.theme) || "magic";
    const density = store.get(KEYS.density) || "comfortable";
    const radius = store.get(KEYS.radius) || "medium";
    const viewport = store.get(KEYS.viewport) || "100%";
    const motion = store.get(KEYS.motion) || root.getAttribute("data-ms-motion") || "default";

    root.dataset.msColorMode = mode;
    if (contrast === "high") {
      root.dataset.msContrast = "high";
    } else {
      delete root.dataset.msContrast;
    }
    root.dataset.msTheme = theme;
    root.dataset.msDensity = density;
    root.dataset.msRadius = radius;

    if (motion === "reduced") {
      root.dataset.msMotion = "reduced";
    } else {
      delete root.dataset.msMotion;
    }

    // Update toggles and selects
    document.querySelectorAll("[data-mode-toggle]").forEach((btn) => {
      const label = btn.querySelector("[data-mode-label]");
      if (label !== null) label.textContent = mode === "dark" ? "Light mode" : "Dark mode";
    });

    document.querySelectorAll("[data-theme-select]").forEach((sel) => {
      sel.value = theme;
    });

    document.querySelectorAll("[data-contrast-select]").forEach((sel) => {
      sel.value = contrast;
    });

    document.querySelectorAll("[data-density-select]").forEach((sel) => {
      sel.value = density;
    });

    document.querySelectorAll("[data-radius-select]").forEach((sel) => {
      sel.value = radius;
    });

    document.querySelectorAll("[data-viewport-select]").forEach((sel) => {
      sel.value = viewport;
    });

    document.querySelectorAll("[data-motion-select]").forEach((sel) => {
      sel.value = motion;
    });

    document.querySelectorAll("[data-motion-toggle]").forEach((btn) => {
      const label = btn.querySelector("[data-motion-label]") || btn;
      label.textContent =
        motion === "reduced" ? "Movimento: Reduzido (Off)" : "Movimento: Fluido (On)";
    });

    // Update responsive viewport container if present
    const container = document.querySelector("[data-viewport-container]");
    if (container) {
      container.style.maxWidth = viewport;
      container.style.width = "100%";
      container.style.margin = "0 auto";
      container.style.transition = "max-width 0.25s ease";
    }
  }

  // Initial immediate application before paint
  applySettings();

  window.addEventListener("DOMContentLoaded", () => {
    applySettings();

    // Mode toggle button
    document.querySelectorAll("[data-mode-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = root.dataset.msColorMode === "dark" ? "light" : "dark";
        store.set(KEYS.mode, next);
        applySettings();
      });
    });

    // Theme selector
    document.querySelectorAll("[data-theme-select]").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        store.set(KEYS.theme, e.target.value);
        applySettings();
      });
    });

    // Contrast selector
    document.querySelectorAll("[data-contrast-select]").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        store.set(KEYS.contrast, e.target.value);
        applySettings();
      });
    });

    // Density selector
    document.querySelectorAll("[data-density-select]").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        store.set(KEYS.density, e.target.value);
        applySettings();
      });
    });

    // Radius selector
    document.querySelectorAll("[data-radius-select]").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        store.set(KEYS.radius, e.target.value);
        applySettings();
      });
    });

    // Viewport simulator
    document.querySelectorAll("[data-viewport-select]").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        store.set(KEYS.viewport, e.target.value);
        applySettings();
      });
    });

    // Motion controls (Fluid vs Reduced)
    document.querySelectorAll("[data-motion-select]").forEach((sel) => {
      sel.addEventListener("change", (e) => {
        store.set(KEYS.motion, e.target.value);
        applySettings();
      });
    });

    document.querySelectorAll("[data-motion-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = root.dataset.msMotion === "reduced" ? "reduced" : "default";
        const next = current === "reduced" ? "default" : "reduced";
        store.set(KEYS.motion, next);
        applySettings();
      });
    });

    // Bootstrap indeterminate checkboxes
    document.querySelectorAll("[data-indeterminate]").forEach((el) => {
      el.indeterminate = true;
    });

    // Number steppers
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

  // LiveReload via Server-Sent Events (one connection per page, even if loaded twice)
  if (window.EventSource && !window.__msPreviewLiveReload) {
    window.__msPreviewLiveReload = true;
    try {
      const sse = new EventSource("/events");
      sse.onmessage = (e) => {
        if (e.data === "reload") {
          console.log("[preview] Change detected, reloading page...");
          window.location.reload();
        }
      };
      sse.onerror = () => {
        // SSE disconnected, will retry automatically
      };
    } catch {
      // Ignored if SSE not supported
    }
  }
})();
