"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import { Plus, LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

interface HeroBillboardSplitProps {
  title: string;
  description: string;
  tag: string;
  tagIcon?: LucideIcon;
  buttons: ButtonConfig[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  frameStyle?: "browser" | "card";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  mediaWrapperClassName?: string;
  browserBarClassName?: string;
  addressBarClassName?: string;
  imageClassName?: string;
}

const HeroBillboardSplit = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "Hero media",
  frameStyle = "browser",
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  mediaWrapperClassName = "",
  browserBarClassName = "",
  addressBarClassName = "",
  imageClassName = "",
}: HeroBillboardSplitProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={cls(
        "w-full h-fit py-hero-page-padding",
        className
      )}
    >
      <div className={cls(
        "relative w-content-width mx-auto flex flex-col gap-14 md:gap-10",
        containerClassName
      )}>
        <TextBox
          title={title}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          buttons={buttons}
          textboxLayout="split"
          className={cls(
            "w-content-width mx-auto",
            textBoxClassName
          )}
          titleClassName={titleClassName}
          descriptionClassName={descriptionClassName}
          tagClassName={tagClassName}
          buttonContainerClassName={buttonContainerClassName}
          buttonClassName={buttonClassName}
          buttonTextClassName={buttonTextClassName}
        />

        {frameStyle === "browser" ? (
          <div className={cls("w-full overflow-hidden rounded-theme-capped card", mediaWrapperClassName)}>
            <div className={cls("relative z-1 bg-background border-b border-foreground/10 px-4 py-3 flex items-center gap-4", browserBarClassName)}>
              <div className="flex items-center gap-2">
                <div className="h-3 w-auto aspect-square rounded-theme bg-accent" />
                <div className="h-3 w-auto aspect-square rounded-theme bg-accent" />
                <div className="h-3 w-auto aspect-square rounded-theme bg-accent" />
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className={cls("w-15 md:w-10 h-8 rounded-theme bg-accent/10", addressBarClassName)} />
                <div className="w-15 md:w-10 h-8 rounded-theme bg-accent/10" />
                <div className="hidden md:block w-10 h-8 rounded-theme bg-accent/10" />
              </div>
              <Plus className="h-[var(--text-sm)] w-auto text-foreground" />
            </div>
            <div className="relative z-1 p-0">
              <MediaContent
                imageSrc={imageSrc}
                videoSrc={videoSrc}
                imageAlt={imageAlt}
                videoAriaLabel={videoAriaLabel}
                imageClassName={cls("rounded-none!", imageClassName)}
              />
            </div>
          </div>
        ) : (
          <div className={cls("w-full overflow-hidden rounded-theme-capped card p-4", mediaWrapperClassName)}>
            <MediaContent
              imageSrc={imageSrc}
              videoSrc={videoSrc}
              imageAlt={imageAlt}
              videoAriaLabel={videoAriaLabel}
              imageClassName={cls("z-1", imageClassName)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

HeroBillboardSplit.displayName = "HeroBillboardSplit";

export default memo(HeroBillboardSplit);
