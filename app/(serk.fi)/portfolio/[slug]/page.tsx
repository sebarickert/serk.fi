import { sanityClient } from "@/constants/sanityClient";
import { Article } from "@/layouts/Article";
import { showcaseQuery } from "@/sanity/queries";
import { ArticleDto } from "types/ArticleDto";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const { title } = await sanityClient.fetch(showcaseQuery, {
    slug: `/portfolio/${slug}`,
  });

  return {
    title,
  };
}

async function getPageData(params: PageProps["params"]): Promise<ArticleDto> {
  const { slug } = params;

  return sanityClient.fetch(showcaseQuery, {
    slug: `/portfolio/${slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const data = await getPageData(params);

  return <Article {...data} />;
}
