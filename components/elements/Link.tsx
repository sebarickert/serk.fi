import NextLink from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
  href: string;
  children: string | React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export const Link = ({
  href,
  children,
  className = "",
  activeClassName = "",
}: LinkProps) => {
  const pathname = usePathname();
  // const { asPath } = useRouter();
  // const routerSlugBase = asPath.split("/").filter((item) => item)[0];
  // const hrefSlugBase = href.split("/").filter((item) => item)[0];
  // const isPartiallyActive = routerSlugBase === hrefSlugBase;

  const isLinkActive = pathname === href;

  return (
    <NextLink
      href={href}
      className={`inline-block ${className} ${isLinkActive ? activeClassName : ""}`}
    >
      {children}
    </NextLink>
  );
};
