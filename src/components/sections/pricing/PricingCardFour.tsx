"use client";

import React, { memo, useState } from "react";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Tag from "@/components/shared/Tag";
import SelectorButton from "@/components/button/SelectorButton";
import AnimationContainer from "@/components/sections/AnimationContainer";
import { useCardAnimation } from "@/components/cardStack/hooks/useCardAnimation";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";
import type { CardAnimationType } from "@/components/cardStack/types";

interface CtaCard {
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
}

interface PricingCardFourProps {
  title: string;
  tag: string;
  tagIcon?: LucideIcon;
  ctaCards: [CtaCard, CtaCard];
  plans: PricingPlan[];
  useInvertedBackground: InvertedBackground;
  animationType: CardAnimationType;
  featuresTitle?: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  leftPanelClassName?: string;
  rightPanelClassName?: string;
  tagClassName?: string;
  titleClassName?: string;
  ctaCardClassName?: string;
  ctaCardTitleClassName?: string;
  ctaCardDescriptionClassName?: string;
  planSelectorClassName?: string;
  priceClassName?: string;
  subtitleClassName?: string;
  featuresTitleClassName?: string;
  featuresGridClassName?: string;
  featureItemClassName?: string;
}

const PricingCardFour = ({
  title,
  tag,
  tagIcon: TagIcon,
  ctaCards,
  plans,
  useInvertedBackground,
  animationType,
  featuresTitle = "What's included",
  ariaLabel = "Pricing section",
  className = "",
  containerClassName = "",
  leftPanelClassName = "",
  rightPanelClassName = "",
  tagClassName = "",
  titleClassName = "",
  ctaCardClassName = "",
  ctaCardTitleClassName = "",
  ctaCardDescriptionClassName = "",
  planSelectorClassName = "",
  priceClassName = "",
  subtitleClassName = "",
  featuresTitleClassName = "",
  featuresGridClassName = "",
  featureItemClassName = "",
}: PricingCardFourProps) => {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const activePlan = plans[activePlanIndex];
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);
  const { itemRefs } = useCardAnimation({ animationType, itemCount: 2 });

  const handleCtaClick = (ctaCard: CtaCard) => {
    if (ctaCard.onClick) {
      ctaCard.onClick();
    }
    if (ctaCard.href) {
      window.location.href = ctaCard.href;
    }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div
            ref={(el) => { itemRefs.current[0] = el; }}
            className={cls(
              "md:col-span-5 card rounded-theme-capped p-6 md:p-8 flex flex-col gap-4",
              leftPanelClassName
            )}
          >
            <Tag
              text={tag}
              icon={TagIcon}
              useInvertedBackground={useInvertedBackground}
              className={tagClassName}
            />

            <h2 className={cls(
              "text-4xl md:text-5xl font-medium",
              shouldUseLightText ? "text-background" : "text-foreground",
              titleClassName
            )}>
              {title}
            </h2>

            <div className="flex flex-col gap-4">
              {ctaCards.map((ctaCard, index) => (
                <button
                  key={index}
                  onClick={() => handleCtaClick(ctaCard)}
                  className={cls(
                    "w-full p-4 md:p-5 primary-button rounded-theme text-left flex items-center justify-between gap-4",
                    ctaCardClassName
                  )}
                >
                  <div className="flex flex-col gap-0">
                    <span className={cls("text-base md:text-xl font-medium text-background line-clamp-1", ctaCardTitleClassName)}>
                      {ctaCard.title}
                    </span>
                    <span className={cls("text-sm text-background/60 line-clamp-1", ctaCardDescriptionClassName)}>
                      {ctaCard.description}
                    </span>
                  </div>
                  <ArrowRight className="h-[var(--text-base)] w-auto shrink-0 text-background/60" />
                </button>
              ))}
            </div>
          </div>

          <div
            ref={(el) => { itemRefs.current[1] = el; }}
            className={cls(
              "md:col-span-7 card rounded-theme-capped p-6 md:p-8 flex flex-col gap-4",
              rightPanelClassName
            )}
          >
            <SelectorButton
              options={plans.map((plan) => ({
                value: plan.id,
                label: plan.name,
              }))}
              activeValue={activePlan.id}
              onValueChange={(value) => {
                const index = plans.findIndex((p) => p.id === value);
                if (index !== -1) setActivePlanIndex(index);
              }}
              wrapperClassName={planSelectorClassName}
            />

            <AnimationContainer
              key={activePlan.id}
              className="flex flex-col gap-4"
              animationType="fade"
            >
              <div className="flex flex-col gap-2">
                <h3 className={cls(
                  "text-4xl md:text-5xl font-medium",
                  shouldUseLightText ? "text-background" : "text-foreground",
                  priceClassName
                )}>
                  {activePlan.price}
                </h3>
                <p className={cls(
                  "text-base",
                  shouldUseLightText ? "text-background/70" : "text-foreground/70",
                  subtitleClassName
                )}>
                  {activePlan.subtitle}
                </p>
              </div>

              <div className={cls("w-full h-px", shouldUseLightText ? "bg-background/10" : "bg-foreground/10")} />

              <div className="flex flex-col gap-4">
                <h4 className={cls(
                  "text-lg font-medium",
                  shouldUseLightText ? "text-background" : "text-foreground",
                  featuresTitleClassName
                )}>
                  {featuresTitle}
                </h4>

                <div className={cls(
                  "grid grid-cols-1 md:grid-cols-2 gap-3",
                  featuresGridClassName
                )}>
                  {activePlan.features.map((feature, index) => (
                    <div
                      key={index}
                      className={cls(
                        "flex items-start gap-2",
                        featureItemClassName
                      )}
                    >
                      <span className={cls("h-1.5 w-1.5 rounded-full mt-2 shrink-0", shouldUseLightText ? "bg-background" : "bg-foreground")} />
                      <span className={cls("text-base", shouldUseLightText ? "text-background" : "text-foreground")}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

PricingCardFour.displayName = "PricingCardFour";

export default memo(PricingCardFour);
