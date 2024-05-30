import { Container } from "@/blocks/Container";
import { Spacer } from "@/blocks/Spacer";
import { socialMediaLinks } from "@/constants/socialMediaLinks";
import { Heading } from "@/elements/Heading";

export const Footer = () => (
  <footer className="theme-layer-color theme-text-primary">
    <Container>
      <Spacer>
        <section>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            <Heading style="h3">Get in touch</Heading>
            <p className="max-w-[500px] text-lg !leading-relaxed tracking-normal lg:text-xl">
              For any questions, collaborations, or just to say hello, you can
              reach me at{" "}
              <a href="mailto:contact@serk.fi" className="theme-link">
                contact@serk.fi
              </a>
              .
            </p>
            <p className="max-w-screen-sm text-lg !leading-relaxed tracking-normal lg:text-xl">
              {`© ${new Date().getFullYear()} SERK. All Rights Reserved.`}
            </p>
          </div>
        </section>
        <hr className="mt-12 mb-6 border-t theme-border-secondary" />
        <section>
          <nav aria-labelledby="srHeading">
            <h2 className="sr-only" id="srHeading">
              Follow me on social media
            </h2>
            <ul className="inline-grid grid-flow-col-dense gap-4 auto-cols-auto">
              {socialMediaLinks.map(({ label, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    className="inline-block py-2 text-lg font-normal theme-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                    <span className="sr-only">(link opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </Spacer>
    </Container>
  </footer>
);
