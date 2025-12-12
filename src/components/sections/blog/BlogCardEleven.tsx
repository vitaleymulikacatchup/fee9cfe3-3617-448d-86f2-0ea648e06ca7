"use client";

import React, { memo } from "react";
import CardList from "@/components/cardStack/CardList";
import Tag from "@/components/shared/Tag";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

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

type BlogCard = MediaProps & {
    id: string;
    title: string;
    author: string;
    description: string;
    tags: string[];
    onBlogClick?: () => void;
};

interface BlogCardElevenProps {
    blogs: BlogCard[];
    animationType: CardAnimationType;
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
    cardClassName?: string;
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
    cardTitleClassName?: string;
    authorClassName?: string;
    cardDescriptionClassName?: string;
    tagsContainerClassName?: string;
    tagClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
}

const BlogCardEleven = ({
    blogs,
    animationType,
    variant,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    useInvertedBackground,
    ariaLabel = "Blog section",
    className = "",
    containerClassName = "",
    cardClassName = "",
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
    cardTitleClassName = "",
    authorClassName = "",
    cardDescriptionClassName = "",
    tagsContainerClassName = "",
    tagClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
}: BlogCardElevenProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <CardList
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            animationType={animationType}
            variant={variant}
            useInvertedBackground={useInvertedBackground}
            className={className}
            containerClassName={containerClassName}
            cardClassName={cardClassName}
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
            {blogs.map((blog) => (
                <article
                    key={blog.id}
                    className={cls(
                        "relative z-1 w-full min-h-0 h-full flex flex-col md:grid md:grid-cols-10 gap-6 md:gap-10 cursor-pointer group",
                        variant === "card" ? "p-6 md:p-10" : "py-6 md:py-10",
                        cardContentClassName
                    )}
                    onClick={blog.onBlogClick}
                    role="article"
                    aria-label={blog.title}
                >
                    <div className="relative z-1 w-full md:col-span-6 flex flex-col gap-8 md:gap-12">
                        <h3 className={cls(
                            "text-3xl md:text-5xl text-balance font-medium leading-tight line-clamp-3",
                            variant === "border"
                                ? (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground")
                                : (shouldUseLightText ? "text-background" : "text-foreground"),
                            cardTitleClassName
                        )}>
                            {blog.title}{" "}
                            <span className={cls(
                                variant === "border"
                                    ? (useInvertedBackground !== "noInvert" ? "text-background/50" : "text-foreground/50")
                                    : (shouldUseLightText ? "text-background/50" : "text-foreground/50"),
                                authorClassName
                            )}>
                                by {blog.author}
                            </span>
                        </h3>

                        <div className="mt-auto flex flex-col gap-4">
                            <div className={cls("flex flex-wrap gap-2", tagsContainerClassName)}>
                                {blog.tags.map((tagText, index) => (
                                    <Tag key={index} text={tagText} className={tagClassName} />
                                ))}
                            </div>

                            <p className={cls(
                                "text-base md:text-2xl text-balance leading-tight line-clamp-2",
                                variant === "border"
                                    ? (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground")
                                    : (shouldUseLightText ? "text-background" : "text-foreground"),
                                cardDescriptionClassName
                            )}>
                                {blog.description}
                            </p>
                        </div>
                    </div>

                    <div className={cls(
                        "relative z-1 w-full md:col-span-4 aspect-square md:aspect-auto overflow-hidden rounded-theme-capped",
                        mediaWrapperClassName
                    )}>
                        <MediaContent
                            imageSrc={blog.imageSrc}
                            videoSrc={blog.videoSrc}
                            imageAlt={blog.imageAlt}
                            videoAriaLabel={blog.videoAriaLabel}
                            imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                        />
                    </div>
                </article>
            ))}
        </CardList>
    );
};

BlogCardEleven.displayName = "BlogCardEleven";

export default memo(BlogCardEleven);
