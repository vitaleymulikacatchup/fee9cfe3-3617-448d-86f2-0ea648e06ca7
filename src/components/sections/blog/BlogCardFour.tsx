"use client";

import React, { memo } from "react";
import CardStackTextBox from "@/components/cardStack/CardStackTextBox";
import MediaContent from "@/components/shared/MediaContent";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

type BlogPost = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
};

interface BlogCardFourProps {
  blogs: BlogPost[];
  animationType: CardAnimationType;
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  textboxLayout: TextboxLayout;
  useInvertedBackground: InvertedBackground;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxTitleClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
  textBoxDescriptionClassName?: string;
  textBoxClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  cardContentClassName?: string;
  cardTitleClassName?: string;
  cardDescriptionClassName?: string;
  mediaWrapperClassName?: string;
  mediaClassName?: string;
}

const BlogCardFour = ({
  blogs,
  animationType,
  title,
  titleSegments,
  description,
  textboxLayout,
  useInvertedBackground,
  tag,
  tagIcon,
  buttons,
  ariaLabel = "Blog section",
  className = "",
  containerClassName = "",
  textBoxTitleClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
  textBoxDescriptionClassName = "",
  textBoxClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
  gridClassName = "",
  cardClassName = "",
  cardContentClassName = "",
  cardTitleClassName = "",
  cardDescriptionClassName = "",
  mediaWrapperClassName = "",
  mediaClassName = "",
}: BlogCardFourProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: blogs.length });

  const getGridCols = () => {
    if (blogs.length >= 3) return "md:grid-cols-3";
    if (blogs.length === 2) return "md:grid-cols-2";
    return "md:grid-cols-1";
  };

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
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
          titleClassName={textBoxTitleClassName}
          titleImageWrapperClassName={titleImageWrapperClassName}
          titleImageClassName={titleImageClassName}
          descriptionClassName={textBoxDescriptionClassName}
          tagClassName={textBoxTagClassName}
          buttonContainerClassName={textBoxButtonContainerClassName}
          buttonClassName={textBoxButtonClassName}
          buttonTextClassName={textBoxButtonTextClassName}
        />

        <div className={cls("grid grid-cols-1 gap-6", getGridCols(), gridClassName)}>
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={cls("relative h-full card group flex items-center gap-4 cursor-pointer rounded-theme-capped p-4", cardClassName)}
            >
              <div className={cls("relative z-1 h-15 w-auto aspect-square rounded-theme-capped overflow-hidden flex-shrink-0", mediaWrapperClassName)}>
                <MediaContent
                  imageSrc={blog.imageSrc}
                  videoSrc={blog.videoSrc}
                  imageAlt={blog.imageAlt || blog.title}
                  videoAriaLabel={blog.videoAriaLabel || blog.title}
                  imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                />
              </div>
              <div className={cls("relative z-1 flex flex-col gap-1 min-w-0 flex-1", cardContentClassName)}>
                <h3 className={cls("text-base font-medium leading-tight", shouldUseLightText ? "text-background" : "text-foreground", cardTitleClassName)}>
                  {blog.title}
                </h3>
                <p className={cls("text-sm leading-tight line-clamp-2", shouldUseLightText ? "text-background/75" : "text-foreground/75", cardDescriptionClassName)}>
                  {blog.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

BlogCardFour.displayName = "BlogCardFour";

export default memo(BlogCardFour);
