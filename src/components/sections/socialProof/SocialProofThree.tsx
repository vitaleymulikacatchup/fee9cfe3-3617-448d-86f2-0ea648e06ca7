"use client";

import React, { memo } from "react";
import Image from "next/image";
import AutoCarousel from "@/components/cardStack/layouts/carousels/AutoCarousel";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { CardAnimationType, ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface SocialProofThreeProps {
    logos: string[];
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
    logoCardClassName?: string;
    logoImageClassName?: string;
    textBoxClassName?: string;
    textBoxTitleClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
}

interface LogoCardProps {
    src: string;
    index: number;
    logoCardClassName?: string;
    logoImageClassName?: string;
}

const LogoCard = memo(({
    src,
    index,
    logoCardClassName = "",
    logoImageClassName = "",
}: LogoCardProps) => {
    return (
        <div className={cls("h-full card rounded-theme flex items-center justify-center", logoCardClassName)}>
            <Image
                width={500}
                height={500}
                src={src}
                alt={`Partner ${index + 1}`}
                className={cls("relative z-1 h-1/2 w-1/2", logoImageClassName)}
                unoptimized={src.startsWith('http') || src.startsWith('//')}
            />
        </div>
    );
});

LogoCard.displayName = "LogoCard";

const SocialProofThree = ({
    logos,
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
    ariaLabel = "Social proof section",
    className = "",
    containerClassName = "",
    carouselClassName = "",
    bottomCarouselClassName = "",
    logoCardClassName = "",
    logoImageClassName = "",
    textBoxClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
}: SocialProofThreeProps) => {
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
            containerClassName={containerClassName}
            className={className}
            textBoxClassName={textBoxClassName}
            titleClassName={textBoxTitleClassName}
            descriptionClassName={textBoxDescriptionClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
            ariaLabel={ariaLabel}
            itemClassName="w-30! md:w-carousel-item-3! xl:w-carousel-item-4! aspect-square"
        >
            {logos.map((src, index) => (
                <LogoCard
                    key={`${src}-${index}`}
                    src={src}
                    index={index}
                    logoCardClassName={logoCardClassName}
                    logoImageClassName={logoImageClassName}
                />
            ))}
        </AutoCarousel>
    );
};

SocialProofThree.displayName = "SocialProofThree";

export default memo(SocialProofThree);
