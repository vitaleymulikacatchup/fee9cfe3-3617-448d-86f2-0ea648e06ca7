"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AboutFeatureProps {
  title: string;
  features: Feature[];
  useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  featuresContainerClassName?: string;
  featureCardClassName?: string;
  featureIconContainerClassName?: string;
  featureIconClassName?: string;
  featureTitleClassName?: string;
  featureDescriptionClassName?: string;
}

const AboutFeature = ({
  title,
  features,
  useInvertedBackground,
  ariaLabel = "About features section",
  className = "",
  containerClassName = "",
  titleClassName = "",
  featuresContainerClassName = "",
  featureCardClassName = "",
  featureIconContainerClassName = "",
  featureIconClassName = "",
  featureTitleClassName = "",
  featureDescriptionClassName = "",
}: AboutFeatureProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

  const gridColsMap = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };
  const gridCols = gridColsMap[features.length as keyof typeof gridColsMap] || "md:grid-cols-4";

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
        <TextAnimation
          type={theme.defaultTextAnimation}
          text={title}
          variant="words-trigger"
          className={cls("text-2xl md:text-5xl font-medium leading-[1.175]", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", titleClassName)}
        />

        <div className={cls("grid grid-cols-1 gap-6", gridCols, featuresContainerClassName)}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={cls(
                  "card flex flex-col justify-between gap-4 p-6 rounded-theme-capped h-50 md:h-60 2xl:h-70",
                  featureCardClassName
                )}
              >
                <div className={cls("relative z-1 primary-button h-12 w-fit aspect-square flex items-center justify-center rounded-theme", featureIconContainerClassName)} aria-hidden="true">
                  <Icon className={cls("h-4/10 w-auto text-background", featureIconClassName)} strokeWidth={1.5} />
                </div>
                <div className="relative z-1 flex flex-col gap-1">
                  <h3 className={cls("text-2xl font-medium", shouldUseLightText && "text-background", featureTitleClassName)}>
                    {feature.title}
                  </h3>
                  <p className={cls("text-sm leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", featureDescriptionClassName)}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

AboutFeature.displayName = "AboutFeature";

export default memo(AboutFeature);
