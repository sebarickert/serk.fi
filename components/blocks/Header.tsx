import Link from "next/link";

import { Container } from "@/blocks/Container";
import { ThemeSwitcher } from "@/blocks/ThemeSwitcher";
import { MenuContainer } from "@/containers/MenuContainer";
import { Logo } from "@/elements/Logo";

export const Header = () => (
  <header className="serk-background relative z-10">
    <Container className="flex items-center justify-between py-8 lg:py-12">
      <Link href="/" className="serk-focus mr-auto inline-flex rounded">
        <Logo />
      </Link>
      <MenuContainer />
      <ThemeSwitcher />
    </Container>
  </header>
);
