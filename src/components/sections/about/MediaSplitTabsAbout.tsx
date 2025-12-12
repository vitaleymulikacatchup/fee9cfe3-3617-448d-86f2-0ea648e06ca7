"use client";

import { memo, useState } from "react";
import MediaContent from "@/components/shared/MediaContent";
import AnimationContainer from "@/components/sections/AnimationContainer";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

interface TabOption {
    id: string;
    label: string;
    description: string;
}

interface MediaSplitTabsAboutProps {
    title: string;
    description?: string;
    tabs: TabOption[];
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    imagePosition?: "left" | "right";
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    contentCardClassName?: string;
    titleClassName?: string;
    titleDescriptionClassName?: string;
    tabsContainerClassName?: string;
    tabClassName?: string;
    activeTabClassName?: string;
    tabIndicatorClassName?: string;
    descriptionClassName?: string;
    mediaCardClassName?: string;
    mediaClassName?: string;
}

const MediaSplitTabsAbout = ({
    title,
    description,
    tabs,
    imageSrc,
    videoSrc,
    imageAlt,
    videoAriaLabel,
    imagePosition = "right",
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    containerClassName = "",
    contentCardClassName = "",
    titleClassName = "",
    titleDescriptionClassName = "",
    tabsContainerClassName = "",
    tabClassName = "",
    activeTabClassName = "",
    tabIndicatorClassName = "",
    descriptionClassName = "",
    mediaCardClassName = "",
    mediaClassName = "",
}: MediaSplitTabsAboutProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

    const activeTabData = tabs.find((tab) => tab.id === activeTab);

    const contentCard = (
        <div className={cls("card rounded-theme-capped p-6 md:p-10 md:h-160 2xl:h-180 flex flex-col justify-between gap-3 md:gap-6", contentCardClassName)}>
            <div className="relative z-1 flex flex-col gap-2">
                <h2 className={cls("text-4xl font-medium leading-tight", shouldUseLightText ? "text-background" : "text-foreground", titleClassName)}>
                    {title}
                </h2>
                {description && (
                    <p className={cls("text-base md:text-lg leading-tight", shouldUseLightText ? "text-background" : "text-foreground", titleDescriptionClassName)}>
                        {description}
                    </p>
                )}
            </div>

            <div className="relative z-1 flex flex-col gap-6">
                <div className={cls("flex flex-wrap gap-x-6 gap-y-1 md:gap-6", tabsContainerClassName)}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={cls(
                                "flex items-center gap-2 text-lg md:text-xl transition-colors cursor-pointer",
                                activeTab === tab.id
                                    ? (shouldUseLightText ? "text-background" : "text-foreground")
                                    : (shouldUseLightText ? "text-background/50" : "text-foreground/50"),
                                activeTab === tab.id && activeTabClassName,
                                tabClassName
                            )}
                            aria-pressed={activeTab === tab.id}
                        >
                            <span
                                className={cls(
                                    "rounded-full bg-accent transition-all duration-300",
                                    activeTab === tab.id ? "w-2 h-2" : "w-0 h-0",
                                    tabIndicatorClassName
                                )}
                                aria-hidden="true"
                            />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="w-full h-px bg-accent" />

                <AnimationContainer
                    key={activeTab}
                    className="w-full"
                >
                    <p className={cls("text-base md:text-lg leading-tight", shouldUseLightText ? "text-background" : "text-foreground", descriptionClassName)}>
                        {activeTabData?.description}
                    </p>
                </AnimationContainer>
            </div>
        </div>
    );

    const mediaCard = (
        <div className={cls("card aspect-square md:aspect-auto md:h-160 2xl:h-180 rounded-theme-capped overflow-hidden", mediaCardClassName)}>
            <MediaContent
                imageSrc={imageSrc}
                videoSrc={videoSrc}
                imageAlt={imageAlt}
                videoAriaLabel={videoAriaLabel}
                imageClassName={cls("relative z-1 w-full h-full object-cover", mediaClassName)}
            />
        </div>
    );

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
        >
            <div className={cls("w-content-width mx-auto grid grid-cols-1 md:grid-cols-10 gap-6", containerClassName)}>
                {imagePosition === "left" ? (
                    <>
                        <div className="md:col-span-4">{mediaCard}</div>
                        <div className="md:col-span-6">{contentCard}</div>
                    </>
                ) : (
                    <>
                        <div className="md:col-span-6">{contentCard}</div>
                        <div className="md:col-span-4">{mediaCard}</div>
                    </>
                )}
            </div>
        </section>
    );
};

MediaSplitTabsAbout.displayName = "MediaSplitTabsAbout";

export default memo(MediaSplitTabsAbout);
