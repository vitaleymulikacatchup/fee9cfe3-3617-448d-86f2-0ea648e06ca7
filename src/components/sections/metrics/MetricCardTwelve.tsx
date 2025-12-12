"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { CardAnimationType } from "@/components/cardStack/types";
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

type HeroMedia = MediaProps & {
    title: string;
};

type MetricCard = {
    icon: LucideIcon;
    title: string;
    value: string;
};

type BottomMedia = MediaProps;

interface MetricCardTwelveProps {
    heroMedia: HeroMedia;
    metrics: MetricCard[];
    bottomMedia: BottomMedia;
    animationType: CardAnimationType;
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    heroCardClassName?: string;
    heroMediaClassName?: string;
    heroTitleClassName?: string;
    gridClassName?: string;
    metricCardClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
    metricTitleClassName?: string;
    valueClassName?: string;
    bottomMediaCardClassName?: string;
    bottomMediaClassName?: string;
}

interface MetricCardItemProps {
    metric: MetricCard;
    shouldUseLightText: boolean;
    metricCardClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
    metricTitleClassName?: string;
    valueClassName?: string;
}

const MetricCardItem = memo(({
    metric,
    shouldUseLightText,
    metricCardClassName = "",
    iconContainerClassName = "",
    iconClassName = "",
    metricTitleClassName = "",
    valueClassName = "",
}: MetricCardItemProps) => {
    return (
        <div
            className={cls(
                "card rounded-theme-capped p-6 md:p-8 flex flex-col items-center justify-center gap-4 aspect-video",
                metricCardClassName
            )}
        >
            <div className="relative z-1 w-full flex items-center justify-center gap-2">
                <div className={cls(
                    "h-8 primary-button aspect-square rounded-theme flex items-center justify-center",
                    iconContainerClassName
                )}>
                    <metric.icon className={cls("h-4/10 text-background", iconClassName)} strokeWidth={1.5} />
                </div>
                <h3 className={cls(
                    "text-xl truncate",
                    shouldUseLightText ? "text-background" : "text-foreground",
                    metricTitleClassName
                )}>
                    {metric.title}
                </h3>
            </div>
            <div className="relative z-1 w-full flex items-center justify-center">
                <h4 className={cls(
                    "text-7xl font-medium truncate",
                    shouldUseLightText ? "text-background" : "text-foreground",
                    valueClassName
                )}>
                    {metric.value}
                </h4>
            </div>
        </div>
    );
});

MetricCardItem.displayName = "MetricCardItem";

