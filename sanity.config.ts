import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "@/sanity/schemaTypes";

export const config = defineConfig({
  projectId: "kj6xg0lj",
  dataset: "production",
  title: "serk.fi",
  basePath: "/studio",

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
