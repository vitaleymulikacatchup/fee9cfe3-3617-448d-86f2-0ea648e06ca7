"use client";

import React, { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import CardStackTextBox from "../../CardStackTextBox";
import { usePhoneAnimations, type TimelinePhoneViewItem } from "../../hooks/usePhoneAnimations";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "../../types";
import type { TitleSegment } from "../../types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface PhoneFrameProps {
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  videoAriaLabel?: string;
  phoneRef: (el: HTMLDivElement | null) => void;
  className?: string;
}

const PhoneFrame = memo(({
  imageSrc,
  videoSrc,
  imageAlt,
  videoAriaLabel,
  phoneRef,
  className = "",
}: PhoneFrameProps) => (
  <div
    ref={phoneRef}
    className={cls("card rounded-theme-capped p-1 overflow-hidden", className)}
  >
    <MediaContent
      imageSrc={imageSrc}
      videoSrc={videoSrc}
      imageAlt={imageAlt}
      videoAriaLabel={videoAriaLabel}
      imageClassName="w-full h-full object-cover rounded-theme-capped"
    />
  </div>
));

PhoneFrame.displayName = "PhoneFrame";

interface TimelinePhoneViewProps {
  items: TimelinePhoneViewItem[];
  showTextBox?: boolean;
  showDivider?: boolean;
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  textboxLayout: TextboxLayout;
  useInvertedBackground?: InvertedBackground;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  desktopContainerClassName?: string;
  mobileContainerClassName?: string;
  desktopContentClassName?: string;
  desktopWrapperClassName?: string;
  mobileWrapperClassName?: string;
  phoneFrameClassName?: string;
  mobilePhoneFrameClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
  ariaLabel?: string;
}

const TimelinePhoneView = ({
  items,
  showTextBox = true,
  showDivider = false,
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  buttons,
  textboxLayout,
  useInvertedBackground,
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  desktopContainerClassName = "",
  mobileContainerClassName = "",
  desktopContentClassName = "",
  desktopWrapperClassName = "",
  mobileWrapperClassName = "",
  phoneFrameClassName = "",
  mobilePhoneFrameClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
  ariaLabel = "Timeline phone view section",
}: TimelinePhoneViewProps) => {
  const { imageRefs, mobileImageRefs } = usePhoneAnimations(items);
  const sectionHeightStyle = { height: `${items.length * 100}vh` };

  return (
    <section
      className={cls(
        "relative py-20 overflow-hidden md:overflow-visible",
        useInvertedBackground === "invertCard"
          ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
          : "w-full",
        useInvertedBackground === "invertDefault" && "bg-foreground",
        className
      )}
      aria-label={ariaLabel}
    >
      <div className={cls("w-full mx-auto flex flex-col gap-6", containerClassName)}>
        {showTextBox && (
          <div className="relative w-content-width mx-auto" >
            <CardStackTextBox
              title={title}
              titleSegments={titleSegments}
              description={description}
              tag={tag}
              tagIcon={tagIcon}
              buttons={buttons}
              textboxLayout={textboxLayout}
              textBoxClassName={textBoxClassName}
              titleClassName={titleClassName}
              descriptionClassName={descriptionClassName}
              tagClassName={tagClassName}
              buttonContainerClassName={buttonContainerClassName}
              buttonClassName={buttonClassName}
              buttonTextClassName={buttonTextClassName}
              titleImageWrapperClassName={titleImageWrapperClassName}
              titleImageClassName={titleImageClassName}
            />
          </div>
        )}
        {showDivider && (
          <div className="relative w-content-width mx-auto h-px bg-accent md:hidden" />
        )}
        <div className="hidden md:flex relative" style={sectionHeightStyle}>
          <div
            className={cls(
              "absolute top-0 left-0 flex flex-col w-full z-0",
              desktopContainerClassName
            )}
            style={sectionHeightStyle}
          >
            {items.map((item, index) => (
              <div
                key={`content-${index}`}
                className={cls(
                  item.trigger,
                  "w-content-width mx-auto h-screen flex justify-center items-center px-[var(--width-20)] 2xl:px-[var(--width-25)]",
                  desktopContentClassName
                )}
              >
                <div className={desktopWrapperClassName}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
            {items.map((item, itemIndex) => (
              <div
                key={`phones-${itemIndex}`}
                className="h-screen w-full absolute top-0 left-0"
              >
                <div className="w-content-width mx-auto h-full flex flex-row justify-between items-center">
                  <PhoneFrame
                    key={`phone-${itemIndex}-1`}
                    imageSrc={item.imageOne}
                    videoSrc={item.videoOne}
                    imageAlt={item.imageAltOne}
                    videoAriaLabel={item.videoAriaLabelOne}
                    phoneRef={(el) => {
                      if (imageRefs.current) {
                        imageRefs.current[itemIndex * 2] = el;
                      }
                    }}
                    className={cls("w-20 2xl:w-25 h-[70vh]", phoneFrameClassName)}
                  />
                  <PhoneFrame
                    key={`phone-${itemIndex}-2`}
                    imageSrc={item.imageTwo}
                    videoSrc={item.videoTwo}
                    imageAlt={item.imageAltTwo}
                    videoAriaLabel={item.videoAriaLabelTwo}
                    phoneRef={(el) => {
                      if (imageRefs.current) {
                        imageRefs.current[itemIndex * 2 + 1] = el;
                      }
                    }}
                    className={cls("w-20 2xl:w-25 h-[70vh]", phoneFrameClassName)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cls("md:hidden flex flex-col gap-20", mobileContainerClassName)}>
          {items.map((item, itemIndex) => (
            <div
              key={`mobile-item-${itemIndex}`}
              className="flex flex-col gap-10"
            >
              <div className={mobileWrapperClassName}>
                {item.content}
              </div>
              <div className="flex flex-row gap-6 justify-center">
                <PhoneFrame
                  key={`mobile-phone-${itemIndex}-1`}
                  imageSrc={item.imageOne}
                  videoSrc={item.videoOne}
                  imageAlt={item.imageAltOne}
                  videoAriaLabel={item.videoAriaLabelOne}
                  phoneRef={(el) => {
                    if (mobileImageRefs.current) {
                      mobileImageRefs.current[itemIndex * 2] = el;
                    }
                  }}
                  className={cls("w-45 h-100", mobilePhoneFrameClassName)}
                />
                <PhoneFrame
                  key={`mobile-phone-${itemIndex}-2`}
                  imageSrc={item.imageTwo}
                  videoSrc={item.videoTwo}
                  imageAlt={item.imageAltTwo}
                  videoAriaLabel={item.videoAriaLabelTwo}
                  phoneRef={(el) => {
                    if (mobileImageRefs.current) {
                      mobileImageRefs.current[itemIndex * 2 + 1] = el;
                    }
                  }}
                  className={cls("w-45 h-100", mobilePhoneFrameClassName)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

TimelinePhoneView.displayName = "TimelinePhoneView";

export default memo(TimelinePhoneView);
