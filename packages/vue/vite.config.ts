import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    ...(mode === "test"
      ? []
      : [
          dts({
            tsconfigPath: "./tsconfig.json",
            exclude: ["tests", "scripts", "vite.config.ts"],
            include: ["src/**/*.ts", "src/**/*.vue"],
          }),
        ]),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
    },
    emptyOutDir: true,
    outDir: "dist",
    sourcemap: true,
    target: "es2023",
  },
  test: {
    environment: "happy-dom",
    include: ["tests/**/*.test.ts"],
  },
}));
