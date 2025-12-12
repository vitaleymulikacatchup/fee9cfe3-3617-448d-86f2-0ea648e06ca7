"use client";

import React, { memo, useState, useEffect } from "react";
import Image from "next/image";
import TextAnimation from "@/components/text/TextAnimation";
import { cls } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type TeamMember = {
  id: string;
  imageSrc: string;
  imageAlt: string;
};

interface TeamCardSevenProps {
  team: TeamMember[];
  title: string;
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  circlesClassName?: string;
  imagesContainerClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
}

const TeamCardSeven = ({
  team,
  title,
  useInvertedBackground,
  ariaLabel = "Team section",
  className = "",
  containerClassName = "",
  circlesClassName = "",
  imagesContainerClassName = "",
  imageClassName = "",
  titleClassName = "",
}: TeamCardSevenProps) => {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getImageSize = (index: number, total: number): string => {
    const isEven = total % 2 === 0;
    const centerIndex = Math.floor(total / 2);

    let distanceFromCenter: number;
    if (isEven) {
      const leftCenter = centerIndex - 1;
      const rightCenter = centerIndex;
      distanceFromCenter = Math.min(
        Math.abs(index - leftCenter),
        Math.abs(index - rightCenter)
      );
    } else {
      distanceFromCenter = Math.abs(index - centerIndex);
    }

    if (distanceFromCenter === 0) return "w-35 h-auto md:w-17_5 aspect-square";
    if (distanceFromCenter === 1) return "w-25 h-auto md:w-12_5 aspect-square";
    if (distanceFromCenter === 2) return "w-10 h-auto md:w-7_5 aspect-square";
    return "w-5 h-auto md:h-20 md:w-auto aspect-square";
  };

  const maxItems = isMobile ? 3 : 7;
  const actualTeam = team.slice(0, 7);

  const visibleTeam: TeamMember[] = isMobile && actualTeam.length > 3
    ? actualTeam.slice(
      Math.floor((actualTeam.length - 3) / 2),
      Math.floor((actualTeam.length - 3) / 2) + 3
    )
    : actualTeam.slice(0, maxItems);

  return (
    <section
      className={cls(
        "relative py-20 overflow-hidden",
        useInvertedBackground === "invertCard"
          ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
          : "w-full",
        useInvertedBackground === "invertDefault" && "bg-foreground",
        className
      )}
      aria-label={ariaLabel}
    >
      <div className={cls("w-content-width mx-auto flex flex-col items-center gap-10 h-[37.5rem] md:h-180", containerClassName)}>
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 md:gap-10" >
          <div className="relative w-full flex justify-center items-center">
            <div className={cls("absolute inset-0 flex justify-center items-center pointer-events-none", circlesClassName)}>
              <div className="absolute! w-150 h-auto md:h-180 md:w-auto aspect-square rounded-theme card opacity-25 mask-fade-bottom" />
              <div className="absolute! w-110 h-auto md:h-140 md:w-auto aspect-square rounded-theme card opacity-50 mask-fade-bottom" />
              <div className="absolute! w-70 h-auto md:h-100 md:w-auto aspect-square rounded-theme card opacity-75 mask-fade-bottom" />
            </div>

            <div className={cls("relative flex items-center justify-center gap-3 md:gap-4", imagesContainerClassName)}>
              {visibleTeam.map((member, index) => (
                <div
                  key={member.id}
                  className={cls(
                    "relative card p-1 rounded-theme overflow-hidden shrink-0",
                    getImageSize(index, visibleTeam.length),
                    imageClassName
                  )}
                >
                  <div className="relative z-1 w-full h-full rounded-theme overflow-hidden" >
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      className="object-cover"
                      unoptimized={member.imageSrc.startsWith('http') || member.imageSrc.startsWith('//')}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TextAnimation
            type={theme.defaultTextAnimation}
            text={title}
            variant="trigger"
            as="h2"
            className={cls(
              "text-5xl font-medium text-center",
              (useInvertedBackground === "invertDefault" || useInvertedBackground === "invertCard") && "text-background",
              titleClassName
            )}
          />
        </div>
      </div>
    </section>
  );
};

TeamCardSeven.displayName = "TeamCardSeven";

export default memo(TeamCardSeven);
