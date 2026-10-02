"use client";
import { useEffect } from "react";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";

const Counter = ({ from = 0, to = 100, duration = 2, decimals = 0, suffix = "" }) => {
  const count = useMotionValue(from);
  
  // Transform the count to format decimals and append any suffix (like 'K' or 'M')
  const formatted = useTransform(count, (latest) => {
    // If it's in the thousands or millions, you can format it accordingly:
    if (latest >= 1000000) {
      return (latest / 1000000).toFixed(1) + "M";
    } else if (latest >= 1000 && decimals > 0) {
      return (latest / 1000).toFixed(decimals) + "K";
    }
    
    // Default formatting
    return latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, to, duration]);

  return <motion.span>{formatted}</motion.span>;
};

export default Counter;