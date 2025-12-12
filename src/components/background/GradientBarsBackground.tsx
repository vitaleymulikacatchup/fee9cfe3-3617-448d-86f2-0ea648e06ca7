'use client';

import React, { memo } from 'react';
import { cls } from '@/lib/utils';

interface GradientBarsBackgroundProps {
  className?: string;
  numBars?: number;
  gradientFrom?: string;
  gradientTo?: string;
  opacity?: number;
}

const GradientBarsBackground = ({
  className = "",
  numBars = 15,
  gradientFrom = "var(--color-primary-cta)",
  gradientTo = "transparent",
  opacity = 0.5,
}: GradientBarsBackgroundProps) => {
  const calculateHeight = (index: number, total: number): number => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div
      className={cls("fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className="flex h-full w-full backface-hidden antialiased"
        style={{
          transform: 'translateZ(0)',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              className="h-full origin-bottom box-border"
              style={{
                flex: `1 0 calc(100% / ${numBars})`,
                maxWidth: `calc(100% / ${numBars})`,
                background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
                transform: `scaleY(${height / 100})`,
                opacity: opacity,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

GradientBarsBackground.displayName = 'GradientBarsBackground';

export default memo(GradientBarsBackground);
