"use client";

import { memo } from "react";
import TextBox from "@/components/Textbox";
import AngledCarousel from "@/components/cardStack/layouts/carousels/AngledCarousel";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

interface CarouselItem {
  id: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
}

interface HeroBillboardRotatedCarouselProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  carouselItems: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
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
  carouselClassName?: string;
}

const HeroBillboardRotatedCarousel = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  carouselItems,
  autoPlay = true,
  autoPlayInterval = 4000,
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
  carouselClassName = "",
}: HeroBillboardRotatedCarouselProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full h-svh flex items-center justify-center pt-10", className)}
    >
      <div className={cls("w-full flex flex-col gap-14 md:gap-15", containerClassName)}>
        <div className="w-content-width mx-auto" >
          <TextBox
            title={title}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            className={cls("flex flex-col gap-3 md:gap-1", textBoxClassName)}
            titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
            descriptionClassName={cls("text-lg leading-[1.2]", descriptionClassName)}
            tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
            buttonContainerClassName={cls("flex gap-4 mt-3", buttonContainerClassName)}
            buttonClassName={buttonClassName}
            buttonTextClassName={buttonTextClassName}
            center={true}
          />
        </div>

        <AngledCarousel
          items={carouselItems}
          autoPlay={autoPlay}
          autoPlayInterval={autoPlayInterval}
          className={carouselClassName}
        />
      </div>
    </section>
  );
};

HeroBillboardRotatedCarousel.displayName = "HeroBillboardRotatedCarousel";

export default memo(HeroBillboardRotatedCarousel);
