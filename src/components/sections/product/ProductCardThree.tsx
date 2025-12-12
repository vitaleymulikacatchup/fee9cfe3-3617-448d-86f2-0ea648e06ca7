"use client";

import React, { memo, useState, useCallback } from "react";
import { Plus, Minus } from "lucide-react";
import CardStack from "@/components/cardStack/CardStack";
import ProductImage from "@/components/shared/ProductImage";
import QuantityButton from "@/components/shared/QuantityButton";
import Button from "@/components/button/Button";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import { getButtonProps } from "@/lib/buttonUtils";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, GridVariant, CardAnimationType, ContainerStyle, TitleSegment } from "@/components/cardStack/types";
import type { CTAButtonVariant, ButtonPropsForVariant } from "@/components/button/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type ProductCard = {
    id: string;
    name: string;
    price: string;
    imageSrc: string;
    imageAlt?: string;
    onFavorite?: () => void;
    onProductClick?: () => void;
    onQuantityChange?: (quantity: number) => void;
    isFavorited?: boolean;
    initialQuantity?: number;
    priceButtonProps?: Partial<ButtonPropsForVariant<CTAButtonVariant>>;
};

interface ProductCardThreeProps {
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
    quantityControlsClassName?: string;
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
    quantityControlsClassName?: string;
}

const ProductCardItem = memo(({
    product,
    shouldUseLightText,
    cardClassName = "",
    imageClassName = "",
    cardNameClassName = "",
    quantityControlsClassName = "",
}: ProductCardItemProps) => {
    const theme = useTheme();
    const [quantity, setQuantity] = useState(product.initialQuantity || 1);

    const handleIncrement = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        product.onQuantityChange?.(newQuantity);
    }, [quantity, product]);

    const handleDecrement = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            product.onQuantityChange?.(newQuantity);
        }
    }, [quantity, product]);

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

            <div className="relative z-1 flex flex-col gap-3">
                <h3 className={cls("text-xl font-medium leading-[1.15] truncate", shouldUseLightText ? "text-background" : "text-foreground", cardNameClassName)}>
                    {product.name}
                </h3>

                <div className="flex items-center justify-between gap-4">
                    <div className={cls("flex items-center gap-2", quantityControlsClassName)}>
                        <QuantityButton
                            onClick={handleDecrement}
                            ariaLabel="Decrease quantity"
                            Icon={Minus}
                        />
                        <span className={cls("text-base font-medium min-w-[2ch] text-center leading-[1]", shouldUseLightText ? "text-background" : "text-foreground")}>
                            {quantity}
                        </span>
                        <QuantityButton
                            onClick={handleIncrement}
                            ariaLabel="Increase quantity"
                            Icon={Plus}
                        />
                    </div>

                    <Button
                        {...getButtonProps(
                            {
                                text: product.price,
                                props: product.priceButtonProps,
                            },
                            0,
                            theme.defaultButtonVariant
                        )}
                    />
                </div>
            </div>
        </article>
    );
});

ProductCardItem.displayName = "ProductCardItem";

const ProductCardThree = ({
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
    quantityControlsClassName = "",
    gridClassName = "",
    carouselClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    textBoxTagClassName = "",
    textBoxButtonContainerClassName = "",
    textBoxButtonClassName = "",
    textBoxButtonTextClassName = "",
}: ProductCardThreeProps) => {
    const theme = useTheme();
    const shouldUseLightText =
        containerStyle === "card"
            ? shouldUseInvertedText("invertDefault", theme.cardStyle) || shouldUseInvertedText("invertCard", theme.cardStyle)
            : shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <CardStack
            useInvertedBackground={useInvertedBackground}
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
                    quantityControlsClassName={quantityControlsClassName}
                />
            ))}
        </CardStack>
    );
};

ProductCardThree.displayName = "ProductCardThree";

export default memo(ProductCardThree);
