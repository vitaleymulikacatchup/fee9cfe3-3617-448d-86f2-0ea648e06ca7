"use client";

import { Fragment, memo } from "react";
import CardList from "@/components/cardStack/CardList";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface FeatureCard {
  id: string;
  icon: LucideIcon;
  text: string;
}

interface FeatureCardSeventeenProps {
  features: FeatureCard[];
  animationType: CardAnimationType;
  variant: "card" | "border";
  useUncappedRounding: boolean;
  useSplitLayout: boolean;
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
  textBoxDescriptionClassName?: string;
  textBoxClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
  featureContainerClassName?: string;
  featureTextClassName?: string;
}

const FeatureCardSeventeen = ({
  features,
  animationType,
  variant,
  useUncappedRounding,
  useSplitLayout,
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
  textBoxDescriptionClassName = "",
  textBoxClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
  featureContainerClassName = "",
  featureTextClassName = "",
}: FeatureCardSeventeenProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

  return (
    <CardList
      title={title}
      titleSegments={titleSegments}
      description={description}
      tag={tag}
      tagIcon={tagIcon}
      buttons={buttons}
      textboxLayout={textboxLayout}
      animationType={animationType}
      variant={variant}
      useUncappedRounding={useUncappedRounding}
      useInvertedBackground={useInvertedBackground}
      className={className}
      containerClassName={containerClassName}
      cardClassName={cardClassName}
      titleClassName={textBoxTitleClassName}
      descriptionClassName={textBoxDescriptionClassName}
      textBoxClassName={textBoxClassName}
      tagClassName={textBoxTagClassName}
      buttonContainerClassName={textBoxButtonContainerClassName}
      buttonClassName={textBoxButtonClassName}
      buttonTextClassName={textBoxButtonTextClassName}
      titleImageWrapperClassName={titleImageWrapperClassName}
      titleImageClassName={titleImageClassName}
      ariaLabel={ariaLabel}
    >
      {features.map((feature, index) => {
        const IconBox = (
          <div className="h-(--text-6xl) md:h-(--text-9xl) w-auto aspect-square primary-button flex items-center justify-center rounded-theme-capped">
            <feature.icon className="w-1/2 h-1/2" aria-hidden="true" />
          </div>
        );

        const TextContent = (
          <p
            className={cls(
              "min-w-0 max-w-full text-6xl md:text-9xl font-medium leading-[1.175] truncate",
              !useSplitLayout && "text-center",
              variant === "border"
                ? (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground")
                : (shouldUseLightText ? "text-background" : "text-foreground"),
              featureTextClassName
            )}
          >
            {feature.text}
          </p>
        );

        return (
          <Fragment key={feature.id}>
            <div
              className={cls(
                "w-full flex items-center justify-center gap-6",
                variant === "card" ? "p-6 md:p-15" : "pb-6 md:pb-10",
                featureContainerClassName
              )}
            >
              {useSplitLayout ? (
                <>
                  <div className="md:w-1/2">{IconBox}</div>
                  <div className="w-full min-w-0 md:w-1/2">{TextContent}</div>
                </>
              ) : (
                <>
                  {IconBox}
                  {TextContent}
                </>
              )}
            </div>
            {variant === "border" && index === features.length - 1 && (
              <div className="h-px bg-accent/75" />
            )}
          </Fragment>
        );
      })}
    </CardList>
  );
};

FeatureCardSeventeen.displayName = "FeatureCardSeventeen";

export default memo(FeatureCardSeventeen);
