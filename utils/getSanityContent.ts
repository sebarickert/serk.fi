import { sanityClient } from "@/constants/sanityClient";

export const getSanityContent = async (
  query: string,
  params?: { [key: string]: unknown },
) => {
  if (params) {
    return sanityClient.fetch(query, params);
  }

  return sanityClient.fetch(query);
};
