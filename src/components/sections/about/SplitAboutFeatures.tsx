"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  text: string;
  icon: LucideIcon;
}

interface SplitAboutFeaturesProps {
  title: string;
  features: FeatureItem[];
  showBorder?: boolean;
  useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  featuresContainerClassName?: string;
  featureClassName?: string;
  featureIconClassName?: string;
  featureTextClassName?: string;
}

const SplitAboutFeatures = ({
  title,
  features,
  showBorder = false,
  useInvertedBackground,
  ariaLabel = "About features section",
  className = "",
  containerClassName = "",
  titleClassName = "",
  featuresContainerClassName = "",
  featureClassName = "",
  featureIconClassName = "",
  featureTextClassName = "",
}: SplitAboutFeaturesProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const isOddCount = features.length % 2 !== 0;

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-30", containerClassName)}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-15">
          <div className="w-full md:w-1/2">
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={title}
              variant="trigger"
              className={cls("text-7xl font-medium", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", titleClassName)}
            />
          </div>

          <div className={cls("relative w-full md:w-1/2 grid grid-cols-2 gap-6", featuresContainerClassName)}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLastItemOdd = isOddCount && index === features.length - 1;
              return (
                <div
                  key={index}
                  className={cls("relative card rounded-theme-capped w-full flex items-center gap-3 p-8", isLastItemOdd && "col-span-2", featureClassName)}
                >
                  <div className="relative z-1 h-8 w-auto aspect-square rounded-theme primary-button flex items-center justify-center" >
                    <Icon
                      className={cls("h-45/100 w-45/100 text-background", featureIconClassName)}
                      aria-hidden="true"
                    />
                  </div>
                  <p className={cls("relative z-1 text-base leading-tight", shouldUseLightText ? "text-background/75" : "text-foreground/75", featureTextClassName)}>
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {showBorder && <div className="w-full border-b border-foreground/10" />}
      </div>
    </section>
  );
};

SplitAboutFeatures.displayName = "SplitAboutFeatures";

export default memo(SplitAboutFeatures);
