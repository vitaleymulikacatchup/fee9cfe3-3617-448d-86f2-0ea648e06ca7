"use client";

import { memo } from "react";
import Image from "next/image";
import FooterColumns from "@/components/shared/FooterColumns";
import AvatarGroup from "@/components/shared/AvatarGroup";
import { cls } from "@/lib/utils";
import type { FooterColumn } from "@/components/shared/FooterColumns";
import type { Avatar } from "@/components/shared/AvatarGroup";
import type { LucideIcon } from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  text: string;
}

interface FooterSplitProps {
  logoSrc?: string;
  logoAlt?: string;
  logoText?: string;
  logoWidth?: number;
  logoHeight?: number;
  columns: FooterColumn[];
  title: string;
  avatars?: Avatar[];
  contactItems: ContactItem[];
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  cardClassName?: string;
  contentClassName?: string;
  columnsClassName?: string;
  columnClassName?: string;
  columnTitleClassName?: string;
  columnItemClassName?: string;
  titleClassName?: string;
  avatarGroupClassName?: string;
  logoClassName?: string;
  logoTextClassName?: string;
  contactClassName?: string;
  contactItemClassName?: string;
  contactIconClassName?: string;
}

const FooterSplit = memo<FooterSplitProps>(function FooterSplit({
  logoSrc,
  logoAlt = "Logo",
  logoText = "Webild",
  logoWidth = 120,
  logoHeight = 40,
  columns,
  title,
  avatars,
  contactItems,
  ariaLabel = "Site footer",
  className = "",
  containerClassName = "",
  cardClassName = "",
  contentClassName = "",
  columnsClassName = "",
  columnClassName = "",
  columnTitleClassName = "",
  columnItemClassName = "",
  titleClassName = "",
  avatarGroupClassName = "",
  logoClassName = "",
  logoTextClassName = "",
  contactClassName = "",
  contactItemClassName = "",
  contactIconClassName = "",
}) {
  return (
    <footer
      role="contentinfo"
      aria-label={ariaLabel}
      className={cls("relative w-full py-20", className)}
    >
      <div className={cls("relative w-content-width mx-auto card rounded-theme-capped flex flex-col gap-40 p-10", containerClassName, cardClassName)}>
        <div className={cls("relative z-1 flex flex-col md:flex-row gap-10", contentClassName)}>
          <FooterColumns
            columns={columns}
            className={columnsClassName}
            columnClassName={columnClassName}
            columnTitleClassName={columnTitleClassName}
            columnItemClassName={columnItemClassName}
          />

          <div className="flex-1 flex flex-col items-start md:items-end text-left md:text-right gap-4">
            <h2 className={cls("text-4xl font-medium w-full md:w-1/2 text-balance", titleClassName)}>
              {title}
            </h2>
            {avatars && avatars.length > 0 && (
              <AvatarGroup
                avatars={avatars}
                className={avatarGroupClassName}
              />
            )}
          </div>
        </div>

        <div className="relative z-1 flex flex-col-reverse md:flex-row items-start md:items-end justify-between gap-6">
          {logoSrc ? (
            <div className="w-full flex-shrink-0">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className={cls("object-contain w-full md:w-20", logoClassName)}
                unoptimized={logoSrc.startsWith('http') || logoSrc.startsWith('//')}
                aria-hidden={true}
              />
            </div>
          ) : (
            <h2 className={cls("w-full text-9xl font-medium truncate", logoTextClassName)}>
              {logoText}
            </h2>
          )}

          <div className={cls("w-full md:w-auto flex flex-col gap-2 text-accent text-base", contactClassName)}>
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={cls("w-full md:w-auto flex items-center gap-2", contactItemClassName)}>
                  <Icon className={cls("h-[1em] w-auto", contactIconClassName)} />
                  <span className="whitespace-nowrap truncate" >{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
});

FooterSplit.displayName = "FooterSplit";

export default FooterSplit;
