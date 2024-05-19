import { IconArrowLeft } from "./IconArrowLeft";
import { IconArrowRight } from "./IconArrowRight";
import { IconMoon } from "./IconMoon";
import { IconPencil } from "./IconPencil";
import { IconSun } from "./IconSun";

export type IconName =
  | "arrow-left"
  | "arrow-right"
  | "pencil"
  | "external-link"
  | "moon"
  | "sun";

type IconProps = {
  type: IconName;
  className?: string;
};

export type IconElementProps = {
  className?: string;
};

export const Icon = ({ type, className = "" }: IconProps) => {
  let defaultIconClasses = "h-6 w-6";

  if (className) {
    defaultIconClasses = `${defaultIconClasses} ${className}`;
  }

  switch (type) {
    case "arrow-left":
      return <IconArrowLeft className={defaultIconClasses} />;

    case "arrow-right":
      return <IconArrowRight className={defaultIconClasses} />;

    case "pencil":
      return <IconPencil className={defaultIconClasses} />;

    case "external-link":
      return <IconPencil className={defaultIconClasses} />;

    case "moon":
      return <IconMoon className={defaultIconClasses} />;

    case "sun":
      return <IconSun className={defaultIconClasses} />;

    default:
      break;
  }

  return <div />;
};
