"use client";

import { memo } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import MediaContent from "@/components/shared/MediaContent";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";
import type { CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface ShowcaseItem {
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
}

interface ColumnItemProps {
  item: ShowcaseItem;
  position: "left" | "right";
  shouldUseLightText: boolean;
  useCappedBorderRadius: boolean;
  itemMediaWrapperClassName: string;
  itemImageClassName: string;
  itemTitleClassName: string;
  mediaRef?: (el: HTMLDivElement | null) => void;
  textRef?: (el: HTMLDivElement | null) => void;
}

const ColumnItem = ({
  item,
  position,
  shouldUseLightText,
  useCappedBorderRadius,
  itemMediaWrapperClassName,
  itemImageClassName,
  itemTitleClassName,
  mediaRef,
  textRef,
}: ColumnItemProps) => {
  const mediaBlock = (
    <div ref={mediaRef} className={cls("w-full h-auto md:h-1/2 aspect-square md:aspect-auto overflow-hidden", useCappedBorderRadius ? "rounded-theme-capped" : "rounded-theme", itemMediaWrapperClassName)}>
      <MediaContent
        imageSrc={item.imageSrc}
        videoSrc={item.videoSrc}
        imageAlt={item.imageAlt || ""}
        videoAriaLabel={item.videoAriaLabel || "Item video"}
        imageClassName={cls("w-full h-full object-cover", itemImageClassName)}
      />
    </div>
  );

  const textBlock = (
    <div ref={textRef} className={cls("relative card rounded-theme-capped md:h-1/2 flex flex-col p-6", position === "left" ? "justify-end text-left" : "md:justify-start md:text-right")}>
      <h3 className={cls("text-3xl font-medium leading-tight line-clamp-6", shouldUseLightText ? "text-background" : "text-foreground", itemTitleClassName)}>
        {item.title}
      </h3>
    </div>
  );

  return position === "left" ? (
    <div className="flex flex-col gap-6 h-full">
      {mediaBlock}
      {textBlock}
    </div>
  ) : (
    <div className="flex flex-col gap-6 h-full">
      {textBlock}
      {mediaBlock}
    </div>
  );
};

interface AboutShowcaseProps {
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  leftItem: ShowcaseItem;
  rightItem: ShowcaseItem;
  centerImageSrc?: string;
  centerVideoSrc?: string;
  centerImageAlt?: string;
  centerVideoAriaLabel?: string;
  ariaLabel?: string;
  useCappedBorderRadius: boolean;
  animationType: CardAnimationType;
  textboxLayout: TextboxLayout;
  useInvertedBackground: InvertedBackground;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  contentClassName?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
  centerColumnClassName?: string;
  itemTitleClassName?: string;
  itemMediaWrapperClassName?: string;
  itemImageClassName?: string;
  centerMediaWrapperClassName?: string;
  centerImageClassName?: string;
}

const AboutShowcase = ({
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  buttons,
  leftItem,
  rightItem,
  centerImageSrc,
  centerVideoSrc,
  centerImageAlt = "",
  centerVideoAriaLabel = "Showcase video",
  ariaLabel = "About section",
  useCappedBorderRadius,
  animationType,
  textboxLayout,
  useInvertedBackground,
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  contentClassName = "",
  leftColumnClassName = "",
  rightColumnClassName = "",
  centerColumnClassName = "",
  itemTitleClassName = "",
  itemMediaWrapperClassName = "",
  itemImageClassName = "",
  centerMediaWrapperClassName = "",
  centerImageClassName = "",
}: AboutShowcaseProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: 5 });

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
      <div className={cls("w-content-width mx-auto flex flex-col gap-10 md:gap-15", containerClassName)}>
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

        <div className={cls("relative grid grid-cols-1 md:grid-cols-3 gap-6", contentClassName)}>
          <div className={cls("flex flex-col", leftColumnClassName)}>
            <ColumnItem
              item={leftItem}
              position="left"
              shouldUseLightText={shouldUseLightText}
              useCappedBorderRadius={useCappedBorderRadius}
              itemMediaWrapperClassName={itemMediaWrapperClassName}
              itemImageClassName={itemImageClassName}
              itemTitleClassName={itemTitleClassName}
              mediaRef={(el) => { itemRefs.current[0] = el; }}
              textRef={(el) => { itemRefs.current[1] = el; }}
            />
          </div>

          <div className={cls("flex flex-col aspect-[9/16] md:aspect-auto", centerColumnClassName)}>
            <div
              ref={(el) => { itemRefs.current[2] = el; }}
              className={cls("w-full h-full overflow-hidden", useCappedBorderRadius ? "rounded-theme-capped" : "rounded-theme", centerMediaWrapperClassName)}
            >
              <MediaContent
                imageSrc={centerImageSrc}
                videoSrc={centerVideoSrc}
                imageAlt={centerImageAlt}
                videoAriaLabel={centerVideoAriaLabel}
                imageClassName={cls("w-full h-full object-cover", centerImageClassName)}
              />
            </div>
          </div>

          <div className={cls("flex flex-col", rightColumnClassName)}>
            <ColumnItem
              item={rightItem}
              position="right"
              shouldUseLightText={shouldUseLightText}
              useCappedBorderRadius={useCappedBorderRadius}
              itemMediaWrapperClassName={itemMediaWrapperClassName}
              itemImageClassName={itemImageClassName}
              itemTitleClassName={itemTitleClassName}
              mediaRef={(el) => { itemRefs.current[4] = el; }}
              textRef={(el) => { itemRefs.current[3] = el; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

AboutShowcase.displayName = "AboutShowcase";

export default memo(AboutShowcase);
