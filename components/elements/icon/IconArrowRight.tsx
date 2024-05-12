import { IconElementProps } from "./Icon";
import { IconSvgBase } from "./IconSvgBase";

export const IconArrowRight = ({ className = "" }: IconElementProps) => {
  return (
    <IconSvgBase className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </IconSvgBase>
  );
};
