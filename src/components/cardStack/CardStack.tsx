"use client";

import { memo, Children } from "react";
import { CardStackProps } from "./types";
import GridLayout from "./layouts/grid/GridLayout";
import AutoCarousel from "./layouts/carousels/AutoCarousel";
import ButtonCarousel from "./layouts/carousels/ButtonCarousel";
import TimelineBase from "./layouts/timelines/TimelineBase";

const CardStack = ({
    children,
    mode = "buttons",
    gridVariant = "uniform-all-items-equal",
    uniformGridCustomHeightClasses,
    gridRowsClassName,
    itemHeightClassesOverride,
    animationType,
    containerStyle = "default",
    title,
    titleSegments,
    description,
    tag,
    tagIcon,
    buttons,
    textboxLayout = "default",
    useInvertedBackground,
    carouselThreshold = 5,
    className = "",
    containerClassName = "",
    gridClassName = "",
    carouselClassName = "",
    carouselItemClassName = "",
    controlsClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    ariaLabel = "Card stack",
}: CardStackProps) => {
    const childrenArray = Children.toArray(children);
    const itemCount = childrenArray.length;

    // Timeline layout for zigzag pattern (works best with 3-6 items)
    if ((gridVariant === "timeline" || gridVariant === "timeline-three-columns") && itemCount >= 3 && itemCount <= 6) {
        return (
            <TimelineBase
                variant={gridVariant}
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
                textBoxClassName={textBoxClassName}
                titleClassName={titleClassName}
                titleImageWrapperClassName={titleImageWrapperClassName}
                titleImageClassName={titleImageClassName}
                descriptionClassName={descriptionClassName}
                tagClassName={tagClassName}
                buttonContainerClassName={buttonContainerClassName}
                buttonClassName={buttonClassName}
                buttonTextClassName={buttonTextClassName}
                ariaLabel={ariaLabel}
            >
                {childrenArray}
            </TimelineBase>
        );
    }

    // Use grid for items below threshold, carousel for items at or above threshold
    // Timeline with 7+ items will also use carousel
    const useCarousel = itemCount >= carouselThreshold || ((gridVariant === "timeline" || gridVariant === "timeline-three-columns") && itemCount > 6);

    // Grid layout for 1-4 items
    if (!useCarousel) {
        return (
            <GridLayout
                itemCount={itemCount}
                gridVariant={gridVariant}
                uniformGridCustomHeightClasses={uniformGridCustomHeightClasses}
                gridRowsClassName={gridRowsClassName}
                itemHeightClassesOverride={itemHeightClassesOverride}
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
                textBoxClassName={textBoxClassName}
                titleClassName={titleClassName}
                titleImageWrapperClassName={titleImageWrapperClassName}
                titleImageClassName={titleImageClassName}
                descriptionClassName={descriptionClassName}
                tagClassName={tagClassName}
                buttonContainerClassName={buttonContainerClassName}
                buttonClassName={buttonClassName}
                buttonTextClassName={buttonTextClassName}
                ariaLabel={ariaLabel}
            >
                {childrenArray}
            </GridLayout>
        );
    }

    // Auto-scroll carousel for 5+ items
    if (mode === "auto") {
        return (
            <AutoCarousel
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
                carouselClassName={carouselClassName}
                textBoxClassName={textBoxClassName}
                titleClassName={titleClassName}
                titleImageWrapperClassName={titleImageWrapperClassName}
                titleImageClassName={titleImageClassName}
                descriptionClassName={descriptionClassName}
                tagClassName={tagClassName}
                buttonContainerClassName={buttonContainerClassName}
                buttonClassName={buttonClassName}
                buttonTextClassName={buttonTextClassName}
                ariaLabel={ariaLabel}
            >
                {childrenArray}
            </AutoCarousel>
        );
    }

    // Button-controlled carousel for 5+ items
    return (
        <ButtonCarousel
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
            carouselClassName={carouselClassName}
            carouselItemClassName={carouselItemClassName}
            controlsClassName={controlsClassName}
            textBoxClassName={textBoxClassName}
            titleClassName={titleClassName}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
            descriptionClassName={descriptionClassName}
            tagClassName={tagClassName}
            buttonContainerClassName={buttonContainerClassName}
            buttonClassName={buttonClassName}
            buttonTextClassName={buttonTextClassName}
            ariaLabel={ariaLabel}
        >
            {childrenArray}
        </ButtonCarousel>
    );
};

CardStack.displayName = "CardStack";

export default memo(CardStack);
