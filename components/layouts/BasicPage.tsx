import { PortableText } from "next-sanity";

import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero";
import { components } from "@/blocks/PortableText/components";
import { PageDto } from "types/PageDto";

export const BasicPage = ({ ...data }: PageDto) => {
  const { title, summary, content } = data;

  return (
    <>
      <Hero heading={title} subheading={summary ?? ""} />
      <Container className="grid gap-12 sm:gap-16 lg:gap-24">
        <PortableText value={content} components={components} />
      </Container>
    </>
  );
};
