"use client";

import React, { memo } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface SocialProofOneProps {
    logos: string[];
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    speed?: number;
    showCard?: boolean;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textBoxTitleClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    contentClassName?: string;
    logoItemClassName?: string;
    logoCardClassName?: string;
    logoImageClassName?: string;
}

const SocialProofOne = ({
    logos,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    useInvertedBackground,
    speed = 40,
    showCard = true,
    ariaLabel = "Social proof section",
    className = "",
    containerClassName = "",
    textBoxTitleClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    contentClassName = "",
    logoItemClassName = "",
    logoCardClassName = "",
    logoImageClassName = "",
}: SocialProofOneProps) => {
    const repeatedLogos = [...logos, ...logos, ...logos];

    return (
        <section aria-label={ariaLabel} className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}>
            <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
                {(title || description) && (
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
                )}

                <div className={cls("mask-padding-x", contentClassName)}>
                    <Marquee gradient={false} speed={speed}>
                        {repeatedLogos.map((src, i) => (
                            <div className={cls(showCard ? "mx-4" : "mx-8", logoItemClassName)} key={i}>
                                <div className={cls(showCard ? "card px-4 py-3 mb-1 rounded-theme" : "", logoCardClassName)}>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={src}
                                        alt={`Partner ${i + 1}`}
                                        className={cls("relative z-1", showCard ? "h-7 w-auto" : "h-8 w-auto", logoImageClassName)}
                                        unoptimized={src.startsWith('http') || src.startsWith('//')}
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

SocialProofOne.displayName = "SocialProofOne";

export default memo(SocialProofOne);
