import { Blog } from "@/layouts/Blog";
import { articlesQuery, pageQuery } from "@/sanity/queries";
import { getSanityContent } from "@/utils/getSanityContent";
import { ArticleDto } from "types/ArticleDto";
import { PageDto } from "types/PageDto";

export const metadata = {
  title: "Blog",
};

async function getPageData(): Promise<{
  page: PageDto;
  articles: ArticleDto[];
}> {
  const queries = `{"page": ${pageQuery}, "articles": ${articlesQuery} }`;

  const { page, articles } = await getSanityContent(queries, {
    slug: "/blog",
  });

  return { page, articles };
}

export default async function Page() {
  const data = await getPageData();

  return <Blog {...data} />;
}
