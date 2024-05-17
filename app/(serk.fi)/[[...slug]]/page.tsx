import { sanityClient } from "@/constants/sanityClient";
import { QUERY_TYPE } from "@/constants/types";
import { Article } from "@/layouts/Article";
import { BasicPage } from "@/layouts/BasicPage";
import { allPublishedRoutesQuery } from "@/sanity/queries";
import { getQueryFromSlug } from "@/utils/getQueryFromSlug";

type PageProps = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const { query, queryParams } = getQueryFromSlug(slug);
  const data = await sanityClient.fetch(query, queryParams);

  if (!data?.title) {
    return;
  }

  return {
    title: data.title,
  };
}

export async function generateStaticParams() {
  const pageQueries: string[] = await sanityClient.fetch(
    allPublishedRoutesQuery,
  );

  return pageQueries.map((slug) => ({
    slug: slug === "/" ? [slug] : slug.split("/").filter((p) => p),
  }));
}

async function getPageData(params: PageProps["params"]) {
  const { slug } = params;
  const { query, queryParams, type } = getQueryFromSlug(slug);
  const data = await sanityClient.fetch(query, queryParams);

  return { type, data };
}

export default async function Page({ params }: PageProps) {
  const { type, data } = await getPageData(params);

  switch (type) {
    case QUERY_TYPE.BLOG:
    case QUERY_TYPE.PORTFOLIO:
      return <Article {...data} />;
    default:
      return <BasicPage {...data} />;
  }
}
