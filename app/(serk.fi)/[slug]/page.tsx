import { sanityClient } from "@/constants/sanityClient";
import { BasicPage } from "@/layouts/BasicPage";
import { pageQuery, pagesQuery } from "@/sanity/queries";
import { PageDto } from "types/PageDto";

type PageProps = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const { title } = await sanityClient.fetch(pageQuery, {
    slug: `/${slug}`,
  });

  return {
    title,
  };
}

export async function generateStaticParams() {
  const pages: PageDto[] = await sanityClient.fetch(pagesQuery);

  return pages.map(({ slug }) => ({
    slug: slug.current,
  }));
}

async function getPageData(params: PageProps["params"]): Promise<PageDto> {
  const { slug } = params;

  return sanityClient.fetch(pageQuery, {
    slug: `/${slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const data = await getPageData(params);
  return <BasicPage {...data} />;
}
