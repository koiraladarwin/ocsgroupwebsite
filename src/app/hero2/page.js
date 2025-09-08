"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const lineVariants = {
  hidden: { scaleY: 0, originY: 1, opacity: 0 },
  visible: { scaleY: 1, opacity: 1, transition: { duration: 0.2, delay: 0 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const bottomTextVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 1.5 } },
};

export default function HeroPage2() {

  return (
    <section className="h-screen w-screen text-white relative overflow-hidden px-10 flex flex-col justify-start">
      <motion.div
        className="flex items-center justify-center gap-0 max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <img src="/title.gif"/>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        variants={bottomTextVariants}
        initial="hidden"
        animate="visible"
        className="mt-24 w-full text-center px-6 text-base text-blue-200 max-w-4xl mx-auto"
      >
        <p className="leading-relaxed">
          At <span className="font-semibold text-white">OCS Group</span>, we are committed to delivering
          innovative, practical, and tailored solutions designed to overcome your unique business challenges.
          With our expertise and forward-thinking approach, we help transform obstacles into opportunities,
          empowering businesses to grow and succeed in an ever-evolving marketplace. Our services span multiple
          industries including <span className="font-semibold text-white">Technology, Education, and more</span>,
          ensuring comprehensive support that drives real results.
        </p> </motion.div>
    </section>
  );
}

