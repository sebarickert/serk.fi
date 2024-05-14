import { sanityClient } from "@/constants/sanityClient";
import { Portfolio } from "@/layouts/Portfolio";
import { pageQuery, showcasesQuery } from "@/sanity/queries";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { PageDto } from "types/PageDto";

export const metadata = {
  title: "Portfolio",
};

async function getPageData(): Promise<{
  page: PageDto;
  showcases: ShowcaseDto[];
}> {
  const queries = `{"page": ${pageQuery}, "showcases": ${showcasesQuery} }`;

  return sanityClient.fetch(queries, {
    slug: "/portfolio",
  });
}

export default async function Page() {
  const data = await getPageData();

  return <Portfolio {...data} />;
}
