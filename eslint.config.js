import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default tseslint.config(
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/coverage/**", "**/.turbo/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // .vue files were previously not linted at all.
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      // TypeScript already checks undefined identifiers (typescript-eslint guidance).
      "no-undef": "off",
      // Formatting is owned by Prettier.
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
      "vue/html-indent": "off",
      "vue/html-closing-bracket-newline": "off",
      // Security: v-html is only allowed where content is sanitized (reviewed usages).
      "vue/no-v-html": "error",
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        URL: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-imports": "error",
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/tests/**/*.ts"],
    rules: {
      "vue/one-component-per-file": "off",
    },
  },
  {
    files: ["apps/preview/**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        localStorage: "readonly",
        Event: "readonly",
        Node: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        EventSource: "readonly",
        navigator: "readonly",
      },
    },
  },
);
