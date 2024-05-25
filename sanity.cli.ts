import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./constants/sanityVariables";

export default defineCliConfig({
  api: { projectId, dataset },
  project: {
    basePath: "/studio",
  },
});
