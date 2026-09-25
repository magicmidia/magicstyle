---
"@magic-style/vue": patch
---

`MsCheckbox` e `MsSwitch` aceitam o `v-model` padrão (`v-model="form.remember"`, como no `useForm` do Inertia), além do `v-model:checked`, que continua funcionando. Os dois emitem `update:modelValue` e `update:checked`; quando os dois estão ligados, vale o `modelValue`.
