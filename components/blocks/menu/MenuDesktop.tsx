import { MenuLink } from "./MenuLink";

import { NavigationItemDto } from "@/types/NavigationItemDto";

type MenuDesktopProps = {
  items: NavigationItemDto[];
};

export const MenuDesktop = ({ items }: MenuDesktopProps) => {
  return (
    <div className={`hidden lg:-mr-4 lg:block`}>
      <ul className={`flex gap-2`}>
        {items.map(({ title, slug }) => (
          <li key={slug}>
            <MenuLink link={slug}>{title}</MenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
