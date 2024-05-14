import { sanityClient } from "@/constants/sanityClient";
import { Blog } from "@/layouts/Blog";
import { articlesQuery, pageQuery } from "@/sanity/queries";
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

  return sanityClient.fetch(queries, {
    slug: "/blog",
  });
}

export default async function Page() {
  const data = await getPageData();

  return <Blog {...data} />;
}
