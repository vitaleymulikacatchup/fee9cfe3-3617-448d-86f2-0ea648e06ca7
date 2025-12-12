export type ButtonVariant =
  | "hover-magnetic"
  | "hover-bubble"
  | "expand-hover"
  | "icon-arrow"
  | "shift-hover"
  | "text-stagger"
  | "text-underline";

export type CTAButtonVariant = Exclude<ButtonVariant, "text-underline">;

export type ButtonWithBgClassName = "text-stagger" | "shift-hover";

export const hasBgClassName = (variant?: string): variant is ButtonWithBgClassName => {
  return variant === "text-stagger" || variant === "shift-hover";
};

export type BaseButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
};

export type ButtonVariantProps =
  | ({
      variant?: "hover-magnetic";
      textClassName?: string;
      strengthFactor?: number;
    } & BaseButtonProps)
  | ({
      variant: "hover-bubble";
      bgClassName?: string;
      textClassName?: string;
      iconClassName?: string;
    } & BaseButtonProps)
  | ({
      variant: "expand-hover";
      textClassName?: string;
      iconClassName?: string;
      iconBgClassName?: string;
    } & BaseButtonProps)
  | ({
      variant: "icon-arrow";
      textClassName?: string;
      iconClassName?: string;
    } & BaseButtonProps)
  | ({
      variant: "shift-hover";
      bgClassName?: string;
      textClassName?: string;
    } & BaseButtonProps)
  | ({
      variant: "text-stagger";
      bgClassName?: string;
    } & BaseButtonProps)
  | ({
      variant: "text-underline";
      disabled?: boolean;
    } & BaseButtonProps);

export type ButtonPropsForVariant<V extends ButtonVariant> = Extract<
  ButtonVariantProps,
  { variant?: V }
>;