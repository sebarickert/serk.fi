import clsx from "clsx";
import { ReactNode } from "react";

import { Footer } from "@/blocks/Footer";
import { Header } from "@/blocks/Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className={clsx("serk-background flex min-h-screen flex-col")}>
    <div className="flex-grow">
      <Header />
      <main className="pb-20 lg:pb-32">{children}</main>
    </div>
    <Footer />
  </div>
);
