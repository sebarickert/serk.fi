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
      <MenuToggle isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <MenuMobile
        items={items}
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
      />
      <MenuDesktop items={items} />
    </nav>
  );
};
