import { BlogPost } from "../../../pages123/blog";
import { Heading } from "../../elements/heading/heading";
import { BlogTeaser } from "../blog-teaser/blog-teaser";
import { Container } from "../container/container";
import { Spacer } from "../spacer/spacer";

type BlogLiftupProps = {
  posts: BlogPost[];
};

export const BlogLiftup = ({ posts }: BlogLiftupProps) => {
  return (
    <section>
      <Container>
        <Spacer>
          <Heading className="mb-8 lg:mb-12 lg:text-center">
            Latest posts
          </Heading>
          <ul className="grid gap-8 lg:grid-cols-2">
            {posts.map(
              ({ title, lead, publishedAt, slug: { current: slugRaw } }) => {
                return (
                  <li key={slugRaw}>
                    <BlogTeaser
                      title={title}
                      lead={lead}
                      date={publishedAt}
                      slug={`/blog/${slugRaw}`}
                    />
                  </li>
                );
              },
            )}
          </ul>
        </Spacer>
      </Container>
    </section>
  );
};
