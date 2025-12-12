"use client";

import React, { memo, useMemo } from "react";
import TimelinePhoneView from "@/components/cardStack/layouts/timelines/TimelinePhoneView";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import Tag from "@/components/shared/Tag";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TimelinePhoneViewItem } from "@/components/cardStack/hooks/usePhoneAnimations";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type AboutPhone = {
    imageAlt?: string;
    videoAriaLabel?: string;
} & (
        | { imageSrc: string; videoSrc?: never }
        | { videoSrc: string; imageSrc?: never }
    );

interface AboutPhoneTimelineProps {
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    tag: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    phoneOne: AboutPhone;
    phoneTwo: AboutPhone;
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    desktopContainerClassName?: string;
    mobileContainerClassName?: string;
    desktopContentClassName?: string;
    desktopWrapperClassName?: string;
    mobileWrapperClassName?: string;
    phoneFrameClassName?: string;
    mobilePhoneFrameClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    contentClassName?: string;
    tagClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

interface AboutContentProps {
    title: string;
    description: string;
    tag: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    contentClassName: string;
    tagClassName: string;
    titleClassName: string;
    descriptionClassName: string;
    buttonContainerClassName: string;
    buttonClassName: string;
    buttonTextClassName: string;
}

const AboutContent = ({
    title,
    description,
    tag,
    tagIcon: TagIcon,
    buttons,
    useInvertedBackground,
    contentClassName,
    tagClassName,
    titleClassName,
    descriptionClassName,
    buttonContainerClassName,
    buttonClassName,
    buttonTextClassName,
}: AboutContentProps) => {
    const theme = useTheme();

    return (
        <div className={cls("h-full w-full flex items-center justify-center px-10", contentClassName)}>
            <div className="flex flex-col gap-3 md:gap-1 items-center mb-0 md:mb-[12.5vh] 2xl:mb-[14vh]">
                <Tag
                    text={tag}
                    icon={TagIcon}
                    useInvertedBackground={useInvertedBackground}
                    className={cls("mb-1 md:mb-3", tagClassName)}
                />

                <TextAnimation
                    type={theme.defaultTextAnimation}
                    text={title}
                    variant="trigger"
                    as="h2"
                    className={cls("text-6xl font-medium text-center", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", titleClassName)}
                />

                <TextAnimation
                    type={theme.defaultTextAnimation}
                    text={description}
                    variant="trigger"
                    as="p"
                    className={cls("text-lg leading-[1.2] text-center", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") ? "text-background/75" : "text-foreground/75", descriptionClassName)}
                />

                {buttons && buttons.length > 0 && (
                    <div className={cls("flex gap-4 mt-1 md:mt-3 justify-center", buttonContainerClassName)}>
                        {buttons.map((button, index) => (
                            <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, buttonClassName, buttonTextClassName)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const AboutPhoneTimeline = ({
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    phoneOne,
    phoneTwo,
    textboxLayout,
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    containerClassName = "",
    desktopContainerClassName = "",
    mobileContainerClassName = "",
    desktopContentClassName = "",
    desktopWrapperClassName = "",
    mobileWrapperClassName = "",
    phoneFrameClassName = "",
    mobilePhoneFrameClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    contentClassName = "",
    tagClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
}: AboutPhoneTimelineProps) => {
    const timelineItems: TimelinePhoneViewItem[] = useMemo(() => [{
        trigger: 'about-trigger',
        content: (
            <AboutContent
                title={title}
                description={description}
                tag={tag}
                tagIcon={tagIcon}
                buttons={buttons}
                useInvertedBackground={useInvertedBackground}
                contentClassName={contentClassName}
                tagClassName={tagClassName}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
                buttonContainerClassName={buttonContainerClassName}
                buttonClassName={buttonClassName}
                buttonTextClassName={buttonTextClassName}
            />
        ),
        imageOne: phoneOne.imageSrc,
        videoOne: phoneOne.videoSrc,
        imageAltOne: phoneOne.imageAlt || `${title} - Image 1`,
        videoAriaLabelOne: phoneOne.videoAriaLabel || `${title} - Video 1`,
        imageTwo: phoneTwo.imageSrc,
        videoTwo: phoneTwo.videoSrc,
        imageAltTwo: phoneTwo.imageAlt || `${title} - Image 2`,
        videoAriaLabelTwo: phoneTwo.videoAriaLabel || `${title} - Video 2`,
    }], [title, description, tag, tagIcon, buttons, phoneOne, phoneTwo, useInvertedBackground, contentClassName, tagClassName, titleClassName, descriptionClassName, buttonContainerClassName, buttonClassName, buttonTextClassName]);

    return (
        <TimelinePhoneView
            items={timelineItems}
            showTextBox={false}
            title=""
            titleSegments={titleSegments}
            description=""
            textboxLayout={textboxLayout}
            useInvertedBackground={useInvertedBackground}
            className={className}
            containerClassName={containerClassName}
            desktopContainerClassName={desktopContainerClassName}
            mobileContainerClassName={mobileContainerClassName}
            desktopContentClassName={desktopContentClassName}
            desktopWrapperClassName={desktopWrapperClassName}
            mobileWrapperClassName={mobileWrapperClassName}
            phoneFrameClassName={phoneFrameClassName}
            mobilePhoneFrameClassName={mobilePhoneFrameClassName}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
            ariaLabel={ariaLabel}
        />
    );
};

AboutPhoneTimeline.displayName = "AboutPhoneTimeline";

export default memo(AboutPhoneTimeline);
