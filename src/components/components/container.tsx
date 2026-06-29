type ContainerProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export function Container({
    children,
    className = "",
  }: ContainerProps) {
    return (
      <section
        className={`
          mx-auto
          w-full
          max-w-5xl
          px-6
          md:px-10
          ${className}
        `}
      >
        {children}
      </section>
    );
  }