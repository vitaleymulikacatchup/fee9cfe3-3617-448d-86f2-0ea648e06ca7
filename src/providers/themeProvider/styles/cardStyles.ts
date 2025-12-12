import type { CardStyleVariant } from "../config/types";

export const cardStyleMap: Record<CardStyleVariant, string> = {
  "solid": `
    position: relative;
    background: var(--color-card);
  `,
  "solid-accent": `
    position: relative;
    background: var(--color-accent);
  `,
  "solid-accent-light": `
    position: relative;
    background: color-mix(in srgb, var(--color-accent) 25%, transparent);
  `,
  "outline": `
    position: relative;
    border: 1px solid var(--color-accent);
  `,
  "outline-light": `
    position: relative;
    border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
  `,
  "glass-outline": `
    position: relative;
    backdrop-filter: blur(8px);
    border: 1px solid var(--color-accent);
  `,
  "glass-outline-light": `
    position: relative;
    backdrop-filter: blur(8px);
    border: 1px solid color-mix(in srgb, var(--color-accent) 15%, transparent);
  `,
  "elevated": `
    position: relative;
    background: var(--color-card);
    box-shadow: 0 4px 6px -1px color-mix(in srgb, var(--color-foreground) 10%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  `,
  "elevated-accent": `
    position: relative;
    background: var(--color-accent);
    box-shadow: 0 4px 6px -1px color-mix(in srgb, var(--color-foreground) 10%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  `,
  "elevated-accent-light": `
    position: relative;
    background: color-mix(in srgb, var(--color-accent) 25%, transparent);
    box-shadow: 0 4px 6px -1px color-mix(in srgb, var(--color-foreground) 10%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  `,
  "floating": `
    position: relative;
    background: var(--color-card);
    box-shadow: 0 20px 25px -5px color-mix(in srgb, var(--color-foreground) 10%, transparent), 0 8px 10px -6px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  `,
  "gradient-subtle": `
    position: relative;
    background: linear-gradient(135deg, var(--color-card) 0%, color-mix(in srgb, var(--color-card) 95%, var(--color-accent) 5%) 100%);
  `,
  "gradient-mesh": `
    position: relative;
    background:
      radial-gradient(at 0% 0%, color-mix(in srgb, var(--color-accent) 15%, transparent) 0px, transparent 50%),
      radial-gradient(at 100% 0%, color-mix(in srgb, var(--color-accent) 10%, transparent) 0px, transparent 50%),
      radial-gradient(at 100% 100%, color-mix(in srgb, var(--color-accent) 20%, transparent) 0px, transparent 50%),
      radial-gradient(at 0% 100%, color-mix(in srgb, var(--color-accent) 12%, transparent) 0px, transparent 50%),
      var(--color-card);
  `,
  "gradient-radial": `
    position: relative;
    background: radial-gradient(circle at center, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 8%) 0%, var(--color-card) 70%);
  `,
  "frosted-heavy": `
    position: relative;
    backdrop-filter: blur(20px);
    background: color-mix(in srgb, var(--color-card) 40%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-card) 30%, transparent);
  `,
  "neon-glow": `
    position: relative;
    background: var(--color-card);
    box-shadow:
      0 0 20px color-mix(in srgb, var(--color-accent) 15%, transparent),
      0 0 40px color-mix(in srgb, var(--color-accent) 10%, transparent),
      0 0 60px color-mix(in srgb, var(--color-accent) 5%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
  `,
  "accent-corner-border": `
    position: relative;
    backdrop-filter: blur(8px);
    background: color-mix(in srgb, var(--color-accent) 7.5%, transparent);
    border-left: 3px solid var(--color-accent);
    border-bottom: 3px solid var(--color-accent);
    box-shadow: 0 4px 6px -1px color-mix(in srgb, var(--color-foreground) 10%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  `,
  "inset": `
    position: relative;
    background: color-mix(in srgb, var(--color-card) 95%, var(--color-accent) 5%);
    box-shadow:
      inset 2px 2px 4px color-mix(in srgb, var(--color-accent) 15%, transparent),
      inset -2px -2px 4px color-mix(in srgb, var(--color-background) 20%, transparent);
  `,
  "spotlight": `
    position: relative;
    background: radial-gradient(ellipse at top, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 12%) 0%, var(--color-card) 60%);
  `,
  "shadow-colored": `
    position: relative;
    background: var(--color-card);
    box-shadow: 0 4px 6px -1px color-mix(in srgb, var(--color-accent) 20%, transparent), 0 2px 4px -2px color-mix(in srgb, var(--color-accent) 20%, transparent);
  `,
  "glass-elevated": `
    position: relative;
    backdrop-filter: blur(8px);
    background: linear-gradient(to bottom right, color-mix(in srgb, var(--color-card) 80%, transparent), color-mix(in srgb, var(--color-card) 40%, transparent));
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border: 1px solid var(--color-card);
  `,
  "glass-flat": `
    position: relative;
    background: color-mix(in srgb, var(--color-accent) 5%, transparent);
    backdrop-filter: blur(8px);
    box-shadow: none;
    border: 0;
  `,
  "glass-depth": `
    position: relative;
    background: color-mix(in srgb, var(--color-card) 15%, transparent);
    backdrop-filter: blur(14px);
    box-shadow:
      inset 0 0 20px 0 color-mix(in srgb, var(--color-accent) 7.5%, transparent);
    border: 1px solid color-mix(in srgb, var(--color-accent) 7.5%, transparent);
  `,
  "gradient-bordered": `
    position: relative;
    background: linear-gradient(180deg, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 5%) -35%, var(--color-card) 65%);
    box-shadow: 0px 0px 10px 4px color-mix(in srgb, var(--color-accent) 4%, transparent);
  `,
  "solid-bordered": `
    position: relative;
    background: var(--color-card);
    border: 1px solid color-mix(in srgb, var(--color-accent) 10%, transparent);
    box-shadow: none;
  `,
  "layered-gradient": `
    position: relative;
    background:
      linear-gradient(color-mix(in srgb, var(--color-accent) 6%, transparent) 0%, transparent 59.26%),
      linear-gradient(var(--color-card) 0%, var(--color-card) 100%),
      var(--color-card);
    box-shadow:
      20px 18px 7px color-mix(in srgb, var(--color-accent) 0%, transparent),
      2px 2px 2px color-mix(in srgb, var(--color-accent) 6.5%, transparent),
      1px 1px 2px color-mix(in srgb, var(--color-accent) 2%, transparent);
    border: 2px solid var(--color-secondary-cta);
  `,
  "noise": `
    position: relative;
    background: var(--color-card);
  `,
  "noise-gradient": `
    position: relative;
    background: linear-gradient(180deg, color-mix(in srgb, var(--color-card) 100%, var(--color-accent) 20%) -35%, var(--color-card) 65%);
  `,
};

export const getGradientBorderedPseudo = (cardStyle: CardStyleVariant): string => {
  if (cardStyle !== "gradient-bordered") return '';

  return `
    .card::before {
      content: "";
      position: absolute;
      pointer-events: none;
      inset: 0;
      padding: 1px;
      border-radius: inherit;
      background: linear-gradient(
        160deg,
        color-mix(in srgb, var(--color-accent) 25%, transparent) 0%,
        color-mix(in srgb, var(--color-accent) 5%, transparent) 35%,
        color-mix(in srgb, var(--color-foreground) 5%, transparent) 75%,
        color-mix(in srgb, var(--color-background-accent) 15%, transparent) 100%
      );
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      mask-composite: exclude;
    }
  `;
};

export const getNoisePseudo = (cardStyle: CardStyleVariant): string => {
  if (cardStyle !== "noise" && cardStyle !== "noise-gradient") return '';

  return `
    .card::after {
      content: "";
      position: absolute;
      pointer-events: none;
      inset: 0;
      border-radius: inherit;
      background-image: url(/images/noise.webp);
      background-size: 512px;
      background-repeat: repeat;
      mix-blend-mode: overlay;
      opacity: 0.5;
      z-index: 0;
    }
  `;
};
