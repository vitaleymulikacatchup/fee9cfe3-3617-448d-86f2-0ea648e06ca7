"use client";

import React, { memo, useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import TextBox from "@/components/Textbox";
import MediaContent from "@/components/shared/MediaContent";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

interface HeroBillboardScrollProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  cardWrapperClassName?: string;
  cardInnerClassName?: string;
  imageClassName?: string;
}

const HeroBillboardScroll = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  imageSrc,
  videoSrc,
  imageAlt = "",
  videoAriaLabel = "Hero video",
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  cardWrapperClassName = "",
  cardInnerClassName = "",
  imageClassName = "",
}: HeroBillboardScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      aria-label={ariaLabel}
      ref={containerRef}
      className={cls("relative h-fit flex items-center justify-center", className)}
    >
      <div
        className={cls("py-hero-page-padding w-full relative", containerClassName)}
        style={{
          perspective: "1000px",
        }}
      >
        <div className="w-content-width mx-auto">
          <TextBox
            title={title}
            description={description}
            tag={tag}
            tagIcon={tagIcon}
            buttons={buttons}
            className={cls("flex flex-col gap-3 md:gap-1", textBoxClassName)}
            titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
            descriptionClassName={cls("text-lg leading-[1.2]", descriptionClassName)}
            tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
            buttonContainerClassName={cls("flex gap-4 mt-3", buttonContainerClassName)}
            buttonClassName={buttonClassName}
            buttonTextClassName={buttonTextClassName}
            center={true}
          />
        </div>

        <div
          className={cls("relative w-content-width h-[50svh] mt-8 mx-auto md:hidden", cardWrapperClassName)}
          style={{
            transform: "rotateX(20deg)",
          }}
        >
          <div className={cls("h-full w-full overflow-hidden rounded-theme-capped card p-4", cardInnerClassName)}>
            <MediaContent
              imageSrc={imageSrc}
              videoSrc={videoSrc}
              imageAlt={imageAlt}
              videoAriaLabel={videoAriaLabel}
              imageClassName={cls("z-1 h-full w-full object-cover object-left-top", imageClassName)}
            />
          </div>
        </div>

        <motion.div
          style={{
            rotateX: rotate,
            scale,
          }}
          className={cls("hidden md:block relative w-content-width mt-8 h-[75svh] mx-auto", cardWrapperClassName)}
        >
          <div className={cls("h-full w-full overflow-hidden rounded-theme-capped card p-4", cardInnerClassName)}>
            <MediaContent
              imageSrc={imageSrc}
              videoSrc={videoSrc}
              imageAlt={imageAlt}
              videoAriaLabel={videoAriaLabel}
              imageClassName={cls("z-1 h-full w-full object-cover object-left-top", imageClassName)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

HeroBillboardScroll.displayName = "HeroBillboardScroll";

export default memo(HeroBillboardScroll);
