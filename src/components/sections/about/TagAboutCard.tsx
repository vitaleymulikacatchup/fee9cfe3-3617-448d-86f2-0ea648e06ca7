"use client";

import React, { memo } from "react";
import Tag from "@/components/shared/Tag";
import TextAnimation from "@/components/text/TextAnimation";
import { cls } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

interface TagAboutCardProps {
    tag: string;
    tagIcon?: LucideIcon;
    title: string;
    paragraphs: string[];
    icon: LucideIcon;
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    cardClassName?: string;
    tagClassName?: string;
    titleClassName?: string;
    paragraphsContainerClassName?: string;
    paragraphClassName?: string;
    iconBoxClassName?: string;
    iconClassName?: string;
}

const TagAboutCard = ({
    tag,
    tagIcon,
    title,
    paragraphs,
    icon: Icon,
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    tagClassName = "",
    titleClassName = "",
    paragraphsContainerClassName = "",
    paragraphClassName = "",
    iconBoxClassName = "",
    iconClassName = "",
}: TagAboutCardProps) => {
    const theme = useTheme();

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
            <div className={cls("w-content-width md:w-40 mx-auto", containerClassName)}>
                <div className={cls("relative card rounded-theme-capped p-8 md:p-12", cardClassName)}>
                    <div className={cls(
                        "absolute! -top-7 -right-7 md:-top-8 md:-right-8 primary-button rounded-theme-capped h-14 md:h-16 w-auto aspect-square flex items-center justify-center",
                        iconBoxClassName
                    )}>
                        <Icon className={cls("h-5/10 text-background", iconClassName)} strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col gap-6">
                        <Tag
                            text={tag}
                            icon={tagIcon}
                            className={tagClassName}
                        />

                        <TextAnimation
                            text={title}
                            type={theme.defaultTextAnimation}
                            variant="words-trigger"
                            as="h2"
                            className={cls("text-4xl md:text-5xl font-medium text-balance text-foreground", titleClassName)}
                        />

                        <div className={cls("flex flex-col gap-3", paragraphsContainerClassName)}>
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={cls("text-base text-foreground/75 leading-tight", paragraphClassName)}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

TagAboutCard.displayName = "TagAboutCard";

export default memo(TagAboutCard);
