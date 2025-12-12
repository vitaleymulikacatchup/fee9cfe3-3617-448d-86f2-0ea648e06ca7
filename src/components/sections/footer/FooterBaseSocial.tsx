"use client";

import { memo } from "react";
import Image from "next/image";
import ButtonTextUnderline from "@/components/button/ButtonTextUnderline";
import FooterColumns from "@/components/shared/FooterColumns";
import SocialLinks from "@/components/shared/SocialLinks";
import { cls } from "@/lib/utils";
import type { FooterColumn } from "@/components/shared/FooterColumns";
import type { SocialLink } from "@/components/shared/SocialLinks";

interface FooterBaseSocialProps {
  logoSrc?: string;
  logoText?: string;
  logoWidth?: number;
  logoHeight?: number;
  description: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyrightText?: string;
  onPrivacyClick?: () => void;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  logoClassName?: string;
  logoTextClassName?: string;
  descriptionClassName?: string;
  columnsClassName?: string;
  columnClassName?: string;
  columnTitleClassName?: string;
  columnItemClassName?: string;
  socialLinksClassName?: string;
  socialIconClassName?: string;
  copyrightContainerClassName?: string;
  copyrightTextClassName?: string;
  privacyButtonClassName?: string;
}

const FooterBaseSocial = memo<FooterBaseSocialProps>(function FooterBaseSocial({
  logoSrc = "/brand/logowhite.svg",
  logoText = "Webild",
  logoWidth = 120,
  logoHeight = 40,
  description,
  columns,
  socialLinks,
  copyrightText = `© 2025 | Webild`,
  onPrivacyClick,
  ariaLabel = "Site footer",
  className = "",
  containerClassName = "",
  logoClassName = "",
  logoTextClassName = "",
  descriptionClassName = "",
  columnsClassName = "",
  columnClassName = "",
  columnTitleClassName = "",
  columnItemClassName = "",
  socialLinksClassName = "",
  socialIconClassName = "",
  copyrightContainerClassName = "",
  copyrightTextClassName = "",
  privacyButtonClassName = "",
}) {
  return (
    <footer
      role="contentinfo"
      aria-label={ariaLabel}
      className={cls("relative overflow-hidden w-full primary-button text-background py-15", className)}
    >
      <div
        className={cls("relative w-content-width mx-auto z-10", containerClassName)}
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between mb-10">
          <div className="relative flex flex-col justify-between gap-4">
            {logoSrc ? (
              <div className="flex-shrink-0">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={logoWidth}
                  height={logoHeight}
                  className={cls("object-contain", logoClassName)}
                  unoptimized={logoSrc.startsWith('http') || logoSrc.startsWith('//')}
                  aria-hidden={true}
                />
              </div>
            ) : (
              <h2 className={cls("text-4xl font-medium text-background", logoTextClassName)}>
                {logoText}
              </h2>
            )}

            <p className={cls("text-background/50 text-base leading-tight text-balance md:max-w-[var(--width-20)]", descriptionClassName)}>
              {description}
            </p>

            <SocialLinks
              socialLinks={socialLinks}
              className={cls("mt-auto", socialLinksClassName)}
              iconClassName={socialIconClassName}
            />
          </div>

          <FooterColumns
            columns={columns}
            className={columnsClassName}
            columnClassName={columnClassName}
            columnTitleClassName={cls("text-background/50", columnTitleClassName)}
            columnItemClassName={cls("text-background", columnItemClassName)}
          />
        </div>

        <div
          className={cls("w-full flex items-center justify-between pt-9 border-t border-background/20", copyrightContainerClassName)}
        >
          <span className={cls("text-background/50 text-sm", copyrightTextClassName)}>
            {copyrightText}
          </span>
          <ButtonTextUnderline
            text="Privacy Policy"
            onClick={onPrivacyClick}
            className={cls("text-background/50", privacyButtonClassName)}
          />
        </div>
      </div>
    </footer>
  );
});

FooterBaseSocial.displayName = "FooterBaseSocial";

export default FooterBaseSocial;
