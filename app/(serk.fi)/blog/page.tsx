import { groq } from "next-sanity";

import { Blog } from "@/layouts/blog/blog";
import { ArticleDto } from "@/types/ArticleDto";
import { PageDto } from "@/types/PageDto";
import { getSanityContent } from "@/utils/getSanityContent";

async function getPageData(): Promise<{
  page: PageDto;
  articles: ArticleDto[];
}> {
  const queryGetPageData = groq`*[_type == "page" && slug.current == $slug][0]`;
  const queryGetArticles = groq`*[_type == 'article']`;

  const queries = `{"page": ${queryGetPageData}, "articles": ${queryGetArticles} }`;

  const { page, articles } = await getSanityContent(queries, {
    slug: "/blog",
  });

  return { page, articles };
}

export default async function Page() {
  const pageData = await getPageData();

  return <Blog {...pageData} />;
}
