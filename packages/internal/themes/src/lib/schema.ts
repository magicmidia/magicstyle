import { THEME_CONTRACT } from "./contract.ts";

/** JSON Schema for theme files: editor autocompletion and validation of contract keys. */
export function themeJsonSchema(): Record<string, unknown> {
  const valueProps = Object.fromEntries(
    THEME_CONTRACT.map((entry) => [
      entry.key,
      { type: "string", description: `${entry.description}${entry.required ? "" : " (optional)"}` },
    ]),
  );
  const values = { type: "object", additionalProperties: false, properties: valueProps };
  const extras = {
    type: "object",
    description: "Signature tokens outside the contract (names without --ms-). Keep it small.",
    additionalProperties: { type: "string" },
  };
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    title: "Magic-Style theme",
    type: "object",
    required: ["name", "label", "description"],
    additionalProperties: false,
    properties: {
      $schema: { type: "string" },
      name: {
        type: "string",
        pattern: "^[a-z][a-z0-9-]*$",
        description: "Value of data-ms-theme.",
      },
      label: { type: "string" },
      description: { type: "string" },
      extends: { type: "string", description: 'Theme to inherit from (default "magic").' },
      shared: { ...values, description: "Values for both color modes." },
      light: { ...values, description: "Light mode values." },
      dark: { ...values, description: "Dark mode values." },
      extras: {
        type: "object",
        additionalProperties: false,
        properties: { shared: extras, light: extras, dark: extras },
      },
    },
  };
}
