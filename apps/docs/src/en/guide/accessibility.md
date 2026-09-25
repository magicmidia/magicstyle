---
title: Accessibility
description: WCAG 2.2 AA targets, the WAI-ARIA APG patterns implemented, focus, contrast, reduced motion and how the library is tested.
---

# Accessibility

Magic-Style targets **WCAG 2.2 level AA**. The library takes care of what depends on it (semantics, keyboard, focus, token contrast), but final conformance depends on how you build the page: labels, heading order, alt text and the content itself.

## Contrast

- **Text:** every text/background pair in the contract passes AA (4.5:1) across the 10 themes, in light and dark modes. A test fails any theme that drops below it.
- **Focus ring:** `--ms-focus-ring-color` reaches 3:1 against the default, raised and sunken surfaces of every theme (WCAG 1.4.11).
- **Field borders:** `--ms-color-border-field` guarantees 3:1 on the borders of inputs, selects, checkboxes, radios and other form controls (WCAG 1.4.11).
- **High contrast:** `contrast="high"` on `MsProvider` (or `data-ms-contrast="high"`) strengthens secondary text and borders.

If you override theme colors, validate them with `checkMsThemeContrast` (see [Theming](/en/guide/theming)).

## Visible focus

Every component uses the same focus style:

- **Fields:** a border in the ring color plus a 3px halo (`--ms-focus-ring-shadow`).
- **Everything else:** a solid offset outline in `--ms-focus-ring-color`.

In the OS high contrast mode (`forced-colors`), the outline uses the `Highlight` color.

## Keyboard and APG patterns

Interactive components follow the [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/) patterns:

| APG pattern        | Components                                                                                                                              |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Accordion          | [Accordion](/en/components/accordion)                                                                                                   |
| Alert              | [Alert](/en/components/alert)                                                                                                           |
| Alert Dialog       | [Confirm Dialog](/en/components/confirm-dialog)                                                                                         |
| Breadcrumb         | [Breadcrumbs](/en/components/breadcrumbs)                                                                                               |
| Carousel           | [Carousel](/en/components/carousel)                                                                                                     |
| Checkbox           | [Checkbox](/en/components/checkbox)                                                                                                     |
| Combobox           | [Select](/en/components/select), [Command Palette](/en/components/command-palette)                                                      |
| Date Picker Dialog | [Date Picker](/en/components/date-picker)                                                                                               |
| Dialog (Modal)     | [Dialog](/en/components/dialog), [Drawer](/en/components/drawer), [Lightbox](/en/components/lightbox)                                   |
| Disclosure         | [Collapse](/en/components/collapse)                                                                                                     |
| Menu / Menu Button | [Menu](/en/components/menu), [Context Menu](/en/components/context-menu), [Dropdown Button](/en/components/dropdown-button)             |
| Radio Group        | [Radio Group](/en/components/radio-group), [Segmented Control](/en/components/segmented-control), [Choicebox](/en/components/choicebox) |
| Slider             | [Range](/en/components/range), [Rating](/en/components/rating)                                                                          |
| Switch             | [Switch](/en/components/switch)                                                                                                         |
| Tabs               | [Tabs](/en/components/tabs)                                                                                                             |
| Toolbar            | [Dock](/en/components/dock)                                                                                                             |
| Tooltip            | [Tooltip](/en/components/tooltip)                                                                                                       |
| Tree View          | [Tree](/en/components/tree)                                                                                                             |
| Window Splitter    | [Split Pane](/en/components/split-pane)                                                                                                 |

Under the hood, three primitives handle layers and focus:

- **`useFocusTrap`:** initial focus, Tab cycling inside the layer and focus restoration on close.
- **`useDismissableLayer`:** a layer stack for Escape and outside clicks. Only the top layer closes.
- **`useScrollLock`:** reference-counted page scroll locking, for nested overlays.

Menus, trees, tabs and the calendar use roving tabindex: a single tab stop per group, with arrow keys and Home/End inside it (plus typeahead in menus). The three primitives above are exported so you can use them in your own components.

## Forms

- `MsField` wires the label, description and error to the control with `for`, `aria-describedby` and `aria-invalid`. The error message sits in an `aria-live="polite"` region.
- Each control gets a unique id, even with several controls in the same field.
- Attributes such as `required`, `autocomplete` and `aria-*` reach the native element, not the wrapper.

## Reduced motion

Animation durations are multiplied by `--ms-motion-scale`. It becomes `0` when:

- the OS requests `prefers-reduced-motion: reduce`; or
- the page (or part of it) has `data-ms-motion="reduced"`, for an in-app setting.

```html
<html data-ms-motion="reduced"></html>
```

Loading indicators (spinner, radial progress, indeterminate progress) keep animating, because the motion is essential to convey state. The carousel pauses auto-rotation on focus, hover or reduced motion, and has a pause button (WCAG 2.2.2).

## How it's tested

- **axe-core:** `packages/vue/tests/axe.test.ts` audits components in interactive states (open menus, dialogs, forms with errors, tabs, tree…). Rules that need real layout, such as contrast, are covered by the theme contrast tests instead.
- **Contrast:** text pairs, the focus ring and field borders are measured across every theme and mode in the repository health gate (`pnpm validate`).
- **Behavior:** keyboard and ARIA tests per component.

::: warning
Automated tests only catch part of the problems. Test your screens with a keyboard and a screen reader (NVDA, VoiceOver) before shipping.
:::
