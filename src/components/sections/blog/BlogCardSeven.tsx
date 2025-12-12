"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import { ArrowRight } from "lucide-react";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, GridVariant, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type BlogCard = {
    id: string;
    title: string;
    date: string;
    imageSrc: string;
    imageAlt?: string;
    onBlogClick?: () => void;
};

interface BlogCardSevenProps {
    blogs: BlogCard[];
    carouselMode?: "auto" | "buttons";
    gridVariant: GridVariant;
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
    cardTitleClassName?: string;
    cardDateClassName?: string;
    cardLinkClassName?: string;
    imageWrapperClassName?: string;
    imageClassName?: string;
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
    cardClassName?: string;
    titleClassName?: string;
    dateClassName?: string;
    linkClassName?: string;
    imageWrapperClassName?: string;
    imageClassName?: string;
}

const BlogCardItem = memo(({
    blog,
    shouldUseLightText,
    cardClassName = "",
    titleClassName = "",
    dateClassName = "",
    linkClassName = "",
    imageWrapperClassName = "",
    imageClassName = "",
}: BlogCardItemProps) => {
    return (
        <article
            className={cls("relative h-full card group grid grid-cols-2 gap-6 cursor-pointer p-6 rounded-theme-capped", cardClassName)}
            onClick={blog.onBlogClick}
            role="article"
            aria-label={blog.title}
        >
            <div className="col-span-1 flex flex-col gap-6 justify-between">
                <div className="flex flex-col gap-2">
                    <p className={cls("text-sm", shouldUseLightText ? "text-background/75" : "text-foreground/75", dateClassName)}>
                        {blog.date}
                    </p>
                    <h3 className={cls("text-2xl font-medium leading-tight line-clamp-3", shouldUseLightText ? "text-background" : "text-foreground", titleClassName)}>
                        {blog.title}
                    </h3>
                </div>
                <div className={cls("flex items-center gap-2 text-sm group-hover:gap-3 transition-all duration-300", shouldUseLightText ? "text-background" : "text-foreground", linkClassName)}>
                    <span>Read blog</span>
                    <ArrowRight className="h-[1em] w-auto" />
                </div>
            </div>
            <div className={cls("col-span-1 relative overflow-hidden rounded-theme-capped", imageWrapperClassName)}>
                <Image
                    src={blog.imageSrc}
                    alt={blog.imageAlt || blog.title}
                    fill
                    className={cls("object-cover transition-transform duration-500 ease-in-out group-hover:scale-105", imageClassName)}
                    unoptimized={blog.imageSrc.startsWith('http') || blog.imageSrc.startsWith('//')}
                />
            </div>
        </article>
    );
});

BlogCardItem.displayName = "BlogCardItem";

const BlogCardSeven = ({
    blogs,
    carouselMode = "buttons",
    gridVariant,
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
    cardClassName = "",
    cardTitleClassName = "",
    cardDateClassName = "",
    cardLinkClassName = "",
    imageWrapperClassName = "",
    imageClassName = "",
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
}: BlogCardSevenProps) => {
    const theme = useTheme();
    const shouldUseLightText =
        containerStyle === "card"
            ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
            : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
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
            ariaLabel={ariaLabel}
            className={className}
            containerClassName={containerClassName}
            gridClassName={gridClassName}
            carouselClassName={carouselClassName}
            carouselItemClassName="!w-carousel-item-3"
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
                    cardClassName={cardClassName}
                    titleClassName={cardTitleClassName}
                    dateClassName={cardDateClassName}
                    linkClassName={cardLinkClassName}
                    imageWrapperClassName={imageWrapperClassName}
                    imageClassName={imageClassName}
                />
            ))}
        </CardStack>
    );
};

BlogCardSeven.displayName = "BlogCardSeven";

export default memo(BlogCardSeven);
