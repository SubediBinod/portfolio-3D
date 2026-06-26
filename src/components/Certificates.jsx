import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { certificates } from "../constants";
import { textVariant } from "../utils/motion";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const Certificates = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Map page to certificates bounds
  const activeIndex = ((page % certificates.length) + certificates.length) % certificates.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (paused || isLightboxOpen) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page, paused, isLightboxOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [page, isLightboxOpen]);

  if (!certificates || certificates.length === 0) {
    return null;
  }

  const activeCert = certificates[activeIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Browse My</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      {/* Main slider container */}
      <div 
        className="mt-12 flex flex-col items-center justify-center relative w-full overflow-hidden min-h-[480px] md:min-h-[400px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative w-full max-w-4xl flex items-center justify-center px-4 md:px-12">
          {/* Previous Button */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous certificate"
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 bg-[#151030]/60 hover:bg-[#915eff] text-white p-3 rounded-full hover:scale-110 transition-all duration-200 border border-white/10 backdrop-blur-md shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next certificate"
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 bg-[#151030]/60 hover:bg-[#915eff] text-white p-3 rounded-full hover:scale-110 transition-all duration-200 border border-white/10 backdrop-blur-md shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide area */}
          <div className="relative w-full overflow-hidden flex justify-center items-center min-h-[420px] md:min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full bg-[#151030]/40 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 shadow-2xl backdrop-blur-sm"
              >
                {/* Left: Certificate Image frame with zoom action */}
                <div 
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative w-full md:w-[350px] h-[220px] rounded-2xl overflow-hidden bg-black-200 flex items-center justify-center p-2 border border-white/5 cursor-pointer group shadow-inner"
                >
                  <img
                    src={activeCert.src}
                    alt={activeCert.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Zoom glass overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] rounded-2xl">
                    <div className="bg-white/15 p-3 rounded-full border border-white/20">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right: Certificate Details */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
                  <h3 className="text-white font-bold text-[22px] md:text-[28px] leading-tight mb-3">
                    {activeCert.title}
                  </h3>

                  <p className="text-secondary text-[14px] md:text-[16px] leading-[24px] mb-6 max-w-md">
                    Successfully completed and achieved. Click on the certificate preview to view in full screen resolution.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="py-2.5 px-6 bg-tertiary text-white border border-white/10 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 font-semibold shadow-md flex items-center gap-2 group text-sm"
                  >
                    View Credential
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators (Pill shape) */}
        <div className="mt-6 flex items-center justify-center gap-2.5 z-20">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = i - activeIndex;
                if (diff !== 0) {
                  setPage([page + diff, diff > 0 ? 1 : -1]);
                }
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? "w-6 bg-[#915eff]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal overlay */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Main Content Area */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center z-[1000] bg-[#100d25]/90 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button inside the card */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors duration-200 z-[1002]"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="bg-black-200 p-2 rounded-xl flex items-center justify-center max-h-[60vh] w-full overflow-hidden">
                <img
                  src={activeCert.src}
                  alt={activeCert.title}
                  className="max-h-[58vh] max-w-full object-contain rounded-lg"
                />
              </div>

              <h3 className="text-white font-semibold text-lg md:text-xl mt-4 text-center px-4 leading-tight">
                {activeCert.title}
              </h3>
              
              <div className="mt-3 flex items-center gap-4 text-secondary text-sm">
                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  {activeIndex + 1} of {certificates.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");