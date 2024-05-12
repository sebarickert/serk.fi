import Link from "next/link";

import { Container } from "@/blocks/Container";
import { ThemeSwitcher } from "@/blocks/ThemeSwitcher";
import { MenuContainer } from "@/containers/MenuContainer";
import { Logo } from "@/elements/Logo";

export const Header = () => (
  <header className="relative z-10 bg-white dark:bg-neutral-900">
    <Container className="flex items-center justify-between py-8 lg:py-12">
      <Link
        href="/"
        className="mr-auto inline-flex rounded ring-offset-2 focus:outline-none focus:ring"
      >
        <Logo />
      </Link>

      <MenuContainer />
      <ThemeSwitcher />
    </Container>
  </header>
);
