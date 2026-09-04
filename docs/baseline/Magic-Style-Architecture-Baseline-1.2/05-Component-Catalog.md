# Magic-Style — Component Catalog

**Projeto:** Magic-Style  
**Architecture Baseline:** 1.2  
**Data da consolidação:** 2026-08-25  
**Status:** Referência Normativa — Catálogo  

## 1. Taxonomia

Prioridade P0–P4; complexidade XS–XXL; maturity experimental/alpha/beta/stable/deprecated.

## 2. Foundations

Provider, ThemeScope, VisuallyHidden, Portal, Presence, FocusScope, DismissableLayer, Separator, AspectRatio, ScrollArea, Surface.

## 3. Application Layout

AppShell, Topbar, Sidebar, NavigationRail, Toolbar/Toolset, Main/Content, Aside, Footer, StatusBar, SplitView, ResizablePanels, Page, PageHeader, PageActions, BottomNavigation.

## 4. Actions

Button, IconButton, ButtonGroup, Toggle, ToggleGroup, SegmentedControl, SplitButton.

## 5. Forms

Field, Label, Input, Textarea, SearchField, PasswordField, NumberInput, OTPInput, Checkbox, RadioGroup, Switch, Slider, Stepper, NativeSelect, Date/Range/Time Picker, uploads.

## 6. Advanced Select

Canônico: `MsSelect`; capabilities substituem fragmentação entre single/multi/searchable/async/creatable/grouped/command-style/virtualized/rich options.

## 7. Navigation/Overlays

Breadcrumbs, Tabs, Pagination, Steps, Menu, Dropdown, ContextMenu, CommandPalette, Dialog, AlertDialog, Drawer, Popover, Tooltip, HoverCard.

## 8. Feedback

Alert, InlineNotice, Spinner, Progress, Skeleton, EmptyState, Toast.

## 9. Notifications subsystem

Provider, Toast, ProgressNotification, NotificationItem/List/Center/Preferences, grouping, actions, persistence adapters.

## 10. Data display

Card, Badge, Tag, Avatar, Stat, MetricCard, KeyValueList, Timeline, ActivityFeed, List, Table. Chip é alias de busca, não componente canônico inicial.

## 11. Major systems

DataTable, DataGrid, Calendar, Charts; enterprise futuro: Tree/TreeGrid/FileManager/Gantt/Scheduler/Editors.

## 12. AI UI

AiMessage, Conversation, PromptComposer, StreamingText, Sources e ToolCall em package opcional.

## 13. Blocks

Admin/Analytics/CRM/ProjectManagement/Settings/Ecommerce/AIWorkspace/FileManager shells, Auth, Pricing, Team Management, Onboarding.

## 14. Templates

Vue, Nuxt e Laravel/Inertia no v1.

## 15. Regra

Qualidade e cobertura > contagem exata.


## Atualizações normativas — Architecture Baseline 1.2

Esta edição incorpora como contratos globais:

- **qualidade visual premium** como requisito de release: moderno, refinado, bonito e coerente entre todos os elementos;
- **responsive by design** para desktop, notebook, tablets, mobile e containers estreitos, com container queries/intrinsic layout quando apropriado;
- **Application Layout System first-class**, incluindo AppShell, Topbar, Sidebar, Navigation Rail, Toolbar/Toolset, Content/Main, Aside, Footer, StatusBar, Split View e Resizable Panels;
- **`MsSelect` como engine avançado unificado**, com single/multiple/searchable/async/creatable/grouped/virtualized/command-style/rich options; `MsNativeSelect` permanece separado;
- **DataTable, Calendar, Charts e Notifications como subsistemas standalone**, isoláveis do core e ainda assim submetidos aos mesmos tokens, themes, accessibility, density, motion e linguagem visual;
- **alta customização sem hacks**, priorizando tokens, themes, props semânticas, slots, subcomponentes, CSS variables, controlled/uncontrolled state e Open Code;
- **adaptação comportamental responsiva**, permitindo, por exemplo, Select→Sheet no mobile, Sidebar→Rail/Drawer, Toolbar→Overflow e DataTable→layout adaptativo;
- **Reference Application / Visual Integration Gate** para validar que componentes e plugins parecem partes do mesmo design system, e não bibliotecas coladas.
