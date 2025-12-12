"use client";

import React, { memo } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import PricingFeatureList from "@/components/shared/PricingFeatureList";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { Check, X } from "lucide-react";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type ComparisonItem = {
    title: string;
    items: string[];
};

interface FeatureCardSixteenProps {
    negativeCard: ComparisonItem;
    positiveCard: ComparisonItem;
    animationType: CardAnimationType;
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textBoxTitleClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    gridClassName?: string;
    cardClassName?: string;
    cardTitleClassName?: string;
    itemsListClassName?: string;
    itemClassName?: string;
    itemIconClassName?: string;
    itemTextClassName?: string;
}

const FeatureCardSixteen = ({
    negativeCard,
    positiveCard,
    animationType,
    title,
    titleSegments,
    description,
    textboxLayout,
    useInvertedBackground,
    tag,
    tagIcon,
    buttons,
    ariaLabel = "Feature comparison section",
    className = "",
    containerClassName = "",
    textBoxTitleClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    gridClassName = "",
    cardClassName = "",
    cardTitleClassName = "",
    itemsListClassName = "",
    itemClassName = "",
    itemIconClassName = "",
    itemTextClassName = "",
}: FeatureCardSixteenProps) => {
    const theme = useTheme();
    const shouldCardUseLightText = shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle);
    const { itemRefs } = useCardAnimation({ animationType, itemCount: 2 });

    const cards = [
        { ...negativeCard, variant: "negative" as const },
        { ...positiveCard, variant: "positive" as const },
    ];

    return (
        <section
            aria-label={ariaLabel}
            className={cls(
                "relative py-20",
                useInvertedBackground === "invertCard"
                    ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
                    : "w-full",
                useInvertedBackground === "invertDefault" && "bg-foreground",
                className
            )}
        >
            <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
                <CardStackTextBox
                    title={title}
                    titleSegments={titleSegments}
                    description={description}
                    tag={tag}
                    tagIcon={tagIcon}
                    buttons={buttons}
                    textboxLayout={textboxLayout}
                    useInvertedBackground={useInvertedBackground}
                    textBoxClassName={textBoxClassName}
                    titleClassName={textBoxTitleClassName}
                    titleImageWrapperClassName={titleImageWrapperClassName}
                    titleImageClassName={titleImageClassName}
                    descriptionClassName={textBoxDescriptionClassName}
                    tagClassName={textBoxTagClassName}
                    buttonContainerClassName={textBoxButtonContainerClassName}
                    buttonClassName={textBoxButtonClassName}
                    buttonTextClassName={textBoxButtonTextClassName}
                />

                <div className={cls(
                    "relative mx-auto w-full md:w-60 grid grid-cols-1 gap-6",
                    cards.length >= 2 ? "md:grid-cols-2" : "md:grid-cols-1",
                    gridClassName
                )}>
                    {cards.map((card, index) => (
                        <div
                            key={card.variant}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            className={cls(
                                "relative h-full card rounded-theme-capped p-6",
                                cardClassName
                            )}
                        >
                            <div className={cls("flex flex-col gap-6", card.variant === "negative" && "opacity-50")}>
                                <h3 className={cls(
                                    "text-3xl text-center font-medium",
                                    shouldCardUseLightText ? "text-background" : "text-foreground",
                                    cardTitleClassName
                                )}>
                                    {card.title}
                                </h3>
                                <PricingFeatureList
                                    features={card.items}
                                    icon={card.variant === "positive" ? Check : X}
                                    shouldUseLightText={shouldCardUseLightText}
                                    className={itemsListClassName}
                                    featureItemClassName={itemClassName}
                                    featureIconWrapperClassName=""
                                    featureIconClassName={itemIconClassName}
                                    featureTextClassName={cls("truncate", itemTextClassName)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

FeatureCardSixteen.displayName = "FeatureCardSixteen";

export default memo(FeatureCardSixteen);
