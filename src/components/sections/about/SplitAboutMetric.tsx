"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import { cls } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";

interface Metric {
  label: string;
  value: string;
}

interface SplitAboutMetricProps {
  title: string;
  description: string[];
  metrics: [Metric, Metric];
  showBorder?: boolean;
  useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  metricsContainerClassName?: string;
  metricClassName?: string;
  metricValueClassName?: string;
  metricLabelClassName?: string;
}

const SplitAboutMetric = ({
  title,
  description,
  metrics,
  showBorder = false,
  useInvertedBackground,
  ariaLabel = "About metrics section",
  className = "",
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  metricsContainerClassName = "",
  metricClassName = "",
  metricValueClassName = "",
  metricLabelClassName = "",
}: SplitAboutMetricProps) => {
  const theme = useTheme();

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto flex flex-col gap-30", containerClassName)}>
        <div className="flex flex-col md:flex-row gap-3 md:gap-15">
          <div className="w-full md:w-1/2">
            <TextAnimation
              type={theme.defaultTextAnimation}
              text={title}
              variant="trigger"
              className={cls("text-7xl font-medium", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", titleClassName)}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-12">
            {description.map((desc, index) => (
              <TextAnimation
                key={index}
                type={theme.defaultTextAnimation}
                text={desc}
                variant="words-trigger"
                className={cls("text-base md:text-2xl leading-[1.3]", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") ? "text-background/75" : "text-foreground/75", descriptionClassName)}
              />
            ))}

            <div className="relative w-full border-b border-accent/50" />

            <div className={cls("relative grid grid-cols-2 gap-8 md:gap-12", metricsContainerClassName)}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={cls("w-full flex flex-col items-center text-center gap-0", metricClassName)}
                >
                  <h3 className={cls("w-full text-9xl font-medium leading-[1.0] truncate", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background", metricValueClassName)}>
                    {metric.value}
                  </h3>
                  <p className={cls("text-sm truncate", (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") ? "text-background/80" : "text-foreground/80", metricLabelClassName)}>
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showBorder && <div className="w-full border-b border-foreground/10" />}
      </div>
    </section>
  );
};

SplitAboutMetric.displayName = "SplitAboutMetric";

export default memo(SplitAboutMetric);
