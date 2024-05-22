import clsx from "clsx";

type HeadingType = "h1" | "h2" | "h3" | "p";

type HeadingProps = {
  variant?: HeadingType;
  style?: HeadingType;
  children: string;
  className?: string;
};

export const Heading = ({
  variant = "h2",
  style = variant,
  children,
  className = "",
}: HeadingProps) => {
  const HeadingType = variant;

  return (
    <HeadingType
      className={clsx("theme-text-primary", className, {
        ["font-semibold !leading-snug tracking-tight"]: style !== "p",
        ["text-4xl md:text-5xl lg:text-6xl lg:font-bold xl:text-7xl"]:
          style === "h1",
        ["text-3xl md:text-4xl lg:text-5xl"]: style === "h2",
        ["text-2xl lg:text-3xl"]: style === "h3",
        ["text-2xl font-light !leading-normal md:text-3xl lg:text-4xl xl:text-5xl"]:
          style === "p",
      })}
    >
      {children}
    </HeadingType>
  );
};
