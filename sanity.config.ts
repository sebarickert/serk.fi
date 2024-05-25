import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { dataset } from "./constants/sanityVariables";

import { schemaTypes } from "@/sanity/schemaTypes";

export const config = defineConfig({
  projectId: "kj6xg0lj",
  dataset,
  title: "SERK Studio",
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});
