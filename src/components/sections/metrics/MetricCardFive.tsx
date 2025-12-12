"use client";

import React, { memo } from "react";
import CardList from "@/components/cardStack/CardList";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface Metric {
    id: string;
    value: string;
    description: string;
}

interface MetricCardFiveProps {
    metrics: Metric[];
    animationType: CardAnimationType;
    variant: "card" | "border";
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
    cardContentClassName?: string;
    metricValueClassName?: string;
    metricDescriptionClassName?: string;
}

const MetricCardFive = ({
    metrics,
    animationType,
    variant,
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
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    cardContentClassName = "",
    metricValueClassName = "",
    metricDescriptionClassName = "",
}: MetricCardFiveProps) => {
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
            {metrics.map((metric) => (
                <div
                    key={metric.id}
                    className={cls(
                        "relative z-1 w-full min-h-0 h-full flex flex-col md:flex-row gap-3 md:gap-6",
                        variant === "card" ? "p-6 md:p-15" : "pb-6 md:pb-10",
                        cardContentClassName
                    )}
                >
                    <div className="relative z-1 w-full md:w-1/2 flex md:justify-start">
                        <h2 className={cls(
                            "text-5xl md:text-9xl font-medium leading-[1.1]",
                            variant === "border"
                                ? (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground")
                                : (shouldUseLightText ? "text-background" : "text-foreground"),
                            metricValueClassName
                        )}>
                            {metric.value}
                        </h2>
                    </div>

                    {variant === "card" && <div className="relative z-1 w-full h-px bg-foreground/20 md:hidden" />}

                    <div className="relative z-1 w-full md:w-1/2 flex flex-col">
                        <p className={cls(
                            "text-xl md:text-2xl leading-tight text-balance",
                            variant === "border"
                                ? (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground")
                                : (shouldUseLightText ? "text-background" : "text-foreground"),
                            metricDescriptionClassName
                        )}>
                            {metric.description}
                        </p>
                    </div>
                </div>
            ))}
        </CardList>
    );
};

MetricCardFive.displayName = "MetricCardFive";

export default memo(MetricCardFive);
