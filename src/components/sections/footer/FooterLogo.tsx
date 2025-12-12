"use client";

import { memo } from "react";
import Image from "next/image";
import SvgTextLogo from "@/components/shared/SvgTextLogo/SvgTextLogo";
import { cls } from "@/lib/utils";

interface FooterLogoProps {
    logoSrc?: string;
    logoAlt?: string;
    logoText?: string;
    className?: string;
    svgClassName?: string;
}

const FooterLogo = memo<FooterLogoProps>(function FooterLogo({
    logoSrc,
    logoAlt = "Logo",
    logoText = "Webild",
    className = "",
    svgClassName = ""
}) {
    return (
        <div className={cls("relative z-1 w-full", className)}>
            {logoSrc ? (
                <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                    unoptimized={logoSrc.startsWith('http') || logoSrc.startsWith('//')}
                    aria-hidden={logoAlt === ""}
                />
            ) : (
                <SvgTextLogo logoText={logoText} className={svgClassName} />
            )}
        </div>
    );
});

FooterLogo.displayName = "FooterLogo";

export default FooterLogo;