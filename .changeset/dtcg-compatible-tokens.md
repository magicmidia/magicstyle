---
"@magic-style/css": patch
---

Tokens compatíveis com DTCG (baseline doc 06 §1):

- Não há mais tipos fora da especificação. Easing usa `cubicBezier` (array de 4 números); os papéis tipográficos usam o composto `typography` com as chaves oficiais; letter-spacing em `em` é `number` com a unidade em `$extensions`, já que `dimension` só aceita px/rem. `font-feature-settings`, que não tem tipo no DTCG, agora fica no `base.css`. O CSS gerado para easing, letter-spacing e features é idêntico ao anterior.
- Tamanhos de fonte em `rem` (iguais a 16px na raiz padrão), para acompanhar o tamanho de fonte escolhido pelo usuário.
- 33 primitivas OKLCH que estavam fora do gamut sRGB tiveram o croma reduzido até caber, mantendo luminosidade e matiz. A cor agora é a mesma em qualquer tela; antes, o navegador cortava canal a canal em telas sRGB. Os temas não mudam, pois usam o contrato.
- A descrição de `neutral.700` citava um hex que não correspondia ao valor.
- O resolvedor reporta `$type` desconhecido, e novos testes cobrem tipos, gamut e hex das descrições.
