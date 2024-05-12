import { groq } from "next-sanity";

import { Article } from "@/layouts/Article/Article";
import { getSanityContent } from "@/utils/getSanityContent";
import { ArticleDto } from "types/ArticleDto";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const queryGetPageTitle = groq`*[_type == "article" && slug.current == $slug][0].title`;

  const pageTitle = await getSanityContent(queryGetPageTitle, {
    slug: `/blog/${slug}`,
  });

  return {
    title: pageTitle,
  };
}

async function getPageData(params: PageProps["params"]): Promise<ArticleDto> {
  const { slug } = params;

  const queryGetPostContent = groq`*[_type == "article" && slug.current == $slug][0]`;

  const queries = `{ "page": ${queryGetPostContent} }`;

  const { page } = await getSanityContent(queries, {
    slug: `/blog/${slug}`,
  });

  return { ...page };
}

export default async function Page({ params }: PageProps) {
  const pageData = await getPageData(params);

  return <Article {...pageData} />;
}
