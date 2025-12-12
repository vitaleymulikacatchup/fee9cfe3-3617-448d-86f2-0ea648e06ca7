"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import { Globe } from "@/components/shared/Globe";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";
import type { COBEOptions } from "cobe";

interface HeroGlobeOverlayProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  globeConfig?: COBEOptions;
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
  globeWrapperClassName?: string;
  globeClassName?: string;
}

const HeroGlobeOverlay = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  globeConfig,
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
  globeWrapperClassName = "",
  globeClassName = "",
}: HeroGlobeOverlayProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full h-svh relative overflow-hidden flex items-center justify-center", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col items-center", containerClassName)}>
        <div className={cls(
          "relative w-full aspect-[16/12] md:w-[70%] md:aspect-video mask-fade-bottom-large",
          globeWrapperClassName
        )}>
          <Globe config={globeConfig} className={cls("w-full -mt-[6%] md:-mt-[var(--width-5)]", globeClassName)} />
        </div>

        <div className="relative -mt-[15%] md:-mt-[10%] z-10 w-full">
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
        </div>
      </div>
    </section>
  );
};

HeroGlobeOverlay.displayName = "HeroGlobeOverlay";

export default memo(HeroGlobeOverlay);
