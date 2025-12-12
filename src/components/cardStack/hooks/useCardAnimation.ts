import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CardAnimationType } from "../types";

gsap.registerPlugin(ScrollTrigger);

interface UseCardAnimationProps {
  animationType: CardAnimationType;
  itemCount: number;
}

export const useCardAnimation = ({ animationType, itemCount }: UseCardAnimationProps) => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(() => {
    if (animationType === "none" || itemRefs.current.length === 0) return;

    const items = itemRefs.current.filter((el) => el !== null);

    if (animationType === "opacity") {
      gsap.fromTo(
        items,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.25,
          stagger: 0.15,
          ease: "sine",
          scrollTrigger: {
            trigger: items[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (animationType === "slide-up") {
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, yPercent: 15 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            delay: index * 0.15,
            ease: "sine",
            scrollTrigger: {
              trigger: items[0],
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    } else if (animationType === "scale-rotate") {
      gsap.fromTo(
        items,
        { scaleX: 0, rotate: 10 },
        {
          scaleX: 1,
          rotate: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3",
          scrollTrigger: {
            trigger: items[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (animationType === "blur-reveal") {
      gsap.fromTo(
        items,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: items[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [animationType, itemCount]);

  return { itemRefs };
};
