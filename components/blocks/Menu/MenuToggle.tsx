import clsx from "clsx";

type MenuToggleProps = {
  isMenuOpen: boolean;
  handleMenuToggle(): void;
  className?: string;
};

export const MenuToggle = ({
  isMenuOpen,
  handleMenuToggle,
  className,
}: MenuToggleProps) => {
  const toggleIconClasses = {
    active:
      "absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform",
    hidden:
      "absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform opacity-0 scale-80",
  };

  return (
    <button
      className={clsx(
        "theme-border-primary theme-text-primary theme-focus relative inline-flex h-12 w-12 rounded-full border",
        className,
      )}
      aria-label={isMenuOpen ? "Close site navigation" : "Open site navigation"}
      aria-expanded={!!isMenuOpen}
      type="button"
      onClick={handleMenuToggle}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        className={
          isMenuOpen ? toggleIconClasses["active"] : toggleIconClasses["hidden"]
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        className={
          !isMenuOpen
            ? toggleIconClasses["active"]
            : toggleIconClasses["hidden"]
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 8h16M4 16h16"
        />
      </svg>
    </button>
  );
};
