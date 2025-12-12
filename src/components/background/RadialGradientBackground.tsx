'use client';

import React, { memo } from 'react';
import { cls } from '@/lib/utils';

interface RadialGradientBackgroundProps {
  className?: string;
  centerColor?: string;
  edgeColor?: string;
  size?: string;
  position?: string;
}

const RadialGradientBackground = ({
  className = "",
  centerColor = "var(--background)",
  edgeColor = "var(--color-background-accent)",
  size = "130% 130%",
  position = "50% 15%",
}: RadialGradientBackgroundProps) => {
  return (
    <div
      className={cls("fixed top-0 left-0 right-0 bottom-0 h-screen w-full -z-10", className)}
      style={{
        background: `radial-gradient(${size} at ${position}, ${centerColor} 40%, ${edgeColor} 100%)`,
      }}
      aria-hidden="true"
    />
  );
};

RadialGradientBackground.displayName = 'RadialGradientBackground';

export default memo(RadialGradientBackground);
