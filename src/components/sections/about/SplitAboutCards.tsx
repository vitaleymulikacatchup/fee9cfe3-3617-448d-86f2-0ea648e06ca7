"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/components/cardStack/types";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  label: string;
}

interface SplitAboutCardsProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  features: FeatureCard[];
  buttons?: ButtonConfig[];
  useInvertedBackground: InvertedBackground;
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
  featuresContainerClassName?: string;
  featureCardClassName?: string;
  featureTitleClassName?: string;
  featureDescriptionClassName?: string;
  featureLabelClassName?: string;
}

const SplitAboutCards = ({
  title,
  description,
  tag,
  tagIcon,
  features,
  buttons,
  useInvertedBackground,
  ariaLabel = "About section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  featuresContainerClassName = "",
  featureCardClassName = "",
  featureTitleClassName = "",
  featureDescriptionClassName = "",
  featureLabelClassName = "",
}: SplitAboutCardsProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const isOddCount = features.length % 2 !== 0;

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-30", containerClassName)}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-15">
          <div className="w-full lg:w-1/3">
            <TextBox
              title={title}
              description={description}
              tag={tag}
              tagIcon={tagIcon}
              buttons={buttons}
              textboxLayout="default"
              useInvertedBackground={useInvertedBackground}
              className={cls("gap-2! md:gap-3!", textBoxClassName)}
              titleClassName={cls("text-5xl", titleClassName)}
              descriptionClassName={descriptionClassName}
              tagClassName={tagClassName}
              buttonContainerClassName={buttonContainerClassName}
              buttonClassName={buttonClassName}
              buttonTextClassName={buttonTextClassName}
            />
          </div>

          <div className={cls("w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6", featuresContainerClassName)}>
            {features.map((feature, index) => {
              const isLastItemOdd = isOddCount && index === features.length - 1;
              return (
                <div
                  key={feature.id}
                  className={cls("card rounded-theme-capped p-6 flex flex-col gap-10", isLastItemOdd && "md:col-span-2", featureCardClassName)}
                >
                <div className="relative z-1 flex flex-col gap-1">
                  <h3 className={cls("text-2xl md:text-3xl font-medium", shouldUseLightText ? "text-background" : "text-foreground", featureTitleClassName)}>
                    {feature.title}
                  </h3>
                  <p className={cls("text-base leading-tight", shouldUseLightText ? "text-background/75" : "text-foreground/75", featureDescriptionClassName)}>
                    {feature.description}
                  </p>
                </div>

                <p className={cls("relative z-1 text-xl md:text-2xl font-medium", shouldUseLightText ? "text-background" : "text-foreground", featureLabelClassName)}>
                  {feature.label}
                </p>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

SplitAboutCards.displayName = "SplitAboutCards";

export default memo(SplitAboutCards);
