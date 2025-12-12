"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import AutoCarousel from "@/components/cardStack/layouts/carousels/AutoCarousel";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

export interface MediaItem {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
}

interface HeroBillboardCarouselProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  mediaItems: MediaItem[];
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
}

const HeroBillboardCarousel = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  mediaItems,
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
}: HeroBillboardCarouselProps) => {
  const renderCarouselItem = (item: MediaItem, index: number) => (
    <div
      key={index}
      className="w-full aspect-[4/5] overflow-hidden rounded-theme-capped card p-2 shadow-lg"
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
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          buttons={buttons}
          className={cls(
            "flex flex-col gap-3 md:gap-1 w-content-width mx-auto",
            textBoxClassName
          )}
          titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
          descriptionClassName={cls("text-lg leading-[1.2]", descriptionClassName)}
          tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
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

HeroBillboardCarousel.displayName = "HeroBillboardCarousel";

export default memo(HeroBillboardCarousel);
