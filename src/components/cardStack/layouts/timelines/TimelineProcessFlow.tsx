"use client";

import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardStackTextBox from "../../CardStackTextBox";
import { useCardAnimation } from "../../hooks/useCardAnimation";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "../../types";
import type { CardAnimationType } from "../../types";
import type { TitleSegment } from "../../types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

gsap.registerPlugin(ScrollTrigger);

interface TimelineProcessFlowItem {
  id: string;
  content: React.ReactNode;
  media: React.ReactNode;
  reverse: boolean;
}

interface TimelineProcessFlowProps {
  items: TimelineProcessFlowItem[];
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  textboxLayout: TextboxLayout;
  animationType: CardAnimationType;
  useInvertedBackground?: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  textBoxTitleClassName?: string;
  textBoxDescriptionClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
  itemClassName?: string;
  mediaWrapperClassName?: string;
  numberClassName?: string;
  contentWrapperClassName?: string;
  gapClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
}

const TimelineProcessFlow = ({
  items,
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  buttons,
  textboxLayout,
  animationType,
  useInvertedBackground,
  ariaLabel = "Timeline process flow section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  textBoxTitleClassName = "",
  textBoxDescriptionClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
  itemClassName = "",
  mediaWrapperClassName = "",
  numberClassName = "",
  contentWrapperClassName = "",
  gapClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
}: TimelineProcessFlowProps) => {
  const processLineRef = useRef<HTMLDivElement>(null);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: items.length });

  useEffect(() => {
    if (!processLineRef.current) return;

    gsap.fromTo(
      processLineRef.current,
      { yPercent: -100 },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-line",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
      <div className={cls("w-full flex flex-col gap-6", containerClassName)}>
        <div className="relative w-content-width mx-auto">
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
            descriptionClassName={textBoxDescriptionClassName}
            tagClassName={textBoxTagClassName}
            buttonContainerClassName={textBoxButtonContainerClassName}
            buttonClassName={textBoxButtonClassName}
            buttonTextClassName={textBoxButtonTextClassName}
            titleImageWrapperClassName={titleImageWrapperClassName}
            titleImageClassName={titleImageClassName}
          />
        </div>
        <div className="relative w-full">
          <div className="timeline-line pointer-events-none absolute top-0 right-[var(--width-10)] md:right-auto md:left-1/2 md:-translate-x-1/2 w-px h-full z-0 overflow-hidden bg-foreground">
            <div className="w-full h-full bg-accent" ref={processLineRef} />
          </div>
          <ol className={cls("relative flex flex-col gap-10 md:gap-20 w-content-width mx-auto", gapClassName)}>
            {items.map((item, index) => (
              <li
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={cls(
                  "relative z-10 w-full flex flex-col gap-6 md:gap-0 md:flex-row justify-between",
                  item.reverse && "flex-col md:flex-row-reverse",
                  itemClassName
                )}
              >
                <div
                  className={cls("relative w-70 md:w-30", mediaWrapperClassName)}
                >
                  {item.media}
                </div>
                <div
                  className={cls(
                    "absolute top-1/2 right-[calc(var(--height-8)/-2)] md:right-auto md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 h-8 aspect-square rounded-full flex items-center justify-center z-10 primary-button",
                    numberClassName
                  )}
                >
                  <p className="text-sm text-background">{item.id}</p>
                </div>
                <div className={cls("relative w-70 md:w-30", contentWrapperClassName)}>
                  {item.content}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

TimelineProcessFlow.displayName = "TimelineProcessFlow";

export default memo(TimelineProcessFlow);
