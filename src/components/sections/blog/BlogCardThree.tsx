"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import Tag from "@/components/shared/Tag";
import MediaContent from "@/components/shared/MediaContent";
import OverlayArrowButton from "@/components/shared/OverlayArrowButton";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type BlogCard = {
    id: string;
    category: string;
    categoryIcon?: LucideIcon;
    title: string;
    description: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    onBlogClick?: () => void;
};

interface BlogCardThreeProps {
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
    cardClassName?: string;
    cardContentClassName?: string;
    categoryTagClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
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
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    cardClassName?: string;
    cardContentClassName?: string;
    categoryTagClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
}

const BlogCardItem = memo(({
    blog,
    useInvertedBackground,
    cardClassName = "",
    cardContentClassName = "",
    categoryTagClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
}: BlogCardItemProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <article
            className={cls(
                "relative h-full card group flex flex-col justify-between gap-6 p-6 cursor-pointer rounded-theme-capped overflow-hidden",
                cardClassName
            )}
            onClick={blog.onBlogClick}
            role="article"
            aria-label={blog.title}
        >
            <div className={cls("relative z-1 flex flex-col gap-3", cardContentClassName)}>
                <Tag
                    text={blog.category}
                    icon={blog.categoryIcon}
                    useInvertedBackground={useInvertedBackground}
                    className={categoryTagClassName}
                />

                <h3 className={cls(
                    "text-3xl md:text-4xl font-medium leading-tight line-clamp-2",
                    shouldUseLightText ? "text-background" : "text-foreground",
                    cardTitleClassName
                )}>
                    {blog.title}
                </h3>

                <p className={cls(
                    "text-base leading-tight line-clamp-2",
                    shouldUseLightText ? "text-background/75" : "text-foreground/75",
                    cardDescriptionClassName
                )}>
                    {blog.description}
                </p>
            </div>

            <div className={cls("relative z-1 w-full aspect-square", mediaWrapperClassName)}>
                <MediaContent
                    imageSrc={blog.imageSrc}
                    videoSrc={blog.videoSrc}
                    imageAlt={blog.imageAlt || blog.title}
                    videoAriaLabel={blog.videoAriaLabel}
                    imageClassName={cls("absolute inset-0 w-full h-full object-cover", mediaClassName)}
                />
                <OverlayArrowButton ariaLabel={`Read ${blog.title}`} />
            </div>
        </article>
    );
});

BlogCardItem.displayName = "BlogCardItem";

const BlogCardThree = ({
    blogs,
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
    ariaLabel = "Blog section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    cardContentClassName = "",
    categoryTagClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
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
}: BlogCardThreeProps) => {
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
                    useInvertedBackground={useInvertedBackground}
                    cardClassName={cardClassName}
                    cardContentClassName={cardContentClassName}
                    categoryTagClassName={categoryTagClassName}
                    cardTitleClassName={cardTitleClassName}
                    cardDescriptionClassName={cardDescriptionClassName}
                    mediaWrapperClassName={mediaWrapperClassName}
                    mediaClassName={mediaClassName}
                />
            ))}
        </CardStack>
    );
};

BlogCardThree.displayName = "BlogCardThree";

export default memo(BlogCardThree);
