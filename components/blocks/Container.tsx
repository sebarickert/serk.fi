type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`mx-auto max-w-screen-xl px-6 md:px-10 ${className}`}>
    {children}
  </div>
);
