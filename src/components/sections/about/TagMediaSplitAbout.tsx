"use client";

import { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import Tag from "@/components/shared/Tag";
import Button from "@/components/button/Button";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface TagMediaSplitAboutProps {
    variant: "card" | "border";
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: TextboxLayout;
    contentTag: string;
    contentTagIcon?: LucideIcon;
    contentTitle: string;
    contentDescription: string;
    contentButtons?: ButtonConfig[];
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    imagePosition?: "left" | "right";
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textBoxTitleClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    contentClassName?: string;
    contentCardClassName?: string;
    contentTagClassName?: string;
    contentTitleClassName?: string;
    contentDescriptionClassName?: string;
    contentButtonContainerClassName?: string;
    contentButtonClassName?: string;
    contentButtonTextClassName?: string;
    mediaCardClassName?: string;
    mediaClassName?: string;
}

const TagMediaSplitAbout = ({
    variant,
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    contentTag,
    contentTagIcon,
    contentTitle,
    contentDescription,
    contentButtons,
    imageSrc,
    videoSrc,
    imageAlt,
    videoAriaLabel,
    imagePosition = "right",
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    containerClassName = "",
    textBoxTitleClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    contentClassName = "",
    contentCardClassName = "",
    contentTagClassName = "",
    contentTitleClassName = "",
    contentDescriptionClassName = "",
    contentButtonContainerClassName = "",
    contentButtonClassName = "",
    contentButtonTextClassName = "",
    mediaCardClassName = "",
    mediaClassName = "",
}: TagMediaSplitAboutProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const contentCard = (
        <div className={cls(
            "flex flex-col justify-between gap-6",
            variant === "card" && "card rounded-theme-capped p-6 md:p-10",
            contentCardClassName
        )}>
            <Tag
                text={contentTag}
                icon={contentTagIcon}
                useInvertedBackground={variant === "card" ? useInvertedBackground : undefined}
                className={contentTagClassName}
            />
            <div className="relative z-1 flex flex-col gap-4">
                <h2 className={cls(
                    "text-4xl font-medium leading-tight",
                    variant === "card"
                        ? (shouldUseLightText ? "text-background" : "text-foreground")
                        : (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground"),
                    contentTitleClassName
                )}>
                    {contentTitle}
                </h2>
                <p className={cls(
                    "text-base md:text-lg leading-tight",
                    variant === "card"
                        ? (shouldUseLightText ? "text-background/75" : "text-foreground/75")
                        : (useInvertedBackground !== "noInvert" ? "text-background/75" : "text-foreground/75"),
                    contentDescriptionClassName
                )}>
                    {contentDescription}
                </p>
                {contentButtons && contentButtons.length > 0 && (
                    <div className={cls("relative z-1 flex gap-4", contentButtonContainerClassName)}>
                        {contentButtons.slice(0, 2).map((button, index) => (
                            <Button
                                key={`${button.text}-${index}`}
                                {...getButtonProps(button, index, theme.defaultButtonVariant, contentButtonClassName, contentButtonTextClassName)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    const mediaCard = (
        <div className={cls("card rounded-theme-capped overflow-hidden", mediaCardClassName)}>
            <MediaContent
                imageSrc={imageSrc}
                videoSrc={videoSrc}
                imageAlt={imageAlt}
                videoAriaLabel={videoAriaLabel}
                imageClassName={cls("relative z-1 w-full h-full md:aspect-square object-cover", mediaClassName)}
            />
        </div>
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
            <div className={cls("w-content-width mx-auto flex flex-col gap-10", containerClassName)}>
                <CardStackTextBox
                    title={title}
                    titleSegments={titleSegments}
                    description={description}
                    tag={tag}
                    tagIcon={tagIcon}
                    buttons={buttons}
                    textboxLayout={textboxLayout}
                    useInvertedBackground={useInvertedBackground}
                    textBoxClassName={textBoxClassName}
                    titleClassName={textBoxTitleClassName}
                    titleImageWrapperClassName={titleImageWrapperClassName}
                    titleImageClassName={titleImageClassName}
                    descriptionClassName={textBoxDescriptionClassName}
                    tagClassName={textBoxTagClassName}
                    buttonContainerClassName={textBoxButtonContainerClassName}
                    buttonClassName={textBoxButtonClassName}
                    buttonTextClassName={textBoxButtonTextClassName}
                />

                <div className={cls(
                    "grid grid-cols-1 gap-6",
                    variant === "border" ? "md:grid-cols-[1fr_1px_1fr] md:gap-10" : "md:grid-cols-2",
                    contentClassName
                )}>
                    {variant === "border" && (
                        <div className={cls(
                            "w-full h-px md:hidden",
                            useInvertedBackground !== "noInvert" ? "bg-background/20" : "bg-foreground/20"
                        )} />
                    )}

                    {imagePosition === "left" ? (
                        <>
                            {mediaCard}
                            {variant === "border" && (
                                <div className={cls(
                                    "w-full h-px md:w-px md:h-auto md:self-stretch",
                                    useInvertedBackground !== "noInvert" ? "bg-background/20" : "bg-foreground/20"
                                )} />
                            )}
                            {contentCard}
                        </>
                    ) : (
                        <>
                            {contentCard}
                            {variant === "border" && (
                                <div className={cls(
                                    "w-full h-px md:w-px md:h-auto md:self-stretch",
                                    useInvertedBackground !== "noInvert" ? "bg-background/20" : "bg-foreground/20"
                                )} />
                            )}
                            {mediaCard}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

TagMediaSplitAbout.displayName = "TagMediaSplitAbout";

export default memo(TagMediaSplitAbout);
