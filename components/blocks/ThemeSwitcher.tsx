"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

import { Icon } from "@/elements/Icon/Icon";

const useLocalStorage = (
  value: string | undefined,
): [string | undefined, (value: any) => void, boolean] => {
  const [intialized, setIntialized] = useState(false);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem("theme");
      return item || value;
    } catch (error) {
      return value;
    } finally {
      setIntialized(true);
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem("theme", valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, intialized];
};

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTheme, setCurrentTheme, isThemeLoaded] =
    useLocalStorage(undefined);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    }

    if (currentTheme === "light") {
      setCurrentTheme("dark");
    }
  };

  useEffect(() => {
    if (typeof currentTheme !== "undefined" || !isThemeLoaded) {
      return;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setCurrentTheme("light");
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setCurrentTheme("dark");
    }
  }, [currentTheme, isThemeLoaded, setCurrentTheme]);

  const isLightTheme =
    typeof currentTheme === "undefined" || currentTheme === "light";

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [isLightTheme]);

  if (!isMounted) return <span className="ml-8 h-12 w-12" aria-hidden="true" />;

  return (
    <button
      onClick={handleClick}
      className={clsx(
        `theme-bg-color-inverted max-lg:theme-focus-inverted lg:theme-focus inline-flex items-center justify-center gap-2`,
        "max-lg:rounded-3xl max-lg:px-4 max-lg:py-3",
        "lg:h-12 lg:w-12 lg:rounded-full",
        className,
      )}
      title={`Switch to ${!isLightTheme ? "light" : "dark"} theme`}
    >
      {!isLightTheme ? (
        <Icon type="sun" />
      ) : (
        <Icon
          type="moon"
          className={`translate-x-px fill-white stroke-white`}
        />
      )}
      <span className="theme-text-primary-inverted lg:sr-only">{`Switch to ${!isLightTheme ? "light" : "dark"} theme`}</span>
    </button>
  );
};
