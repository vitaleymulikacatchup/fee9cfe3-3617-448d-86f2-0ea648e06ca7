"use client";
import { memo } from "react";
import Button from "../button/Button";
import Logo from "./Logo";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface NavbarStyleMinimalProps {
  logoSrc?: string;
  logoAlt?: string;
  brandName?: string;
  button: ButtonConfig;
  className?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const NavbarStyleMinimal = memo<NavbarStyleMinimalProps>(
  function NavbarStyleMinimal({
    logoSrc,
    logoAlt = "",
    brandName = "Webild",
    button,
    className = "",
    buttonClassName = "",
    buttonTextClassName = "",
  }) {
    const theme = useTheme();

    return (
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cls(
          "fixed z-[100] top-6 w-full",
          "transition-all duration-500 ease-in-out",
          className
        )}
      >
        <div className={cls(
          "w-content-width mx-auto",
          "flex items-center justify-between"
        )}>
          <Logo logoSrc={logoSrc} logoAlt={logoAlt} brandName={brandName} />

          <Button
            {...getButtonProps(
              button,
              0,
              theme.defaultButtonVariant,
              buttonClassName,
              buttonTextClassName
            )}
          />
        </div>
      </nav>
    );
  }
);

export default NavbarStyleMinimal;
