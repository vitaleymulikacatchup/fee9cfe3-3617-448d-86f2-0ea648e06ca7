"use client";

import { memo, useRef, useEffect, useState } from "react";
import FooterLogo from "./FooterLogo";
import { cls } from "@/lib/utils";

interface FooterLogoRevealProps {
  logoSrc?: string;
  logoAlt?: string;
  logoText?: string;
  ariaLabel?: string;
  className?: string;
  wrapperClassName?: string;
  containerClassName?: string;
  logoClassName?: string;
  svgClassName?: string;
}

const FooterLogoReveal = memo<FooterLogoRevealProps>(function FooterLogoReveal({
  logoSrc,
  logoAlt = "Logo",
  logoText = "Webild",
  ariaLabel = "Site footer",
  className = "",
  wrapperClassName = "",
  containerClassName = "",
  logoClassName = "",
  svgClassName = "",
}) {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        const height = footerRef.current.offsetHeight;
        setFooterHeight(height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    const currentFooter = footerRef.current;

    if (currentFooter) {
      resizeObserver.observe(currentFooter);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      aria-label={ariaLabel}
      className={cls("relative z-0 w-full", className)}
      style={{
        height: footerHeight ? `${footerHeight}px` : "auto",
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        className={cls("fixed bottom-0 w-full flex items-center justify-center overflow-hidden", wrapperClassName)}
        style={{ height: footerHeight ? `${footerHeight}px` : "auto" }}
      >
        <div ref={footerRef} className={cls("w-full", containerClassName)}>
          <footer
            role="contentinfo"
            className="relative w-full py-20 card"
          >
            <div className="w-content-width mx-auto flex flex-col relative z-10">
              <FooterLogo
                logoSrc={logoSrc}
                logoAlt={logoAlt}
                logoText={logoText}
                className={logoClassName}
                svgClassName={svgClassName}
              />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
});

FooterLogoReveal.displayName = "FooterLogoReveal";

export default FooterLogoReveal;
