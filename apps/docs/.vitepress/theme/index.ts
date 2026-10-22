import "./styles/layers.css";
import DefaultTheme from "vitepress/theme-without-fonts";
import type { Theme } from "vitepress";
import "@magic-style/css";
import "./styles/vars.css";
import "./styles/docs.css";
import "./landing/landing.css";
import "./pages/pages.css";
import Layout from "./Layout.vue";
import ApiTable from "./components/ApiTable.vue";
import ComponentHeader from "./components/ComponentHeader.vue";
import Demo from "./components/Demo.vue";
import LandingLayout from "./landing/LandingLayout.vue";
import ThemeBuilder from "./pages/ThemeBuilder.vue";
import ThemeGallery from "./pages/ThemeGallery.vue";
import TokenExplorer from "./pages/TokenExplorer.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Demo", Demo);
    app.component("ApiTable", ApiTable);
    app.component("ComponentHeader", ComponentHeader);
    app.component("LandingLayout", LandingLayout);
    app.component("ThemeGallery", ThemeGallery);
    app.component("ThemeBuilder", ThemeBuilder);
    app.component("TokenExplorer", TokenExplorer);
  },
} satisfies Theme;
