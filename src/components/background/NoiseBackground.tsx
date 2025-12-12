"use client";

import React, { memo } from "react";
import { cls } from "@/lib/utils";

interface NoiseBackgroundProps {
    className?: string;
}

const NoiseBackground = ({ className = "" }: NoiseBackgroundProps) => {
    return (
        <div
            className={cls("fixed inset-0 -z-10 bg-accent/10",
                className
            )}
        >
            <div
                className="absolute inset-0 bg-repeat mix-blend-overlay opacity-12"
                style={{
                    backgroundImage: "url(/images/noise.webp)",
                    backgroundSize: "512px"
                }}
                aria-hidden="true"
            />
        </div>
    );
};

NoiseBackground.displayName = "NoiseBackground";

export default memo(NoiseBackground);
