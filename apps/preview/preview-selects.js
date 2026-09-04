/* Magic-Style preview: custom selects replacing native dropdowns (styled). */
(() => {
  function setupCustomSelects() {
    document.querySelectorAll(".ms-input-select").forEach((wrap) => {
      const select = wrap.querySelector("select");
      if (!select || wrap.dataset.customSelect === "ready") return;
      wrap.dataset.customSelect = "ready";

      select.hidden = true;
      wrap.querySelector(":scope > svg")?.remove();

      const input = wrap.closest(".ms-input")?.querySelector(".ms-input-native");
      const isStart = input
        ? (wrap.compareDocumentPosition(input) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0
        : true;

      const popup = document.createElement("div");
      popup.className = "ms-menu ms-select-popup";
      popup.setAttribute("role", "listbox");
      popup.dataset.align = isStart ? "start" : "end";
      popup.hidden = true;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "ms-select-trigger";
      trigger.setAttribute("aria-haspopup", "listbox");

      const label = document.createElement("span");
      const chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      chevron.setAttribute("width", "12");
      chevron.setAttribute("height", "12");
      chevron.setAttribute("viewBox", "0 0 16 16");
      chevron.setAttribute("fill", "none");
      chevron.setAttribute("stroke", "currentColor");
      chevron.setAttribute("stroke-width", "1.5");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M4 6l4 4 4-4");
      chevron.appendChild(path);
      trigger.append(label, chevron);

      const sync = () => {
        label.textContent = select.options[select.selectedIndex]?.text ?? "";
        popup.querySelectorAll(".ms-menu-item").forEach((item) => {
          item.toggleAttribute("data-checked", item.dataset.value === select.value);
        });
      };

      for (const option of select.options) {
        const item = document.createElement("div");
        item.className = "ms-menu-item";
        item.setAttribute("role", "option");
        item.dataset.value = option.value;
        item.textContent = option.text;
        item.addEventListener("click", () => {
          select.value = option.value;
          sync();
          select.dispatchEvent(new Event("change", { bubbles: true }));
          close();
        });
        popup.appendChild(item);
      }

      const close = () => {
        popup.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
      };
      const open = () => {
        popup.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
      };
      trigger.addEventListener("click", () => (popup.hidden ? open() : close()));
      document.addEventListener("click", (event) => {
        if (!wrap.contains(event.target)) close();
      });
      popup.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
      });

      wrap.append(trigger, popup);
      sync();
    });
  }

  window.addEventListener("DOMContentLoaded", setupCustomSelects);
})();
