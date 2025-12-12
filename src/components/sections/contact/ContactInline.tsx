"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import EmailSignupForm from "@/components/form/EmailSignupForm";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type AnimationType = "entrance-slide" | "reveal-blur" | "background-highlight";

interface ContactInlineProps {
  text: string;
  animationType?: AnimationType;
  inputPlaceholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => void;
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textClassName?: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}

const ContactInline = ({
  text,
  animationType = "entrance-slide",
  inputPlaceholder = "Enter your message",
  buttonText = "Submit",
  onSubmit,
  useInvertedBackground,
  ariaLabel = "Contact section",
  className = "",
  containerClassName = "",
  textClassName = "",
  formClassName = "",
  inputClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
}: ContactInlineProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

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
      <div className={cls("w-content-width mx-auto", containerClassName)}>
        <div className="card rounded-theme-capped p-6 md:p-15">
          <div className="relative z-1 w-full flex flex-col md:flex-row gap-6 md:gap-15 md:items-center">
            <div className="w-full md:w-1/2">
              <TextAnimation
                type={animationType}
                text={text}
                variant="words-trigger"
                as="h2"
                className={cls(
                  "text-3xl md:text-5xl font-medium leading-[1.15]",
                  shouldUseLightText && "text-background",
                  textClassName
                )}
              />
            </div>

            <div className="w-full md:w-1/2">
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
        </div>
      </div>
    </section>
  );
};

ContactInline.displayName = "ContactInline";

export default memo(ContactInline);
