type HeroLeadProps = {
  children: string;
};

export const HeroLead = ({ children }: HeroLeadProps) => (
  <p className="text-2xl !leading-relaxed text-gray-700 sm:text-4xl sm:font-light sm:!leading-snug sm:text-gray-800 lg:text-5xl dark:text-gray-300">
    {children}
  </p>
);
