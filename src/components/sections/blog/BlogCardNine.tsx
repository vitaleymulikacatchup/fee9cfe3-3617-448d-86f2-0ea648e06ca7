"use client";

import React, { memo } from "react";
import CardList from "@/components/cardStack/CardList";
import Tag from "@/components/shared/Tag";
import MediaContent from "@/components/shared/MediaContent";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
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
    category: string;
    title: string;
    tags: string[];
    buttons?: ButtonConfig[];
    onBlogClick?: () => void;
};

interface BlogCardNineProps {
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
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    categoryClassName?: string;
    cardTitleClassName?: string;
    tagsContainerClassName?: string;
    tagClassName?: string;
    cardButtonClassName?: string;
    cardButtonTextClassName?: string;
}

const BlogCardNine = ({
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
    mediaWrapperClassName = "",
    mediaClassName = "",
    categoryClassName = "",
    cardTitleClassName = "",
    tagsContainerClassName = "",
    tagClassName = "",
    cardButtonClassName = "",
    cardButtonTextClassName = "",
}: BlogCardNineProps) => {
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
                        "relative z-1 w-full min-h-0 h-full flex flex-col md:flex-row gap-6 cursor-pointer",
                        variant === "card" ? "p-6 md:p-10" : "pb-6 md:pb-10",
                        cardContentClassName
                    )}
                    onClick={blog.onBlogClick}
                    role="article"
                    aria-label={blog.title}
                >
                    <div className={cls(
                        "relative z-1 w-full md:w-2/5 aspect-square md:aspect-[4/3] overflow-hidden rounded-theme-capped",
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

                    {variant === "card" && <div className="relative z-1 w-full h-px bg-foreground/20 md:hidden" />}

                    <div className="relative z-1 w-full md:w-3/5 flex flex-col gap-2">
                        <span className={cls(
                            "text-lg leading-tight",
                            variant === "border"
                                ? (useInvertedBackground !== "noInvert" ? "text-background/75" : "text-foreground/75")
                                : (shouldUseLightText ? "text-background/75" : "text-foreground/75"),
                            categoryClassName
                        )}>
                            {blog.category}
                        </span>

                        <h3 className={cls(
                            "text-2xl md:text-4xl font-medium text-balance leading-tight",
                            variant === "border"
                                ? (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground")
                                : (shouldUseLightText ? "text-background" : "text-foreground"),
                            cardTitleClassName
                        )}>
                            {blog.title}
                        </h3>

                        <div className={cls("relative mt-1 flex flex-wrap gap-2", tagsContainerClassName)}>
                            {blog.tags.map((tagText, index) => (
                                <Tag key={index} text={tagText} className={tagClassName} />
                            ))}
                        </div>

                        {blog.buttons && blog.buttons.length > 0 && (
                            <div className="mt-6 md:mt-auto flex gap-4">
                                {blog.buttons.slice(0, 2).map((button, index) => (
                                    <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, cardButtonClassName, cardButtonTextClassName)} />
                                ))}
                            </div>
                        )}
                    </div>
                </article>
            ))}
        </CardList>
    );
};

BlogCardNine.displayName = "BlogCardNine";

export default memo(BlogCardNine);
