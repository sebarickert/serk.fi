import clsx from "clsx";
import Link from "next/link";

import { ThemeSwitcher } from "../ThemeSwitcher";

import { NavigationItemDto } from "@/types/NavigationItemDto";

type MenuMobileProps = {
  isMenuOpen: boolean;
  handleMenuToggle(): void;
  items: NavigationItemDto[];
  className?: string;
};

export const MenuMobile = ({
  isMenuOpen,
  handleMenuToggle,
  items,
  className,
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
      className={clsx(
        `fixed -bottom-[102px] left-0 right-0 top-[102px] z-10 overflow-y-auto`,
        {
          invisible: !isMenuOpen,
        },
        className,
      )}
      aria-hidden={!isMenuOpen}
    >
      <div
        className={clsx(
          "theme-backdrop fixed -bottom-[102px] left-0 right-0 top-[102px]",
        )}
      ></div>
      <div
        id="menuMobileBackdrop"
        className={`relative flex min-h-screen transform flex-col pb-20 transition duration-150 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={clsx(
            "theme-bg-color grid grid-cols-1 gap-10 rounded-b-lg pb-16 pt-[1px] shadow-xl",
          )}
        >
          <ul className="theme-divide-primary theme-border-primary grid grid-cols-1 divide-y border-b border-t">
            {items.map(({ title, slug }) => (
              <li key={slug}>
                <Link
                  href={slug}
                  className="theme-main-menu-active theme-focus block p-6 text-xl"
                  onClick={handleMenuToggle}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher className="mx-auto max-w-fit" />
        </div>
      </div>
    </div>
  );
};
