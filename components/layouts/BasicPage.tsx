import { PortableText, PortableTextReactComponents } from "next-sanity";

import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { ArticleListing } from "@/blocks/PortableText/ArticleListing";
import { EnchancedPortableText } from "@/blocks/PortableText/EnchancedPortableText";
import { ShowcaseListing } from "@/blocks/PortableText/ShowcaseListing";
import { PageDto } from "types/PageDto";

const components: Partial<PortableTextReactComponents> = {
  types: {
    portableText: ({ value: { content } }) => (
      <EnchancedPortableText value={content} />
    ),
    showcaseListing: ({ value }) => <ShowcaseListing {...value} />,
    articleListing: ({ value }) => <ArticleListing {...value} />,
  },
};

export const BasicPage = ({ ...data }: PageDto) => {
  const { title, summary, content } = data;

  return (
    <>
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
      </Hero>
      <Container className="grid gap-12 sm:gap-16 lg:gap-24">
        <PortableText value={content} components={components} />
      </Container>
    </>
  );
};
