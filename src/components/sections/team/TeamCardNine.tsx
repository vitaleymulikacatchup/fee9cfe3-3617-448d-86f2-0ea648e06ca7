"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import SocialLinks, { type SocialLink } from "@/components/shared/SocialLinks";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type TeamMember = {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
    imageAlt?: string;
    socialLinks?: SocialLink[];
};

interface TeamCardNineProps {
    members: TeamMember[];
    carouselMode?: "auto" | "buttons";
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
    contentClassName?: string;
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
    cardClassName?: string;
    imageClassName?: string;
    contentClassName?: string;
    nameClassName?: string;
    roleClassName?: string;
    socialLinksClassName?: string;
    socialIconClassName?: string;
}

const TeamMemberCard = memo(({
    member,
    cardClassName = "",
    imageClassName = "",
    contentClassName = "",
    nameClassName = "",
    roleClassName = "",
    socialLinksClassName = "",
    socialIconClassName = "",
}: TeamMemberCardProps) => {
    return (
        <div className={cls("relative h-full card rounded-theme-capped p-6 grid grid-cols-2 gap-4", cardClassName)}>
            <div className={cls("relative z-1 flex flex-col justify-center gap-4", contentClassName)}>
                <div className="flex flex-col gap-2">
                    <h3 className={cls("relative z-1 text-3xl font-medium text-foreground leading-tight truncate", nameClassName)}>
                        {member.name}
                    </h3>
                    <p className={cls("text-lg text-foreground leading-tight truncate", roleClassName)}>
                        {member.role}
                    </p>
                </div>
                {member.socialLinks && member.socialLinks.length > 0 && (
                    <SocialLinks
                        socialLinks={member.socialLinks}
                        className={socialLinksClassName}
                        iconClassName={socialIconClassName}
                    />
                )}
            </div>
            <div className="relative z-1 w-full aspect-square rounded-theme-capped overflow-hidden">
                <Image
                    src={member.imageSrc}
                    alt={member.imageAlt || member.name}
                    width={800}
                    height={800}
                    className={cls("w-full h-full object-cover", imageClassName)}
                    unoptimized={member.imageSrc.startsWith('http') || member.imageSrc.startsWith('//')}
                    aria-hidden={member.imageAlt === ""}
                />
            </div>
        </div>
    );
});

TeamMemberCard.displayName = "TeamMemberCard";

const TeamCardNine = ({
    members,
    carouselMode = "buttons",
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
    contentClassName = "",
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
}: TeamCardNineProps) => {
    return (
        <CardStack
            mode={carouselMode}
            gridVariant="uniform-all-items-equal"
            uniformGridCustomHeightClasses="min-h-none"
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
                    contentClassName={contentClassName}
                    nameClassName={nameClassName}
                    roleClassName={roleClassName}
                    socialLinksClassName={socialLinksClassName}
                    socialIconClassName={socialIconClassName}
                />
            ))}
        </CardStack>
    );
};

TeamCardNine.displayName = "TeamCardNine";

export default memo(TeamCardNine);
