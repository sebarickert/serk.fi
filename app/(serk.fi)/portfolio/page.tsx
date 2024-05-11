import { groq } from "next-sanity";

import { Portfolio } from "@/layouts/portfolio/portfolio";
import { PageDto } from "@/types/PageDto";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { getSanityContent } from "@/utils/getSanityContent";

async function getPageData(): Promise<{
  page: PageDto;
  showcases: ShowcaseDto[];
}> {
  const queryGetPageData = groq`*[_type == "page" && slug.current == $slug][0]`;
  const queryGetArticles = groq`*[_type == 'showcase']`;

  const queries = `{"page": ${queryGetPageData}, "showcases": ${queryGetArticles} }`;

  const { page, showcases } = await getSanityContent(queries, {
    slug: "/portfolio",
  });

  return { page, showcases };
}

export default async function Page() {
  const pageData = await getPageData();

  return <Portfolio {...pageData} />;
}