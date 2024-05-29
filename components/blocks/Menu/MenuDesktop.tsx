import clsx from "clsx";

import { ThemeSwitcher } from "../ThemeSwitcher";

import { MenuLink } from "./MenuLink";

import { NavigationItemDto } from "@/types/NavigationItemDto";

type MenuDesktopProps = {
  items: NavigationItemDto[];
  className?: string;
};

export const MenuDesktop = ({ items, className }: MenuDesktopProps) => {
  return (
    <div className={clsx(`items-center gap-6`, className)}>
      <ul className={`flex gap-2`}>
        {items.map(({ title, slug }) => (
          <li key={slug}>
            <MenuLink link={slug}>{title}</MenuLink>
          </li>
        ))}
      </ul>
      <ThemeSwitcher />
    </div>
  );
};
