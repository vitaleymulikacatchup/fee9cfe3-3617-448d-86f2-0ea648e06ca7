"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureCardTwoGridVariant = Exclude<GridVariant, "one-large-right-three-stacked-left" | "one-large-left-three-stacked-right" | "timeline" | "timeline-three-columns">;

type FeatureCard = {
    title: string;
    description: string;
    icon: LucideIcon;
    button?: ButtonConfig;
};

interface FeatureCardTwoProps {
    features: FeatureCard[];
    carouselMode?: "auto" | "buttons";
    gridVariant: FeatureCardTwoGridVariant;
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
    iconClassName?: string;
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

const FeatureCardTwo = ({
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
    iconClassName = "",
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
}: FeatureCardTwoProps) => {
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
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div
                        key={`${feature.title}-${index}`}
                        className={cls("card flex flex-col justify-between gap-4 p-6 rounded-theme-capped h-full", cardClassName)}
                    >
                        <div className={cls("relative z-1 primary-button h-15 w-fit aspect-square flex items-center justify-center rounded-theme", iconClassName)} aria-hidden="true">
                            <Icon className="h-[40%] w-auto text-background" strokeWidth={1.5} />
                        </div>
                        <div className="relative z-1 flex flex-col gap-1">
                            <h3 className={cls("text-2xl font-medium", shouldUseLightText && "text-background", cardTitleClassName)}>
                                {feature.title}
                            </h3>
                            <p className={cls("text-sm leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName)}>
                                {feature.description}
                            </p>
                            {feature.button && (
                                <div className="mt-2" >
                                    <Button {...getButtonProps(feature.button, 0, theme.defaultButtonVariant, cls("", cardButtonClassName), cardButtonTextClassName)} />
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </CardStack>
    );
};

FeatureCardTwo.displayName = "FeatureCardTwo";

export default memo(FeatureCardTwo);
