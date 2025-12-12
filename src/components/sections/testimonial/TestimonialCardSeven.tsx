"use client";

import React, { memo } from "react";
import Image from "next/image";
import CardList from "@/components/cardStack/CardList";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig, CardAnimationType, TitleSegment } from "@/components/cardStack/types";
import type { TextboxLayout, InvertedBackground } from "@/providers/themeProvider/config/constants";

interface TestimonialCard {
  id: string;
  companyName: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  quote: string;
  author: string;
  buttons?: ButtonConfig[];
}

interface TestimonialCardSevenProps {
  testimonials: TestimonialCard[];
  animationType: CardAnimationType;
  variant: "card" | "border";
  title: string;
  titleSegments?: TitleSegment[];
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  textboxLayout: TextboxLayout;
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  textBoxTitleClassName?: string;
  textBoxDescriptionClassName?: string;
  textBoxClassName?: string;
  textBoxTagClassName?: string;
  textBoxButtonContainerClassName?: string;
  textBoxButtonClassName?: string;
  textBoxButtonTextClassName?: string;
  titleImageWrapperClassName?: string;
  titleImageClassName?: string;
  cardContentClassName?: string;
  companyLogoClassName?: string;
  companyNameClassName?: string;
  quoteClassName?: string;
  authorClassName?: string;
  testimonialButtonClassName?: string;
  testimonialButtonTextClassName?: string;
}

const TestimonialCardSeven = ({
  testimonials,
  animationType,
  variant,
  title,
  titleSegments,
  description,
  tag,
  tagIcon,
  buttons,
  textboxLayout,
  useInvertedBackground,
  ariaLabel = "Testimonial section",
  className = "",
  containerClassName = "",
  cardClassName = "",
  textBoxTitleClassName = "",
  textBoxDescriptionClassName = "",
  textBoxClassName = "",
  textBoxTagClassName = "",
  textBoxButtonContainerClassName = "",
  textBoxButtonClassName = "",
  textBoxButtonTextClassName = "",
  titleImageWrapperClassName = "",
  titleImageClassName = "",
  cardContentClassName = "",
  companyLogoClassName = "",
  companyNameClassName = "",
  quoteClassName = "",
  authorClassName = "",
  testimonialButtonClassName = "",
  testimonialButtonTextClassName = "",
}: TestimonialCardSevenProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

  return (
    <CardList
      title={title}
      titleSegments={titleSegments}
      description={description}
      tag={tag}
      tagIcon={tagIcon}
      buttons={buttons}
      textboxLayout={textboxLayout}
      animationType={animationType}
      variant={variant}
      useInvertedBackground={useInvertedBackground}
      className={className}
      containerClassName={containerClassName}
      cardClassName={cardClassName}
      titleClassName={textBoxTitleClassName}
      descriptionClassName={textBoxDescriptionClassName}
      textBoxClassName={textBoxClassName}
      tagClassName={textBoxTagClassName}
      buttonContainerClassName={textBoxButtonContainerClassName}
      buttonClassName={textBoxButtonClassName}
      buttonTextClassName={textBoxButtonTextClassName}
      titleImageWrapperClassName={titleImageWrapperClassName}
      titleImageClassName={titleImageClassName}
      ariaLabel={ariaLabel}
    >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className={cls(
            "relative z-1 w-full min-h-0 h-full flex flex-col md:flex-row gap-6",
            variant === "card" ? "p-6 md:p-15" : "pb-8 md:pb-10",
            cardContentClassName
          )}
        >
          <div className="relative z-1 w-full md:w-1/2">
            {testimonial.companyLogo ? (
              <Image
                src={testimonial.companyLogo}
                alt={testimonial.companyLogoAlt || testimonial.companyName}
                width={120}
                height={40}
                className={cls("h-15 w-auto object-contain", companyLogoClassName)}
                unoptimized={testimonial.companyLogo.startsWith('http') || testimonial.companyLogo.startsWith('//')}
              />
            ) : (
              <h2 className={cls(
                "text-6xl font-medium leading-[1.1]",
                variant === "border"
                  ? (useInvertedBackground !== "noInvert" && "text-background")
                  : (shouldUseLightText && "text-background"),
                companyNameClassName
              )}>
                {testimonial.companyName}
              </h2>
            )}
          </div>

          {variant === "card" && <div className="relative z-1 w-full h-px bg-foreground/20 md:hidden" />}

          <div className="relative z-1 w-full md:w-1/2 flex flex-col gap-4">
            <blockquote className={cls(
              "text-lg md:text-xl leading-[1.4]",
              variant === "border"
                ? (useInvertedBackground !== "noInvert" ? "text-background" : "text-foreground")
                : (shouldUseLightText ? "text-background" : "text-foreground"),
              quoteClassName
            )}>
              {testimonial.quote}
            </blockquote>

            <p className={cls(
              "text-sm",
              variant === "border"
                ? (useInvertedBackground !== "noInvert" ? "text-background/75" : "text-foreground/75")
                : (shouldUseLightText ? "text-background/75" : "text-foreground/75"),
              authorClassName
            )}>
              {testimonial.author}
            </p>

            {testimonial.buttons && testimonial.buttons.length > 0 && (
              <div className="mt-3 flex gap-4">
                {testimonial.buttons.slice(0, 2).map((button, index) => (
                  <Button key={`${button.text}-${index}`} {...getButtonProps(button, index, theme.defaultButtonVariant, testimonialButtonClassName, testimonialButtonTextClassName)} />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </CardList>
  );
};

TestimonialCardSeven.displayName = "TestimonialCardSeven";

export default memo(TestimonialCardSeven);
