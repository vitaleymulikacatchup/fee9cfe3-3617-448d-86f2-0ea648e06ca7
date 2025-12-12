"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import PricingFeatureList from "@/components/shared/PricingFeatureList";
import Button from "@/components/button/Button";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { getButtonProps } from "@/lib/buttonUtils";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type PricingPlan = {
    id: string;
    price: string;
    subtitle: string;
    features: string[];
    buttons: ButtonConfig[];
    bottomNotes?: string[];
};

interface PricingCardSixProps {
    plans: PricingPlan[];
    carouselMode?: "auto" | "buttons";
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
    priceClassName?: string;
    subtitleClassName?: string;
    featuresClassName?: string;
    featureItemClassName?: string;
    planButtonContainerClassName?: string;
    planButtonClassName?: string;
    bottomNotesContainerClassName?: string;
    bottomNoteClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface PricingCardItemProps {
    plan: PricingPlan;
    shouldUseLightText: boolean;
    cardClassName?: string;
    priceClassName?: string;
    subtitleClassName?: string;
    featuresClassName?: string;
    featureItemClassName?: string;
    planButtonContainerClassName?: string;
    planButtonClassName?: string;
    bottomNotesContainerClassName?: string;
    bottomNoteClassName?: string;
}

const PricingCardItem = memo(({
    plan,
    shouldUseLightText,
    cardClassName = "",
    priceClassName = "",
    subtitleClassName = "",
    featuresClassName = "",
    featureItemClassName = "",
    planButtonContainerClassName = "",
    planButtonClassName = "",
    bottomNotesContainerClassName = "",
    bottomNoteClassName = "",
}: PricingCardItemProps) => {
    const theme = useTheme();

    const getButtonConfigProps = () => {
        if (theme.defaultButtonVariant === "hover-bubble") {
            return { bgClassName: "w-full" };
        }
        if (theme.defaultButtonVariant === "icon-arrow") {
            return { className: "justify-between" };
        }
        return {};
    };

    return (
        <div className={cls("relative h-full card text-foreground rounded-theme-capped p-6 flex flex-col gap-10 justify-between", cardClassName)}>
            <div className="relative z-1 flex flex-col gap-2">
                <div className={cls("text-4xl md:text-5xl font-medium", shouldUseLightText ? "text-background" : "text-foreground", priceClassName)}>
                    {plan.price}
                </div>

                <p className={cls("text-base leading-tight line-clamp-2", shouldUseLightText ? "text-background/75" : "text-foreground/75", subtitleClassName)}>
                    {plan.subtitle}
                </p>
            </div>

            <PricingFeatureList
                features={plan.features}
                shouldUseLightText={shouldUseLightText}
                className={featuresClassName}
                featureItemClassName={featureItemClassName}
            />

            <div className="flex flex-col gap-3">
                {plan.buttons && plan.buttons.length > 0 && (
                    <div className={cls("relative z-1 w-full flex flex-col gap-3", planButtonContainerClassName)}>
                        {plan.buttons.slice(0, 2).map((button, index) => (
                            <Button
                                key={`${button.text}-${index}`}
                                {...getButtonProps(
                                    { ...button, props: { ...button.props, ...getButtonConfigProps() } },
                                    index,
                                    theme.defaultButtonVariant,
                                    cls("w-full", planButtonClassName)
                                )}
                            />
                        ))}
                    </div>
                )}

                {plan.bottomNotes && plan.bottomNotes.length > 0 && (
                    <div className={cls("relative z-1 flex flex-wrap items-center gap-x-4 gap-y-2", bottomNotesContainerClassName)}>
                        {plan.bottomNotes.map((note, index) => (
                            <div
                                key={index}
                                className={cls("flex items-center gap-2 text-sm", shouldUseLightText ? "text-background/75" : "text-foreground/75", bottomNoteClassName)}
                            >
                                <span>•</span>
                                <span>{note}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
});

PricingCardItem.displayName = "PricingCardItem";

const PricingCardSix = ({
    plans,
    carouselMode = "buttons",
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
    ariaLabel = "Pricing section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    priceClassName = "",
    subtitleClassName = "",
    featuresClassName = "",
    featureItemClassName = "",
    planButtonContainerClassName = "",
    planButtonClassName = "",
    bottomNotesContainerClassName = "",
    bottomNoteClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: PricingCardSixProps) => {
    const theme = useTheme();
    const shouldUseLightText =
        containerStyle === "card"
            ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
            : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <CardStack
            useInvertedBackground={useInvertedBackground}
            mode={carouselMode}
            gridVariant="uniform-all-items-equal"
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
            {plans.map((plan, index) => (
                <PricingCardItem
                    key={`${plan.id}-${index}`}
                    plan={plan}
                    shouldUseLightText={shouldUseLightText}
                    cardClassName={cardClassName}
                    priceClassName={priceClassName}
                    subtitleClassName={subtitleClassName}
                    featuresClassName={featuresClassName}
                    featureItemClassName={featureItemClassName}
                    planButtonContainerClassName={planButtonContainerClassName}
                    planButtonClassName={planButtonClassName}
                    bottomNotesContainerClassName={bottomNotesContainerClassName}
                    bottomNoteClassName={bottomNoteClassName}
                />
            ))}
        </CardStack>
    );
};

PricingCardSix.displayName = "PricingCardSix";

export default memo(PricingCardSix);
