"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import AutoCarousel from "@/components/cardStack/layouts/carousels/AutoCarousel";
import { cls } from "@/lib/utils";
import type { ButtonConfig } from "@/types/button";

export interface MediaItem {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
}

interface HeroBillboardCarouselSplitProps {
  title: string;
  buttons?: ButtonConfig[];
  mediaItems: MediaItem[];
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  mediaWrapperClassName?: string;
}

const HeroBillboardCarouselSplit = ({
  title,
  buttons,
  mediaItems,
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  mediaWrapperClassName = "",
}: HeroBillboardCarouselSplitProps) => {
  const renderCarouselItem = (item: MediaItem, index: number) => (
    <div
      key={index}
      className="w-full aspect-square overflow-hidden rounded-theme-capped card p-2"
    >
      <MediaContent
        imageSrc={item.imageSrc}
        videoSrc={item.videoSrc}
        imageAlt={item.imageAlt || ""}
        videoAriaLabel={item.videoAriaLabel || "Carousel media"}
        imageClassName="z-1 h-full object-cover"
      />
    </div>
  );

  return (
    <section
      aria-label={ariaLabel}
      className={cls(
        "w-full py-hero-page-padding md:h-svh md:py-0",
        className
      )}
    >
      <div className={cls(
        "mx-auto flex flex-col gap-14 md:gap-10",
        "w-full md:w-content-width md:h-full md:items-center md:justify-center",
        containerClassName
      )}>
        <TextBox
          title={title}
          description=""
          buttons={buttons}
          textboxLayout="split-actions"
          className={cls(
            "flex flex-col gap-3 md:gap-1 w-content-width mx-auto",
            textBoxClassName
          )}
          titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
          buttonContainerClassName={cls("flex gap-4 mt-3", buttonContainerClassName)}
          buttonClassName={buttonClassName}
          buttonTextClassName={buttonTextClassName}
          center={true}
        />

        <div className={cls("w-full -mx-[var(--content-padding)]", mediaWrapperClassName)}>
          <AutoCarousel
            title=""
            description=""
            textboxLayout="default"
            animationType="none"
            className="py-0"
            carouselClassName="py-0"
            containerClassName="!w-full"
            itemClassName="!w-55 md:!w-carousel-item-4"
            ariaLabel="Hero carousel"
            showTextBox={false}
          >
            {mediaItems?.map(renderCarouselItem)}
          </AutoCarousel>
        </div>
      </div>
    </section>
  );
};

HeroBillboardCarouselSplit.displayName = "HeroBillboardCarouselSplit";

export default memo(HeroBillboardCarouselSplit);
