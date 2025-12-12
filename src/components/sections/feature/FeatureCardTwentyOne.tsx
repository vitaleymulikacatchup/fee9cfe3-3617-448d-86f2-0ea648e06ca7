"use client";

import React, { memo, useState, useEffect } from "react";
import TextBox from "@/components/Textbox";
import Accordion from "@/components/Accordion";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type MediaProps =
    | {
        imageSrc: string;
        imageAlt?: string;
        videoSrc?: never;
        videoAriaLabel?: never;
    }
    | {
        videoSrc: string;
        videoAriaLabel?: string;
        imageSrc?: never;
        imageAlt?: never;
    };

type AccordionItem = {
    id: string;
    title: string;
    content: string;
};

type FeatureCardTwentyOneProps = MediaProps & {
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    accordionItems: AccordionItem[];
    useInvertedBackground: InvertedBackground;
    mediaPosition?: "left" | "right";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    contentClassName?: string;
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    accordionContainerClassName?: string;
    accordionClassName?: string;
    accordionTitleClassName?: string;
    accordionContentClassName?: string;
    accordionIconContainerClassName?: string;
    accordionIconClassName?: string;
};

const FeatureCardTwentyOne = ({
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    accordionItems,
    imageSrc,
    imageAlt,
    videoSrc,
    videoAriaLabel,
    useInvertedBackground,
    mediaPosition = "left",
    ariaLabel = "Feature section",
    className = "",
    containerClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    contentClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    accordionContainerClassName = "",
    accordionClassName = "",
    accordionTitleClassName = "",
    accordionContentClassName = "",
    accordionIconContainerClassName = "",
    accordionIconClassName = "",
}: FeatureCardTwentyOneProps) => {
    const [isCentered, setIsCentered] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setIsCentered(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleAccordionToggle = (index: number) => {
        setActiveAccordion(activeAccordion === index ? -1 : index);
    };

    const mediaElement = (
        <div className={cls(
            "w-full md:w-1/2 h-[50svh] md:h-auto rounded-theme-capped overflow-hidden",
            mediaWrapperClassName
        )}>
            <MediaContent
                imageSrc={imageSrc}
                videoSrc={videoSrc}
                imageAlt={imageAlt}
                videoAriaLabel={videoAriaLabel}
                imageClassName={cls("w-full h-full object-cover", mediaClassName)}
            />
        </div>
    );

    const contentElement = (
        <div className={cls(
            "w-full md:w-1/2 flex flex-col",
            contentClassName
        )}>
            <TextBox
                title={title}
                titleSegments={titleSegments}
                description={description}
                tag={tag}
                tagIcon={tagIcon}
                buttons={buttons}
                useInvertedBackground={useInvertedBackground}
                className={cls("flex flex-col gap-3", textBoxClassName)}
                titleClassName={cls("text-4xl md:text-5xl font-medium text-center md:text-left text-balance", titleClassName)}
                descriptionClassName={cls("text-base md:text-lg leading-[1.2] text-center md:text-left", descriptionClassName)}
                tagClassName={cls("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
                buttonContainerClassName={cls("flex gap-4 mt-4", buttonContainerClassName)}
                buttonClassName={buttonClassName}
                buttonTextClassName={cls("text-base", buttonTextClassName)}
                titleImageWrapperClassName={titleImageWrapperClassName}
                titleImageClassName={titleImageClassName}
                center={isCentered}
            />

            <div className={cls(
                "flex flex-col mt-8 divide-y divide-accent/20 border-y border-accent/20",
                accordionContainerClassName
            )}>
                {accordionItems.map((item, index) => (
                    <Accordion
                        key={item.id}
                        index={index}
                        isActive={activeAccordion === index}
                        onToggle={handleAccordionToggle}
                        title={item.title}
                        content={item.content}
                        showCard={false}
                        useInvertedBackground={useInvertedBackground === "noInvert" ? undefined : useInvertedBackground}
                        className={cls("py-4 md:py-6", accordionClassName)}
                        titleClassName={cls("text-xl md:text-2xl", accordionTitleClassName)}
                        contentClassName={accordionContentClassName}
                        iconContainerClassName={accordionIconContainerClassName}
                        iconClassName={accordionIconClassName}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <section
            aria-label={ariaLabel}
            className={cls(
                "relative w-full py-20",
                useInvertedBackground === "invertCard" && "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground",
                useInvertedBackground === "invertDefault" && "bg-foreground",
                className
            )}
        >
            <div className={cls(
                "w-content-width mx-auto flex flex-col md:flex-row gap-8 md:gap-15",
                containerClassName
            )}>
                {mediaPosition === "left" ? (
                    <>
                        {mediaElement}
                        {contentElement}
                    </>
                ) : (
                    <>
                        {contentElement}
                        {mediaElement}
                    </>
                )}
            </div>
        </section>
    );
};

FeatureCardTwentyOne.displayName = "FeatureCardTwentyOne";

export default memo(FeatureCardTwentyOne);
