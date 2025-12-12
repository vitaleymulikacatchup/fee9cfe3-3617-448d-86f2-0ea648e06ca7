"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface TextAboutProps {
  title: string;
  buttons?: ButtonConfig[];
  useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const TextAbout = ({
  title,
  buttons,
  useInvertedBackground,
  ariaLabel = "About section",
  className = "",
  containerClassName = "",
  titleClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: TextAboutProps) => {
  const theme = useTheme();

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-6 items-center", containerClassName)}>
        <TextAnimation
          type={theme.defaultTextAnimation}
          text={title}
          variant="words-trigger"
          className={cls("text-2xl md:text-5xl font-medium text-center leading-[1.175]", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", titleClassName)}
        />

        {buttons && buttons.length > 0 && (
          <div className={cls("flex gap-4", buttonContainerClassName)}>
            {buttons.slice(0, 2).map((button, index) => (
              <Button key={index} {...getButtonProps(button, index, theme.defaultButtonVariant, cls("px-8", buttonClassName), cls("text-base", buttonTextClassName))} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

TextAbout.displayName = "TextAbout";

export default memo(TextAbout);
