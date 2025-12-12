"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
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

type BannerMedia = MediaProps & {
    title: string;
};

type GridCard = {
    title: string;
    description: string;
};

type BottomMedia = MediaProps;

interface BannerGridAboutProps {
    bannerMedia: BannerMedia;
    cards: GridCard[];
    bottomMedia: BottomMedia;
    animationType: CardAnimationType;
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    bannerCardClassName?: string;
    bannerMediaClassName?: string;
    bannerTitleClassName?: string;
    gridClassName?: string;
    cardClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
    bottomMediaCardClassName?: string;
    bottomMediaClassName?: string;
}

interface GridCardItemProps {
    card: GridCard;
    shouldUseLightText: boolean;
    cardClassName?: string;
    cardTitleClassName?: string;
    cardDescriptionClassName?: string;
}

const GridCardItem = memo(({
    card,
    shouldUseLightText,
    cardClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
}: GridCardItemProps) => {
    return (
        <div
            className={cls(
                "card rounded-theme-capped p-6 md:p-8 flex flex-col justify-between gap-4 aspect-video",
                cardClassName
            )}
        >
            <h3 className={cls(
                "relative z-1 text-xl text-balance md:text-3xl font-medium truncate",
                shouldUseLightText ? "text-background" : "text-foreground",
                cardTitleClassName
            )}>
                {card.title}
            </h3>
            <p className={cls(
                "relative z-1 text-base text-balance md:text-lg leading-tight line-clamp-3",
                shouldUseLightText ? "text-background/75" : "text-foreground/75",
                cardDescriptionClassName
            )}>
                {card.description}
            </p>
        </div>
    );
});

GridCardItem.displayName = "GridCardItem";

const BannerGridAbout = ({
    bannerMedia,
    cards,
    bottomMedia,
    animationType,
    useInvertedBackground,
    ariaLabel = "About section",
    className = "",
    containerClassName = "",
    bannerCardClassName = "",
    bannerMediaClassName = "",
    bannerTitleClassName = "",
    gridClassName = "",
    cardClassName = "",
    cardTitleClassName = "",
    cardDescriptionClassName = "",
    bottomMediaCardClassName = "",
    bottomMediaClassName = "",
}: BannerGridAboutProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    const cardCount = cards.length;
    // 1 card: 3 items (hero, card, media)
    // 2 cards: 4 items (hero, card1, media, card2)
    // 3 cards: 5 items (hero, card1, card2, card3, media)
    const itemCount = cardCount + 2;
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
                    {/* Banner Media Card */}
                    <div
                        ref={(el) => { itemRefs.current[0] = el; }}
                        className={cls(
                            "relative w-full aspect-video rounded-theme-capped overflow-hidden",
                            bannerCardClassName
                        )}
                    >
                        <MediaContent
                            imageSrc={bannerMedia.imageSrc}
                            videoSrc={bannerMedia.videoSrc}
                            imageAlt={bannerMedia.imageAlt}
                            videoAriaLabel={bannerMedia.videoAriaLabel}
                            imageClassName={cls("w-full h-full object-cover", bannerMediaClassName)}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className={cls(
                                "max-w-8/10 md:max-w-1/2 text-4xl md:text-6xl font-medium text-center text-balance text-background mix-blend-difference",
                                bannerTitleClassName
                            )}>
                                {bannerMedia.title}
                            </h2>
                        </div>
                    </div>

                    {/* Bottom Grid */}
                    <div className={cls(
                        "grid gap-4",
                        cardCount === 1 && "grid-cols-1 md:grid-cols-2",
                        cardCount === 2 && "grid-cols-1 md:grid-cols-3",
                        cardCount === 3 && "grid-cols-1 md:grid-cols-3",
                        gridClassName
                    )}>
                        {/* First Card */}
                        <div ref={(el) => { itemRefs.current[1] = el; }}>
                            <GridCardItem
                                card={cards[0]}
                                shouldUseLightText={shouldUseLightText}
                                cardClassName={cardClassName}
                                cardTitleClassName={cardTitleClassName}
                                cardDescriptionClassName={cardDescriptionClassName}
                            />
                        </div>

                        {/* 1 card: Media on right */}
                        {cardCount === 1 && (
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

                        {/* 2 cards: Media in middle */}
                        {cardCount === 2 && (
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
                                    <GridCardItem
                                        card={cards[1]}
                                        shouldUseLightText={shouldUseLightText}
                                        cardClassName={cardClassName}
                                        cardTitleClassName={cardTitleClassName}
                                        cardDescriptionClassName={cardDescriptionClassName}
                                    />
                                </div>
                            </>
                        )}

                        {/* 3 cards: Card 2, Card 3, then Media full width */}
                        {cardCount === 3 && (
                            <>
                                <div ref={(el) => { itemRefs.current[2] = el; }}>
                                    <GridCardItem
                                        card={cards[1]}
                                        shouldUseLightText={shouldUseLightText}
                                        cardClassName={cardClassName}
                                        cardTitleClassName={cardTitleClassName}
                                        cardDescriptionClassName={cardDescriptionClassName}
                                    />
                                </div>
                                <div ref={(el) => { itemRefs.current[3] = el; }}>
                                    <GridCardItem
                                        card={cards[2]}
                                        shouldUseLightText={shouldUseLightText}
                                        cardClassName={cardClassName}
                                        cardTitleClassName={cardTitleClassName}
                                        cardDescriptionClassName={cardDescriptionClassName}
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

BannerGridAbout.displayName = "BannerGridAbout";

export default memo(BannerGridAbout);
