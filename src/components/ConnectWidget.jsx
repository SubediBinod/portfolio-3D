import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../constants";

const ConnectWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleWidget = () => setIsOpen((prev) => !prev);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6,
        delayChildren: 0.1,
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 30,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const menuItems = [
    {
      label: "Email Me",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      href: `mailto:${personalInfo.email}`,
      isExternal: true,
      color: "from-blue-600/90 to-blue-500/90 hover:shadow-blue-500/35",
    },
    {
      label: "WhatsApp Chat",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: "https://wa.me/+9779709270186",
      isExternal: true,
      color: "from-green-600/90 to-emerald-500/90 hover:shadow-green-500/35",
    },
    {
      label: "Services Offered",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .994-.806 1.8-1.8 1.8H5.55c-.994 0-1.8-.806-1.8-1.8v-4.25m16.5 0a2.7 2.7 0 0 0-2.7-2.7H6.75a2.7 2.7 0 0 0-2.7 2.7m16.5 0v-4.75A2.7 2.7 0 0 0 17.55 4H6.45A2.7 2.7 0 0 0 3.75 6.7v4.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v3.75m-3-1.875h6" />
        </svg>
      ),
      href: "/services",
      isExternal: false,
      color: "from-[#915eff]/90 to-[#b58eff]/90 hover:shadow-[#915eff]/35",
    },
  ];

  return (
    <div
      ref={widgetRef}
      className="fixed right-6 bottom-6 flex flex-col items-end gap-3 z-[9999]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Floating Action Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-end gap-3 mb-2"
          >
            {menuItems.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-full text-white text-sm font-semibold
                                bg-gradient-to-r ${item.color} shadow-lg transition-all duration-300
                                hover:-translate-x-1`}
                  >
                    <span>{item.label}</span>
                    <span className="p-1 bg-white/10 rounded-full">{item.icon}</span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-full text-white text-sm font-semibold
                                bg-gradient-to-r ${item.color} shadow-lg transition-all duration-300
                                hover:-translate-x-1`}
                  >
                    <span>{item.label}</span>
                    <span className="p-1 bg-white/10 rounded-full">{item.icon}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        onClick={toggleWidget}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#915eff] to-pink-600 flex justify-center items-center shadow-2xl relative border border-white/20 transition-all duration-300"
        aria-label="Contact options menu"
      >
        {/* Animated breathing outer glow ring */}
        <div className="absolute inset-0 rounded-full animate-ping bg-[#915eff]/30 opacity-75 pointer-events-none"></div>

        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white flex justify-center items-center"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ConnectWidget;
