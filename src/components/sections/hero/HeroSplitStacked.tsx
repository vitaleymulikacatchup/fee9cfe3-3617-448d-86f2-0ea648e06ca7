"use client";

import React, { memo, useState, useEffect } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";
import type { Avatar } from "@/components/shared/AvatarGroup";

export interface MediaItem {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
}

interface HeroSplitStackedProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  mediaItems: MediaItem[];
  stackedVariant?: "default" | "card";
  ariaLabel?: string;
  imagePosition?: "left" | "right";
  avatars?: Avatar[];
  avatarText?: string;
  avatarGroupClassName?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  mediaWrapperClassName?: string;
  imageClassName?: string;
}

const HeroSplitStacked = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  mediaItems,
  stackedVariant = "default",
  ariaLabel = "Hero section",
  imagePosition = "right",
  avatars,
  avatarText,
  avatarGroupClassName = "",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  mediaWrapperClassName = "",
  imageClassName = "",
}: HeroSplitStackedProps) => {
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCentered(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stackedLayout = (
    <div className={cls(
      "w-full h-fit md:w-1/2 relative",
      stackedVariant === "card" && "card rounded-theme-capped p-3",
      mediaWrapperClassName
    )}>
      <div className={cls(
        "relative w-full aspect-[4/3] md:aspect-auto md:h-[65vh] flex items-center justify-center",
        stackedVariant === "card" && "bg-background rounded-theme-capped p-3"
      )}>
        <div className="relative z-1 w-full h-full flex items-center justify-center" >
          {mediaItems?.slice(0, 4).map((item, index) => {
            const itemCount = mediaItems?.length || 0;

            const rotations = ["rotate-10 md:rotate-14", "-rotate-5 md:-rotate-6", "rotate-3 md:rotate-4", "rotate-6 md:rotate-8"];
            const zIndexes = ["z-10", "z-20", "z-30", "z-40"];
            const translates = [
              "translate-x-9 -translate-y-6 md:translate-x-12 md:-translate-y-10",
              "-translate-x-9 -translate-y-6 md:-translate-x-14 md:-translate-y-10",
              itemCount === 3 ? "translate-y-10" : "translate-x-2 translate-y-8 md:translate-x-2 md:translate-y-10",
              ""
            ];

            return (
              <div
                key={index}
                className={cls(
                  "!absolute w-[70%] aspect-[4/3] overflow-hidden rounded-theme-capped transition-transform duration-500 ease-out hover:scale-105 hover:z-50",
                  rotations[index],
                  zIndexes[index],
                  translates[index]
                )}
              >
                <MediaContent
                  imageSrc={item.imageSrc}
                  videoSrc={item.videoSrc}
                  imageAlt={item.imageAlt || ""}
                  videoAriaLabel={item.videoAriaLabel || "Hero media"}
                  imageClassName={cls("h-full", imageClassName)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full h-fit py-hero-page-padding md:py-0 md:h-svh flex items-center", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col md:flex-row gap-13 md:gap-15 items-center", containerClassName)}>
        {imagePosition === "left" && stackedLayout}

        <div className={cls("w-full md:w-1/2")}>
          <TextBox
            title={title}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            avatars={avatars}
            avatarText={avatarText}
            avatarGroupClassName={cls("!mt-5", avatarGroupClassName)}
            className={cls("flex flex-col gap-3 md:gap-3", textBoxClassName)}
            titleClassName={cls("text-7xl 2xl:text-8xl font-medium text-center md:text-left text-balance", titleClassName)}
            descriptionClassName={cls("max-w-8/10 text-lg md:text-xl leading-[1.2] text-center md:text-left", descriptionClassName)}
            tagClassName={cls("w-fit px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
            buttonContainerClassName={cls("flex gap-4 mt-4", buttonContainerClassName)}
            buttonClassName={cls("", buttonClassName)}
            buttonTextClassName={cls("text-base", buttonTextClassName)}
            center={isCentered}
          />
        </div>

        {imagePosition === "right" && stackedLayout}
      </div>
    </section>
  );
};

HeroSplitStacked.displayName = "HeroSplitStacked";

export default memo(HeroSplitStacked);
