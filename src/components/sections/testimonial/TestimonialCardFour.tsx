"use client";

import React, { memo } from "react";
import TimelineHorizontalCardStack from "@/components/cardStack/layouts/timelines/TimelineHorizontalCardStack";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment, TextboxLayout, InvertedBackground } from "@/components/cardStack/types";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    imageAlt?: string;
    videoAriaLabel?: string;
} & (
    | { imageSrc: string; videoSrc?: never }
    | { videoSrc: string; imageSrc?: never }
);

interface TestimonialCardFourProps {
    testimonials: Testimonial[];
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
    textBoxTitleImageWrapperClassName?: string;
    textBoxTitleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    cardClassName?: string;
    progressBarClassName?: string;
    cardContentClassName?: string;
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
    mediaContainerClassName?: string;
    mediaClassName?: string;
}

const TestimonialCardFour = ({
    testimonials,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    useInvertedBackground,
    ariaLabel = "Testimonials section",
    className = "",
    containerClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    cardClassName = "",
    progressBarClassName = "",
    cardContentClassName = "",
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
    mediaContainerClassName = "",
    mediaClassName = "",
}: TestimonialCardFourProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
    const mediaItems = testimonials.map((testimonial) => ({
        imageSrc: testimonial.imageSrc,
        videoSrc: testimonial.videoSrc,
        imageAlt: testimonial.imageAlt || testimonial.name,
        videoAriaLabel: testimonial.videoAriaLabel || testimonial.name,
    }));

    return (
        <TimelineHorizontalCardStack
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            useInvertedBackground={useInvertedBackground}
            mediaItems={mediaItems}
            className={className}
            containerClassName={containerClassName}
            titleClassName={textBoxTitleClassName}
            titleImageWrapperClassName={textBoxTitleImageWrapperClassName}
            titleImageClassName={textBoxTitleImageClassName}
            descriptionClassName={textBoxDescriptionClassName}
            textBoxClassName={textBoxClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            cardClassName={cardClassName}
            progressBarClassName={progressBarClassName}
            mediaContainerClassName={mediaContainerClassName}
            mediaClassName={mediaClassName}
            ariaLabel={ariaLabel}
        >
            {testimonials.map((testimonial, index) => (
                <div
                    key={`${testimonial.id}-${index}`}
                    className={cls("w-full min-h-0 h-fit flex flex-col gap-3", cardContentClassName)}
                >
                    <div className={cls("flex gap-1", ratingClassName)}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className={cls(
                                    "h-5 w-auto text-accent",
                                    index < testimonial.rating ? "fill-accent" : "fill-transparent"
                                )}
                                strokeWidth={1.5}
                            />
                        ))}
                    </div>

                    <h3 className={cls("text-2xl font-medium leading-[1.1] mt-1", shouldUseLightText ? "text-background" : "text-foreground", nameClassName)}>
                        {testimonial.name}
                    </h3>

                    <div className="flex flex-col gap-1">
                        <p className={cls("text-base leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", roleClassName)}>
                            {testimonial.role}
                        </p>
                        <p className={cls("text-base leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", companyClassName)}>
                            {testimonial.company}
                        </p>
                    </div>
                </div>
            ))}
        </TimelineHorizontalCardStack>
    );
};

TestimonialCardFour.displayName = "TestimonialCardFour";

export default memo(TestimonialCardFour);
