type HeroLeadProps = {
  children: string;
};

export const HeroLead = ({ children }: HeroLeadProps) => (
  <p className="text-2xl font-light !leading-normal  text-gray-800 sm:text-4xl lg:text-5xl dark:text-gray-300">
    {children}
  </p>
);
