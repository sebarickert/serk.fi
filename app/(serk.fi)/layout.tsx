import "@/styles/global.css";

import { Metadata } from "next";
import { ReactNode } from "react";

import { Layout } from "@/layouts/Layout";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "%s | SERK",
    default: "Hi there! | SERK",
  },
  icons: {
    icon: { url: "/favicon.ico" },
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
