import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { certificates } from "../constants";

const Certificates = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef(null);

  const next = () =>
    setIndex((i) => (i === certificates.length - 1 ? 0 : i + 1));
  const prev = () =>
    setIndex((i) => (i === 0 ? certificates.length - 1 : i - 1));
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (!paused) {
      autoplayRef.current = setInterval(() => {
        setIndex((i) => (i === certificates.length - 1 ? 0 : i + 1));
      }, 4500);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [paused]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setPaused(true);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!certificates || certificates.length === 0) {
    return (
      <section id="certificates" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
          <p className="text-secondary mt-4">No certificates available.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="certificates"
      className="py-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className={styles.sectionSubText}>Browse My</p>

        {/* Heading uses same font/size classes as Overview / Projects */}
        <h2 className={styles.sectionHeadText}>Certificates</h2>


        <hr className="my-6 border-t border-gray-700/20" />

        <div className="relative bg-transparent rounded-md overflow-hidden">
          {/* Slide area */}
          <div className="w-full h-[520px] md:h-[420px] flex items-center justify-center relative">
            {certificates.map((cert, i) => (
              <div
                key={cert.id ?? i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
                  i === index
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="details-container-certificate flex flex-col items-center text-center px-4">
                  <img
                    src={cert.src}
                    alt={cert.title ?? `Certificate ${i + 1}`}
                    className="max-h-[64vh] md:max-h-[48vh] object-contain rounded shadow-lg bg-white p-2"
                  />
                  <h2 className="mt-4 text-white text-xl md:text-2xl font-semibold">
                    {cert.title ?? cert.name}
                  </h2>
                  {cert.subtitle && (
                    <p className="text-secondary mt-1">{cert.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous certificate"
            className="prev absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-50 pointer-events-auto"
          >
            &#10094;
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next certificate"
            className="next absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-50 pointer-events-auto"
          >
            &#10095;
          </button>

          {/* Indicators */}
          <div className="indicatorbox mt-6 flex items-center justify-center gap-3 relative z-50">
            {certificates.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`indicator w-3 h-3 rounded-full transition-colors pointer-events-auto ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Certificates, "certificates");