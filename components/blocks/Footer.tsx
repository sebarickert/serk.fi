import { Container } from "@/blocks/Container";
import { Spacer } from "@/blocks/Spacer";
import { socialMediaLinks } from "@/constants/socialMediaLinks";
import { Heading } from "@/elements/Heading";

export const Footer = () => (
  <footer className="theme-layer-color theme-text-primary">
    <Container>
      <Spacer>
        <section>
          <div>
            <Heading style="h3" withBottomMargin>
              Contact
            </Heading>
            <p className="mb-4 max-w-screen-sm text-xl !leading-relaxed tracking-normal">
              If you want to contact me, shoot me a message at contact@serk.fi
              or find me on different social media platforms.
            </p>
            <p className="max-w-screen-sm text-xl !leading-relaxed tracking-normal">
              {`© ${new Date().getFullYear()} SERK. All Rights Reserved.`}
            </p>
          </div>
        </section>
        <hr className="theme-border-secondary mb-5 mt-12 border-t" />
        <section>
          <nav aria-label="Social media links" className="@container">
            <h2 className="sr-only">Follow me on social media</h2>
            <ul className="inline-grid auto-cols-auto grid-flow-col-dense gap-4">
              {socialMediaLinks.map(({ label, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    className="theme-link inline-block py-2 text-lg font-normal"
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
