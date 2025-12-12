"use client";

import React, { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import Button from "@/components/button/Button";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { getButtonProps } from "@/lib/buttonUtils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { ButtonConfig } from "@/types/button";
import type { InvertedBackground } from "@/providers/themeProvider/config/constants";

type AnimationType = "entrance-slide" | "reveal-blur" | "background-highlight";

interface ContactTextProps {
    text: string;
    animationType?: AnimationType;
    buttons?: ButtonConfig[];
    useInvertedBackground: InvertedBackground;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

const ContactText = ({
    text,
    animationType = "entrance-slide",
    buttons,
    useInvertedBackground,
    ariaLabel = "Contact section",
    className = "",
    containerClassName = "",
    textClassName = "",
    buttonContainerClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
}: ContactTextProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <section
            aria-label={ariaLabel}
            className={cls(
                "relative py-20",
                useInvertedBackground === "invertCard"
                    ? "w-content-width-expanded mx-auto rounded-theme-capped bg-foreground"
                    : "w-full",
                useInvertedBackground === "invertDefault" && "bg-foreground",
                className
            )}
        >
            <div className={cls("relative w-content-width mx-auto card rounded-theme-capped py-20 px-10", containerClassName)}>
                <div className="relative z-1 w-full md:w-3/4 mx-auto flex flex-col items-center justify-center gap-8" >
                    <TextAnimation
                        type={animationType}
                        text={text}
                        variant="words-trigger"
                        as="h2"
                        className={cls(
                            "text-4xl md:text-5xl font-medium text-center leading-[1.15]",
                            shouldUseLightText && "text-background",
                            textClassName
                        )}
                    />

                    {buttons && buttons.length > 0 && (
                        <div className={cls("flex gap-4", buttonContainerClassName)}>
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
            </div>
        </section>
    );
};

ContactText.displayName = "ContactText";

export default memo(ContactText);
