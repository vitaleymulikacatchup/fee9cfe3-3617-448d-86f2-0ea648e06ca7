"use client";

import React, { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import CardStack from "@/components/cardStack/CardStack";
import ProductImage from "@/components/shared/ProductImage";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type ProductCard = {
    id: string;
    name: string;
    price: string;
    imageSrc: string;
    imageAlt?: string;
    onFavorite?: () => void;
    onProductClick?: () => void;
    isFavorited?: boolean;
};

interface ProductCardOneProps {
    products: ProductCard[];
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
    imageClassName?: string;
    textBoxTitleClassName?: string;
    textBoxTitleImageWrapperClassName?: string;
    textBoxTitleImageClassName?: string;
    textBoxDescriptionClassName?: string;
    cardNameClassName?: string;
    cardPriceClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    textBoxClassName?: string;
    textBoxTagClassName?: string;
    textBoxButtonContainerClassName?: string;
    textBoxButtonClassName?: string;
    textBoxButtonTextClassName?: string;
}

interface ProductCardItemProps {
    product: ProductCard;
    shouldUseLightText: boolean;
    cardClassName?: string;
    imageClassName?: string;
    cardNameClassName?: string;
    cardPriceClassName?: string;
}

const ProductCardItem = memo(({
    product,
    shouldUseLightText,
    cardClassName = "",
    imageClassName = "",
    cardNameClassName = "",
    cardPriceClassName = "",
}: ProductCardItemProps) => {
    return (
        <article
            className={cls("card group relative h-full flex flex-col gap-4 cursor-pointer p-4 rounded-theme-capped", cardClassName)}
            onClick={product.onProductClick}
            role="article"
            aria-label={`${product.name} - ${product.price}`}
        >
            <ProductImage
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt || product.name}
                isFavorited={product.isFavorited}
                onFavoriteToggle={product.onFavorite}
                imageClassName={imageClassName}
            />

            <div className="relative z-1 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <h3 className={cls("text-base font-medium truncate leading-[1.3]", shouldUseLightText ? "text-background" : "text-foreground", cardNameClassName)}>
                        {product.name}
                    </h3>
                    <p className={cls("text-2xl font-medium leading-[1.3]", shouldUseLightText ? "text-background" : "text-foreground", cardPriceClassName)}>
                        {product.price}
                    </p>
                </div>

                <button
                    className="relative cursor-pointer primary-button h-10 w-auto aspect-square rounded-theme flex items-center justify-center flex-shrink-0"
                    aria-label={`View ${product.name} details`}
                    type="button"
                >
                    <ArrowUpRight className="h-4/10 text-background transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.5} />
                </button>
            </div>
        </article>
    );
});

ProductCardItem.displayName = "ProductCardItem";

const ProductCardOne = ({
    products,
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
    ariaLabel = "Product section",
    className = "",
    containerClassName = "",
    cardClassName = "",
    imageClassName = "",
    textBoxTitleClassName = "",
    textBoxTitleImageWrapperClassName = "",
    textBoxTitleImageClassName = "",
    textBoxDescriptionClassName = "",
    cardNameClassName = "",
    cardPriceClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: ProductCardOneProps) => {
    const theme = useTheme();
    const shouldUseLightText =
        containerStyle === "card"
            ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
            : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

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
            {products.map((product, index) => (
                <ProductCardItem
                    key={`${product.id}-${index}`}
                    product={product}
                    shouldUseLightText={shouldUseLightText}
                    cardClassName={cardClassName}
                    imageClassName={imageClassName}
                    cardNameClassName={cardNameClassName}
                    cardPriceClassName={cardPriceClassName}
                />
            ))}
        </CardStack>
    );
};

ProductCardOne.displayName = "ProductCardOne";

export default memo(ProductCardOne);
