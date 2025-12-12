"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type SocialLink = {
    icon: LucideIcon;
    url: string;
};

type TeamMember = {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
    imageAlt?: string;
    socialLinks?: SocialLink[];
};

interface TeamCardThreeProps {
    members: TeamMember[];
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
    textBoxTitleClassName?: string;
    textBoxTitleImageWrapperClassName?: string;
    textBoxTitleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    imageClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    socialLinksClassName?: string;
    socialIconClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface TeamMemberCardProps {
    member: TeamMember;
    shouldUseLightText: boolean;
    cardClassName?: string;
    imageClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    socialLinksClassName?: string;
    socialIconClassName?: string;
}

const TeamMemberCard = memo(({
    member,
    shouldUseLightText,
    cardClassName = "",
    imageClassName = "",
    nameClassName = "",
    roleClassName = "",
    socialLinksClassName = "",
    socialIconClassName = "",
}: TeamMemberCardProps) => {
    return (
        <div className={cls("card text-foreground rounded-theme-capped p-6 flex flex-col items-center text-center gap-4", cardClassName)}>
            <div className="relative z-1 w-full aspect-square rounded-theme-capped overflow-hidden">
                <Image
                    src={member.imageSrc}
                    alt={member.imageAlt || member.name}
                    width={800}
                    height={800}
                    className={cls("w-full h-full object-cover  ", imageClassName)}
                    unoptimized={member.imageSrc.startsWith('http') || member.imageSrc.startsWith('//')}
                    aria-hidden={member.imageAlt === ""}
                />
            </div>

            <div className="relative z-1 flex flex-col gap-0">
                <h3 className={cls("text-3xl font-medium leading-[1.15]", shouldUseLightText ? "text-background" : "text-foreground", nameClassName)}>
                    {member.name}
                </h3>
                <p className={cls("text-base leading-[1.15]", shouldUseLightText ? "text-background" : "text-foreground", roleClassName)}>
                    {member.role}
                </p>
            </div>


            {member.socialLinks && member.socialLinks.length > 0 && (
                <div className={cls("relative z-1 flex gap-3", socialLinksClassName)}>
                    {member.socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cls("primary-button h-9 aspect-square w-auto flex items-center justify-center rounded-theme", socialIconClassName)}
                        >
                            <link.icon className="h-4/10 text-background" strokeWidth={1.5} />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
});

TeamMemberCard.displayName = "TeamMemberCard";

const TeamCardThree = ({
    members,
    carouselMode = "buttons",
    uniformGridCustomHeightClasses = "min-h-95 2xl:min-h-105",
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
    ariaLabel = "Team section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    imageClassName = "",
    nameClassName = "",
    roleClassName = "",
    socialLinksClassName = "",
    socialIconClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TeamCardThreeProps) => {
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
            ariaLabel={ariaLabel}
        >
            {members.map((member, index) => (
                <TeamMemberCard
                    key={`${member.id}-${index}`}
                    member={member}
                    shouldUseLightText={shouldUseLightText}
                    cardClassName={cardClassName}
                    imageClassName={imageClassName}
                    nameClassName={nameClassName}
                    roleClassName={roleClassName}
                    socialLinksClassName={socialLinksClassName}
                    socialIconClassName={socialIconClassName}
                />
            ))}
        </CardStack>
    );
};

TeamCardThree.displayName = "TeamCardThree";

export default memo(TeamCardThree);
