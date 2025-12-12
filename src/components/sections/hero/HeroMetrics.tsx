"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ButtonConfig } from "@/types/button";

interface Metric {
  id: string;
  value: string;
  label: string;
}

interface HeroMetricsProps {
  title: string;
  description: string;
  tag?: string;
  tagIcon?: LucideIcon;
  buttons?: ButtonConfig[];
  metricsLabel: string;
  metrics: Metric[];
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  textBoxClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  tagClassName?: string;
  buttonContainerClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  metricsContainerClassName?: string;
  metricsLabelClassName?: string;
  metricsGridClassName?: string;
  metricClassName?: string;
  metricValueClassName?: string;
  metricLabelClassName?: string;
}

const HeroMetrics = ({
  title,
  description,
  tag,
  tagIcon,
  buttons,
  metricsLabel,
  metrics,
  ariaLabel = "Hero section",
  className = "",
  containerClassName = "",
  textBoxClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  tagClassName = "",
  buttonContainerClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  metricsContainerClassName = "",
  metricsLabelClassName = "",
  metricsGridClassName = "",
  metricClassName = "",
  metricValueClassName = "",
  metricLabelClassName = "",
}: HeroMetricsProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={cls("w-full h-fit md:h-svh", className)}
    >
      <div className={cls("w-content-width h-full mx-auto flex flex-col justify-between pt-hero-page-padding pb-10", containerClassName)}>
        <div className="flex-1" />

        <TextBox
          title={title}
          description={description}
          tag={tag}
          tagIcon={tagIcon}
          buttons={buttons}
          className={cls("flex flex-col gap-3 md:gap-1", textBoxClassName)}
          titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
          descriptionClassName={cls("text-lg leading-[1.2]", descriptionClassName)}
          tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
          buttonContainerClassName={cls("flex gap-4 mt-3", buttonContainerClassName)}
          buttonClassName={buttonClassName}
          buttonTextClassName={buttonTextClassName}
          center={true}
        />

        <div className="flex-1" />

        <div className={cls(
          "relative w-full flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-10 border-t border-accent pt-10 mt-10 md:mt-0",
          metricsContainerClassName
        )}>
          <div className="relative w-full md:w-1/3" >
            <p className={cls(
              "text-base text-foreground/75 leading-tight text-balance",
              metricsLabelClassName
            )}>
              {metricsLabel}
            </p>
          </div>

          <div className={cls(
            "w-full md:w-1/2 grid grid-cols-2 gap-4 md:gap-6",
            metrics.length === 2 && "md:grid-cols-2",
            metrics.length === 3 && "md:grid-cols-3",
            metrics.length === 4 && "md:grid-cols-4",
            metricsGridClassName
          )}>
            {metrics.map((metric, index) => (
              <div
                key={metric.id}
                className={cls(
                  "relative card rounded-theme-capped flex flex-col gap-0 p-4",
                  metrics.length === 3 && index === 2 && "col-span-2 md:col-span-1",
                  metricClassName
                )}
              >
                <h3 className={cls(
                  "relative w-full min-w-0 text-4xl font-medium text-foreground truncate",
                  metricValueClassName
                )}>
                  {metric.value}
                </h3>
                <p className={cls(
                  "relative w-full min-w-0 text-sm text-foreground/70 truncate",
                  metricLabelClassName
                )}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroMetrics.displayName = "HeroMetrics";

export default memo(HeroMetrics);
