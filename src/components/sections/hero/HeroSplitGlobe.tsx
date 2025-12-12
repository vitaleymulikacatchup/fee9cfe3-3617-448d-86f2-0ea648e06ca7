"use client";

import React, { memo, useState, useEffect } from "react";
import TextBox from "@/components/Textbox";
import { Globe } from "@/components/shared/Globe";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";
import type { COBEOptions } from "cobe";

interface HeroSplitGlobeProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  globeConfig?: COBEOptions;
  ariaLabel?: string;
  imagePosition?: "left" | "right";
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  globeWrapperClassName?: string;
  globeClassName?: string;
}

const HeroSplitGlobe = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  globeConfig,
  ariaLabel = "Hero section",
  imagePosition = "right",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  globeWrapperClassName = "",
  globeClassName = "",
}: HeroSplitGlobeProps) => {
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCentered(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const globeContent = (
    <div className={cls(
      "relative w-full h-fit aspect-square md:aspect-auto md:w-1/2 overflow-hidden rounded-theme-capped card p-4 md:h-[65vh]",
      globeWrapperClassName
    )}>
      <div className="relative h-full aspect-square max-w-full max-h-full mx-auto flex items-center justify-center">
        <Globe config={globeConfig} className={cls("absolute top-1/2 left-1/2 -translate-1/2", globeClassName)} />
      </div>
    </div>
  );

  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full h-fit py-hero-page-padding md:py-0 md:h-svh flex items-center", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col md:flex-row gap-13 md:gap-15 items-center", containerClassName)}>
        {imagePosition === "left" && globeContent}

        <div className={cls("w-full md:w-1/2")}>
          <TextBox
            title={title}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            className={cls("flex flex-col gap-3 md:gap-3", textBoxClassName)}
            titleClassName={cls("text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance", titleClassName)}
            descriptionClassName={cls("max-w-8/10 text-lg md:text-xl leading-[1.2] text-center md:text-left", descriptionClassName)}
            tagClassName={cls("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
            buttonContainerClassName={cls("flex gap-4 mt-4", buttonContainerClassName)}
            buttonClassName={cls("", buttonClassName)}
            buttonTextClassName={cls("text-base", buttonTextClassName)}
            center={isCentered}
          />
        </div>

        {imagePosition === "right" && globeContent}
      </div>
    </section>
  );
};

HeroSplitGlobe.displayName = "HeroSplitGlobe";

export default memo(HeroSplitGlobe);
