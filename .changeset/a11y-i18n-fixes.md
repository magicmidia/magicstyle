---
"@magic-style/vue": patch
"@magic-style/css": patch
---

Correções de acessibilidade, i18n e SSR:

- i18n: `MsField` usa `label.optional` (sem "(opcional)" fixo); novas mensagens `rating.star`, `tag.removeLabel`, `chatBubble.*`, `avatar.moreCount`, `codeBlock.label` e `table.label` (pt-BR, en, es).
- `MsRating`: rótulos das estrelas traduzidos, `aria-valuetext` e integração com `MsField` (id, `aria-labelledby`, `aria-describedby`, `aria-invalid`).
- `MsSegmentedControl`: roving tabindex (o item selecionado, ou o primeiro habilitado, é focável), setas/Home/End movem o foco junto com a seleção; a prop `name` agora envia o valor em um `<input type="hidden">`.
- `MsProgressRadial`: `aria-valuenow` usa o valor bruto (coerente com `aria-valuemax`) e ganha `aria-valuetext` em porcentagem.
- `MsCommandPalette`: `icon` dos itens é renderizado (fallback ❖).
- `MsMaskedInput`/`MsPasswordInput`: estado inválido também vem do `error` do `MsField`; `password-input.css` ganha estilos de erro.
- `MsBanner`/`MsToast`: ícones padrão para os tons `secondary` e `accent`.
- `MsIconButton`: nova prop `label`; `ariaLabel` passa a ser opcional (deprecated) para que `aria-label="…"` em templates tipe corretamente. Aviso em dev quando não há nome acessível.
- `MsColorPicker`: `aria-pressed` nas amostras. `MsRadioGroup`: raiz recebe o id do controle do `MsField`.
- `MsTag`: Enter/Espaço só são tratados na própria tag (o botão de remover volta a funcionar pelo teclado) e o botão de remover inclui o texto da tag.
- `MsSnippet`: setas/Home/End movem o foco para a aba. `MsTableHeaderCell`: ordenação por um `<button>` (teclado) com `aria-sort` no `th`.
- `MsChatBubble`: status traduzido com `role="img"`. `MsAvatarGroup`: contador "+N" com `role="img"` e rótulo com a contagem.
- `MsTabs`: `aria-controls` só aponta para painéis registrados (após a montagem, SSR estável).
- `MsCodeBlock`: corpo rolável focável (`role="region"`, rótulo = arquivo ou "Código"); cores de sintaxe usam tokens de texto com contraste AA. `MsTable`: contêiner com rolagem (horizontal, ou vertical com `stickyHeader` e altura fixa) vira região focável rotulada pela legenda.
- `MsSelect`: botões de remover chip e limpar com área de toque de 24px (WCAG 2.5.8).
- `MsAppShellSidebar`/`MsAppShellFooter`: classes renomeadas para `ms-app-shell__sidebar*` / `ms-app-shell__footer` (não colidem mais com `MsSidebar`/`MsFooter`); `MsAppShell` funciona sem `v-model` (não controlado).
- `MsCol`: `span="auto"`/`"flex-1"` passam a ter estilo. `MsNavbar`: `data-tone` só com tom explícito. `MsDockItem` e `MsCard interactive`: ativação por Enter/Espaço. `MsSidebar`: rótulo do botão segue o estado efetivo.
- `MsBreadcrumbs`: separadores dentro do `<li>` (HTML válido); `MsBreadcrumbSeparator` respeita `as`; `MsBreadcrumbItem` ganha o slot `separator`.
- `MsSidebarMenu`: submenus dentro de `<ul>` (sem erro de hidratação), fechados com `inert` em vez de `aria-hidden`; rótulos ficam visualmente ocultos (não `display: none`) no modo recolhido.
- `MsIconPicker`: SVGs personalizados renderizam após a montagem (sem divergência de hidratação). `MsGlimpse`: só elementos de fraseado (`span`), válido dentro de `<p>`.
