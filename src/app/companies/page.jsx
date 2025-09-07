"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";

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

const CompanyPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const router = useRouter();

  const goToCompany1 = () => {
    router.push('/companies/company1');
  };
  const goToCompany2 = () => {
    router.push('/companies/company2');
  }
  const goToCompany3 = () => {
    router.push('/companies/company3');
  }

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
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

    return () => {
      observer.disconnect();
    };
  }, [controls, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="h-full w-full flex justify-center items-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <h1 onClick={goToCompany1} className="flex-1 h-full bg-red-200 flex justify-center items-center text-black text-3xl font-bold">
        Company Page 1
      </h1>
      <h1 onClick={goToCompany2} className="flex-1 h-full bg-orange-200 flex justify-center items-center text-black text-3xl font-bold">
        Company Page 2
      </h1>
      <h1 onClick={goToCompany3} className="flex-1 h-full bg-green-200 flex justify-center items-center text-black text-3xl font-bold">
        Company Page 3
      </h1>
    </motion.div>
  );
};

export default CompanyPage;

