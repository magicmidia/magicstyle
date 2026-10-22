---
title: Galeria de temas
description: Os 10 temas oficiais do Magic-Style lado a lado, nos modos claro e escuro, e um gerador de tema com verificação de contraste AA.
aside: false
pageClass: docs-wide
---

# Galeria de temas

Todos os temas compartilham a mesma estrutura visual, no estilo shadcn/ui. Cada um define só o [contrato de variáveis](/pt/tokens): cores, raios, profundidade e fontes. Troque o modo para comparar, ou aplique um tema ao site inteiro.

<ThemeGallery />

## Gerador de temas

Escolha um tema base, a cor primária de cada modo, a matiz dos neutros, o raio e as sombras. A prévia usa os componentes reais, o contraste é verificado com `checkMsThemeContrast`, e o código sai pronto para copiar.

<ThemeBuilder />

## Usar o tema gerado

1. Salve a definição em um arquivo do seu projeto (por exemplo `src/themes/acme.ts`).
2. Gere o CSS com `msThemeToCss` no build ou copie a aba **CSS gerado**, e carregue-o depois de `@magic-style/css`.
3. Ative o tema com `data-ms-theme="acme"` no `<html>` ou com `<MsProvider theme="acme">`.

Os detalhes do contrato, das derivações e dos dials de densidade, raio e contraste estão no guia de [temas](/pt/guide/theming).
