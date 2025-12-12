"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import { Globe } from "@/components/shared/Globe";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";
import type { COBEOptions } from "cobe";

interface HeroGlobeProps {
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

const HeroGlobe = ({
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
}: HeroGlobeProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full py-[var(--width-10)]", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-10 md:gap-15", containerClassName)}>
        <TextBox
          title={title}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          buttons={buttons}
          className={cls("flex flex-col gap-3 md:gap-5", textBoxClassName)}
          titleClassName={cls("text-6xl md:text-7xl 2xl:text-8xl font-medium text-center text-balance", titleClassName)}
          descriptionClassName={cls("text-base md:text-lg text-center text-balance text-foreground/75", descriptionClassName)}
          tagClassName={cls("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2", tagClassName)}
          buttonContainerClassName={cls("flex flex-wrap gap-4 justify-center", buttonContainerClassName)}
          buttonClassName={cls("", buttonClassName)}
          buttonTextClassName={cls("text-base", buttonTextClassName)}
          center={true}
        />

        <div className={cls(
          "relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-theme-capped card p-4 md:p-6",
          globeWrapperClassName
        )}>
          <Globe config={globeConfig} className={globeClassName} />
        </div>
      </div>
    </section>
  );
};

HeroGlobe.displayName = "HeroGlobe";

export default memo(HeroGlobe);
