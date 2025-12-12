"use client";

import { memo } from "react";
import TextAnimation from "@/components/text/TextAnimation";
import EmailSignupForm from "@/components/form/EmailSignupForm";
import Tag from "@/components/shared/Tag";
import { cls, shouldUseInvertedText } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider/ThemeProvider";
import type { AnimationType } from "@/components/text/types";
import { LucideIcon } from "lucide-react";

interface ContactFormProps {
    title: string;
    description: string;
    tag: string;
    tagIcon?: LucideIcon;
    useInvertedBackground: "noInvert" | "invertDefault" | "invertCard";
    inputPlaceholder?: string;
    buttonText?: string;
    termsText?: string;
    onSubmit?: (email: string) => void;
    centered?: boolean;
    className?: string;
    tagClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    formWrapperClassName?: string;
    formClassName?: string;
    inputClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
    termsClassName?: string;
}

const ContactForm = ({
    title,
    description,
    tag,
    tagIcon,
    useInvertedBackground,
    inputPlaceholder = "Enter your email",
    buttonText = "Sign Up",
    termsText = "By clicking Sign Up you're confirming that you agree with our Terms and Conditions.",
    onSubmit,
    centered = false,
    className = "",
    tagClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    formWrapperClassName = "",
    formClassName = "",
    inputClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
    termsClassName = "",
}: ContactFormProps) => {
    const theme = useTheme();
    const shouldUseLightText = shouldUseInvertedText(useInvertedBackground, theme.cardStyle);

    return (
        <div className={cls("relative z-1 flex flex-col gap-4", centered && "items-center text-center", className)}>
            <div className={cls("w-full flex flex-col gap-1", centered && "items-center")}>
                <Tag text={tag} icon={tagIcon} useInvertedBackground={useInvertedBackground} className={tagClassName} />

                <TextAnimation
                    type={theme.defaultTextAnimation as AnimationType}
                    text={title}
                    variant="trigger"
                    className={cls("text-4xl md:text-5xl font-medium leading-[1.175] text-balance", shouldUseLightText ? "text-background" : "text-foreground", centered && "w-full md:w-8/10", titleClassName)}
                />

                <TextAnimation
                    type={theme.defaultTextAnimation as AnimationType}
                    text={description}
                    variant="words-trigger"
                    className={cls("text-base leading-[1.15] mb-1 text-balance", shouldUseLightText ? "text-background" : "text-foreground", centered && "w-full md:w-8/10", descriptionClassName)}
                />
            </div>

            <div className={cls("w-full flex flex-col gap-1", formWrapperClassName)}>
                <EmailSignupForm
                    inputPlaceholder={inputPlaceholder}
                    buttonText={buttonText}
                    onSubmit={onSubmit}
                    className={formClassName}
                    inputClassName={inputClassName}
                    buttonClassName={buttonClassName}
                    buttonTextClassName={buttonTextClassName}
                />

                <p className={cls("text-xs", shouldUseLightText ? "text-background/75" : "text-foreground/75", termsClassName)}>
                    {termsText}
                </p>
            </div>
        </div>
    );
};

ContactForm.displayName = "ContactForm";

export default memo(ContactForm);
