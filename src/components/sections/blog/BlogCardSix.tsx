"use client";

import React, { memo } from "react";
import { ArrowRight } from "lucide-react";
import CardStack from "@/components/cardStack/CardStack";
import MediaContent from "@/components/shared/MediaContent";
import Tag from "@/components/shared/Tag";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type BlogCard = {
    id: string;
    title: string;
    tags: string[];
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    onBlogClick?: () => void;
};

interface BlogCardSixProps {
    blogs: BlogCard[];
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
    itemClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    cardClassName?: string;
    cardTitleClassName?: string;
    tagsContainerClassName?: string;
    tagClassName?: string;
    arrowClassName?: string;
    textBoxTitleClassName?: string;
    textBoxTitleImageWrapperClassName?: string;
    textBoxTitleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface BlogCardItemProps {
    blog: BlogCard;
    shouldUseLightText: boolean;
    useInvertedBackground: InvertedBackground;
    itemClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    cardClassName?: string;
    cardTitleClassName?: string;
    tagsContainerClassName?: string;
    tagClassName?: string;
    arrowClassName?: string;
}

const BlogCardItem = memo(({
    blog,
    shouldUseLightText,
    useInvertedBackground,
    itemClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    cardClassName = "",
    cardTitleClassName = "",
    tagsContainerClassName = "",
    tagClassName = "",
    arrowClassName = "",
}: BlogCardItemProps) => {
    return (
        <article
            className={cls("relative h-full flex flex-col gap-6 cursor-pointer group", itemClassName)}
            onClick={blog.onBlogClick}
            role="article"
            aria-label={blog.title}
        >
            <div className={cls("relative w-full aspect-square overflow-hidden rounded-theme-capped", mediaWrapperClassName)}>
                <MediaContent
                    imageSrc={blog.imageSrc}
                    videoSrc={blog.videoSrc}
                    imageAlt={blog.imageAlt || blog.title}
                    videoAriaLabel={blog.videoAriaLabel || blog.title}
                    imageClassName={cls("w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105", mediaClassName)}
                />
            </div>

            <div className={cls("relative z-1 card rounded-theme-capped p-5 flex flex-col gap-4", cardClassName)}>
                <h3 className={cls(
                    "text-xl md:text-2xl font-medium leading-tight",
                    shouldUseLightText ? "text-background" : "text-foreground",
                    cardTitleClassName
                )}>
                    {blog.title}
                </h3>

                <div className="flex items-center justify-between gap-4">
                    <div className={cls("flex items-center gap-2 flex-wrap", tagsContainerClassName)}>
                        {blog.tags.map((tag, index) => (
                            <Tag
                                key={index}
                                text={tag}
                                useInvertedBackground={useInvertedBackground}
                                className={tagClassName}
                            />
                        ))}
                    </div>
                    <ArrowRight
                        className={cls(
                            "h-[var(--text-base)] w-auto shrink-0 transition-transform duration-300 group-hover:-rotate-45",
                            shouldUseLightText ? "text-background" : "text-foreground",
                            arrowClassName
                        )}
                        strokeWidth={1.5}
                    />
                </div>
            </div>
        </article>
    );
});

BlogCardItem.displayName = "BlogCardItem";

const BlogCardSix = ({
    blogs,
    carouselMode = "buttons",
    uniformGridCustomHeightClasses,
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
    ariaLabel = "Blog section",
    className = "",
    containerClassName = "",
    itemClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    cardClassName = "",
    cardTitleClassName = "",
    tagsContainerClassName = "",
    tagClassName = "",
    arrowClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: BlogCardSixProps) => {
    const theme = useTheme();
    const shouldUseLightText =
        containerStyle === "card"
            ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
            : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
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
            ariaLabel={ariaLabel}
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
        >
            {blogs.map((blog) => (
                <BlogCardItem
                    key={blog.id}
                    blog={blog}
                    shouldUseLightText={shouldUseLightText}
                    useInvertedBackground={useInvertedBackground}
                    itemClassName={itemClassName}
                    mediaWrapperClassName={mediaWrapperClassName}
                    mediaClassName={mediaClassName}
                    cardClassName={cardClassName}
                    cardTitleClassName={cardTitleClassName}
                    tagsContainerClassName={tagsContainerClassName}
                    tagClassName={tagClassName}
                    arrowClassName={arrowClassName}
                />
            ))}
        </CardStack>
    );
};

BlogCardSix.displayName = "BlogCardSix";

export default memo(BlogCardSix);
