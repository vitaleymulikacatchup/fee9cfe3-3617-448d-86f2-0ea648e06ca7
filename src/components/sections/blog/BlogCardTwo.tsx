"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import Badge from "@/components/shared/Badge";
import OverlayArrowButton from "@/components/shared/OverlayArrowButton";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type BlogCard = {
    id: string;
    tags: string[];
    title: string;
    excerpt: string;
    imageSrc: string;
    imageAlt?: string;
    authorName: string;
    date: string;
    onBlogClick?: () => void;
};

interface BlogCardTwoProps {
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
    imageWrapperClassName?: string;
    imageClassName?: string;
    authorDateClassName?: string;
    cardTitleClassName?: string;
    excerptClassName?: string;
    tagsContainerClassName?: string;
    tagClassName?: string;
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
    imageWrapperClassName?: string;
    imageClassName?: string;
    authorDateClassName?: string;
    cardTitleClassName?: string;
    excerptClassName?: string;
    tagsContainerClassName?: string;
    tagClassName?: string;
}

const BlogCardItem = memo(({
    blog,
    shouldUseLightText,
    cardClassName = "",
    imageWrapperClassName = "",
    imageClassName = "",
    authorDateClassName = "",
    cardTitleClassName = "",
    excerptClassName = "",
    tagsContainerClassName = "",
    tagClassName = "",
}: BlogCardItemProps) => {
    return (
        <article
            className={cls("relative h-full card group flex flex-col gap-4 cursor-pointer p-4 rounded-theme-capped", cardClassName)}
            onClick={blog.onBlogClick}
            role="article"
            aria-label={`${blog.title} by ${blog.authorName}`}
        >
            <div className={cls("relative z-1 w-full aspect-[4/3] overflow-hidden rounded-theme-capped", imageWrapperClassName)}>
                <Image
                    src={blog.imageSrc}
                    alt={blog.imageAlt || blog.title}
                    fill
                    className={cls("object-cover   transition-transform duration-500 ease-in-out group-hover:scale-105", imageClassName)}
                    unoptimized={blog.imageSrc.startsWith('http') || blog.imageSrc.startsWith('//')}
                />
                <OverlayArrowButton ariaLabel={`Read ${blog.title}`} />
            </div>

            <div className="relative z-1 flex flex-col justify-between gap-6 flex-1">
                <div className="flex flex-col gap-2">
                    <p className={cls("text-xs", shouldUseLightText ? "text-background" : "text-foreground", authorDateClassName)}>
                        {blog.authorName} " {blog.date}
                    </p>

                    <h3 className={cls("text-2xl font-medium leading-[1.25]", shouldUseLightText ? "text-background" : "text-foreground", cardTitleClassName)}>
                        {blog.title}
                    </h3>

                    <p className={cls("text-base leading-[1.25]", shouldUseLightText ? "text-background" : "text-foreground", excerptClassName)}>
                        {blog.excerpt}
                    </p>
                </div>

                <div className={cls("flex flex-wrap gap-2", tagsContainerClassName)}>
                    {blog.tags.map((tag, index) => (
                        <Badge key={`${tag}-${index}`} text={tag} variant="primary" className={tagClassName} />
                    ))}
                </div>
            </div>
        </article>
    );
});

BlogCardItem.displayName = "BlogCardItem";

const BlogCardTwo = ({
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
    cardClassName = "",
    imageWrapperClassName = "",
    imageClassName = "",
    authorDateClassName = "",
    cardTitleClassName = "",
    excerptClassName = "",
    tagsContainerClassName = "",
    tagClassName = "",
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
}: BlogCardTwoProps) => {
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
                    cardClassName={cardClassName}
                    imageWrapperClassName={imageWrapperClassName}
                    imageClassName={imageClassName}
                    authorDateClassName={authorDateClassName}
                    cardTitleClassName={cardTitleClassName}
                    excerptClassName={excerptClassName}
                    tagsContainerClassName={tagsContainerClassName}
                    tagClassName={tagClassName}
                />
            ))}
        </CardStack>
    );
};

BlogCardTwo.displayName = "BlogCardTwo";

export default memo(BlogCardTwo);
