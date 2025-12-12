"use client";

import React, { memo, useState, useEffect } from "react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";
import type { Avatar } from "@/components/shared/AvatarGroup";

interface HeroSplitAvatarsProps {
  title: string;
  description: string;
  avatars: Avatar[];
  avatarText: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  ariaLabel?: string;
  imagePosition?: "left" | "right";
  fixedMediaHeight?: boolean;
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

const HeroSplitAvatars = ({
  title,
  description,
  avatars,
  avatarText,
  tag,
  tagIcon,
  buttons,
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "Hero video",
  ariaLabel = "Hero section",
  imagePosition = "right",
  fixedMediaHeight = true,
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
}: HeroSplitAvatarsProps) => {
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCentered(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mediaContent = (
    <div className={cls(
      "w-full h-fit md:w-1/2 overflow-hidden rounded-theme-capped card p-4 md:max-h-[75svh]",
      fixedMediaHeight && "h-100 md:h-[65vh]",
      mediaWrapperClassName
    )}>
      <MediaContent
        imageSrc={imageSrc}
        videoSrc={videoSrc}
        imageAlt={imageAlt}
        videoAriaLabel={videoAriaLabel}
        imageClassName={cls("h-full min-h-0", imageClassName)}
      />
    </div>
  );

  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full h-fit py-hero-page-padding md:py-0 md:h-svh flex items-center", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col md:flex-row gap-13 md:gap-15 items-center", containerClassName)}>
        {imagePosition === "left" && mediaContent}

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

        {imagePosition === "right" && mediaContent}
      </div>
    </section>
  );
};

HeroSplitAvatars.displayName = "HeroSplitAvatars";

export default memo(HeroSplitAvatars);
