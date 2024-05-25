import { createClient } from "next-sanity";

import { dataset } from "./sanityVariables";

const { ENVIRONMENT } = process.env;

export const sanityClient = createClient({
  projectId: "kj6xg0lj",
  dataset,
  apiVersion: "2023-08-30",
  useCdn: ENVIRONMENT ? true : false,
});
