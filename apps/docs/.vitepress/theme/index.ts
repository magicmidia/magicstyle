import "./styles/layers.css";
import DefaultTheme from "vitepress/theme-without-fonts";
import type { Theme } from "vitepress";
import "@magic-style/css";
import "./styles/vars.css";
import "./styles/docs.css";
import Layout from "./Layout.vue";
import ApiTable from "./components/ApiTable.vue";
import Demo from "./components/Demo.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Demo", Demo);
    app.component("ApiTable", ApiTable);
  },
} satisfies Theme;
