"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import MediaContent from "@/components/shared/MediaContent";
import Tag from "@/components/shared/Tag";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type TeamMember = {
    id: string;
    name: string;
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    videoAriaLabel?: string;
};

interface TeamCardTenProps {
    title: string;
    tag: string;
    members: TeamMember[];
    memberVariant: "default" | "card";
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    titleClassName?: string;
    tagClassName?: string;
    membersContainerClassName?: string;
    memberClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    nameClassName?: string;
}

const TeamCardTen = ({
    title,
    tag,
    members,
    memberVariant,
    useInvertedBackground,
    ariaLabel = "Team section",
    className = "",
    containerClassName = "",
    titleClassName = "",
    tagClassName = "",
    membersContainerClassName = "",
    memberClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    nameClassName = "",
}: TeamCardTenProps) => {
    const theme = useTheme();
    const shouldUseLightText = useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard";
    const shouldMemberUseLightText = memberVariant === "card"
        ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
        : shouldUseLightText;

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
                <TextAnimation
                    type={theme.defaultTextAnimation}
                    text={title}
                    variant="words-trigger"
                    className={cls(
                        "text-3xl md:text-5xl font-medium leading-tight",
                        shouldUseLightText ? "text-background" : "text-foreground",
                        titleClassName
                    )}
                />

                <div className="relative w-full h-px bg-accent/20" />

                <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-8">
                    <div className="w-fit md:w-15" >
                        <Tag
                            text={tag}
                            useInvertedBackground={useInvertedBackground}
                            className={cls("min-w-0 max-w-full text-xl px-6", tagClassName)}
                            textClassName="truncate"
                        />
                    </div>

                    <div className={cls(
                        "w-full grid gap-8 flex-1",
                        members.length === 1 && "grid-cols-1",
                        members.length >= 2 && "grid-cols-2",
                        membersContainerClassName
                    )}>
                        {members.map((member) => (
                            <div
                                key={member.id}
                                className={cls(
                                    "flex flex-col gap-4",
                                    memberVariant === "card" && "card rounded-theme-capped p-4",
                                    memberClassName
                                )}
                            >
                                <div className={cls("relative aspect-[3/3.5] rounded-theme-capped overflow-hidden", mediaWrapperClassName)}>
                                    <MediaContent
                                        imageSrc={member.imageSrc}
                                        imageAlt={member.imageAlt || member.name}
                                        videoSrc={member.videoSrc}
                                        videoAriaLabel={member.videoAriaLabel}
                                        imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                                    />
                                </div>
                                <p className={cls(
                                    "text-xl md:text-3xl font-medium truncate",
                                    shouldMemberUseLightText ? "text-background" : "text-foreground",
                                    nameClassName
                                )}>
                                    {member.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

TeamCardTen.displayName = "TeamCardTen";

export default memo(TeamCardTen);
