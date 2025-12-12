"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import { cls } from "@/lib/utils";
import { Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, GridVariant, ContainerStyle, TitleSegment, TextboxLayout, InvertedBackground } from "@/components/cardStack/types";

type Testimonial = {
    id: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    imageSrc: string;
    imageAlt?: string;
};

interface TestimonialCardOneProps {
    testimonials: Testimonial[];
    carouselMode?: "auto" | "buttons";
    uniformGridCustomHeightClasses?: string;
    gridVariant: GridVariant;
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
    imageClassName?: string;
    overlayClassName?: string;
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
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
    cardClassName?: string;
    imageClassName?: string;
    overlayClassName?: string;
    ratingClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    companyClassName?: string;
}

const TestimonialCard = memo(({
    testimonial,
    cardClassName = "",
    imageClassName = "",
    overlayClassName = "",
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
}: TestimonialCardProps) => {
    return (
        <div className={cls("relative h-full rounded-theme-capped overflow-hidden group", cardClassName)}>
            <Image
                src={testimonial.imageSrc}
                alt={testimonial.imageAlt || testimonial.name}
                width={800}
                height={800}
                className={cls("relative z-1 w-full h-full object-cover!", imageClassName)}
                unoptimized={testimonial.imageSrc.startsWith('http') || testimonial.imageSrc.startsWith('//')}
                aria-hidden={testimonial.imageAlt === ""}
            />

            <div className={cls("!absolute z-1 bottom-6 left-6 right-6 card p-6 flex flex-col gap-3 rounded-theme-capped", overlayClassName)}>
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

                <h3 className={cls("relative z-1 text-2xl font-medium text-foreground leading-[1.1] mt-1", nameClassName)}>
                    {testimonial.name}
                </h3>

                <div className="relative z-1 flex flex-col gap-1">
                    <p className={cls("text-base text-foreground leading-[1.1]", roleClassName)}>
                        {testimonial.role}
                    </p>
                    <p className={cls("text-base text-foreground leading-[1.1]", companyClassName)}>
                        {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    );
});

TestimonialCard.displayName = "TestimonialCard";

const TestimonialCardOne = ({
    testimonials,
    carouselMode = "buttons",
    uniformGridCustomHeightClasses = "min-h-95 2xl:min-h-105",
    gridVariant,
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
    imageClassName = "",
    overlayClassName = "",
    ratingClassName = "",
    nameClassName = "",
    roleClassName = "",
    companyClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TestimonialCardOneProps) => {
    return (
        <CardStack
            mode={carouselMode}
            gridVariant={gridVariant}
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
                    cardClassName={cardClassName}
                    imageClassName={imageClassName}
                    overlayClassName={overlayClassName}
                    ratingClassName={ratingClassName}
                    nameClassName={nameClassName}
                    roleClassName={roleClassName}
                    companyClassName={companyClassName}
                />
            ))}
        </CardStack>
    );
};

TestimonialCardOne.displayName = "TestimonialCardOne";

export default memo(TestimonialCardOne);
