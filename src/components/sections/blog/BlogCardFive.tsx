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
  items: string[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
};

interface BlogCardFiveProps {
  blogs: BlogPost[];
  animationType: CardAnimationType;
  variant: "card" | "plain";
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
  itemsContainerClassName?: string;
  itemTextClassName?: string;
  mediaWrapperClassName?: string;
  mediaClassName?: string;
}

const BlogCardFive = ({
  blogs,
  animationType,
  variant,
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
  itemsContainerClassName = "",
  itemTextClassName = "",
  mediaWrapperClassName = "",
  mediaClassName = "",
}: BlogCardFiveProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: blogs.length });

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

        <div className={cls("grid grid-cols-1 md:grid-cols-2 gap-8", variant === "card" && "card rounded-theme-capped p-5 md:p-8", gridClassName)}>
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={cls("relative h-full flex flex-col md:flex-row md:items-center gap-4 md:gap-8 cursor-pointer", cardClassName)}
            >
              <div className={cls("relative z-1 w-full md:h-50 md:w-auto aspect-square rounded-theme-capped overflow-hidden shrink-0", mediaWrapperClassName)}>
                <MediaContent
                  imageSrc={blog.imageSrc}
                  videoSrc={blog.videoSrc}
                  imageAlt={blog.imageAlt || blog.title}
                  videoAriaLabel={blog.videoAriaLabel || blog.title}
                  imageClassName={cls("w-full h-full object-cover", mediaClassName)}
                />
              </div>
              <div className={cls("relative z-1 flex flex-col gap-2 min-w-0 flex-1", cardContentClassName)}>
                <h3 className={cls(
                  "text-3xl font-medium leading-tight line-clamp-2",
                  variant === "card"
                    ? (shouldUseLightText ? "text-background" : "text-foreground")
                    : (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground"),
                  cardTitleClassName
                )}>
                  {blog.title}
                </h3>
                <div className={cls("flex flex-wrap items-center gap-2", itemsContainerClassName)}>
                  {blog.items.map((item, index) => (
                    <React.Fragment key={index}>
                      <span className={cls(
                        "text-sm",
                        variant === "card"
                          ? (shouldUseLightText ? "text-background/75" : "text-foreground/75")
                          : (useInvertedBackground !== "noInvert" ? "text-background/75" : "text-foreground/75"),
                        itemTextClassName
                      )}>
                        {item}
                      </span>
                      {index < blog.items.length - 1 && (
                        <span className="text-sm text-accent">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

BlogCardFive.displayName = "BlogCardFive";

export default memo(BlogCardFive);
