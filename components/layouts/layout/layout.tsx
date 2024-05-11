import { ReactNode } from "react";

import { Footer } from "@/blocks/footer/footer";
import { Header } from "@/blocks/header/header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen flex-col dark:bg-neutral-900">
    <div className="flex-grow">
      <Header />
      <main className="pb-20 lg:pb-32">{children}</main>
    </div>
    <Footer />
  </div>
);
