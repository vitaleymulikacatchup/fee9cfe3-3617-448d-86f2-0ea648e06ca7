"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import MediaContent from "@/components/shared/MediaContent";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";

type FeatureCardOneGridVariant = Exclude<GridVariant, "uniform-alternating-heights" | "uniform-alternating-heights-inverted">;
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureCard = {
  title: string;
  description: string;
  button?: ButtonConfig;
} & (
    | {
      imageSrc: string;
      imageAlt?: string;
      videoSrc?: never;
      videoAriaLabel?: never;
    }
    | {
      videoSrc: string;
      videoAriaLabel?: string;
      imageSrc?: never;
      imageAlt?: never;
    }
  );

interface FeatureCardOneProps {
  features: FeatureCard[];
  carouselMode?: "auto" | "buttons";
  gridVariant: FeatureCardOneGridVariant;
  uniformGridCustomHeightClasses?: string;
  animationType: CardAnimationType;
  containerStyle: ContainerStyle;
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  textboxLayout: TextboxLayout;
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  mediaClassName?: string;
  textBoxTitleClassName?: string;
  textBoxTitleImageWrapperClassName?: string;
  textBoxTitleImageClassName?: string;
  textBoxDescriptionClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  cardButtonClassName?: string;
  cardButtonTextClassName?: string;
  gridClassName?: string;
  carouselClassName?: string;
  controlsClassName?: string;
  textBoxClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
}

const FeatureCardOne = ({
  features,
  carouselMode = "buttons",
  gridVariant,
  uniformGridCustomHeightClasses,
  animationType,
  containerStyle,
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  buttons,
  textboxLayout,
  useInvertedBackground,
  ariaLabel = "Feature section",
  className = "",
  containerClassName = "",
  cardClassName = "",
  mediaClassName = "",
  textBoxTitleClassName = "",
  textBoxTitleImageWrapperClassName = "",
  textBoxTitleImageClassName = "",
  textBoxDescriptionClassName = "",
  cardTitleClassName = "",
  cardDescriptionClassName = "",
  cardButtonClassName = "",
  cardButtonTextClassName = "",
  gridClassName = "",
  carouselClassName = "",
  controlsClassName = "",
  textBoxClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
}: FeatureCardOneProps) => {
  const theme = useTheme();
  const shouldUseLightText =
    containerStyle === "card"
      ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
      : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

  return (
    <CardStack
      mode={carouselMode}
      gridVariant={gridVariant}
      uniformGridCustomHeightClasses={uniformGridCustomHeightClasses}
      animationType={animationType}
      containerStyle={containerStyle}
      title={title}
      titleSegments={titleSegments}
      description={description}
      tag={tag}
      tagIcon={tagIcon}
      buttons={buttons}
      textboxLayout={textboxLayout}
      useInvertedBackground={useInvertedBackground}
      className={className}
      containerClassName={containerClassName}
      gridClassName={gridClassName}
      carouselClassName={carouselClassName}
      controlsClassName={controlsClassName}
      textBoxClassName={textBoxClassName}
      titleClassName={textBoxTitleClassName}
      titleImageWrapperClassName={textBoxTitleImageWrapperClassName}
      titleImageClassName={textBoxTitleImageClassName}
      descriptionClassName={textBoxDescriptionClassName}
      tagClassName={textBoxTagClassName}
      buttonContainerClassName={textBoxButtonContainerClassName}
      buttonClassName={textBoxButtonClassName}
      buttonTextClassName={textBoxButtonTextClassName}
      ariaLabel={ariaLabel}
    >
      {features.map((feature, index) => (
        <div
          key={`${feature.title}-${index}`}
          className={cls("card flex flex-col gap-4 p-4 rounded-theme-capped min-h-0 h-full", cardClassName)}
        >
          <MediaContent
            imageSrc={feature.imageSrc}
            videoSrc={feature.videoSrc}
            imageAlt={feature.imageAlt || "Feature image"}
            videoAriaLabel={feature.videoAriaLabel || "Feature video"}
            imageClassName={cls("relative z-1 min-h-0 h-full", mediaClassName)}
          />
          <div className="relative z-1 flex flex-col gap-1">
            <h3 className={cls("text-2xl font-medium", shouldUseLightText && "text-background", cardTitleClassName)}>
              {feature.title}
            </h3>
            <p className={cls("text-sm leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName)}>
              {feature.description}
            </p>
          </div>
          {feature.button && (
            <Button {...getButtonProps(feature.button, 0, theme.defaultButtonVariant, cls("w-full", cardButtonClassName), cardButtonTextClassName)} />
          )}
        </div>
      ))}
    </CardStack>
  );
};

FeatureCardOne.displayName = "FeatureCardOne";

export default memo(FeatureCardOne);
