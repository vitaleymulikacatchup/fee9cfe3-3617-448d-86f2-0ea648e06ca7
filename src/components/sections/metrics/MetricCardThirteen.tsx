"use client";

import React, { memo, useState, useEffect } from "react";
import TextBox from "@/components/Textbox";
import { Globe } from "@/components/shared/Globe";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, TitleSegment } from "@/components/cardStack/types";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";
import type { COBEOptions } from "cobe";

type MetricCard = {
    id: string;
    label: string;
    value: string;
};

interface MetricCardThirteenProps {
    title: string;
    titleSegments?: TitleSegment[];
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    metrics: MetricCard[];
    globeConfig?: COBEOptions;
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    globeWrapperClassName?: string;
    globeClassName?: string;
    metricsContainerClassName?: string;
    metricCardClassName?: string;
    metricLabelClassName?: string;
    metricValueClassName?: string;
}

const MetricCardThirteen = ({
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    metrics,
    globeConfig,
    useInvertedBackground,
    ariaLabel = "Metrics section",
    className = "",
    containerClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    globeWrapperClassName = "",
    globeClassName = "",
    metricsContainerClassName = "",
    metricCardClassName = "",
    metricLabelClassName = "",
    metricValueClassName = "",
}: MetricCardThirteenProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
    const [isCentered, setIsCentered] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsCentered(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            aria-label={ariaLabel}
            className={cls(
                "relative w-full min-h-svh py-20 overflow-hidden",
                useInvertedBackground === "invertCard" && "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground",
                useInvertedBackground === "invertDefault" && "bg-foreground",
                className
            )}
        >
            <div className={cls("relative w-content-width mx-auto flex flex-col justify-between min-h-[67.5svh] md:min-h-[calc(100svh-10rem)]", containerClassName)}>
                <div className={cls(
                    "absolute bottom-0 right-0 w-full md:w-3/5 h-3/4 md:h-full pointer-events-none overflow-hidden",
                    globeWrapperClassName
                )}>
                    <div className="relative h-full aspect-square max-w-full max-h-full ml-auto flex items-center justify-center mask-fade-xy">
                        <Globe config={globeConfig} className={cls("absolute scale-125 top-1/2 left-1/2 -translate-1/2", globeClassName)} />
                    </div>
                </div>
                <TextBox
                    title={title}
                    titleSegments={titleSegments}
                    description={description}
                    tag={tag}
                    tagIcon={tagIcon}
                    buttons={buttons}
                    useInvertedBackground={useInvertedBackground}
                    className={cls("w-full md:w-1/2 flex flex-col gap-3 md:gap-3", textBoxClassName)}
                    titleClassName={cls("text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance", titleClassName)}
                    descriptionClassName={cls("max-w-8/10 text-lg md:text-xl leading-[1.2] text-center md:text-left", descriptionClassName)}
                    tagClassName={cls("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
                    buttonContainerClassName={cls("flex gap-4 mt-4", buttonContainerClassName)}
                    buttonClassName={cls("", buttonClassName)}
                    buttonTextClassName={cls("text-base", buttonTextClassName)}
                    titleImageWrapperClassName={titleImageWrapperClassName}
                    titleImageClassName={titleImageClassName}
                    center={isCentered}
                />

                <div className={cls(
                    "relative w-full md:w-7/10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto",
                    metricsContainerClassName
                )}>
                    {metrics.map((metric) => (
                        <div
                            key={metric.id}
                            className={cls(
                                "card rounded-theme-capped p-4 md:p-6 flex flex-col gap-6 md:gap-10",
                                metricCardClassName
                            )}
                        >
                            <p className={cls(
                                "text-sm md:text-base truncate",
                                shouldUseLightText ? "text-background/75" : "text-foreground/75",
                                metricLabelClassName
                            )}>
                                {metric.label}
                            </p>
                            <p className={cls(
                                "text-2xl md:text-3xl font-medium leading-tight truncate",
                                shouldUseLightText ? "text-background" : "text-foreground",
                                metricValueClassName
                            )}>
                                {metric.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

MetricCardThirteen.displayName = "MetricCardThirteen";

export default memo(MetricCardThirteen);
