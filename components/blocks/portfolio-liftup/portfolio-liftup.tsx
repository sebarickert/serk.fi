import { PortfolioPostTeaser } from "../../../pages123/portfolio";
import { Heading } from "../../elements/heading/heading";
import { Container } from "../container/container";
import { PortfolioTeaser } from "../portfolio-teaser/portfolio-teaser";
import { Spacer } from "../spacer/spacer";

type PortfolioLiftupProps = {
  posts: PortfolioPostTeaser[];
};

export const PortfolioLiftup = ({ posts }: PortfolioLiftupProps) => {
  return (
    <section>
      <Container>
        <Spacer>
          <Heading className="mb-8 lg:mb-12">Latest showcases</Heading>
          <ul className="grid gap-y-12 md:gap-x-8 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0">
            {posts.map(
              ({
                title,
                lead,
                slug: { current: slugRaw },
                showcase_image: {
                  asset: {
                    url,
                    metadata: {
                      dimensions: { width: imageWidth, height: imageHeight },
                    },
                  },
                },
                stack: stackRaw,
              }) => {
                const stack = stackRaw.map(({ name }) => name);
                const image = { url, width: imageWidth, height: imageHeight };

                return (
                  <li key={slugRaw}>
                    <PortfolioTeaser
                      title={title}
                      lead={lead}
                      slug={`/portfolio/${slugRaw}`}
                      image={image}
                      stack={stack}
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