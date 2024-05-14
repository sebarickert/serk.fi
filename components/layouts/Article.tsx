import { Container } from "@/blocks/Container";
import { Hero } from "@/blocks/Hero/Hero";
import { HeroLead } from "@/blocks/Hero/HeroLead";
import { EnchancedPortableText } from "@/blocks/PortableText/EnchancedPortableText";
import { SanityImage } from "@/blocks/SanityImage";
import { Icon } from "@/elements/Icon/Icon";
import { ArticleDto } from "@/types/ArticleDto";
import { ShowcaseDto } from "@/types/ShowcaseDto";
import { formatDateToFull, formatDateToISODate } from "@/utils/formatDate";

type ArticleProps = ArticleDto | ShowcaseDto;

export const Article = ({
  title,
  summary,
  content,
  published,
  image,
}: ArticleProps) => {
  return (
    <article>
      <Hero title={title}>
        <HeroLead>{summary ?? ""}</HeroLead>
        {published && (
          <time
            dateTime={formatDateToISODate(published)}
            className="mt-8 inline-flex items-center gap-2 text-base font-medium text-gray-500 dark:text-gray-300"
          >
            <span className="sr-only">Published on</span>
            <Icon type="pencil" />
            <span>{formatDateToFull(published)}</span>
          </time>
        )}
      </Hero>
      <Container>
        <section className="prose prose-xl prose-blue mx-auto w-full max-w-screen-md dark:prose-invert">
          {image && (
            <div className="-mx-8 md:-mx-10 lg:-mx-16">
              <SanityImage {...image} />
            </div>
          )}
          <EnchancedPortableText value={content} />
        </section>
      </Container>
    </article>
  );
};
