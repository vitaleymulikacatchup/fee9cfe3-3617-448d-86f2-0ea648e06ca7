"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface HeroOverlayBottomSplitProps {
  title: string;
  description: string;
  buttons: ButtonConfig[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  showDimOverlay?: boolean;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  cardClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
  dimOverlayClassName?: string;
}

const HeroOverlayBottomSplit = ({
  title,
  description,
  buttons,
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "Hero video",
  showDimOverlay = false,
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  cardClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  mediaWrapperClassName = "",
  imageClassName = "",
  dimOverlayClassName = "",
}: HeroOverlayBottomSplitProps) => {
  const theme = useTheme();
  const useInvertedText = shouldUseInvertedText("invertCard", theme.cardStyle);

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative w-full h-svh overflow-hidden", className)}
    >
      <div className={cls("absolute inset-0 w-full h-full", mediaWrapperClassName)}>
        {showDimOverlay && (
          <div className={cls("absolute inset-0 z-[1] bg-background/20", dimOverlayClassName)} />
        )}
        <MediaContent
          imageSrc={imageSrc}
          videoSrc={videoSrc}
          imageAlt={imageAlt}
          videoAriaLabel={videoAriaLabel}
          imageClassName={cls("w-full h-full object-cover !rounded-none", imageClassName)}
        />
      </div>

      <div className={cls(
        "relative z-10 w-content-width mx-auto h-full flex flex-col justify-end pt-hero-page-padding pb-20",
        containerClassName
      )}>
        <div className="relative w-full flex flex-col md:flex-row gap-6 md:gap-10 items-end justify-between">
          <div className="relative w-full md:w-1/2">
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={title}
              variant="words-trigger"
              className={cls("text-6xl md:text-8xl font-medium text-background text-balance text-start leading-[1]", titleClassName)}
            />
          </div>

          <div className={cls("card rounded-theme-capped p-6 md:p-8 w-full md:w-1/3", cardClassName)}>
            <div className="flex flex-col gap-6">
              <TextAnimation
                type={theme.defaultTextAnimation}
                text={description}
                variant="words-trigger"
                className={cls(
                  "text-base md:text-lg text-balance text-start leading-tight",
                  useInvertedText ? "text-background/75" : "text-foreground/75",
                  descriptionClassName
                )}
              />
              <div className={cls("flex gap-4", buttonContainerClassName)}>
                {buttons.slice(0, 2).map((button, index) => (
                  <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroOverlayBottomSplit.displayName = "HeroOverlayBottomSplit";

export default memo(HeroOverlayBottomSplit);
