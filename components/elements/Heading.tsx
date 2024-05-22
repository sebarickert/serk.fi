import clsx from "clsx";

type HeadingType = "h1" | "h2" | "h3" | "p";

type HeadingProps = {
  variant?: HeadingType;
  style?: HeadingType;
  children: string;
  className?: string;
  withBottomMargin?: boolean;
};

export const Heading = ({
  variant = "h2",
  style = variant,
  children,
  className = "",
  withBottomMargin,
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
        ["mb-4 lg:mb-8"]: withBottomMargin && style === "h2",
        ["mb-2 lg:mb-4"]: withBottomMargin && style === "h3",
      })}
    >
      {children}
    </HeadingType>
  );
};
