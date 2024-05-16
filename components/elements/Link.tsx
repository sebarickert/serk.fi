import clsx from "clsx";
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

  const isLinkActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <NextLink
      href={href}
      className={clsx("inline-block", {
        [className]: true,
        [activeClassName]: isLinkActive,
      })}
    >
      {children}
    </NextLink>
  );
};
