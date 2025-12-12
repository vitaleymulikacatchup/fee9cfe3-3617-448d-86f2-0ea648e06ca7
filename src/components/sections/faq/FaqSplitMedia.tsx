"use client";

import { memo, useState, useCallback, Fragment } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import Accordion from "@/components/Accordion";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface FaqItem {
    id: string;
    title: string;
    content: string;
}

interface FaqSplitMediaProps {
    faqs: FaqItem[];
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    mediaPosition?: "left" | "right";
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: TextboxLayout;
    useInvertedBackground: InvertedBackground;
    animationType?: "smooth" | "instant";
    showCard?: boolean;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textBoxTitleClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
    contentClassName?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    faqsContainerClassName?: string;
    accordionClassName?: string;
    accordionTitleClassName?: string;
    accordionIconContainerClassName?: string;
    accordionIconClassName?: string;
    accordionContentClassName?: string;
    separatorClassName?: string;
}

const FaqSplitMedia = ({
    faqs,
    imageSrc,
    videoSrc,
    imageAlt = "",
    videoAriaLabel = "FAQ section video",
    mediaPosition = "left",
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout,
    useInvertedBackground,
    animationType = "smooth",
    showCard = true,
    ariaLabel = "FAQ section",
    className = "",
    containerClassName = "",
    textBoxTitleClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    textBoxDescriptionClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
    contentClassName = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    faqsContainerClassName = "",
    accordionClassName = "",
    accordionTitleClassName = "",
    accordionIconContainerClassName = "",
    accordionIconClassName = "",
    accordionContentClassName = "",
    separatorClassName = "",
}: FaqSplitMediaProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = useCallback((index: number) => {
        setActiveIndex((prevActiveIndex) =>
            prevActiveIndex === index ? null : index
        );
    }, []);

    return (
        <section aria-label={ariaLabel} className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}>
            <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
                {(title || description) && (
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
                )}

                <div className={cls("grid grid-cols-1 md:grid-cols-5 gap-4 md:auto-rows-fr", contentClassName)}>
                    {mediaPosition === "left" && (
                        <div className={cls("overflow-hidden rounded-theme-capped card relative h-80 md:h-auto col-span-1 md:col-span-2", mediaWrapperClassName)}>
                            <MediaContent
                                imageSrc={imageSrc}
                                videoSrc={videoSrc}
                                imageAlt={imageAlt}
                                videoAriaLabel={videoAriaLabel}
                                imageClassName={cls("absolute z-1 inset-0 w-full h-full object-cover", mediaClassName)}
                            />
                        </div>
                    )}
                    <div className={cls("relative z-1 col-span-1 md:col-span-3 flex flex-col gap-4", faqsContainerClassName)}>
                        {faqs.map((faq, index) => (
                            <Fragment key={faq.id}>
                                <Accordion
                                    index={index}
                                    isActive={activeIndex === index}
                                    onToggle={handleToggle}
                                    title={faq.title}
                                    content={faq.content}
                                    animationType={animationType}
                                    showCard={showCard}
                                    useInvertedBackground={useInvertedBackground}
                                    className={accordionClassName}
                                    titleClassName={accordionTitleClassName}
                                    iconContainerClassName={accordionIconContainerClassName}
                                    iconClassName={accordionIconClassName}
                                    contentClassName={accordionContentClassName}
                                />
                                {!showCard && index < faqs.length - 1 && (
                                    <div className={cls("w-full border-b border-foreground/10", separatorClassName)} />
                                )}
                            </Fragment>
                        ))}
                    </div>
                    {mediaPosition === "right" && (
                        <div className={cls("overflow-hidden rounded-theme card relative h-80 md:h-auto col-span-1 md:col-span-2", mediaWrapperClassName)}>
                            <MediaContent
                                imageSrc={imageSrc}
                                videoSrc={videoSrc}
                                imageAlt={imageAlt}
                                videoAriaLabel={videoAriaLabel}
                                imageClassName={cls("absolute z-1 inset-0 w-full h-full object-cover", mediaClassName)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

FaqSplitMedia.displayName = "FaqSplitMedia";

export default memo(FaqSplitMedia);
