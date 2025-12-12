import type { PrimaryButtonStyleVariant } from "../config/types";

export const primaryButtonStyleMap: Record<PrimaryButtonStyleVariant, string> = {
  gradient: `
    background: linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-cta) 83%, transparent), var(--color-primary-cta));
    box-shadow: color-mix(in srgb, var(--color-background) 25%, transparent) 0px 1px 1px 0px inset, color-mix(in srgb, var(--color-primary-cta) 15%, transparent) 3px 3px 3px 0px;
  `,
  shadow: `
    background: var(--color-primary-cta);
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 40%, transparent);
  `,
  flat: `
    background: var(--color-primary-cta);
    box-shadow: none;
  `,
  "layered-depth": `
    background: linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-cta) 100%, #ffffff 20%), color-mix(in srgb, var(--color-primary-cta) 100%, #000000 40%));
    box-shadow:
      2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 40%, transparent),
      inset 0 0 1.05419px 3.16256px color-mix(in srgb, var(--color-secondary-cta) 0%, transparent),
      inset 0 6.32511px 5.27093px color-mix(in srgb, var(--color-accent) 50%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-primary-cta) 100%, #000000 60%);
  `,
  "radial-glow": `
    background:
      radial-gradient(circle at 0% 0%, color-mix(in srgb, var(--color-accent) 40%, transparent) 0%, transparent 45%),
      radial-gradient(circle at 100% 100%, color-mix(in srgb, var(--color-accent) 40%, transparent) 0%, transparent 45%),
      var(--color-foreground);
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 30%, transparent);
  `,
  "diagonal-gradient": `
    background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-primary-cta) 65%, transparent), var(--color-accent));
    box-shadow: 2.10837px 3.16256px 9.48767px color-mix(in srgb, var(--color-accent) 30%, transparent);
  `,
  "neon-glow-border": `
    background: var(--color-primary-cta);
    border: 2px solid var(--color-accent);
    box-shadow:
      0 0 10px color-mix(in srgb, var(--color-accent) 40%, transparent),
      0 0 20px color-mix(in srgb, var(--color-accent) 20%, transparent),
      inset 0 0 10px color-mix(in srgb, var(--color-accent) 15%, transparent);
  `,
  "outline": `
    background: var(--color-foreground);
    border: 2px solid var(--color-accent);
    box-shadow: none;
  `,
};
