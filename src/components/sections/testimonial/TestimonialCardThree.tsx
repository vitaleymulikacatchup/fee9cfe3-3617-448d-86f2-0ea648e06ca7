"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import TestimonialAuthor from "@/components/shared/TestimonialAuthor";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { Quote } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment, TextboxLayout, InvertedBackground } from "@/components/cardStack/types";

type Testimonial = {
    id: string;
    name: string;
    handle: string;
    testimonial: string;
    imageSrc?: string;
    imageAlt?: string;
    icon?: LucideIcon;
};

interface TestimonialCardThreeProps {
    testimonials: Testimonial[];
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
    imageWrapperClassName?: string;
    imageClassName?: string;
    iconClassName?: string;
    nameClassName?: string;
    handleClassName?: string;
    testimonialClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    cardClassName?: string;
    imageWrapperClassName?: string;
    imageClassName?: string;
    iconClassName?: string;
    nameClassName?: string;
    handleClassName?: string;
    testimonialClassName?: string;
}

const TestimonialCard = memo(({
    testimonial,
    useInvertedBackground,
    cardClassName = "",
    imageWrapperClassName = "",
    imageClassName = "",
    iconClassName = "",
    nameClassName = "",
    handleClassName = "",
    testimonialClassName = "",
}: TestimonialCardProps) => {
    const Icon = testimonial.icon || Quote;
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <div className={cls("relative h-full card rounded-theme-capped p-6 flex flex-col gap-5", cardClassName)}>
            <TestimonialAuthor
                name={testimonial.name}
                subtitle={testimonial.handle}
                imageSrc={testimonial.imageSrc}
                imageAlt={testimonial.imageAlt}
                icon={Icon}
                useInvertedBackground={useInvertedBackground}
                imageWrapperClassName={imageWrapperClassName}
                imageClassName={imageClassName}
                iconClassName={iconClassName}
                nameClassName={nameClassName}
                subtitleClassName={handleClassName}
            />

            <p className={cls("relative z-1 text-lg leading-[1.2]", shouldUseLightText ? "text-background" : "text-foreground", testimonialClassName)}>
                {testimonial.testimonial}
            </p>
        </div>
    );
});

TestimonialCard.displayName = "TestimonialCard";

const TestimonialCardThree = ({
    testimonials,
    carouselMode = "buttons",
    uniformGridCustomHeightClasses = "min-h-none",
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
    ariaLabel = "Testimonials section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
  textBoxTitleImageWrapperClassName = "",
  textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    imageWrapperClassName = "",
    imageClassName = "",
    iconClassName = "",
    nameClassName = "",
    handleClassName = "",
    testimonialClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TestimonialCardThreeProps) => {
    return (
        <CardStack
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
            useInvertedBackground={useInvertedBackground}
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
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={`${testimonial.id}-${index}`}
                    testimonial={testimonial}
                    useInvertedBackground={useInvertedBackground}
                    cardClassName={cardClassName}
                    imageWrapperClassName={imageWrapperClassName}
                    imageClassName={imageClassName}
                    iconClassName={iconClassName}
                    nameClassName={nameClassName}
                    handleClassName={handleClassName}
                    testimonialClassName={testimonialClassName}
                />
            ))}
        </CardStack>
    );
};

TestimonialCardThree.displayName = "TestimonialCardThree";

export default memo(TestimonialCardThree);
