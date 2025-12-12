"use client";

import { memo } from "react";
import { Star } from "lucide-react";
import FullWidthCarousel from "@/components/cardStack/layouts/carousels/FullWidthCarousel";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment, TextboxLayout, InvertedBackground } from "@/components/cardStack/types";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface TestimonialCardEightProps {
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
    cardClassName?: string;
    textBoxTitleClassName?: string;
    textBoxTitleImageWrapperClassName?: string;
    textBoxTitleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    cardImageClassName?: string;
    cardContentClassName?: string;
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
    carouselClassName?: string;
    dotsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    shouldUseLightText: boolean;
    cardClassName?: string;
    imageClassName?: string;
    cardContentClassName?: string;
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
}

const TestimonialCard = memo(({
    testimonial,
    shouldUseLightText,
    cardClassName = "",
    imageClassName = "",
    cardContentClassName = "",
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
}: TestimonialCardProps) => {
    return (
        <div className={cls("relative h-full w-full rounded-theme-capped overflow-hidden", cardClassName)}>
            <MediaContent
                imageSrc={testimonial.imageSrc}
                videoSrc={testimonial.videoSrc}
                imageAlt={testimonial.imageAlt}
                videoAriaLabel={testimonial.videoAriaLabel}
                imageClassName={cls("relative w-full h-full aspect-[10/16] md:aspect-video object-cover !rounded-none", imageClassName)}
            />
            <div className={cls("absolute! md:w-20 card backdrop-blur-xs rounded-theme-capped bottom-8 left-8 right-8 md:right-auto p-6", cardContentClassName)}>
                <div className="w-full min-w-0 flex flex-col gap-1">
                    <div className={cls("relative z-1 flex gap-1", ratingClassName)}>
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

                    <h3 className={cls("relative z-1 text-2xl font-medium leading-[1.1] mt-1", shouldUseLightText ? "text-background" : "text-foreground", nameClassName)}>
                        {testimonial.name}
                    </h3>

                    <div className="relative z-1 flex flex-col gap-1">
                        <p className={cls("text-base leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", roleClassName)}>
                            {testimonial.role}
                        </p>
                        <p className={cls("text-base leading-[1.1]", shouldUseLightText ? "text-background" : "text-foreground", companyClassName)}>
                            {testimonial.company}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

TestimonialCard.displayName = "TestimonialCard";

const TestimonialCardEight = ({
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
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    cardImageClassName = "",
    cardContentClassName = "",
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
    carouselClassName = "",
    dotsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TestimonialCardEightProps) => {
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
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    shouldUseLightText={shouldUseLightText}
                    cardClassName={cardClassName}
                    imageClassName={cardImageClassName}
                    cardContentClassName={cardContentClassName}
                    ratingClassName={ratingClassName}
                    nameClassName={nameClassName}
                    roleClassName={roleClassName}
                    companyClassName={companyClassName}
                />
            ))}
        </FullWidthCarousel>
    );
};

TestimonialCardEight.displayName = "TestimonialCardEight";

export default memo(TestimonialCardEight);
