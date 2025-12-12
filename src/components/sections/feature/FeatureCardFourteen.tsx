"use client";

import { memo } from "react";
import FullWidthCarousel from "@/components/cardStack/layouts/carousels/FullWidthCarousel";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment, TextboxLayout, InvertedBackground } from "@/components/cardStack/types";

type Feature = {
    id: string;
    title: string;
    description: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface FeatureCardFourteenProps {
    features: Feature[];
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
    cardImageClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    cardContentClassName?: string;
    carouselClassName?: string;
    dotsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface FeatureCardProps {
    feature: Feature;
    shouldUseLightText: boolean;
    cardClassName?: string;
    imageClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    cardContentClassName?: string;
}

const FeatureCard = memo(({
    feature,
    shouldUseLightText,
    cardClassName = "",
    imageClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    cardContentClassName = "",
}: FeatureCardProps) => {
    return (
        <div className={cls("relative h-full w-full rounded-theme-capped overflow-hidden", cardClassName)}>
            <MediaContent
                imageSrc={feature.imageSrc}
                videoSrc={feature.videoSrc}
                imageAlt={feature.imageAlt}
                videoAriaLabel={feature.videoAriaLabel}
                imageClassName={cls("relative w-full h-full aspect-[10/16] md:aspect-video object-cover !rounded-none", imageClassName)}
            />
            <div className={cls("absolute! md:max-w-[var(--width-30)] card backdrop-blur-xs rounded-theme-capped bottom-8 left-8 right-8 md:right-auto p-6", cardContentClassName)}>
                <div className="w-full min-w-0 flex flex-col gap-1">
                    <h2 className={cls("text-3xl md:text-4xl font-medium leading-[1.15] text-balance truncate", shouldUseLightText && "text-background", cardTitleClassName)}>
                        {feature.title}
                    </h2>
                    <p className={cls("text-base leading-[1.15] text-balance truncate", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName)}>
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
});

FeatureCard.displayName = "FeatureCard";

const FeatureCardFourteen = ({
    features,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    useInvertedBackground,
    ariaLabel = "Features section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    cardImageClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    cardContentClassName = "",
    carouselClassName = "",
    dotsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: FeatureCardFourteenProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <FullWidthCarousel
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
            carouselClassName={carouselClassName}
            dotsClassName={dotsClassName}
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
            {features.map((feature, index) => (
                <FeatureCard
                    key={`${feature.id}-${index}`}
                    feature={feature}
                    shouldUseLightText={shouldUseLightText}
                    cardClassName={cardClassName}
                    imageClassName={cardImageClassName}
                    cardTitleClassName={cardTitleClassName}
                    cardDescriptionClassName={cardDescriptionClassName}
                    cardContentClassName={cardContentClassName}
                />
            ))}
        </FullWidthCarousel>
    );
};

FeatureCardFourteen.displayName = "FeatureCardFourteen";

export default memo(FeatureCardFourteen);
