"use client";

import { useState } from "react";

import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { MenuToggle } from "./MenuToggle";

import { NavigationItemDto } from "@/types/NavigationItemDto";

type MenuProps = {
  items: NavigationItemDto[];
};

export const Menu = ({ items }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <MenuToggle
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        className="lg:hidden"
      />
      <MenuMobile
        items={items}
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        className="lg:hidden"
      />
      <MenuDesktop items={items} className="hidden lg:flex" />
    </nav>
  );
};
