import { sanityClient } from "@/constants/sanityClient";
import { BasicPage } from "@/layouts/BasicPage";
import { pageQuery } from "@/sanity/queries";
import { PageDto } from "@/types/PageDto";

async function getPageData(): Promise<PageDto> {
  return sanityClient.fetch(pageQuery, { slug: "/" });
}

export default async function Page() {
  const data = await getPageData();
  return <BasicPage {...data} />;
}
