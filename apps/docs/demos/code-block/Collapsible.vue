<script setup lang="ts">
import { MsCodeBlock } from "@magic-style/vue";

const code = `export interface Invoice {
  id: string;
  customer: string;
  amount: number;
  currency: "BRL" | "USD" | "EUR";
  status: "paid" | "pending" | "overdue";
  issuedAt: Date;
  dueAt: Date;
}

export async function fetchInvoices(page = 1): Promise<Invoice[]> {
  const response = await fetch(\`/api/invoices?page=\${page}\`);
  if (!response.ok) {
    throw new Error(\`Request failed: \${response.status}\`);
  }
  const data: Invoice[] = await response.json();
  return data.map((invoice) => ({
    ...invoice,
    issuedAt: new Date(invoice.issuedAt),
    dueAt: new Date(invoice.dueAt),
  }));
}
`;
</script>

<template>
  <div style="display: grid; gap: 20px; width: 100%; max-width: 640px">
    <MsCodeBlock :code="code" language="ts" filename="invoices.ts" collapsible default-collapsed />
    <MsCodeBlock :code="code" language="ts" filename="invoices.ts" :max-height="220" />
  </div>
</template>
