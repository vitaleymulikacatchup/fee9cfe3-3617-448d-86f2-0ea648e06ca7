"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import Tag from "@/components/shared/Tag";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type MediaProps =
    | {
        imageSrc: string;
        imageAlt?: string;
        videoSrc?: never;
        videoAriaLabel?: never;
    }
    | {
        videoSrc: string;
        videoAriaLabel?: string;
        imageSrc?: never;
        imageAlt?: never;
    };

type TestimonialAboutCardProps = MediaProps & {
    tag: string;
    tagIcon?: LucideIcon;
    title: string;
    description: string;
    subdescription: string;
    icon: LucideIcon;
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    cardClassName?: string;
    contentClassName?: string;
    tagClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    subdescriptionClassName?: string;
    footerClassName?: string;
    iconBoxClassName?: string;
    iconClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
};

const TestimonialAboutCard = ({
    tag,
    tagIcon,
    title,
    description,
    subdescription,
    icon: Icon,
    imageSrc,
    videoSrc,
    imageAlt = "",
    videoAriaLabel = "Testimonial video",
    useInvertedBackground,
    ariaLabel = "Testimonial section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    contentClassName = "",
    tagClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    subdescriptionClassName = "",
    footerClassName = "",
    iconBoxClassName = "",
    iconClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
}: TestimonialAboutCardProps) => {
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
            <div className={cls("w-content-width mx-auto grid grid-cols-1 md:grid-cols-5 gap-6", containerClassName)}>
                <div className={cls("relative md:col-span-3 card rounded-theme-capped p-8 md:p-12", cardClassName)}>
                    <div className={cls(
                        "absolute -top-7 -left-7 md:-top-8 md:-left-8 primary-button rounded-theme-capped h-14 md:h-16 w-auto aspect-square flex items-center justify-center",
                        iconBoxClassName
                    )}>
                        <Icon className={cls("h-5/10 text-background", iconClassName)} strokeWidth={1.5} />
                    </div>

                    <div className={cls("relative h-full flex flex-col justify-center gap-4 md:gap-6 py-8 md:py-4", contentClassName)}>
                        <Tag
                            text={tag}
                            icon={tagIcon}
                            className={cls("mb-1", tagClassName)}
                        />

                        <h2 className={cls("text-3xl md:text-4xl font-medium text-foreground leading-tight", titleClassName)}>
                            {title}
                        </h2>

                        <div className={cls("flex items-center gap-2", footerClassName)}>
                            <span className={cls("text-base text-foreground", descriptionClassName)}>
                                {description}
                            </span>
                            <span className="text-accent">•</span>
                            <span className={cls("text-base text-foreground/75", subdescriptionClassName)}>
                                {subdescription}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cls("md:col-span-2 card aspect-square rounded-theme-capped overflow-hidden", mediaWrapperClassName)}>
                    <MediaContent
                        imageSrc={imageSrc}
                        videoSrc={videoSrc}
                        imageAlt={imageAlt}
                        videoAriaLabel={videoAriaLabel}
                        imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                    />
                </div>
            </div>
        </section>
    );
};

TestimonialAboutCard.displayName = "TestimonialAboutCard";

export default memo(TestimonialAboutCard);
