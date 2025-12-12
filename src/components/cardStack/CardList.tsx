"use client";

import { memo, Children, Fragment } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface CardListProps {
  children: React.ReactNode;
  animationType: CardAnimationType;
  variant?: "card" | "border";
  useUncappedRounding?: boolean;
  title?: string;
  titleSegments?: TitleSegment[];
  description?: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  textboxLayout: TextboxLayout;
  useInvertedBackground?: InvertedBackground;
  disableCardWrapper?: boolean;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
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

const CardList = ({
  children,
  animationType,
  variant = "card",
  useUncappedRounding = false,
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  buttons,
  textboxLayout,
  useInvertedBackground,
  disableCardWrapper = false,
  ariaLabel = "Card list",
  className = "",
  containerClassName = "",
  cardClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: CardListProps) => {
  const childrenArray = Children.toArray(children);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: childrenArray.length });

  return (
    <section
      aria-label={ariaLabel}
      className={cls(
        "relative py-20",
        useInvertedBackground === "invertCard"
          ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
          : "w-full",
        useInvertedBackground === "invertDefault" && "bg-foreground",
        className
      )}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
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

        <div className="flex flex-col gap-6">
          {childrenArray.map((child, index) => (
            <Fragment key={index}>
              {variant === "border" && index === 0 && (
                <div className="h-px bg-accent/75" />
              )}
              <div
                ref={(el) => { itemRefs.current[index] = el; }}
                className={cls(!disableCardWrapper && variant === "card" && "card", !disableCardWrapper && variant === "card" && (useUncappedRounding ? "rounded-theme" : "rounded-theme-capped"), cardClassName)}
              >
                {child}
              </div>
              {variant === "border" && index < childrenArray.length - 1 && (
                <div className="h-px bg-accent/75" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

CardList.displayName = "CardList";

export default memo(CardList);
