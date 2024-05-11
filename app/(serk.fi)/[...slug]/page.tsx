import { groq } from "next-sanity";

import { Article } from "@/layouts/article/article";
import { PageDto } from "@/types/PageDto";
import { getSanityContent } from "@/utils/getSanityContent";

type PageProps = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const queryGetPageTitle = groq`*[_type == "page" && slug.current == $slug][0].title`;

  const pageTitle = await getSanityContent(queryGetPageTitle, {
    slug: `/${slug.join("/")}`,
  });

  return {
    title: pageTitle,
  };
}

async function getPageData(params: PageProps["params"]): Promise<PageDto> {
  const { slug } = params;

  const queryGetPostContent = groq`*[_type == "page" && slug.current == $slug][0]`;

  const queries = `{ "page": ${queryGetPostContent} }`;

  const { page } = await getSanityContent(queries, {
    slug: `/${slug.join("/")}`,
  });

  return { ...page };
}

export default async function Page({ params }: PageProps) {
  const pageData = await getPageData(params);

  return <Article {...pageData} />;
}
