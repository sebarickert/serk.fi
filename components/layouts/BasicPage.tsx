import { PortableText, PortableTextReactComponents } from "next-sanity";

import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { EnchancedPortableText } from "@/blocks/PortableText/EnchancedPortableText";
import { ShowcaseListing } from "@/blocks/PortableText/ShowcaseListing";
import { PageDto } from "types/PageDto";

const components: Partial<PortableTextReactComponents> = {
  types: {
    portableText: ({ value: { content } }) => (
      <EnchancedPortableText value={content} />
    ),
    showcaseListing: ({ value }) => <ShowcaseListing {...value} />,
  },
};

export const BasicPage = ({ ...data }: PageDto) => {
  const { title, summary, content } = data;

  return (
    <>
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
      </Hero>
      <Container>
        <PortableText value={content} components={components} />
      </Container>
    </>
  );
};
