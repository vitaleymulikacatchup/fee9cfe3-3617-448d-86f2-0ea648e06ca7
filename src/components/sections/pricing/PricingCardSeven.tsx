"use client";

import React, { memo, useState } from "react";
import CardStack from "@/components/cardStack/CardStack";
import Tag from "@/components/shared/Tag";
import SelectorButton from "@/components/button/SelectorButton";
import Button from "@/components/button/Button";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { getButtonProps } from "@/lib/buttonUtils";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type PricingOption = {
    value: string;
    label: string;
    price: string;
    subtitle: string;
};

type PricingPlan = {
    id: string;
    tag: string;
    tagIcon?: LucideIcon;
    pricingOptions: PricingOption[];
    defaultOption?: string;
    selectorNote?: string;
    description: string;
    buttons: ButtonConfig[];
};

interface PricingCardSevenProps {
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
    planTagClassName?: string;
    priceClassName?: string;
    subtitleClassName?: string;
    selectorClassName?: string;
    selectorNoteClassName?: string;
    planDescriptionClassName?: string;
    planButtonContainerClassName?: string;
    planButtonClassName?: string;
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
    useInvertedBackground: InvertedBackground;
    cardClassName?: string;
    planTagClassName?: string;
    priceClassName?: string;
    subtitleClassName?: string;
    selectorClassName?: string;
    selectorNoteClassName?: string;
    planDescriptionClassName?: string;
    planButtonContainerClassName?: string;
    planButtonClassName?: string;
}

const PricingCardItem = memo(({
    plan,
    shouldUseLightText,
    useInvertedBackground,
    cardClassName = "",
    planTagClassName = "",
    priceClassName = "",
    subtitleClassName = "",
    selectorClassName = "",
    selectorNoteClassName = "",
    planDescriptionClassName = "",
    planButtonContainerClassName = "",
    planButtonClassName = "",
}: PricingCardItemProps) => {
    const theme = useTheme();
    const [activeOption, setActiveOption] = useState(plan.defaultOption || plan.pricingOptions[0]?.value || "");

    const currentPricing = plan.pricingOptions.find(opt => opt.value === activeOption) || plan.pricingOptions[0];

    const getButtonConfigProps = () => {
        if (theme.defaultButtonVariant === "hover-bubble") {
            return { bgClassName: "w-full" };
        }
        if (theme.defaultButtonVariant === "icon-arrow") {
            return { className: "justify-between" };
        }
        return {};
    };

    const selectorOptions = plan.pricingOptions.map(opt => ({
        value: opt.value,
        label: opt.label,
    }));

    return (
        <div className={cls("relative h-full card text-foreground rounded-theme-capped p-6 flex flex-col items-center gap-8 text-center", cardClassName)}>
            <Tag
                text={plan.tag}
                icon={plan.tagIcon}
                useInvertedBackground={useInvertedBackground}
                className={planTagClassName}
            />

            <div className="relative z-1 flex flex-col items-center gap-0">
                <div className={cls("text-5xl md:text-6xl font-medium", shouldUseLightText ? "text-background" : "text-foreground", priceClassName)}>
                    {currentPricing?.price}
                </div>

                <p className={cls("text-sm leading-tight", shouldUseLightText ? "text-background/75" : "text-foreground/75", subtitleClassName)}>
                    {currentPricing?.subtitle}
                </p>
            </div>

            <div className="relative z-1 flex flex-col items-center gap-2">
                <SelectorButton
                    options={selectorOptions}
                    activeValue={activeOption}
                    onValueChange={setActiveOption}
                    className={selectorClassName}
                />

                {plan.selectorNote && (
                    <p className={cls("text-sm", shouldUseLightText ? "text-background/75" : "text-foreground/75", selectorNoteClassName)}>
                        {plan.selectorNote}
                    </p>
                )}
            </div>

            <p className={cls("relative z-1 text-sm text-balance leading-tight", shouldUseLightText ? "text-background/75" : "text-foreground/75", planDescriptionClassName)}>
                {plan.description}
            </p>

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
        </div>
    );
});

PricingCardItem.displayName = "PricingCardItem";

const PricingCardSeven = ({
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
    planTagClassName = "",
    priceClassName = "",
    subtitleClassName = "",
    selectorClassName = "",
    selectorNoteClassName = "",
    planDescriptionClassName = "",
    planButtonContainerClassName = "",
    planButtonClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: PricingCardSevenProps) => {
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
                    useInvertedBackground={useInvertedBackground}
                    cardClassName={cardClassName}
                    planTagClassName={planTagClassName}
                    priceClassName={priceClassName}
                    subtitleClassName={subtitleClassName}
                    selectorClassName={selectorClassName}
                    selectorNoteClassName={selectorNoteClassName}
                    planDescriptionClassName={planDescriptionClassName}
                    planButtonContainerClassName={planButtonContainerClassName}
                    planButtonClassName={planButtonClassName}
                />
            ))}
        </CardStack>
    );
};

PricingCardSeven.displayName = "PricingCardSeven";

export default memo(PricingCardSeven);
