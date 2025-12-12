"use client";

import { memo } from "react";
import Image from "next/image";
import SocialLinks from "@/components/shared/SocialLinks";
import FooterColumns from "@/components/shared/FooterColumns";
import { cls } from "@/lib/utils";
import type { SocialLink } from "@/components/shared/SocialLinks";
import type { FooterColumn } from "@/components/shared/FooterColumns";

interface FooterSocialProps {
  logoSrc?: string;
  logoText?: string;
  logoWidth?: number;
  logoHeight?: number;
  columns: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
  logoContainerClassName?: string;
  logoClassName?: string;
  logoTextClassName?: string;
  copyrightTextClassName?: string;
  socialContainerClassName?: string;
  socialIconClassName?: string;
  columnsClassName?: string;
  columnClassName?: string;
  columnTitleClassName?: string;
  columnItemClassName?: string;
}

const FooterSocial = memo<FooterSocialProps>(function FooterSocial({
  logoSrc,
  logoText = "Webild",
  logoWidth = 120,
  logoHeight = 40,
  columns,
  socialLinks,
  copyrightText = "© Finerpoint, Inc. 2025",
  ariaLabel = "Site footer",
  className = "",
  containerClassName = "",
  logoContainerClassName = "",
  logoClassName = "",
  logoTextClassName = "",
  copyrightTextClassName = "",
  socialContainerClassName = "",
  socialIconClassName = "",
  columnsClassName = "",
  columnClassName = "",
  columnTitleClassName = "",
  columnItemClassName = "",
}) {
  return (
    <footer
      role="contentinfo"
      aria-label={ariaLabel}
      className={cls("relative overflow-hidden w-full text-foreground py-15", className)}
    >
      <div
        className={cls("relative w-content-width mx-auto", containerClassName)}
      >
        <div className="flex flex-col md:flex-row gap-14 md:gap-20 justify-between">
          <div className={cls("flex flex-col gap-15", logoContainerClassName)}>
            <div className="flex flex-col gap-0">
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
                <h2 className={cls("text-4xl font-medium", logoTextClassName)}>
                  {logoText}
                </h2>
              )}
              <p className={cls("text-sm text-accent/75", copyrightTextClassName)}>
                {copyrightText}
              </p>
            </div>

            {socialLinks && socialLinks.length > 0 && (
              <SocialLinks
                socialLinks={socialLinks}
                className={socialContainerClassName}
                iconClassName={socialIconClassName}
              />
            )}
          </div>

          <FooterColumns
            columns={columns}
            className={columnsClassName}
            columnClassName={columnClassName}
            columnTitleClassName={columnTitleClassName}
            columnItemClassName={columnItemClassName}
          />
        </div>
      </div>
    </footer>
  );
});

FooterSocial.displayName = "FooterSocial";

export default FooterSocial;
