"use client";

import { memo } from "react";
import ButtonHoverMagnetic from "./ButtonHoverMagnetic/ButtonHoverMagnetic";
import ButtonIconArrow from "./ButtonIconArrow";
import ButtonShiftHover from "./ButtonShiftHover/ButtonShiftHover";
import ButtonTextStagger from "./ButtonTextStagger/ButtonTextStagger";
import ButtonTextUnderline from "./ButtonTextUnderline";
import ButtonHoverBubble from "./ButtonHoverBubble";
import ButtonExpandHover from "./ButtonExpandHover";
import type { ButtonVariantProps } from "./types";

export type { ButtonVariant, ButtonVariantProps, ButtonPropsForVariant } from "./types";

const buttonComponents = {
  "hover-magnetic": ButtonHoverMagnetic,
  "hover-bubble": ButtonHoverBubble,
  "expand-hover": ButtonExpandHover,
  "icon-arrow": ButtonIconArrow,
  "shift-hover": ButtonShiftHover,
  "text-stagger": ButtonTextStagger,
  "text-underline": ButtonTextUnderline,
} as const;

const Button = (props: ButtonVariantProps) => {
  const { variant = "hover-magnetic", ...restProps } = props;
  const ButtonComponent = buttonComponents[variant];
  return <ButtonComponent {...restProps} />;
};

Button.displayName = "Button";

export default memo(Button);