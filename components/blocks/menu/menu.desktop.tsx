import { mainMenuLinks } from "../../../constants/mainMenuLinks";

import { MenuLink } from "./menu.link";

type MenuDesktopBase = {
  children: React.ReactNode;
};

const MenuDesktopBase = ({ children }: MenuDesktopBase) => {
  return <div className={`hidden lg:-mr-4 lg:block`}>{children}</div>;
};

const MenuDesktopLinks = () => {
  return (
    <ul className={`flex gap-2`}>
      {mainMenuLinks.map(({ label, url }) => (
        <li key={url}>
          <MenuLink link={url}>{label}</MenuLink>
        </li>
      ))}
    </ul>
  );
};

export const MenuDesktop = () => {
  return (
    <MenuDesktopBase>
      <MenuDesktopLinks />
    </MenuDesktopBase>
  );
};
