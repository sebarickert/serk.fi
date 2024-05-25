import { QUERY_TYPE } from "@/constants/types";
import { articleQuery, pageQuery, showcaseQuery } from "@/sanity/queries";

export const getQueryFromSlug = (
  slug: string[],
): {
  query: string;
  queryParams: Record<string, string>;
  type: QUERY_TYPE;
  tags?: string[];
} => {
  let type = QUERY_TYPE.PAGE;

  const queries = {
    [QUERY_TYPE.PAGE]: pageQuery,
    [QUERY_TYPE.BLOG]: articleQuery,
    [QUERY_TYPE.PORTFOLIO]: showcaseQuery,
  };

  if (typeof slug === "undefined") {
    return {
      query: queries[QUERY_TYPE.PAGE],
      queryParams: { slug: "/" },
      type: QUERY_TYPE.PAGE,
      tags: [QUERY_TYPE.PAGE],
    };
  }

  const [slugStart] = slug;
  const queryParams = { slug: `/${slug.join("/")}` };

  if (
    slug.length > 1 &&
    Object.hasOwn(
      queries,
      QUERY_TYPE[slugStart.toUpperCase() as keyof typeof QUERY_TYPE],
    )
  ) {
    type = QUERY_TYPE[slugStart.toUpperCase() as keyof typeof QUERY_TYPE];
  }

  return { query: queries[type], queryParams, type, tags: [type] };
};
