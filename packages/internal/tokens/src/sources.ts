import type { TokenTree } from "./lib/dtcg.ts";

import colorJson from "./tokens/primitive.color.json" with { type: "json" };
import spaceJson from "./tokens/primitive.space.json" with { type: "json" };
import shapeJson from "./tokens/primitive.shape.json" with { type: "json" };
import typographyJson from "./tokens/primitive.typography.json" with { type: "json" };
import elevationJson from "./tokens/primitive.elevation.json" with { type: "json" };
import motionJson from "./tokens/primitive.motion.json" with { type: "json" };
import zindexJson from "./tokens/primitive.zindex.json" with { type: "json" };
import layoutJson from "./tokens/primitive.layout.json" with { type: "json" };
import responsiveJson from "./tokens/primitive.responsive.json" with { type: "json" };
import semanticJson from "./tokens/semantic.json" with { type: "json" };

/**
 * Canonical merged source tree. File names map to top-level groups;
 * semantic color roles nest under `color.*` per doc 06 §3 examples.
 */
export const tokenTree: TokenTree = {
  color: {
    ...colorJson,
    surface: semanticJson.surface,
    text: semanticJson.text,
    border: semanticJson["border-color"],
    interactive: semanticJson.interactive,
    feedback: semanticJson.feedback,
  },
  space: spaceJson.space,
  radius: shapeJson.radius,
  border: shapeJson.border,
  typography: typographyJson,
  elevation: elevationJson.elevation,
  motion: motionJson,
  "z-index": zindexJson["z-index"],
  layout: layoutJson,
  breakpoint: responsiveJson["viewport-breakpoint"],
  container: responsiveJson["container-size"],
  "focus-ring": semanticJson["focus-ring"],
  control: semanticJson.control,
  font: semanticJson.font,
  role: semanticJson.role,
} as unknown as TokenTree;
