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
            // Rewrite relative specifiers to .js so every moduleResolution (bundler,
            // node16, nodenext) maps them to the emitted .d.ts files.
            beforeWriteFile: (filePath, content) => ({
              filePath,
              content: content.replace(
                /(["'])(\.{1,2}\/[^"']+?)(\.(?:ts|vue|js))?\1/g,
                (_match, quote: string, path: string, ext: string | undefined) =>
                  `${quote}${path}${ext === ".vue" ? ".vue" : ""}.js${quote}`,
              ),
            }),
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
