"use client";

import React, { memo } from "react";
import TextBox from "@/components/Textbox";
import WaitlistForm from "@/components/form/WaitlistForm";
import { cls } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FormField {
    name: string;
    type?: string;
    placeholder?: string;
    ariaLabel?: string;
    required?: boolean;
}

interface HeroWaitlistProps {
    title: string;
    description: string;
    tag?: string;
    tagIcon?: LucideIcon;
    fields?: FormField[];
    buttonText?: string;
    onSubmit?: (data: Record<string, string>) => void;
    ariaLabel?: string;
    className?: string;
    containerClassName?: string;
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    formClassName?: string;
    inputsContainerClassName?: string;
    inputClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

const HeroWaitlist = ({
    title,
    description,
    tag,
    tagIcon,
    fields,
    buttonText = "Join waitlist",
    onSubmit,
    ariaLabel = "Hero section",
    className = "",
    containerClassName = "",
    textBoxClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    tagClassName = "",
    formClassName = "",
    inputsContainerClassName = "",
    inputClassName = "",
    buttonClassName = "",
    buttonTextClassName = "",
}: HeroWaitlistProps) => {

    return (
        <section
            aria-label={ariaLabel}
            className={cls("relative w-full h-svh flex items-center justify-center", className)}
        >
            <div className={cls("w-content-width mx-auto flex flex-col gap-8", containerClassName)}>
                <TextBox
                    title={title}
                    description={description}
                    tag={tag}
                    tagIcon={tagIcon}
                    className={cls("flex flex-col gap-3 md:gap-1", textBoxClassName)}
                    titleClassName={cls("text-6xl font-medium text-balance", titleClassName)}
                    descriptionClassName={cls("text-lg leading-[1.2]", descriptionClassName)}
                    tagClassName={cls("px-3 py-1 text-sm rounded-theme card text-foreground inline-flex items-center gap-2 mb-3", tagClassName)}
                    center={true}
                />

                <div className="w-full md:w-40 mx-auto">
                    <WaitlistForm
                        fields={fields}
                        buttonText={buttonText}
                        onSubmit={onSubmit}
                        className={formClassName}
                        inputsContainerClassName={inputsContainerClassName}
                        inputClassName={inputClassName}
                        buttonClassName={buttonClassName}
                        buttonTextClassName={buttonTextClassName}
                    />
                </div>
            </div>
        </section>
    );
};

HeroWaitlist.displayName = "HeroWaitlist";

export default memo(HeroWaitlist);
