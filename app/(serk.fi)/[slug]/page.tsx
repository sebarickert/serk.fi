import { Article } from "@/layouts/Article";
import { pageQuery, pagesQuery } from "@/sanity/queries";
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
    slug: `/${slug}`,
  });

  return {
    title,
  };
}

export async function generateStaticParams() {
  const pages: PageDto[] = await getSanityContent(pagesQuery);

  return pages.map(({ slug }) => ({
    slug: slug.current,
  }));
}

async function getPageData(params: PageProps["params"]): Promise<PageDto> {
  const { slug } = params;

  return getSanityContent(pageQuery, {
    slug: `/${slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const data = await getPageData(params);

  return <Article {...data} />;
}
