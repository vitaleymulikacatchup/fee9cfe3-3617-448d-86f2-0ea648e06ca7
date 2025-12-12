"use client";

import React, { memo, useMemo, useState, useEffect } from "react";
import AvatarGroup from "@/components/shared/AvatarGroup";
import Tag from "@/components/shared/Tag";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { LucideIcon } from "lucide-react";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type TeamMember = {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt?: string;
};

interface TeamCardEightProps {
  team: TeamMember[];
  cardTitle: string;
  cardTag: string;
  cardTagIcon?: LucideIcon;
  useInvertedBackground: InvertedBackground;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  avatarGroupClassName?: string;
  avatarClassName?: string;
  cardTitleClassName?: string;
  cardTagClassName?: string;
}

const TeamCardEight = ({
  team,
  cardTitle,
  cardTag,
  cardTagIcon,
  useInvertedBackground,
  ariaLabel = "Team section",
  className = "",
  containerClassName = "",
  cardClassName = "",
  avatarGroupClassName = "",
  avatarClassName = "",
  cardTitleClassName = "",
  cardTagClassName = "",
}: TeamCardEightProps) => {
  const theme = useTheme();
  const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const avatars = useMemo(() =>
    team.map((member) => ({
      src: member.imageSrc,
      alt: member.imageAlt || member.name,
    })),
    [team]
  );

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
    >
      <div className={cls("w-content-width mx-auto", containerClassName)}>
        <div className={cls("w-full card rounded-theme-capped p-8 flex flex-col items-center justify-between gap-8", cardClassName)}>
          <div className="flex flex-col gap-3 items-center">
            <Tag
              text={cardTag}
              icon={cardTagIcon}
              useInvertedBackground={useInvertedBackground}
              className={cardTagClassName}
            />
            <h3 className={cls("relative md:max-w-7/10 text-3xl md:text-5xl font-medium leading-tight text-center text-balance", shouldUseLightText ? "text-background" : "text-foreground", cardTitleClassName)}>
              {cardTitle}
            </h3>
          </div>
          <AvatarGroup
            avatars={avatars}
            className={avatarGroupClassName}
            avatarClassName={avatarClassName}
            maxVisible={isMobile ? 3 : 4}
            ariaLabel="Team members"
            avatarImageClassName="h-[var(--width-17_5)] md:h-[var(--width-12_5)]"
            avatarOverlapClassName="-ml-8"
          />
        </div>
      </div>
    </section>
  );
};

TeamCardEight.displayName = "TeamCardEight";

export default memo(TeamCardEight);
