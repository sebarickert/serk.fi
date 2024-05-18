type HeadingProps = {
  variant?: "h1" | "h2" | "h3";
  style?: "h1" | "h2" | "h3";
  children: string;
  className?: string;
};

export const Heading = ({
  variant = "h2",
  style = "h2",
  children,
  className = "",
}: HeadingProps) => {
  const HeadingType = variant;

  return (
    <HeadingType
      className={`serk-text !font-bold !leading-tight tracking-tighter ${className}
        ${style === "h1" ? "text-5xl sm:text-6xl sm:!font-extrabold lg:text-7xl" : ""}
        ${style === "h2" ? "text-3xl sm:text-4xl lg:text-5xl" : ""}
        ${style === "h3" ? "text-2xl sm:text-3xl lg:text-4xl" : ""}
      `}
    >
      {children}
    </HeadingType>
  );
};
