import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "kj6xg0lj",
  dataset: "production",
  apiVersion: "2023-08-30",
  useCdn: process.env.ENVIRONMENT === "development" ? true : false,
});
