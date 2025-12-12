"use client";

import React, { memo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import MediaContent from "@/components/shared/MediaContent";
import AnimationContainer from "@/components/sections/AnimationContainer";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface Testimonial {
    id: string;
    title: string;
    quote: string;
    name: string;
    role: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
}

interface TestimonialCardTenProps {
    testimonials: Testimonial[];
    variant: "card" | "border";
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
    contentClassName?: string;
    quoteCardClassName?: string;
    testimonialTitleClassName?: string;
    quoteClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    navigationClassName?: string;
    navigationButtonClassName?: string;
    mediaCardClassName?: string;
    mediaClassName?: string;
}

const TestimonialCardTen = ({
    testimonials,
    variant,
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
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    contentClassName = "",
    quoteCardClassName = "",
    testimonialTitleClassName = "",
    quoteClassName = "",
    nameClassName = "",
    roleClassName = "",
    navigationClassName = "",
    navigationButtonClassName = "",
    mediaCardClassName = "",
    mediaClassName = "",
}: TestimonialCardTenProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const activeTestimonial = testimonials[activeIndex];

    return (
        <section
            aria-label={ariaLabel}
            className={cls(
                "relative py-20",
                useInvertedBackground === "invertCard"
                    ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
                    : "w-full",
                useInvertedBackground === "invertDefault" && "bg-foreground",
                className
            )}
        >
            <div className={cls("w-content-width mx-auto flex flex-col gap-10", containerClassName)}>
                <CardStackTextBox
                    title={title}
                    titleSegments={titleSegments}
                    description={description}
                    tag={tag}
                    tagIcon={tagIcon}
                    buttons={buttons}
                    textboxLayout={textboxLayout}
                    useInvertedBackground={useInvertedBackground}
                    textBoxClassName={textBoxClassName}
                    titleClassName={textBoxTitleClassName}
                    titleImageWrapperClassName={titleImageWrapperClassName}
                    titleImageClassName={titleImageClassName}
                    descriptionClassName={textBoxDescriptionClassName}
                    tagClassName={textBoxTagClassName}
                    buttonContainerClassName={textBoxButtonContainerClassName}
                    buttonClassName={textBoxButtonClassName}
                    buttonTextClassName={textBoxButtonTextClassName}
                />

                <div className={cls(
                    "grid grid-cols-1 gap-6",
                    variant === "border" ? "md:grid-cols-[1fr_1px_1fr] md:gap-10" : "md:grid-cols-2",
                    contentClassName
                )}>
                    {variant === "border" && (
                        <div className={cls(
                            "w-full h-px md:hidden",
                            useInvertedBackground !== "noInvert" ? "bg-background/20" : "bg-foreground/20"
                        )} />
                    )}

                    <div className={cls(
                        "flex flex-col justify-between gap-6",
                        variant === "card" && "card rounded-theme-capped p-6 md:p-10",
                        quoteCardClassName
                    )}>
                        <AnimationContainer key={activeIndex} animationType="fade" className="relative z-1 flex flex-col justify-between gap-6 flex-1">
                            <div className="flex flex-col gap-3">
                                <h3 className={cls(
                                    "text-2xl md:text-3xl font-medium leading-tight",
                                    variant === "card"
                                        ? (shouldUseLightText ? "text-background" : "text-foreground")
                                        : (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground"),
                                    testimonialTitleClassName
                                )}>
                                    {activeTestimonial.title}
                                </h3>

                                <blockquote className={cls(
                                    "text-base md:text-lg leading-tight",
                                    variant === "card"
                                        ? (shouldUseLightText ? "text-background/75" : "text-foreground/75")
                                        : (useInvertedBackground !== "noInvert" ? "text-background/75" : "text-foreground/75"),
                                    quoteClassName
                                )}>
                                    &ldquo;{activeTestimonial.quote}&rdquo;
                                </blockquote>
                            </div>

                            <div className={cls(
                                "w-full h-px md:hidden",
                                variant === "card"
                                    ? (shouldUseLightText ? "bg-background/20" : "bg-foreground/20")
                                    : (useInvertedBackground !== "noInvert" ? "bg-background/20" : "bg-foreground/20")
                            )} />

                            <div className={cls("flex items-center justify-between gap-4", navigationClassName)}>
                                <div className="flex flex-col">
                                    <p className={cls(
                                        "text-base leading-tight font-medium",
                                        variant === "card"
                                            ? (shouldUseLightText ? "text-background" : "text-foreground")
                                            : (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground"),
                                        nameClassName
                                    )}>
                                        {activeTestimonial.name}
                                    </p>
                                    <p className={cls(
                                        "text-sm leading-tight",
                                        variant === "card"
                                            ? (shouldUseLightText ? "text-background/75" : "text-foreground/75")
                                            : (useInvertedBackground !== "noInvert" ? "text-background/75" : "text-foreground/75"),
                                        roleClassName
                                    )}>
                                        {activeTestimonial.role}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={handlePrev}
                                        aria-label="Previous testimonial"
                                        className={cls(
                                            "relative cursor-pointer h-9 w-auto aspect-square rounded-theme flex items-center justify-center primary-button",
                                            navigationButtonClassName
                                        )}
                                    >
                                        <ArrowLeft className="h-4/10 w-4/10 text-background" strokeWidth={1.5} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        aria-label="Next testimonial"
                                        className={cls(
                                            "relative cursor-pointer h-9 w-auto aspect-square rounded-theme flex items-center justify-center primary-button",
                                            navigationButtonClassName
                                        )}
                                    >
                                        <ArrowRight className="h-4/10 w-4/10 text-background" strokeWidth={1.5} />
                                    </button>
                                </div>
                            </div>
                        </AnimationContainer>
                    </div>

                    {variant === "border" && (
                        <div className={cls(
                            "w-full h-px md:w-px md:h-auto md:self-stretch",
                            useInvertedBackground !== "noInvert" ? "bg-background/20" : "bg-foreground/20"
                        )} />
                    )}

                    <div className={cls("rounded-theme-capped overflow-hidden", mediaCardClassName)}>
                        <AnimationContainer key={activeIndex} animationType="fade">
                            <MediaContent
                                imageSrc={activeTestimonial.imageSrc}
                                videoSrc={activeTestimonial.videoSrc}
                                imageAlt={activeTestimonial.imageAlt || activeTestimonial.name}
                                videoAriaLabel={activeTestimonial.videoAriaLabel || activeTestimonial.name}
                                imageClassName={cls("w-full h-full aspect-square object-cover", mediaClassName)}
                            />
                        </AnimationContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

TestimonialCardTen.displayName = "TestimonialCardTen";

export default memo(TestimonialCardTen);