const MetricCardTwelve = ({
    heroMedia,
    metrics,
    bottomMedia,
    animationType,
    useInvertedBackground,
    ariaLabel = "Metrics section",
    className = "",
    containerClassName = "",
    heroCardClassName = "",
    heroMediaClassName = "",
    heroTitleClassName = "",
    gridClassName = "",
    metricCardClassName = "",
    iconContainerClassName = "",
    iconClassName = "",
    metricTitleClassName = "",
    valueClassName = "",
    bottomMediaCardClassName = "",
    bottomMediaClassName = "",
}: MetricCardTwelveProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const metricCount = metrics.length;
    // 1 metric: 3 items (hero, metric, media)
    // 2 metrics: 4 items (hero, metric1, media, metric2)
    // 3 metrics: 5 items (hero, metric1, metric2, metric3, media)
    const itemCount = metricCount + 2;
    const { itemRefs } = useCardAnimation({ animationType, itemCount });

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
            <div className={cls("w-content-width mx-auto", containerClassName)}>
                <div className="flex flex-col gap-4">
                    {/* Hero Media Card */}
                    <div
                        ref={(el) => { itemRefs.current[0] = el; }}
                        className={cls(
                            "relative w-full aspect-video rounded-theme-capped overflow-hidden",
                            heroCardClassName
                        )}
                    >
                        <MediaContent
                            imageSrc={heroMedia.imageSrc}
                            videoSrc={heroMedia.videoSrc}
                            imageAlt={heroMedia.imageAlt}
                            videoAriaLabel={heroMedia.videoAriaLabel}
                            imageClassName={cls("w-full h-full object-cover", heroMediaClassName)}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className={cls(
                                "max-w-8/10 md:max-w-1/2 text-4xl md:text-6xl font-medium text-center text-balance text-background mix-blend-difference",
                                heroTitleClassName
                            )}>
                                {heroMedia.title}
                            </h2>
                        </div>
                    </div>

                    {/* Bottom Grid */}
                    <div className={cls(
                        "grid gap-4",
                        metricCount === 1 && "grid-cols-1 md:grid-cols-2",
                        metricCount === 2 && "grid-cols-1 md:grid-cols-3",
                        metricCount === 3 && "grid-cols-1 md:grid-cols-3",
                        gridClassName
                    )}>
                        {/* First Metric Card */}
                        <div ref={(el) => { itemRefs.current[1] = el; }}>
                            <MetricCardItem
                                metric={metrics[0]}
                                shouldUseLightText={shouldUseLightText}
                                metricCardClassName={metricCardClassName}
                                iconContainerClassName={iconContainerClassName}
                                iconClassName={iconClassName}
                                metricTitleClassName={metricTitleClassName}
                                valueClassName={valueClassName}
                            />
                        </div>

                        {/* 1 metric: Media on right */}
                        {metricCount === 1 && (
                            <div
                                ref={(el) => { itemRefs.current[2] = el; }}
                                className={cls(
                                    "relative rounded-theme-capped overflow-hidden aspect-square md:aspect-video",
                                    bottomMediaCardClassName
                                )}
                            >
                                <MediaContent
                                    imageSrc={bottomMedia.imageSrc}
                                    videoSrc={bottomMedia.videoSrc}
                                    imageAlt={bottomMedia.imageAlt}
                                    videoAriaLabel={bottomMedia.videoAriaLabel}
                                    imageClassName={cls("w-full h-full object-cover", bottomMediaClassName)}
                                />
                            </div>
                        )}

                        {/* 2 metrics: Media in middle */}
                        {metricCount === 2 && (
                            <>
                                <div
                                    ref={(el) => { itemRefs.current[2] = el; }}
                                    className={cls(
                                        "relative rounded-theme-capped overflow-hidden aspect-square md:aspect-video order-last md:order-none",
                                        bottomMediaCardClassName
                                    )}
                                >
                                    <MediaContent
                                        imageSrc={bottomMedia.imageSrc}
                                        videoSrc={bottomMedia.videoSrc}
                                        imageAlt={bottomMedia.imageAlt}
                                        videoAriaLabel={bottomMedia.videoAriaLabel}
                                        imageClassName={cls("w-full h-full object-cover", bottomMediaClassName)}
                                    />
                                </div>
                                <div ref={(el) => { itemRefs.current[3] = el; }}>
                                    <MetricCardItem
                                        metric={metrics[1]}
                                        shouldUseLightText={shouldUseLightText}
                                        metricCardClassName={metricCardClassName}
                                        iconContainerClassName={iconContainerClassName}
                                        iconClassName={iconClassName}
                                        metricTitleClassName={metricTitleClassName}
                                        valueClassName={valueClassName}
                                    />
                                </div>
                            </>
                        )}

                        {/* 3 metrics: Metric 2, Metric 3, then Media full width */}
                        {metricCount === 3 && (
                            <>
                                <div ref={(el) => { itemRefs.current[2] = el; }}>
                                    <MetricCardItem
                                        metric={metrics[1]}
                                        shouldUseLightText={shouldUseLightText}
                                        metricCardClassName={metricCardClassName}
                                        iconContainerClassName={iconContainerClassName}
                                        iconClassName={iconClassName}
                                        metricTitleClassName={metricTitleClassName}
                                        valueClassName={valueClassName}
                                    />
                                </div>
                                <div ref={(el) => { itemRefs.current[3] = el; }}>
                                    <MetricCardItem
                                        metric={metrics[2]}
                                        shouldUseLightText={shouldUseLightText}
                                        metricCardClassName={metricCardClassName}
                                        iconContainerClassName={iconContainerClassName}
                                        iconClassName={iconClassName}
                                        metricTitleClassName={metricTitleClassName}
                                        valueClassName={valueClassName}
                                    />
                                </div>
                                <div
                                    ref={(el) => { itemRefs.current[4] = el; }}
                                    className={cls(
                                        "relative rounded-theme-capped overflow-hidden aspect-video md:aspect-[16/3] col-span-2 md:col-span-3",
                                        bottomMediaCardClassName
                                    )}
                                >
                                    <MediaContent
                                        imageSrc={bottomMedia.imageSrc}
                                        videoSrc={bottomMedia.videoSrc}
                                        imageAlt={bottomMedia.imageAlt}
                                        videoAriaLabel={bottomMedia.videoAriaLabel}
                                        imageClassName={cls("w-full h-full object-cover", bottomMediaClassName)}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

MetricCardTwelve.displayName = "MetricCardTwelve";

export default memo(MetricCardTwelve);
