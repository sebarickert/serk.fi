import { Heading } from "../../elements/Heading/Heading";
import { BlogTeaser } from "../BlogTeaser/BlogTeaser";
import { Container } from "../Container/Container";
import { Spacer } from "../Spacer/Spacer";

type BlogLiftupProps = {
  // posts: BlogPost[];
  posts: any[];
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
