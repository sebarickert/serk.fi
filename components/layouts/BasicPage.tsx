import { PortableText } from "next-sanity";

import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { components } from "@/blocks/PortableText/components";
import { PageDto } from "types/PageDto";

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
