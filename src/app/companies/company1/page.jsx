
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const containerVariants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Company1 = () => {
  const controls = useAnimation();
  const wrapperRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection triggered:", entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("visible");
          setHasAnimated(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  return (
    <div ref={wrapperRef} className="w-full bg-gray-700 h-screen">
      <motion.div
        className="flex justify-center items-center bg-red-200 h-screen w-full text-black"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ willChange: "clip-path" }}
      >
        Company 1
      </motion.div>
    </div>
  );
};

export default Company1;

