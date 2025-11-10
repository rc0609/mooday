import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeatureBox = ({ title, desc, light, dark, glow, hoverGlow, align, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`relative p-10 rounded-2xl w-auto max-w-md ${light} ${dark} ${glow} ${hoverGlow} backdrop-blur-md 
        transform transition-transform transition-shadow transition-filter duration-500 ease-in-out hover:scale-[1.05] ${align}`}
    >
      <h2 className="text-xl font-bold mb-3 text-[#4F4F4F] dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{desc}</p>
    </motion.div>
  );
};

export default FeatureBox;