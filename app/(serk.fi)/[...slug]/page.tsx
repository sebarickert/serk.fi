import { Article } from "@/layouts/Article";
import { pageQuery } from "@/sanity/queries";
import { getSanityContent } from "@/utils/getSanityContent";
import { PageDto } from "types/PageDto";

type PageProps = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const { title } = await getSanityContent(pageQuery, {
    slug: `/${slug.join("/")}`,
  });

  return {
    title,
  };
}

async function getPageData(params: PageProps["params"]): Promise<PageDto> {
  const { slug } = params;

  return getSanityContent(pageQuery, {
    slug: `/${slug.join("/")}`,
  });
}

export default async function Page({ params }: PageProps) {
  const data = await getPageData(params);

  return <Article {...data} />;
}
