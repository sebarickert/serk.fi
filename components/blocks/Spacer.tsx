import clsx from "clsx";

type SpacerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Spacer = ({ children, className }: SpacerProps) => {
  return <div className={clsx("py-12 lg:py-24", className)}>{children}</div>;
};
