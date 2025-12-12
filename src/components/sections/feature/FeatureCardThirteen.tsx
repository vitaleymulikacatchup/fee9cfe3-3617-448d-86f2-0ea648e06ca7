"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureCardThirteenGridVariant = Exclude<GridVariant, "one-large-right-three-stacked-left" | "one-large-left-three-stacked-right" | "timeline" | "timeline-three-columns">;

type FeatureCard = {
  id: string;
  title: string;
  description: string;
};

interface FeatureCardThirteenProps {
  features: FeatureCard[];
  carouselMode?: "auto" | "buttons";
  gridVariant: FeatureCardThirteenGridVariant;
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
  textBoxTitleClassName?: string;
  textBoxTitleImageWrapperClassName?: string;
  textBoxTitleImageClassName?: string;
  textBoxDescriptionClassName?: string;
  cardIdClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  cardDotsClassName?: string;
  gridClassName?: string;
  carouselClassName?: string;
  controlsClassName?: string;
  textBoxClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
}

const FeatureCardThirteen = ({
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
  textBoxTitleClassName = "",
  textBoxTitleImageWrapperClassName = "",
  textBoxTitleImageClassName = "",
  textBoxDescriptionClassName = "",
  cardIdClassName = "",
  cardTitleClassName = "",
  cardDescriptionClassName = "",
  cardDotsClassName = "",
  gridClassName = "",
  carouselClassName = "",
  controlsClassName = "",
  textBoxClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
}: FeatureCardThirteenProps) => {
  const theme = useTheme();
  const shouldUseLightText =
    containerStyle === "card"
      ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
      : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

  // Override gridRows for certain variants to use smaller heights
  const getGridRowsOverride = () => {
    if (gridVariant === "two-columns-alternating-heights") {
      return "md:grid-rows-[9rem_9rem_0.5rem_0.5rem_9rem_9rem] 2xl:grid-rows-[12rem_12rem_0.5rem_0.5rem_12rem_12rem]";
    }
    if (gridVariant === "asymmetric-60-wide-40-narrow") {
      return "md:grid-rows-[18rem_18rem] 2xl:grid-rows-[21rem_21rem]";
    }
    if (gridVariant === "three-columns-all-equal-width") {
      return "md:grid-rows-[15rem_15rem] 2xl:grid-rows-[18rem_18rem]";
    }
    if (gridVariant === "four-items-2x2-equal-grid") {
      return "md:grid-rows-[20rem_20rem] 2xl:grid-rows-[26rem_26rem]";
    }
    if (gridVariant === "items-top-row-full-width-bottom" || gridVariant === "full-width-top-items-bottom-row") {
      return "md:grid-rows-[18rem_18rem] 2xl:grid-rows-[21rem_21rem]";
    }
    return undefined;
  };
  const gridRowsOverride = getGridRowsOverride();

  // Override heightClasses for certain variants to use smaller heights
  const getHeightClassesOverride = () => {
    if (gridVariant === "four-items-2x2-staggered-grid" || gridVariant === "four-items-2x2-staggered-grid-inverted") {
      return "min-h-60 2xl:min-h-70";
    }
    return uniformGridCustomHeightClasses;
  };
  const heightClassesOverride = getHeightClassesOverride();

  // Override itemHeightClasses for alternating height variants to use smaller heights
  const getItemHeightClassesOverride = () => {
    if (gridVariant === "four-items-2x2-alternating-heights") {
      return [
        "min-h-80 md:min-h-80 2xl:min-h-100",
        "min-h-80 md:min-h-50 2xl:min-h-60",
        "min-h-80 md:min-h-80 2xl:min-h-100",
        "min-h-80 md:min-h-50 2xl:min-h-60",
      ];
    }
    if (gridVariant === "four-items-2x2-alternating-heights-inverted") {
      return [
        "min-h-80 md:min-h-50 2xl:min-h-60",
        "min-h-80 md:min-h-80 2xl:min-h-100",
        "min-h-80 md:min-h-50 2xl:min-h-60",
        "min-h-80 md:min-h-80 2xl:min-h-100",
      ];
    }
    return undefined;
  };
  const itemHeightClassesOverride = getItemHeightClassesOverride();

  return (
    <CardStack
      mode={carouselMode}
      gridVariant={gridVariant}
      uniformGridCustomHeightClasses={heightClassesOverride}
      gridRowsClassName={gridRowsOverride}
      itemHeightClassesOverride={itemHeightClassesOverride}
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
          key={`${feature.id}-${index}`}
          className={cls(
            "card relative flex flex-col justify-between p-6 rounded-theme-capped min-h-0 h-full overflow-hidden",
            cardClassName
          )}
        >
          <div className="relative z-10 flex flex-col gap-2" >
            <div className="relative z-10 flex justify-between items-center">
              <span
                className={cls(
                  "text-sm font-medium text-foreground",
                  cardIdClassName
                )}
              >
                / {feature.id}
              </span>
              <div className={cls("flex gap-1", cardDotsClassName)}>
                <span className="h-2 w-auto aspect-square rounded-theme bg-accent" />
                <span className="h-2 w-auto aspect-square rounded-theme bg-accent" />
                <span className="h-2 w-auto aspect-square rounded-theme bg-accent" />
              </div>
            </div>
            <h3
              className={cls(
                "text-4xl font-medium leading-tight",
                shouldUseLightText ? "text-background" : "text-foreground",
                cardTitleClassName
              )}
            >
              {feature.title}
            </h3>
          </div>

          <div className="relative z-10 flex flex-col gap-1">
            <p
              className={cls(
                "text-sm leading-tight text-balance line-clamp-3",
                shouldUseLightText ? "text-background" : "text-foreground",
                cardDescriptionClassName
              )}
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </CardStack>
  );
};

FeatureCardThirteen.displayName = "FeatureCardThirteen";

export default memo(FeatureCardThirteen);
