"use client";

import { memo } from "react";
import MediaContent from "@/components/shared/MediaContent";
import Button from "@/components/button/Button";
import { cls } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";

interface ParallaxAboutProps {
    imageSrc?: string;
    videoSrc?: string;
    imageAlt?: string;
    videoAriaLabel?: string;
    buttons?: ButtonConfig[];
    ariaLabel?: string;
    className?: string;
    mediaClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

const ParallaxAbout = ({
    imageSrc,
    videoSrc,
    imageAlt,
    videoAriaLabel,
    buttons,
    ariaLabel = "About section",
    className = "",
    mediaClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
}: ParallaxAboutProps) => {
    const theme = useTheme();

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative z-0 w-full h-svh", className)}
            style={{
                clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
            }}
        >
            <div className="fixed inset-0 w-full h-full">
                <MediaContent
                    imageSrc={imageSrc}
                    videoSrc={videoSrc}
                    imageAlt={imageAlt}
                    videoAriaLabel={videoAriaLabel}
                    imageClassName={cls("w-full h-full object-cover rounded-none!", mediaClassName)}
                />
            </div>

            {buttons && buttons.length > 0 && (
                <div className={cls("relative z-10 flex items-center justify-center h-full", buttonContainerClassName)}>
                    <div className="flex gap-4">
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
                </div>
            )}
        </section>
    );
};

ParallaxAbout.displayName = "ParallaxAbout";

export default memo(ParallaxAbout);
