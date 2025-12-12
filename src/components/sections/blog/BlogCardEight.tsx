"use client";

import React, { memo } from "react";
import CardStack from "@/components/cardStack/CardStack";
import Tag from "@/components/shared/Tag";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
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
    onBlogClick?: () => void;
};

interface BlogCardEightProps {
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
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    cardTitleClassName?: string;
    footerClassName?: string;
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
    cardClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    cardTitleClassName?: string;
    footerClassName?: string;
    tagClassName?: string;
}

const BlogCardItem = memo(({
    blog,
    cardClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    cardTitleClassName = "",
    footerClassName = "",
    tagClassName = "",
}: BlogCardItemProps) => {
    return (
        <article
            className={cls("relative h-full card group flex flex-col gap-4 cursor-pointer p-4 rounded-theme-capped", cardClassName)}
            onClick={blog.onBlogClick}
            role="article"
            aria-label={blog.title}
        >

            <div className="relative h-full primary-button flex flex-col gap-4 p-4 rounded-theme-capped">
                <span className="text-base text-background/75 leading-tight truncate">
                    {blog.category}
                </span>
                <div className={cls("relative z-1 w-full aspect-square md:aspect-[3/4] overflow-hidden rounded-theme-capped", mediaWrapperClassName)}>
                    <MediaContent
                        imageSrc={blog.imageSrc}
                        videoSrc={blog.videoSrc}
                        imageAlt={blog.imageAlt}
                        videoAriaLabel={blog.videoAriaLabel}
                        imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                    />
                </div>

                <h3 className={cls("text-2xl font-medium leading-tight text-background line-clamp-2", cardTitleClassName)}>
                    {blog.title}
                </h3>
            </div>

            <div className={cls("flex flex-wrap gap-2 mt-auto", footerClassName)}>
                {blog.tags.map((tag, index) => (
                    <Tag key={index} text={tag} className={tagClassName} />
                ))}
            </div>
        </article>
    );
});

BlogCardItem.displayName = "BlogCardItem";

const BlogCardEight = ({
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
    mediaWrapperClassName = "",
    mediaClassName = "",
    cardTitleClassName = "",
    footerClassName = "",
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
}: BlogCardEightProps) => {
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
                    cardClassName={cardClassName}
                    mediaWrapperClassName={mediaWrapperClassName}
                    mediaClassName={mediaClassName}
                    cardTitleClassName={cardTitleClassName}
                    footerClassName={footerClassName}
                    tagClassName={tagClassName}
                />
            ))}
        </CardStack>
    );
};

BlogCardEight.displayName = "BlogCardEight";

export default memo(BlogCardEight);
