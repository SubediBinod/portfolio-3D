import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="fixed left-4 bottom-4 flex justify-center items-center rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.55)] z-[50]"
    >
      <div className="sm:w-24 sm:h-24 w-16 h-16 relative">
        <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin absolute inset-0"></div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex justify-center items-center absolute sm:left-4 sm:top-4 left-2 top-2 green-pink-gradient sm:w-16 sm:h-16 w-12 h-12 rounded-full text-center"
          target="_blank"
        >
          <span className="text-white sm:text-[14px] text-[10px] p-1 font-bold text-center leading-tight">
            Hire Me
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default HireMe;
