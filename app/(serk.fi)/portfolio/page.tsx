import { Portfolio } from "@/layouts/Portfolio/Portfolio";
import { pageQuery, showcasesQuery } from "@/sanity/queries";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { getSanityContent } from "@/utils/getSanityContent";
import { PageDto } from "types/PageDto";

async function getPageData(): Promise<{
  page: PageDto;
  showcases: ShowcaseDto[];
}> {
  const queries = `{"page": ${pageQuery}, "showcases": ${showcasesQuery} }`;

  const { page, showcases } = await getSanityContent(queries, {
    slug: "/portfolio",
  });

  return { page, showcases };
}

export default async function Page() {
  const data = await getPageData();

  return <Portfolio {...data} />;
}
