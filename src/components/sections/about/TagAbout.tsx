"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import { cls } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

interface TagAboutProps {
  tag: string;
  description: string;
  useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  tagClassName?: string;
  descriptionClassName?: string;
}

const TagAbout = ({
  tag,
  description,
  useInvertedBackground,
  ariaLabel = "About section",
  className = "",
  containerClassName = "",
  tagClassName = "",
  descriptionClassName = "",
}: TagAboutProps) => {
  const theme = useTheme();

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto relative overflow-hidden", containerClassName)}>
        <p className={cls("inline-block mr-15 text-base md:text-xl text-accent", tagClassName)}>
          {tag}
        </p>
        <TextAnimation
          type={theme.defaultTextAnimation}
          text={description}
          variant="words-trigger"
          as="span"
          className={cls(" !inline text-2xl md:text-5xl font-medium leading-[1.15]", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", descriptionClassName)}
        />
      </div>
    </section>
  );
};

TagAbout.displayName = "TagAbout";

export default memo(TagAbout);
