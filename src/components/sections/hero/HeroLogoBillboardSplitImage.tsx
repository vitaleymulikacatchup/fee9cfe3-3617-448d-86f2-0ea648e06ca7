"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import SvgTextLogo from "@/components/shared/SvgTextLogo/SvgTextLogo";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { Plus } from "lucide-react";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface HeroLogoBillboardSplitImageProps {
  logoText: string;
  description: string;
  buttons: ButtonConfig[];
  layoutOrder: "default" | "reverse";
  splitImageSrc?: string;
  splitVideoSrc?: string;
  splitImageAlt?: string;
  splitVideoAriaLabel?: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  frameStyle?: "card" | "browser";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  logoContainerClassName?: string;
  descriptionClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  logoClassName?: string;
  splitMediaWrapperClassName?: string;
  splitImageClassName?: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
  browserBarClassName?: string;
  addressBarClassName?: string;
}

const HeroLogoBillboardSplitImage = ({
  logoText,
  description,
  buttons,
  layoutOrder,
  splitImageSrc,
  splitVideoSrc,
  splitImageAlt = "",
  splitVideoAriaLabel = "Split section video",
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "Hero video",
  frameStyle = "card",
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  logoContainerClassName = "",
  descriptionClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  logoClassName = "",
  splitMediaWrapperClassName = "",
  splitImageClassName = "",
  mediaWrapperClassName = "",
  imageClassName = "",
  browserBarClassName = "",
  addressBarClassName = "",
}: HeroLogoBillboardSplitImageProps) => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const adjustHeightFactor = isMobile ? 1.0 : 0.8;

  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full py-hero-page-padding", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-6 md:gap-12", containerClassName)}>
        <div className={cls(
          "w-full flex gap-6 md:gap-12",
          layoutOrder === "default" ? "flex-col" : "flex-col-reverse",
          logoContainerClassName
        )}>
          <div className="relative grid grid-cols-[1fr_auto] items-end gap-6 md:gap-10 w-full md:flex md:flex-row md:items-end md:justify-between">
            <div className="relative flex flex-col gap-6 md:w-2/5">
              <TextAnimation
                type={theme.defaultTextAnimation}
                text={description}
                variant="words-trigger"
                className={cls("text-lg md:text-3xl text-foreground/75 text-balance text-start leading-[1.2]", descriptionClassName)}
              />
              <div className={cls("flex gap-4", buttonContainerClassName)}>
                {buttons.slice(0, 2).map((button, index) => (
                  <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)} />
                ))}
              </div>
            </div>
            <div className={cls("relative h-full md:h-auto md:w-1/3 md:aspect-video overflow-hidden rounded-theme-capped card p-1 md:p-4", splitMediaWrapperClassName)}>
              <MediaContent
                imageSrc={splitImageSrc}
                videoSrc={splitVideoSrc}
                imageAlt={splitImageAlt}
                videoAriaLabel={splitVideoAriaLabel}
                imageClassName={cls("h-full w-full object-cover z-1", splitImageClassName)}
              />
            </div>
          </div>
          <div className="relative w-full flex">
            <SvgTextLogo
              logoText={logoText}
              adjustHeightFactor={adjustHeightFactor}
              className={cls("text-foreground", logoClassName)}
            />
          </div>
        </div>

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

HeroLogoBillboardSplitImage.displayName = "HeroLogoBillboardSplitImage";

export default memo(HeroLogoBillboardSplitImage);
