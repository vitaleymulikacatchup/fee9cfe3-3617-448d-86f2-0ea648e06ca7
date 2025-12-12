"use client";

import { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface ContactMediaProps {
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    buttons?: ButtonConfig[];
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    ariaLabel?: string;
    className?: string;
    mediaWrapperClassName?: string;
    mediaClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

const ContactMedia = ({
    imageSrc,
    videoSrc,
    imageAlt,
    videoAriaLabel,
    buttons,
    useInvertedBackground,
    ariaLabel = "Contact section",
    className = "",
    mediaWrapperClassName = "",
    mediaClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
}: ContactMediaProps) => {
    const theme = useTheme();

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative py-20", useInvertedBackground === "invertCard" ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground" : "w-full", useInvertedBackground === "invertDefault" && "bg-foreground", className)}
        >
            <div className={cls("relative z-1 w-content-width mx-auto aspect-square md:aspect-video rounded-theme-capped overflow-hidden", mediaWrapperClassName)}>
                <MediaContent
                    imageSrc={imageSrc}
                    videoSrc={videoSrc}
                    imageAlt={imageAlt}
                    videoAriaLabel={videoAriaLabel}
                    imageClassName={cls("z-1 w-full h-full object-cover", mediaClassName)}
                />

                {buttons && buttons.length > 0 && (
                    <div className={cls("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4", buttonContainerClassName)}>
                        {buttons.slice(0, 2).map((button, index) => (
                            <Button
                                key={index}
                                {...getButtonProps(
                                    button,
                                    index,
                                    theme.defaultButtonVariant,
                                    cls("px-8", buttonClassName),
                                    cls("text-base", buttonTextClassName)
                                )}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

ContactMedia.displayName = "ContactMedia";

export default memo(ContactMedia);
