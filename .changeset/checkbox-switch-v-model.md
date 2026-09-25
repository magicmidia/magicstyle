---
"@magic-style/vue": patch
---

`MsCheckbox` and `MsSwitch` accept the standard `v-model` (`v-model="form.remember"`, as with Inertia's `useForm`), in addition to `v-model:checked`, which keeps working. Both emit `update:modelValue` and `update:checked`; when both are bound, `modelValue` wins.
