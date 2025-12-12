"use client";

import { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

type MediaItem = {
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface MediaGridAboutProps {
    title: string;
    description: string;
    mediaItems: MediaItem[];
    imagePosition?: "left" | "right";
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    contentCardClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    mediaCardClassName?: string;
    mediaGridClassName?: string;
    mediaClassName?: string;
}

const MediaGridAbout = ({
    title,
    description,
    mediaItems,
    imagePosition = "right",
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    containerClassName = "",
    contentCardClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    mediaCardClassName = "",
    mediaGridClassName = "",
    mediaClassName = "",
}: MediaGridAboutProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const contentCard = (
        <div className={cls("card rounded-theme-capped p-6 md:p-10 flex flex-col justify-between gap-6", contentCardClassName)}>
            <h2 className={cls("text-4xl md:text-5xl font-medium leading-tight text-balance", shouldUseLightText ? "text-background" : "text-foreground", titleClassName)}>
                {title}
            </h2>
            <p className={cls("text-base md:text-lg leading-tight text-balance", shouldUseLightText ? "text-background/75" : "text-foreground/75", descriptionClassName)}>
                {description}
            </p>
        </div>
    );

    const items = mediaItems.slice(0, 6);
    const itemCount = items.length;

    const getGridLayout = () => {
        switch (itemCount) {
            case 1:
                return "grid-cols-1";
            case 2:
                return "grid-cols-1";
            case 3:
                return "grid-cols-2";
            case 4:
                return "grid-cols-2";
            case 5:
                return "grid-cols-2";
            case 6:
                return "grid-cols-2";
            default:
                return "grid-cols-1";
        }
    };

    const getItemClassName = (index: number) => {
        if (itemCount === 3 && index === 2) return "col-span-2";
        if (itemCount === 5 && index === 4) return "col-span-2";
        return "";
    };

    const mediaCard = (
        <div className={cls("card aspect-square rounded-theme-capped overflow-hidden p-6", mediaCardClassName)}>
            <div className={cls("relative z-1 grid h-full gap-6", getGridLayout(), mediaGridClassName)}>
                {items.map((item, index) => (
                    <div key={index} className={cls("relative overflow-hidden", getItemClassName(index))}>
                        <MediaContent
                            imageSrc={item.imageSrc}
                            videoSrc={item.videoSrc}
                            imageAlt={item.imageAlt}
                            videoAriaLabel={item.videoAriaLabel}
                            imageClassName={cls("absolute inset-0 w-full h-full object-cover", mediaClassName)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
        >
            <div className={cls("w-content-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-6", containerClassName)}>
                {imagePosition === "left" ? (
                    <>
                        {mediaCard}
                        {contentCard}
                    </>
                ) : (
                    <>
                        {contentCard}
                        {mediaCard}
                    </>
                )}
            </div>
        </section>
    );
};

MediaGridAbout.displayName = "MediaGridAbout";

export default memo(MediaGridAbout);
