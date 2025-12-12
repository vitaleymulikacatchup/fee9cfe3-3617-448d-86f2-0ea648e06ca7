"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardStack from "@/components/cardStack/CardStack";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type TeamMember = {
    id: string;
    name: string;
    role: string;
    imageSrc: string;
    imageAlt?: string;
};

interface TeamCardOneProps {
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
}

const TeamMemberCard = memo(({
    member,
    cardClassName = "",
    imageClassName = "",
    overlayClassName = "",
    nameClassName = "",
    roleClassName = "",
}: TeamMemberCardProps) => {
    return (
        <div className={cls("relative h-full card rounded-theme-capped p-4", cardClassName)}>
            <div className="relative z-1 w-full h-full rounded-theme-capped overflow-hidden">
                <Image
                    src={member.imageSrc}
                    alt={member.imageAlt || member.name}
                    width={800}
                    height={800}
                    className={cls("w-full h-full object-cover  ", imageClassName)}
                    unoptimized={member.imageSrc.startsWith('http') || member.imageSrc.startsWith('//')}
                    aria-hidden={member.imageAlt === ""}
                />

                <div className={cls("!absolute z-1 bottom-4 left-4 right-4 card p-4 rounded-theme-capped flex items-center justify-between gap-3", overlayClassName)}>
                    <h3 className={cls("relative z-1 text-xl font-medium text-foreground leading-[1.1] truncate", nameClassName)}>
                        {member.name}
                    </h3>
                    <div className="min-w-0 max-w-full w-fit primary-button px-3 py-2 rounded-theme">
                        <p className={cls("text-sm text-background leading-[1.1] truncate", roleClassName)}>
                            {member.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

TeamMemberCard.displayName = "TeamMemberCard";

const TeamCardOne = ({
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
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: TeamCardOneProps) => {
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
                />
            ))}
        </CardStack>
    );
};

TeamCardOne.displayName = "TeamCardOne";

export default memo(TeamCardOne);
