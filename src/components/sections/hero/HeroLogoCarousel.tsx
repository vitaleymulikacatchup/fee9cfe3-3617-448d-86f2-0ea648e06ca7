"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import SvgTextLogo from "@/components/shared/SvgTextLogo/SvgTextLogo";
import TextAnimation from "@/components/text/TextAnimation";
import AutoCarousel from "@/components/cardStack/layouts/carousels/AutoCarousel";
import { cls } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

export interface MediaItem {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
}

interface HeroLogoCarouselProps {
  logoText: string;
  description: string;
  mediaItems: MediaItem[];
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  logoContainerClassName?: string;
  logoClassName?: string;
  descriptionClassName?: string;
  carouselWrapperClassName?: string;
}

const HeroLogoCarousel = ({
  logoText,
  description,
  mediaItems,
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  logoContainerClassName = "",
  logoClassName = "",
  descriptionClassName = "",
  carouselWrapperClassName = "",
}: HeroLogoCarouselProps) => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const adjustHeightFactor = isMobile ? 1.1 : 0.8;

  const renderCarouselItem = (item: MediaItem, index: number) => (
    <div
      key={index}
      className="w-full aspect-[3/5] overflow-hidden rounded-theme-capped card p-2"
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
      className={cls("w-full py-hero-page-padding", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-14 md:gap-10", containerClassName)}>
        <div className={cls("w-full flex flex-col items-end gap-6 md:gap-8", logoContainerClassName)}>
          <div className="relative w-full flex" >
            <SvgTextLogo
              logoText={logoText}
              adjustHeightFactor={adjustHeightFactor}
              className={cls("text-foreground", logoClassName)}
            />
          </div>
          <div className="relative w-full md:w-1/2" >
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={description}
              variant="words-trigger"
              className={cls("text-lg md:text-3xl text-foreground/75 text-balance text-end leading-[1.2]", descriptionClassName)}
            />
          </div>
        </div>

        <div className={cls("w-full -mx-[var(--content-padding)]", carouselWrapperClassName)}>
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

HeroLogoCarousel.displayName = "HeroLogoCarousel";

export default memo(HeroLogoCarousel);
