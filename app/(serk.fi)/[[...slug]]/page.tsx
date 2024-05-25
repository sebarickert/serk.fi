import { sanityClient } from "@/constants/sanityClient";
import { PageTypeSwitcherContainer } from "@/containers/PageTypeSwitcherContainer";
import { allPublishedRoutesQuery } from "@/sanity/queries";
import { getQueryFromSlug } from "@/utils/getQueryFromSlug";

type PageProps = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const { query, queryParams, tags } = getQueryFromSlug(slug);
  const data = await sanityClient.fetch(query, queryParams, {
    cache:
      process.env.ENVIRONMENT === "development" ? "no-store" : "force-cache",
    next: { tags },
  });

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
  const { query, queryParams, type, tags } = getQueryFromSlug(slug);
  const data = await sanityClient.fetch(query, queryParams, {
    cache:
      process.env.ENVIRONMENT === "development" ? "no-store" : "force-cache",
    next: { tags },
  });

  return { type, data };
}

export default async function Page({ params }: PageProps) {
  const data = await getPageData(params);

  return <PageTypeSwitcherContainer {...data} />;
}
