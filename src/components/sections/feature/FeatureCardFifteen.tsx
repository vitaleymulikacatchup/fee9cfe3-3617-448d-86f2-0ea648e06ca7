"use client";

import React, { memo } from "react";
import AutoCarousel from "@/components/cardStack/layouts/carousels/AutoCarousel";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { CardAnimationType, ButtonConfig, TitleSegment, TextboxLayout, InvertedBackground } from "@/components/cardStack/types";

type Feature = {
    id: string;
    title: string;
    description: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface FeatureCardFifteenProps {
    features: Feature[];
    animationType: CardAnimationType;
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    speed?: number;
    topMarqueeDirection?: "left" | "right";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    bottomCarouselClassName?: string;
    cardClassName?: string;
    mediaClassName?: string;
    featureTitleClassName?: string;
    featureDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTitleClassName?: string;
    textBoxTitleImageWrapperClassName?: string;
    textBoxTitleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface FeatureCardProps {
    feature: Feature;
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    cardClassName?: string;
    mediaClassName?: string;
    featureTitleClassName?: string;
    featureDescriptionClassName?: string;
}

const FeatureCard = memo(({
    feature,
    useInvertedBackground,
    cardClassName = "",
    mediaClassName = "",
    featureTitleClassName = "",
    featureDescriptionClassName = "",
}: FeatureCardProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <div className={cls("relative h-full min-h-0 flex flex-col gap-4", cardClassName)}>
            <MediaContent
                imageSrc={feature.imageSrc}
                videoSrc={feature.videoSrc}
                imageAlt={feature.imageAlt || feature.title}
                videoAriaLabel={feature.videoAriaLabel || feature.title}
                imageClassName={cls("w-full aspect-square object-cover rounded-theme", mediaClassName)}
            />
            <div className="flex flex-col gap-1">
                <h3 className={cls("relative z-1 text-lg font-medium leading-tight", shouldUseLightText ? "text-background" : "text-foreground", featureTitleClassName)}>
                    {feature.title}
                </h3>
                <p className={cls("relative z-1 text-base leading-tight truncate", shouldUseLightText ? "text-background/75" : "text-foreground/75", featureDescriptionClassName)}>
                    {feature.description}
                </p>
            </div>
        </div>
    );
});

FeatureCard.displayName = "FeatureCard";

const FeatureCardFifteen = ({
    features,
    animationType,
    title,
    titleSegments,
    description,
    textboxLayout,
    useInvertedBackground,
    tag,
    tagIcon,
    buttons,
    speed = 40,
    topMarqueeDirection = "left",
    ariaLabel = "Features section",
    className = "",
    containerClassName = "",
    carouselClassName = "",
    bottomCarouselClassName = "",
    cardClassName = "",
    mediaClassName = "",
    featureTitleClassName = "",
    featureDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: FeatureCardFifteenProps) => {
    return (
        <AutoCarousel
            speed={speed}
            uniformGridCustomHeightClasses="min-h-none"
            animationType={animationType}
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            useInvertedBackground={useInvertedBackground}
            showTextBox={true}
            dualMarquee={true}
            topMarqueeDirection={topMarqueeDirection}
            carouselClassName={carouselClassName}
            bottomCarouselClassName={bottomCarouselClassName}
            marqueeGapClassName="gap-8"
            containerClassName={containerClassName}
            className={className}
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
            itemClassName="w-60! md:w-carousel-item-3! xl:w-carousel-item-4!"
        >
            {features.map((feature, index) => (
                <FeatureCard
                    key={`${feature.id}-${index}`}
                    feature={feature}
                    useInvertedBackground={useInvertedBackground}
                    cardClassName={cardClassName}
                    mediaClassName={mediaClassName}
                    featureTitleClassName={featureTitleClassName}
                    featureDescriptionClassName={featureDescriptionClassName}
                />
            ))}
        </AutoCarousel>
    );
};

FeatureCardFifteen.displayName = "FeatureCardFifteen";

export default memo(FeatureCardFifteen);
