"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type SocialLink = {
    icon: LucideIcon;
    url: string;
};

type TeamMember = {
    id: string;
    name: string;
    role: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    socialLinks?: SocialLink[];
};

interface TeamCardTwoProps {
    members: TeamMember[];
    carouselMode?: "auto" | "buttons";
    gridVariant: GridVariant;
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
    overlayClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    memberDescriptionClassName?: string;
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
    cardClassName?: string;
    imageClassName?: string;
    overlayClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    memberDescriptionClassName?: string;
    socialLinksClassName?: string;
    socialIconClassName?: string;
}

const TeamMemberCard = memo(({
    member,
    cardClassName = "",
    imageClassName = "",
    overlayClassName = "",
    nameClassName = "",
    roleClassName = "",
    memberDescriptionClassName = "",
    socialLinksClassName = "",
    socialIconClassName = "",
}: TeamMemberCardProps) => {
    return (
        <div className={cls("relative h-full rounded-theme-capped overflow-hidden group", cardClassName)}>
            <Image
                src={member.imageSrc}
                alt={member.imageAlt || member.name}
                width={800}
                height={800}
                className={cls("relative z-1 w-full h-full object-cover", imageClassName)}
                unoptimized={member.imageSrc.startsWith('http') || member.imageSrc.startsWith('//')}
                aria-hidden={member.imageAlt === ""}
            />

            <div className={cls("!absolute z-10 bottom-6 left-6 right-6 card p-6 flex flex-col gap-2 rounded-theme-capped", overlayClassName)}>
                <div className="relative z-1 flex items-start justify-between">
                    <h3 className={cls("text-2xl font-medium text-foreground leading-[1.1] truncate", nameClassName)}>
                        {member.name}
                    </h3>
                    <div className="relative z-1 secondary-button px-3 py-1 rounded-theme" >
                        <p className={cls("text-xs text-foreground leading-[1.1] truncate", roleClassName)}>
                            {member.role}
                        </p>
                    </div>
                </div>

                <p className={cls("relative z-1 text-base text-foreground leading-[1.1]", memberDescriptionClassName)}>
                    {member.description}
                </p>

                {member.socialLinks && member.socialLinks.length > 0 && (
                    <div className={cls("relative z-1 flex gap-3 mt-1", socialLinksClassName)}>
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
        </div>
    );
});

TeamMemberCard.displayName = "TeamMemberCard";

const TeamCardTwo = ({
    members,
    carouselMode = "buttons",
    gridVariant,
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
    overlayClassName = "",
    nameClassName = "",
    roleClassName = "",
    memberDescriptionClassName = "",
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
}: TeamCardTwoProps) => {
    return (
        <CardStack
            mode={carouselMode}
            gridVariant={gridVariant}
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
                    cardClassName={cardClassName}
                    imageClassName={imageClassName}
                    overlayClassName={overlayClassName}
                    nameClassName={nameClassName}
                    roleClassName={roleClassName}
                    memberDescriptionClassName={memberDescriptionClassName}
                    socialLinksClassName={socialLinksClassName}
                    socialIconClassName={socialIconClassName}
                />
            ))}
        </CardStack>
    );
};

TeamCardTwo.displayName = "TeamCardTwo";

export default memo(TeamCardTwo);
