"use client";

import { useState } from "react";

import { MenuDesktop } from "./MenuDesktop";
import { MenuMobile } from "./MenuMobile";
import { MenuToggle } from "./MenuToggle";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <MenuToggle isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <MenuMobile isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <MenuDesktop />
    </nav>
  );
};
