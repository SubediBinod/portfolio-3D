import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Collaborate = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      className="fixed right-4 bottom-4 flex justify-center items-center z-[50] rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(145,94,255,0.55)]"
    >
      <div className="sm:w-24 sm:h-24 w-16 h-16 relative">
        {/* Animated outer spinning border matching theme colors */}
        <div className="border-t-4 border-[#915eff] border-solid rounded-full animate-spin absolute inset-0"></div>
        <Link
          to="/services"
          className="flex justify-center items-center absolute sm:left-4 sm:top-4 left-2 top-2 green-pink-gradient sm:w-16 sm:h-16 w-12 h-12 rounded-full text-center shadow-lg cursor-pointer"
        >
          <span className="text-white sm:text-[11px] text-[8px] font-extrabold uppercase tracking-tight leading-tight">
            Collab
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Collaborate;
