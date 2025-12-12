"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import { cls } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureTag {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface HeroChatPromptProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  promptText?: string;
  featureTags: FeatureTag[];
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  promptContainerClassName?: string;
  promptTextClassName?: string;
  promptButtonClassName?: string;
  featureTagsClassName?: string;
  featureTagClassName?: string;
}

const HeroChatPrompt = ({
  title,
  description,
  tag,
  tagIcon,
  promptText = "Ask me anything...",
  featureTags,
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  promptContainerClassName = "",
  promptTextClassName = "",
  promptButtonClassName = "",
  featureTagsClassName = "",
  featureTagClassName = "",
}: HeroChatPromptProps) => {

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative w-full h-svh flex items-center justify-center", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
        <TextBox
          title={title}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          className={cls("flex flex-col gap-3 md:gap-1", textBoxClassName)}
          titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
          descriptionClassName={cls("text-lg leading-[1.2]", descriptionClassName)}
          tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
          center={true}
        />

        <div className={cls(
          "w-full md:w-50 mx-auto card p-6 rounded-theme-capped flex flex-col gap-10",
          promptContainerClassName
        )}>
          <p className={cls(
            "relative z-1 flex-1 text-lg text-foreground truncate",
            promptTextClassName
          )}>
            {promptText}
          </p>
          <div className="relative z-1 w-full flex justify-end" >
            <div
              className={cls(
                "h-8 w-[var(--height-8)] rounded-theme primary-button flex items-center justify-center",
                promptButtonClassName
              )}
            >
              <ArrowUp className="w-1/2 h-1/2 text-background" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className={cls(
          "w-full md:w-50 mx-auto flex flex-wrap items-center justify-center gap-3",
          featureTagsClassName
        )}>
          {featureTags.map((featureTag) => {
            const FeatureIcon = featureTag.icon;
            return (
              <div
                key={featureTag.id}
                className={cls(
                  "px-4 py-2 text-sm card rounded-theme flex items-center gap-2",
                  featureTagClassName
                )}
              >
                <FeatureIcon className="relative z-1 h-[1em] w-auto" />
                <span className="relative z-1" >{featureTag.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

HeroChatPrompt.displayName = "HeroChatPrompt";

export default memo(HeroChatPrompt);
