"use client";

import { memo, useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cls } from "@/lib/utils";

interface AnimatedGridBackgroundProps {
  className?: string;
  squareSize?: number;
  numSquares?: number;
  maxOpacity?: number;
  perspectiveThreeD?: boolean;
}

const AnimatedGridBackground = ({
  className = "",
  squareSize = 100,
  numSquares = 50,
  maxOpacity = 0.15,
  perspectiveThreeD = true,
}: AnimatedGridBackgroundProps) => {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([]);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const cols = Math.ceil(dimensions.width / squareSize);
      const rows = Math.ceil(dimensions.height / squareSize);

      const newSquares = Array.from({ length: numSquares }, (_, i) => ({
        id: i,
        pos: [
          Math.floor(Math.random() * cols),
          Math.floor(Math.random() * rows),
        ] as [number, number],
      }));

      setSquares(newSquares);
    }
  }, [dimensions, squareSize, numSquares]);

  return (
    <div
      ref={containerRef}
      className={cls(
        "fixed inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(circle_at_center,white_0%,transparent_90%)]",
        perspectiveThreeD && "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        className
      )}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${id}`}
            width={squareSize}
            height={squareSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${squareSize} 0 L 0 0 0 ${squareSize}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent/20"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
        {squares.map(({ id, pos: [x, y] }) => (
          <motion.rect
            key={id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, maxOpacity, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            x={x * squareSize}
            y={y * squareSize}
            width={squareSize}
            height={squareSize}
            fill="var(--color-background-accent)"
            strokeWidth="0"
          />
        ))}
      </svg>
    </div>
  );
};

AnimatedGridBackground.displayName = "AnimatedGridBackground";

export default memo(AnimatedGridBackground);
