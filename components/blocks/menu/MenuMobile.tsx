import { Logo } from "../../elements/Logo";
import { Container } from "../Container";

import { MenuLink } from "./MenuLink";

import { NavigationItemDto } from "@/types/NavigationItemDto";

type MenuMobileProps = {
  isMenuOpen: boolean;
  handleMenuToggle(): void;
  items: NavigationItemDto[];
};

export const MenuMobile = ({
  isMenuOpen,
  handleMenuToggle,
  items,
}: MenuMobileProps) => {
  const handleOutsideClick = (event: MouseEvent): void => {
    const { target } = event;

    if ((target as HTMLElement).id === "menuMobileBackdrop") {
      handleMenuToggle();
    }
  };

  if (isMenuOpen) window.addEventListener("click", handleOutsideClick);

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto lg:hidden ${!isMenuOpen ? "invisible" : ""}`}
      aria-hidden={!isMenuOpen}
    >
      <div className="fixed inset-0 bg-gray-500 opacity-75 dark:bg-gray-800"></div>
      <div
        id="menuMobileBackdrop"
        className={`relative flex min-h-screen transform flex-col pb-20 transition duration-150 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          id="menuMobileBase"
          className="rounded-b-lg bg-white shadow-xl dark:bg-neutral-900"
        >
          <div className="mb-6">
            <Container className="border-b border-gray-200 py-8 dark:border-neutral-800">
              <Logo />
            </Container>
          </div>
          <Container>
            <ul className="grid grid-cols-1 pb-8">
              {items.map(({ title, slug }) => (
                <li key={slug}>
                  <MenuLink link={slug}>{title}</MenuLink>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};
