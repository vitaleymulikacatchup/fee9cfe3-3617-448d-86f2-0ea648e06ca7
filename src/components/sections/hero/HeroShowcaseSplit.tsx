"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface HeroShowcaseSplitProps {
  title: string;
  description: string;
  tags: string[];
  buttons: ButtonConfig[];
  showcaseImageSrc?: string;
  showcaseVideoSrc?: string;
  showcaseImageAlt?: string;
  showcaseVideoAriaLabel?: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagsContainerClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  showcaseWrapperClassName?: string;
  showcaseImageClassName?: string;
}

const HeroShowcaseSplit = ({
  title,
  description,
  tags,
  buttons,
  showcaseImageSrc,
  showcaseVideoSrc,
  showcaseImageAlt = "",
  showcaseVideoAriaLabel = "Showcase video",
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagsContainerClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  showcaseWrapperClassName = "",
  showcaseImageClassName = "",
}: HeroShowcaseSplitProps) => {
  const theme = useTheme();

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative w-full h-fit md:h-svh overflow-hidden", className)}
    >
      {/* Mobile Layout */}
      <div className={cls(
        "relative z-10 w-content-width mx-auto h-full flex md:hidden flex-col gap-10 justify-between pt-hero-page-padding-1_5 pb-hero-page-padding",
        containerClassName
      )}>
        <div className="relative flex flex-col gap-6 w-full">
          <TextAnimation
            type={theme.defaultTextAnimation}
            text={title}
            variant="words-trigger"
            className={cls("text-5xl font-medium text-foreground text-balance text-start leading-[1]", titleClassName)}
          />
          <div className={cls("flex gap-4", buttonContainerClassName)}>
            {buttons.slice(0, 2).map((button, index) => (
              <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)} />
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <TextAnimation
            type={theme.defaultTextAnimation}
            text={description}
            variant="words-trigger"
            className={cls("text-base text-foreground/75 text-balance text-start leading-tight", descriptionClassName)}
          />
        </div>

        <div className="flex flex-col gap-6" >
          <div className={cls(
            "relative w-full aspect-square overflow-hidden rounded-theme-capped card p-4",
            showcaseWrapperClassName
          )}>
            <MediaContent
              imageSrc={showcaseImageSrc}
              videoSrc={showcaseVideoSrc}
              imageAlt={showcaseImageAlt}
              videoAriaLabel={showcaseVideoAriaLabel}
              imageClassName={cls("h-full w-full object-cover z-1", showcaseImageClassName)}
            />
          </div>

          <div className={cls("w-full card rounded-theme-capped flex flex-row items-center justify-between gap-2 px-6 py-3", tagsContainerClassName)}>
            {tags.slice(0, 4).map((tag, index) => (
              <React.Fragment key={`${tag}-${index}`}>
                <span className={cls("text-sm text-foreground truncate", tagClassName)}>
                  {tag}
                </span>
                {index < Math.min(tags.length, 4) - 1 && (
                  <span className="text-accent">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={cls(
        "relative z-10 w-content-width mx-auto h-full hidden md:flex flex-col justify-between pt-hero-page-padding-1_5 pb-hero-page-padding",
        containerClassName
      )}>
        <div className="relative w-full flex flex-row gap-[var(--width-10)] 2xl:gap-[var(--width-15)] items-center">
          <div className={cls(
            "relative w-2/5 aspect-video overflow-hidden rounded-theme-capped card p-4",
            showcaseWrapperClassName
          )}>
            <MediaContent
              imageSrc={showcaseImageSrc}
              videoSrc={showcaseVideoSrc}
              imageAlt={showcaseImageAlt}
              videoAriaLabel={showcaseVideoAriaLabel}
              imageClassName={cls("h-full w-full object-cover z-1", showcaseImageClassName)}
            />
          </div>

          <div className="relative flex flex-col gap-6 w-3/5">
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={title}
              variant="words-trigger"
              className={cls("text-7xl font-medium text-foreground text-balance text-start leading-[1]", titleClassName)}
            />
            <div className={cls("flex gap-4", buttonContainerClassName)}>
              {buttons.slice(0, 2).map((button, index) => (
                <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full flex flex-row gap-10 items-end justify-between">
          <div className={cls("flex flex-col gap-2", tagsContainerClassName)}>
            {tags.slice(0, 6).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className={cls("text-base text-foreground", tagClassName)}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative w-1/2">
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={description}
              variant="words-trigger"
              className={cls("text-lg text-foreground/75 text-balance text-start leading-[1.4]", descriptionClassName)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

HeroShowcaseSplit.displayName = "HeroShowcaseSplit";

export default memo(HeroShowcaseSplit);
