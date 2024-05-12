import { Article } from "@/layouts/Article";
import { articleQuery } from "@/sanity/queries";
import { getSanityContent } from "@/utils/getSanityContent";
import { ArticleDto } from "types/ArticleDto";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const { title } = await getSanityContent(articleQuery, {
    slug: `/blog/${slug}`,
  });

  return {
    title,
  };
}

async function getPageData(params: PageProps["params"]): Promise<ArticleDto> {
  const { slug } = params;

  return getSanityContent(articleQuery, {
    slug: `/blog/${slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const data = await getPageData(params);

  return <Article {...data} />;
}
