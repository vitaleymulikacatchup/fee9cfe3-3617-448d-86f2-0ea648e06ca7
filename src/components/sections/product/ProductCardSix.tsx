"use client";

import React, { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import CardStack from "@/components/cardStack/CardStack";
import ProductImage from "@/components/shared/ProductImage";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

const MASK_GRADIENT = "linear-gradient(to top, transparent, black 60%)";

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

interface ProductCardSixProps {
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
    cardClassName?: string;
    imageClassName?: string;
    cardNameClassName?: string;
}

const ProductCardItem = memo(({
    product,
    cardClassName = "",
    imageClassName = "",
    cardNameClassName = "",
}: ProductCardItemProps) => {
    return (
        <article
            className={cls("group relative h-full cursor-pointer overflow-hidden rounded-theme-capped", cardClassName)}
            onClick={product.onProductClick}
            role="article"
            aria-label={`${product.name} - ${product.price}`}
        >
            <ProductImage
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt || product.name}
                isFavorited={product.isFavorited}
                onFavoriteToggle={product.onFavorite}
                imageClassName={cls("w-full h-full object-cover", imageClassName)}
            />

            <div
                className="absolute z-0 top-0 left-0 right-0 h-30 backdrop-blur-xl opacity-100"
                style={{ maskImage: MASK_GRADIENT }}
                aria-hidden="true"
            />

            <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="relative z-1">
                    <h3 className={cls("text-2xl md:text-3xl font-medium leading-tight text-background", cardNameClassName)}>
                        {product.name}
                    </h3>
                </div>

                <div className="relative z-1 flex items-end justify-end">
                    <button
                        className="relative cursor-pointer primary-button h-10 w-auto aspect-square rounded-theme flex items-center justify-center"
                        aria-label={`View ${product.name} details`}
                        type="button"
                    >
                        <ArrowUpRight className="h-4/10 text-background transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </article>
    );
});

ProductCardItem.displayName = "ProductCardItem";

const ProductCardSix = ({
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
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: ProductCardSixProps) => {
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
                    cardClassName={cardClassName}
                    imageClassName={imageClassName}
                    cardNameClassName={cardNameClassName}
                />
            ))}
        </CardStack>
    );
};

ProductCardSix.displayName = "ProductCardSix";

export default memo(ProductCardSix);
