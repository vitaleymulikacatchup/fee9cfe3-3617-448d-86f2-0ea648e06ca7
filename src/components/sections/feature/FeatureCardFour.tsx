"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureCard = {
    title: string;
    description: string;
    icon: LucideIcon;
};

interface FeatureCardFourProps {
    features: FeatureCard[];
    carouselMode?: "auto" | "buttons";
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
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

const FeatureCardFour = ({
    features,
    carouselMode = "buttons",
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
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: FeatureCardFourProps) => {
    const theme = useTheme();
    const shouldUseLightText =
        containerStyle === "card"
            ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
            : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <CardStack
            mode={carouselMode}
            gridVariant="uniform-all-items-equal"
            uniformGridCustomHeightClasses="min-h-0"
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
                        className={cls("relative h-full min-h-0 card flex flex-col justify-between gap-10 p-6 rounded-theme-capped", cardClassName)}
                    >
                        <p className={cls("relative z-1 text-xl leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName)}>
                            {feature.description}
                        </p>
                        <div className="relative z-1 flex items-center gap-3">
                            <div className={cls("primary-button h-10 aspect-square w-auto flex items-center justify-center rounded-theme flex-shrink-0", iconClassName)} aria-hidden="true">
                                <Icon className="h-1/2 w-auto text-background" strokeWidth={1.5} />
                            </div>
                            <h3 className={cls("text-xl font-medium leading-[1.1]", shouldUseLightText && "text-background", cardTitleClassName)}>
                                {feature.title}
                            </h3>
                        </div>
                    </div>
                );
            })}
        </CardStack>
    );
};

FeatureCardFour.displayName = "FeatureCardFour";

export default memo(FeatureCardFour);
