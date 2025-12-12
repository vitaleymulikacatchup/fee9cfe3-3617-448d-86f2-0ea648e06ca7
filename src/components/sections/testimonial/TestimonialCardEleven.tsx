"use client";

import { memo } from "react";
import FullWidthCarousel from "@/components/cardStack/layouts/carousels/FullWidthCarousel";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment, TextboxLayout, InvertedBackground } from "@/components/cardStack/types";

const MASK_GRADIENT = "linear-gradient(to bottom, transparent, black 60%)";

type Testimonial = {
    id: string;
    nameTitle: string;
    quote: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface TestimonialCardElevenProps {
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
    cardTitleClassName?: string;
    cardQuoteClassName?: string;
    cardImageClassName?: string;
    carouselClassName?: string;
    dotsClassName?: string;
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

interface TestimonialCardProps {
    testimonial: Testimonial;
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    isActive?: boolean;
    cardClassName?: string;
    titleClassName?: string;
    quoteClassName?: string;
    imageClassName?: string;
}

const TestimonialCard = memo(({
    testimonial,
    useInvertedBackground,
    isActive = false,
    cardClassName = "",
    titleClassName = "",
    quoteClassName = "",
    imageClassName = "",
}: TestimonialCardProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <div className="flex flex-col">
            <div className={cls("card aspect-square md:aspect-video rounded-theme-capped overflow-hidden relative flex items-end p-6 md:p-8", cardClassName)}>
                <div className={cls("absolute inset-0 z-10 backdrop-blur-xs bg-background/10 transition-opacity duration-500", isActive ? "opacity-0" : "opacity-100")} />
                <MediaContent
                    imageSrc={testimonial.imageSrc}
                    videoSrc={testimonial.videoSrc}
                    imageAlt={testimonial.imageAlt}
                    videoAriaLabel={testimonial.videoAriaLabel}
                    imageClassName={cls("!absolute inset-0 w-full h-full object-cover !rounded-none", imageClassName)}
                />
                <div
                    className="absolute left-0 right-0 bottom-0 h-1/2 backdrop-blur-xl opacity-100"
                    style={{ maskImage: MASK_GRADIENT }}
                    aria-hidden="true"
                />
                <blockquote className={cls("relative z-0 text-lg md:text-2xl text-balance font-medium leading-tight line-clamp-2 text-background", quoteClassName)}>
                    {testimonial.quote}
                </blockquote>
            </div>
            <h3 className={cls("text-base md:text-xl text-balance font-medium leading-tight mt-4", shouldUseLightText ? "text-background" : "text-foreground", titleClassName)}>
                {testimonial.nameTitle}
            </h3>
        </div>
    );
});

TestimonialCard.displayName = "TestimonialCard";

const TestimonialCardEleven = ({
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
    cardTitleClassName = "",
    cardQuoteClassName = "",
    cardImageClassName = "",
    carouselClassName = "",
    dotsClassName = "",
    textBoxClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TestimonialCardElevenProps) => {
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
                    useInvertedBackground={useInvertedBackground}
                    cardClassName={cardClassName}
                    titleClassName={cardTitleClassName}
                    quoteClassName={cardQuoteClassName}
                    imageClassName={cardImageClassName}
                />
            ))}
        </FullWidthCarousel>
    );
};

TestimonialCardEleven.displayName = "TestimonialCardEleven";

export default memo(TestimonialCardEleven);
