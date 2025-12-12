"use client";

import { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface MediaSplitAboutProps {
    title: string;
    description: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    buttons?: ButtonConfig[];
    imagePosition?: "left" | "right";
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    contentCardClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    mediaCardClassName?: string;
    mediaClassName?: string;
}

const MediaSplitAbout = ({
    title,
    description,
    imageSrc,
    videoSrc,
    imageAlt,
    videoAriaLabel,
    buttons,
    imagePosition = "right",
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    containerClassName = "",
    contentCardClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    mediaCardClassName = "",
    mediaClassName = "",
}: MediaSplitAboutProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const contentCard = (
        <div className={cls("card rounded-theme-capped p-6 md:p-10 flex flex-col justify-between gap-10", contentCardClassName)}>
            <div className="relative z-1 flex flex-col gap-4">
                <h2 className={cls("text-4xl font-medium leading-tight", shouldUseLightText ? "text-background" : "text-foreground", titleClassName)}>
                    {title}
                </h2>
                <p className={cls("text-base md:text-lg leading-tight", shouldUseLightText ? "text-background/75" : "text-foreground/75", descriptionClassName)}>
                    {description}
                </p>
            </div>

            {buttons && buttons.length > 0 && (
                <div className={cls("relative z-1 flex gap-4", buttonContainerClassName)}>
                    {buttons.slice(0, 2).map((button, index) => (
                        <Button
                            key={index}
                            {...getButtonProps(
                                button,
                                index,
                                theme.defaultButtonVariant,
                                cls("px-8", buttonClassName),
                                cls("text-base", buttonTextClassName)
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );

    const mediaCard = (
        <div className={cls("card md:aspect-square rounded-theme-capped overflow-hidden", mediaCardClassName)}>
            <MediaContent
                imageSrc={imageSrc}
                videoSrc={videoSrc}
                imageAlt={imageAlt}
                videoAriaLabel={videoAriaLabel}
                imageClassName={cls("relative z-1 w-full h-full object-cover", mediaClassName)}
            />
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

MediaSplitAbout.displayName = "MediaSplitAbout";

export default memo(MediaSplitAbout);
