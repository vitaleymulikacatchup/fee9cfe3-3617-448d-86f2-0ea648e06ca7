"use client";

import React, { memo } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type HeadingSegment =
  | { type: "text"; content: string }
  | { type: "image"; src: string; alt?: string };

interface InlineImageSplitTextAboutProps {
  heading: HeadingSegment[];
  buttons?: ButtonConfig[];
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  headingClassName?: string;
  imageWrapperClassName?: string;
  imageClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const InlineImageSplitTextAbout = ({
  heading,
  buttons,
  useInvertedBackground,
  ariaLabel = "About section",
  className = "",
  containerClassName = "",
  headingClassName = "",
  imageWrapperClassName = "",
  imageClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: InlineImageSplitTextAboutProps) => {
  const theme = useTheme();

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
      <div
        className={cls(
          "w-content-width mx-auto flex flex-col gap-6 items-center",
          containerClassName
        )}
      >
        <h2
          className={cls(
            "text-4xl md:text-5xl font-medium text-center leading-[1.15] text-balance",
            (useInvertedBackground === "invertDefault" ||
              useInvertedBackground === "invertCard") &&
            "text-background",
            headingClassName
          )}
        >
          {heading.map((segment, index) => {
            const imageIndex = heading
              .slice(0, index + 1)
              .filter(s => s.type === "image").length - 1;

            const element = segment.type === "text" ? (
              <span key={index}>{segment.content}</span>
            ) : (
              <span
                key={index}
                className={cls(
                  "inline-block relative primary-button -mt-[0.2em] h-[1.1em] w-auto aspect-square align-middle mx-1 p-0.5 rounded-theme",
                  imageIndex % 2 === 0 ? "-rotate-12" : "rotate-12",
                  imageWrapperClassName
                )}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={segment.src}
                    alt={segment.alt || ""}
                    width={24}
                    height={24}
                    className={cls(
                      "absolute inset-0 m-auto h-full w-full rounded-theme",
                      imageClassName
                    )}
                    unoptimized={segment.src.startsWith("http") || segment.src.startsWith("//")}
                    aria-hidden={!segment.alt || segment.alt === ""}
                  />
                </div>
              </span>
            );

            return (
              <React.Fragment key={index}>
                {index > 0 && " "}
                {element}
              </React.Fragment>
            );
          })}
        </h2>

        {buttons && buttons.length > 0 && (
          <div className={cls("flex gap-4", buttonContainerClassName)}>
            {buttons.slice(0, 2).map((button, index) => (
              <Button key={index} {...getButtonProps(button, index, theme.defaultButtonVariant, cls("px-8", buttonClassName), cls("text-base", buttonTextClassName))} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

InlineImageSplitTextAbout.displayName = "InlineImageSplitTextAbout";

export default memo(InlineImageSplitTextAbout);
