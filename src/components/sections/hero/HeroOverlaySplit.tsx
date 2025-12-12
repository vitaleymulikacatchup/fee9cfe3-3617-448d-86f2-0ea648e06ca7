"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface HeroOverlaySplitProps {
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
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
  dimOverlayClassName?: string;
}

const HeroOverlaySplit = ({
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
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  mediaWrapperClassName = "",
  imageClassName = "",
  dimOverlayClassName = "",
}: HeroOverlaySplitProps) => {
  const theme = useTheme();

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative w-full h-svh overflow-hidden", className)}
    >
      <div className={cls("absolute inset-0 w-full h-full", mediaWrapperClassName)}>
        {showDimOverlay && (
          <div className={cls("absolute top-0 left-0 w-full h-full bg-background/20", dimOverlayClassName)} />
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
        "relative z-10 w-content-width mx-auto h-full flex flex-col justify-between pt-hero-page-padding pb-10",
        containerClassName
      )}>
        <div className="relative w-full md:w-2/3">
          <TextAnimation
            type={theme.defaultTextAnimation}
            text={title}
            variant="words-trigger"
            className={cls("text-8xl md:text-9xl font-medium text-background text-balance text-start leading-[1]", titleClassName)}
          />
        </div>

        <div className="relative w-full flex">
          <div className="relative flex flex-col gap-6 w-full md:w-1/3">
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={description}
              variant="words-trigger"
              className={cls("text-lg md:text-xl text-background/90 text-balance text-start leading-[1.2]", descriptionClassName)}
            />
            <div className={cls("flex gap-4", buttonContainerClassName)}>
              {buttons.slice(0, 2).map((button, index) => (
                <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroOverlaySplit.displayName = "HeroOverlaySplit";

export default memo(HeroOverlaySplit);
