import { defineRoutes } from "vitepress";
import { componentRoutes } from "../../../.vitepress/content/component-page.ts";

export default defineRoutes({
  watch: ["../../../demos/**/meta.json", "../../../catalog/*.ts"],
  paths: () => componentRoutes("es-ES"),
});
