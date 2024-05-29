import Link from "next/link";

import { Container } from "@/blocks/Container";
import { MenuContainer } from "@/containers/MenuContainer";
import { Logo } from "@/elements/Logo";

export const Header = () => (
  <header className="theme-bg-color relative z-10">
    <Container className="flex items-center justify-between py-6 lg:py-12">
      <div className="inline-flex items-center gap-3">
        <Link href="/" className="theme-focus mr-auto inline-flex rounded">
          <Logo />
        </Link>
        <p className="theme-text-primary inline-flex flex-col gap-0.5 font-medium leading-none">
          <span>Sebastian</span>
          <span>Rickert</span>
        </p>
      </div>
      <MenuContainer />
    </Container>
  </header>
);
