"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface TextSplitAboutProps {
  title: string;
  description: string[];
  buttons?: ButtonConfig[];
  showBorder?: boolean;
  useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const TextSplitAbout = ({
  title,
  description,
  buttons,
  showBorder = false,
  useInvertedBackground,
  ariaLabel = "About section",
  className = "",
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: TextSplitAboutProps) => {
  const theme = useTheme();

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-30", containerClassName)}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-15">
          <div className="w-full md:w-1/2">
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={title}
              variant="trigger"
              className={cls("text-7xl font-medium", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", titleClassName)}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {description.map((desc, index) => (
              <TextAnimation
                key={index}
                type={theme.defaultTextAnimation}
                text={desc}
                variant="words-trigger"
                className={cls("text-base md:text-2xl leading-[1.3]", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") ? "text-background/75" : "text-foreground/75", descriptionClassName)}
              />
            ))}

            {buttons && buttons.length > 0 && (
              <div className={cls("flex gap-4", buttonContainerClassName)}>
                {buttons.slice(0, 2).map((button, index) => (
                  <Button key={index} {...getButtonProps(button, index, theme.defaultButtonVariant, cls("px-8", buttonClassName), cls("text-base", buttonTextClassName))} />
                ))}
              </div>
            )}
          </div>
        </div>
        {showBorder && <div className="w-full border-b border-foreground/10" />}
      </div>
    </section>
  );
};

TextSplitAbout.displayName = "TextSplitAbout";

export default memo(TextSplitAbout);
