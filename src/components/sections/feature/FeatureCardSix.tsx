"use client";

import React, { memo } from "react";
import TimelineCardStack from "@/components/cardStack/layouts/timelines/TimelineCardStack";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
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

interface FeatureCardSixProps {
    features: FeatureCard[];
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
    stepNumberClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    imageContainerClassName?: string;
    imageClassName?: string;
}

const FeatureCardSix = ({
    features,
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
    stepNumberClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    imageContainerClassName = "",
    imageClassName = "",
}: FeatureCardSixProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <TimelineCardStack
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
            {features.map((feature) => (
                <div
                    key={feature.id}
                    className={cls("relative z-1 w-full min-h-0 h-full flex flex-col md:flex-row justify-between items-center p-10 gap-10 md:p-15 md:gap-15", cardContentClassName)}
                >
                    <div className="w-full md:w-1/2 min-w-0 h-fit md:h-full flex flex-col justify-center">
                        <div className="w-full min-w-0 flex flex-col gap-3 md:gap-5">
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
                            <h2 className={cls("mt-1 text-4xl md:text-5xl font-medium leading-[1.15] text-balance truncate", shouldUseLightText && "text-background", cardTitleClassName)}>
                                {feature.title}
                            </h2>
                            <p className={cls("text-base leading-[1.15] text-balance truncate", shouldUseLightText ? "text-background" : "text-foreground", cardDescriptionClassName)}>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                    <div
                        className={cls(
                            "relative z-1 w-full md:w-1/2 min-h-0 h-full overflow-hidden rounded-theme-capped",
                            imageContainerClassName
                        )}
                    >
                        <MediaContent
                            imageSrc={feature.imageSrc}
                            videoSrc={feature.videoSrc}
                            imageAlt={feature.imageAlt || feature.title}
                            videoAriaLabel={feature.videoAriaLabel || feature.title}
                            imageClassName={cls("w-full min-h-0 h-full object-cover", imageClassName)}
                        />
                    </div>
                </div>
            ))}
        </TimelineCardStack>
    );
};

FeatureCardSix.displayName = "FeatureCardSix";

export default memo(FeatureCardSix);
