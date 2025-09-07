
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const containerVariants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)", // start fully masked (hidden)
  },
  visible: {
    clipPath: "inset(0 0% 0 0)", // fully visible (unmasked)
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Company3 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
          observer.unobserve(element); // stop observing after first animation
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  return (
    <div
      className=" bg-gray-700 h-screen w-full "
    >
    <motion.div
      ref={ref}
      className=" bg-green-200 h-screen w-full flex items-center justify-center text-black"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      Company 3
    </motion.div>

    </div>
  );
};

export default Company3;

