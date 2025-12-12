"use client";

import React, { memo } from "react";
import CardList from "@/components/cardStack/CardList";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureCard = {
    id: number;
    title: string;
    description: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface FeatureCardElevenProps {
    features: FeatureCard[];
    animationType: CardAnimationType;
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    usePrimaryButtonImage: boolean;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
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
    textCardClassName?: string;
    imageCardClassName?: string;
    stepNumberClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    imageClassName?: string;
}

const FeatureCardEleven = ({
    features,
    animationType,
    title,
    titleSegments,
    description,
    textboxLayout,
    useInvertedBackground,
    usePrimaryButtonImage,
    tag,
    tagIcon,
    buttons,
    ariaLabel = "Feature section",
    className = "",
    containerClassName = "",
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
    textCardClassName = "",
    imageCardClassName = "",
    stepNumberClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    imageClassName = "",
}: FeatureCardElevenProps) => {
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
            useInvertedBackground={useInvertedBackground}
            disableCardWrapper={true}
            className={className}
            containerClassName={containerClassName}
            cardClassName=""
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
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className={cls("w-full min-h-0 h-full flex flex-col justify-between items-center gap-6", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse", cardContentClassName)}
                >
                    <div className={cls("w-full md:w-1/2 min-w-0 h-fit md:h-full md:aspect-square card rounded-theme-capped p-6 md:p-15 flex flex-col justify-center", textCardClassName)}>
                        <div className="relative z-1 w-full min-w-0 flex flex-col gap-3 md:gap-5">
                            <div
                                className={cls(
                                    "h-8 w-[var(--height-8)] primary-button text-background rounded-full flex items-center justify-center",
                                    stepNumberClassName
                                )}
                            >
                                <p className="text-sm truncate">
                                    {feature.id}
                                </p>
                            </div>
                            <h2 className={cls("mt-1 text-4xl md:text-5xl font-medium leading-[1.15] text-balance", shouldUseLightText && "text-background", cardTitleClassName)}>
                                {feature.title}
                            </h2>
                            <p className={cls("text-base leading-[1.15] text-balance", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName)}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                    <div
                        className={cls(
                            "relative w-full md:w-1/2 aspect-square overflow-hidden rounded-theme-capped",
                            usePrimaryButtonImage ? "primary-button p-10 md:p-20" : "card",
                            imageCardClassName
                        )}
                    >
                        <MediaContent
                            imageSrc={feature.imageSrc}
                            videoSrc={feature.videoSrc}
                            imageAlt={feature.imageAlt || feature.title}
                            videoAriaLabel={feature.videoAriaLabel || feature.title}
                            imageClassName={cls("relative z-1 w-full h-full object-cover", imageClassName)}
                        />
                    </div>
                </div>
            ))}
        </CardList>
    );
};

FeatureCardEleven.displayName = "FeatureCardEleven";

export default memo(FeatureCardEleven);
