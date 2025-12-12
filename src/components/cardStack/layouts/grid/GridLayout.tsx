"use client";

import { memo, Children } from "react";
import CardStackTextBox from "../../CardStackTextBox";
import { cls } from "@/lib/utils";
import { GridLayoutProps } from "../../types";
import { gridConfigs } from "./gridConfigs";
import { useCardAnimation } from "../../hooks/useCardAnimation";

const GridLayout = ({
    children,
    itemCount,
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
    className = "",
    containerClassName = "",
    gridClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    titleImageWrapperClassName = "",
    titleImageClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    ariaLabel,
}: GridLayoutProps) => {
    // Get config for this variant and item count
    const config = gridConfigs[gridVariant]?.[itemCount];

    // Fallback to default uniform grid if no config
    const gridColsMap = {
        1: "md:grid-cols-1",
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
    };
    const defaultGridCols = gridColsMap[itemCount as keyof typeof gridColsMap] || "md:grid-cols-4";

    // Use config values or fallback
    const gridCols = config?.gridCols || defaultGridCols;
    const gridRows = gridRowsClassName || config?.gridRows || "";
    const itemClasses = config?.itemClasses || [];
    const itemHeightClasses = itemHeightClassesOverride || config?.itemHeightClasses || [];
    const heightClasses = uniformGridCustomHeightClasses || config?.heightClasses || "";
    const itemWrapperClass = config?.itemWrapperClass || "";

    const childrenArray = Children.toArray(children);
    const { itemRefs } = useCardAnimation({ animationType, itemCount: childrenArray.length });

    return (
        <section
            className={cls(
                "relative py-20",
                useInvertedBackground === "invertCard"
                    ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
                    : "w-full",
                useInvertedBackground === "invertDefault" && "bg-foreground",
                className
            )}
            aria-label={ariaLabel}
        >
            <div className={cls("w-content-width mx-auto flex flex-col gap-6", containerClassName)}>
                {(title || titleSegments || description) && (
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
                        titleClassName={titleClassName}
                        titleImageWrapperClassName={titleImageWrapperClassName}
                        titleImageClassName={titleImageClassName}
                        descriptionClassName={descriptionClassName}
                        tagClassName={tagClassName}
                        buttonContainerClassName={buttonContainerClassName}
                        buttonClassName={buttonClassName}
                        buttonTextClassName={buttonTextClassName}
                    />
                )}
                <div
                    className={cls(
                        "grid grid-cols-1",
                        containerStyle === "default" && "gap-6",
                        containerStyle === "card" && "primary-button p-6 rounded-theme-capped gap-6",
                        gridCols,
                        gridRows,
                        gridClassName
                    )}
                >
                    {childrenArray.map((child, index) => {
                        const itemClass = itemClasses[index] || "";
                        const itemHeightClass = itemHeightClasses[index] || "";
                        const combinedClass = cls(itemWrapperClass, itemClass, itemHeightClass, heightClasses);
                        return combinedClass ? (
                            <div
                                key={index}
                                className={combinedClass}
                                ref={(el) => { itemRefs.current[index] = el; }}
                            >
                                {child}
                            </div>
                        ) : (
                            <div
                                key={index}
                                ref={(el) => { itemRefs.current[index] = el; }}
                            >
                                {child}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

GridLayout.displayName = "GridLayout";

export default memo(GridLayout);
