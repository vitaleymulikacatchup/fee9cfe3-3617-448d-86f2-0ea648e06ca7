"use client";

import React, { memo, useState, useEffect } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import AutoCarousel from "@/components/cardStack/layouts/carousels/AutoCarousel";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type FeatureImage = {
    id: number;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface FeatureCardTwentyProps {
    images: FeatureImage[];
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
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    imagesContainerClassName?: string;
    imageWrapperClassName?: string;
    imageClassName?: string;
}

const FeatureCardTwenty = ({
    images,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    useInvertedBackground,
    ariaLabel = "Feature section",
    className = "",
    containerClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    imagesContainerClassName = "",
    imageWrapperClassName = "",
    imageClassName = "",
}: FeatureCardTwentyProps) => {
    const [isCentered, setIsCentered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsCentered(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderImageCard = (image: FeatureImage, heightClass: string) => (
        <div
            key={image.id}
            className={cls(
                "w-full overflow-hidden rounded-theme-capped",
                heightClass,
                imageWrapperClassName
            )}
        >
            <MediaContent
                imageSrc={image.imageSrc}
                videoSrc={image.videoSrc}
                imageAlt={image.imageAlt || `Feature image ${image.id}`}
                videoAriaLabel={image.videoAriaLabel || `Feature video ${image.id}`}
                imageClassName={cls("w-full h-full object-cover", imageClassName)}
            />
        </div>
    );

    const textBoxElement = (
        <TextBox
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            useInvertedBackground={useInvertedBackground}
            center={isCentered}
            className={cls("flex flex-col gap-3 md:gap-3", textBoxClassName)}
            titleClassName={cls("text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance", titleClassName)}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
            descriptionClassName={cls("max-w-8/10 text-lg md:text-xl leading-[1.2] text-center md:text-left", descriptionClassName)}
            tagClassName={cls("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
            buttonContainerClassName={cls("flex gap-4 mt-4", buttonContainerClassName)}
            buttonClassName={cls("", buttonClassName)}
            buttonTextClassName={cls("text-base", buttonTextClassName)}
        />
    );

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
            <div className={cls("hidden md:flex w-content-width mx-auto gap-10", containerClassName)}>
                <div className={cls("w-1/2 flex flex-col gap-10", imagesContainerClassName)}>
                    {images.map((image) => renderImageCard(image, "h-[90svh]"))}
                </div>
                <div className="w-1/2" />
            </div>

            <div className="md:hidden">
                <AutoCarousel
                    title=""
                    description=""
                    textboxLayout="default"
                    animationType="none"
                    className="py-0"
                    carouselClassName="py-0"
                    containerClassName="!w-full"
                    itemClassName="!w-55"
                    ariaLabel="Feature images carousel"
                    showTextBox={false}
                >
                    {images.map((image) => renderImageCard(image, "aspect-[4/5]"))}
                </AutoCarousel>
            </div>

            <div className="hidden md:block fixed top-0 left-0 w-full h-svh pointer-events-none">
                <div className="w-content-width mx-auto h-full flex items-center gap-10">
                    <div className="w-1/2" />
                    <div className={cls("w-1/2 pointer-events-auto flex flex-col gap-6", textBoxClassName)}>
                        {textBoxElement}
                    </div>
                </div>
            </div>

            <div className="md:hidden w-content-width mx-auto">
                <div className={cls("flex flex-col gap-6 mt-8", textBoxClassName)}>
                    {textBoxElement}
                </div>
            </div>
        </section>
    );
};

FeatureCardTwenty.displayName = "FeatureCardTwenty";

export default memo(FeatureCardTwenty);
