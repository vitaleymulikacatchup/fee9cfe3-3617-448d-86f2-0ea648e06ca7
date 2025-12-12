import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

export type { ButtonConfig, TextboxLayout, InvertedBackground };

export type TitleSegment =
    | { type: "text"; content: string }
    | { type: "image"; src: string; alt?: string };

export interface TimelineCardStackItem {
    id: number;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
}

export type GridVariant =
    | "uniform-all-items-equal"
    | "uniform-staggered-items"
    | "uniform-alternating-heights"
    | "uniform-alternating-heights-inverted"
    | "uniform-alternating-sizes"
    | "uniform-alternating-sizes-inverted"
    | "two-items-tall-short"
    | "two-items-short-tall"
    | "bento-grid"
    | "bento-grid-inverted"
    | "two-columns-alternating-heights"
    | "asymmetric-60-wide-40-narrow"
    | "three-columns-all-equal-width"
    | "four-items-2x2-equal-grid"
    | "four-items-2x2-alternating-heights"
    | "four-items-2x2-alternating-heights-inverted"
    | "four-items-2x2-staggered-grid"
    | "four-items-2x2-staggered-grid-inverted"
    | "one-large-right-three-stacked-left"
    | "items-top-row-full-width-bottom"
    | "full-width-top-items-bottom-row"
    | "one-large-left-three-stacked-right"
    | "timeline"
    | "timeline-three-columns";

export type CardAnimationType =
    | "none"
    | "opacity"
    | "slide-up"
    | "scale-rotate"
    | "blur-reveal";

export type ContainerStyle = "default" | "card";

export interface TextBoxProps {
    title?: string;
    titleSegments?: TitleSegment[];
    description?: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    textboxLayout: TextboxLayout;
    useInvertedBackground?: InvertedBackground;
    textBoxClassName?: string;
    titleClassName?: string;
    titleImageWrapperClassName?: string;
    titleImageClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

export interface CardStackProps extends TextBoxProps {
    children: React.ReactNode;
    mode?: "auto" | "buttons";
    gridVariant?: GridVariant;
    uniformGridCustomHeightClasses?: string;
    gridRowsClassName?: string;
    itemHeightClassesOverride?: string[];
    animationType: CardAnimationType;
    containerStyle?: ContainerStyle;
    carouselThreshold?: number;
    className?: string;
    containerClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    carouselItemClassName?: string;
    controlsClassName?: string;
    ariaLabel?: string;
}

export interface GridLayoutProps extends TextBoxProps {
    children: React.ReactNode;
    itemCount: number;
    gridVariant?: GridVariant;
    uniformGridCustomHeightClasses?: string;
    gridRowsClassName?: string;
    itemHeightClassesOverride?: string[];
    animationType: CardAnimationType;
    containerStyle?: ContainerStyle;
    className?: string;
    containerClassName?: string;
    gridClassName?: string;
    ariaLabel: string;
}

export interface AutoCarouselProps extends TextBoxProps {
    children: React.ReactNode;
    uniformGridCustomHeightClasses?: string;
    animationType: CardAnimationType;
    containerStyle?: ContainerStyle;
    speed?: number;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    itemClassName?: string;
    ariaLabel: string;
    showTextBox?: boolean;
    dualMarquee?: boolean;
    topMarqueeDirection?: "left" | "right";
    bottomMarqueeDirection?: "left" | "right";
    bottomCarouselClassName?: string;
    marqueeGapClassName?: string;
}

export interface ButtonCarouselProps extends TextBoxProps {
    children: React.ReactNode;
    uniformGridCustomHeightClasses?: string;
    animationType: CardAnimationType;
    containerStyle?: ContainerStyle;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    carouselItemClassName?: string;
    controlsClassName?: string;
    ariaLabel: string;
}

export interface FullWidthCarouselProps extends TextBoxProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    dotsClassName?: string;
    ariaLabel: string;
}
