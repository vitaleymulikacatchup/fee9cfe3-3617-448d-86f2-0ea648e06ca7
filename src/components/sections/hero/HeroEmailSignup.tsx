"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import EmailSignupForm from "@/components/form/EmailSignupForm";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface HeroEmailSignupProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  inputPlaceholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const HeroEmailSignup = ({
  title,
  description,
  tag,
  tagIcon,
  inputPlaceholder = "Enter your email",
  buttonText = "Sign Up",
  onSubmit,
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  formClassName = "",
  inputClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: HeroEmailSignupProps) => {

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

        <div className="w-full md:w-30 mx-auto">
          <EmailSignupForm
            inputPlaceholder={inputPlaceholder}
            buttonText={buttonText}
            onSubmit={onSubmit}
            className={formClassName}
            inputClassName={inputClassName}
            buttonClassName={buttonClassName}
            buttonTextClassName={buttonTextClassName}
          />
        </div>
      </div>
    </section>
  );
};

HeroEmailSignup.displayName = "HeroEmailSignup";

export default memo(HeroEmailSignup);
