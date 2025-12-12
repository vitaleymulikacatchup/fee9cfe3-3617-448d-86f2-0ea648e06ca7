"use client";

import React, { memo } from "react";
import AutoCarousel from "@/components/cardStack/layouts/carousels/AutoCarousel";
import MediaContent from "@/components/shared/MediaContent";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { CardAnimationType, ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type TeamMember = {
    id: string;
    name: string;
    role: string;
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
};

interface TeamCardFourProps {
    team: TeamMember[];
    animationType: CardAnimationType;
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    speed?: number;
    topMarqueeDirection?: "left" | "right";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    bottomCarouselClassName?: string;
    cardClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    textBoxClassName?: string;
    textBoxTitleClassName?: string;
    textBoxTitleImageWrapperClassName?: string;
    textBoxTitleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface TeamCardProps {
    member: TeamMember;
    shouldUseLightText: boolean;
    cardClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
}

const TeamCard = memo(({
    member,
    shouldUseLightText,
    cardClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    nameClassName = "",
    roleClassName = "",
}: TeamCardProps) => {
    return (
        <div className={cls("relative h-full card rounded-theme overflow-hidden min-h-0 flex items-center gap-8 p-4 pr-10 md:pr-16", cardClassName)}>
            <div className={cls("relative h-40 md:h-60 w-auto aspect-square rounded-theme overflow-hidden flex-shrink-0", mediaWrapperClassName)}>
                <MediaContent
                    imageSrc={member.imageSrc}
                    videoSrc={member.videoSrc}
                    imageAlt={member.imageAlt || member.name}
                    videoAriaLabel={member.videoAriaLabel || member.name}
                    imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                />
            </div>
            <div className="relative z-1 flex flex-col gap-1 min-w-0 flex-1">
                <h3 className={cls("text-3xl font-medium leading-tight", shouldUseLightText ? "text-background" : "text-foreground", nameClassName)}>
                    {member.name}
                </h3>
                <p className={cls("text-xl leading-tight", shouldUseLightText ? "text-background/75" : "text-foreground/75", roleClassName)}>
                    {member.role}
                </p>
            </div>
        </div>
    );
});

TeamCard.displayName = "TeamCard";

const TeamCardFour = ({
    team,
    animationType,
    title,
    titleSegments,
    description,
    textboxLayout,
    useInvertedBackground,
    tag,
    tagIcon,
    buttons,
    speed = 40,
    topMarqueeDirection = "left",
    ariaLabel = "Team section",
    className = "",
    containerClassName = "",
    carouselClassName = "",
    bottomCarouselClassName = "",
    cardClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    nameClassName = "",
    roleClassName = "",
    textBoxClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TeamCardFourProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <AutoCarousel
            speed={speed}
            uniformGridCustomHeightClasses="min-h-none"
            animationType={animationType}
            title={title}
            titleSegments={titleSegments}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            textboxLayout={textboxLayout}
            useInvertedBackground={useInvertedBackground}
            showTextBox={true}
            dualMarquee={true}
            topMarqueeDirection={topMarqueeDirection}
            carouselClassName={carouselClassName}
            bottomCarouselClassName={bottomCarouselClassName}
            containerClassName={containerClassName}
            className={className}
            textBoxClassName={textBoxClassName}
            titleClassName={textBoxTitleClassName}
            titleImageWrapperClassName={textBoxTitleImageWrapperClassName}
            titleImageClassName={textBoxTitleImageClassName}
            descriptionClassName={textBoxDescriptionClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            ariaLabel={ariaLabel}
            itemClassName="w-fit!"
        >
            {team.map((member, index) => (
                <TeamCard
                    key={`${member.id}-${index}`}
                    member={member}
                    shouldUseLightText={shouldUseLightText}
                    cardClassName={cardClassName}
                    mediaWrapperClassName={mediaWrapperClassName}
                    mediaClassName={mediaClassName}
                    nameClassName={nameClassName}
                    roleClassName={roleClassName}
                />
            ))}
        </AutoCarousel>
    );
};

TeamCardFour.displayName = "TeamCardFour";

export default memo(TeamCardFour);
