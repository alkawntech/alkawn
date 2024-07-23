"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((v - min) % range + range) % range + min;
};

interface ParallaxProps {
  children: string;
  baseVelocity?: number;

}

function AnimatedTextMain({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden flex items-center justify-center">
      <motion.div
        className="flex items-center text-6xl  font-bold uppercase whitespace-nowrap"
        style={{ x }}
      >
        <span className="mr-8 hover:text-primary">{children}</span>
        <span className="mr-8 hover:text-primary">{children}</span>
        <span className="mr-8 hover:text-primary">{children}</span>
        <span className="mr-8 hover:text-primary">{children}</span>
      </motion.div>
    </div>
  );
}

export default AnimatedTextMain;
