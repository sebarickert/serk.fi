import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "@/sanity/schemaTypes";

export const config = defineConfig({
  projectId: "kj6xg0lj",
  dataset:
    process.env.ENVIRONMENT === "development" ? "development" : "production",
  title: "SERK Studio",
  basePath: "/studio",

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
