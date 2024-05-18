import clsx from "clsx";

type HeroLeadProps = {
  children: string;
};

export const HeroLead = ({ children }: HeroLeadProps) => (
  <p
    className={clsx(
      "theme-text-primary text-2xl font-light !leading-normal sm:text-4xl lg:text-5xl",
    )}
  >
    {children}
  </p>
);
