import { defineCliConfig } from "sanity/cli";

import { dataset } from "./constants/sanityVariables";

export default defineCliConfig({
  api: { projectId: "kj6xg0lj", dataset },
  project: {
    basePath: "/studio",
  },
});
