"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type Metric = {
    id: string;
    value: string;
    title: string;
    description: string;
    icon: LucideIcon;
};

interface MetricCardOneProps {
    metrics: Metric[];
    carouselMode?: "auto" | "buttons";
    gridVariant: GridVariant;
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
    valueClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface MetricCardItemProps {
    metric: Metric;
    shouldUseLightText: boolean;
    cardClassName?: string;
    valueClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
}

const MetricCardItem = memo(({
    metric,
    shouldUseLightText,
    cardClassName = "",
    valueClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    iconContainerClassName = "",
    iconClassName = "",
}: MetricCardItemProps) => {
    return (
        <div className={cls("relative h-full card text-foreground rounded-theme-capped p-6 flex flex-col items-center justify-center gap-0", cardClassName)}>
            <div
                className={cls("relative z-1 text-9xl font-foreground font-medium leading-[1.1]", valueClassName)}
                style={{
                    backgroundImage: shouldUseLightText
                        ? `linear-gradient(to bottom, var(--color-background) 0%, var(--color-background) 20%, transparent 72%, transparent 80%, transparent 100%)`
                        : `linear-gradient(to bottom, var(--color-foreground) 0%, var(--color-foreground) 20%, transparent 72%, transparent 80%, transparent 100%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                }}
            >
                {metric.value}
            </div>
            <p className={cls("relative z-1 mt-[calc(var(--text-4xl)*-0.75)] md:mt-[calc(var(--text-4xl)*-1.15)] text-4xl font-medium text-center", shouldUseLightText ? "text-background" : "text-foreground", titleClassName)}>
                {metric.title}
            </p>
            <p className={cls("relative z-1 max-w-9/10 md:max-w-7/10 text-base text-center leading-[1.1] mt-2", shouldUseLightText ? "text-background" : "text-foreground", descriptionClassName)}>
                {metric.description}
            </p>
            <div className={cls("absolute z-1 left-6 bottom-6 h-10 aspect-square primary-button rounded-theme flex items-center justify-center", iconContainerClassName)}>
                <metric.icon className={cls("h-4/10 text-background", iconClassName)} />
            </div>
        </div>
    );
});

MetricCardItem.displayName = "MetricCardItem";

const MetricCardOne = ({
    metrics,
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
    ariaLabel = "Metrics section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    valueClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    iconContainerClassName = "",
    iconClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: MetricCardOneProps) => {
    const theme = useTheme();
    const shouldUseLightText =
        containerStyle === "card"
            ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
            : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <CardStack
            useInvertedBackground={useInvertedBackground}
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
            {metrics.map((metric, index) => (
                <MetricCardItem
                    key={`${metric.id}-${index}`}
                    metric={metric}
                    shouldUseLightText={shouldUseLightText}
                    cardClassName={cardClassName}
                    valueClassName={valueClassName}
                    titleClassName={titleClassName}
                    descriptionClassName={descriptionClassName}
                    iconContainerClassName={iconContainerClassName}
                    iconClassName={iconClassName}
                />
            ))}
        </CardStack>
    );
};

MetricCardOne.displayName = "MetricCardOne";

export default memo(MetricCardOne);
