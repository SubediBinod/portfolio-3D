import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { Link, useLocation } from "react-router-dom";
import { close, menu, github, linkedIn, insta ,instaico,facebook,whatsapp} from "../assets";
import logo from "../assets/binod.ico";
import {
  navLinks,
  navigationPaths,
  personalInfo,
  publicUrls,
} from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") {
        setShowHamburger(true);
        return;
      }
      const threshold = window.innerHeight - 120;
      setShowHamburger(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [location]);

  return (
    <nav
      className={`${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-30 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={navigationPaths.home}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            setToggle(false);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {personalInfo.name} &nbsp;
            <span className="lg:block hidden">| {personalInfo.role}</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer hover:text-white`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <li className={`text-secondary text-[18px] font-medium cursor-pointer hover:text-white`}>
            <a
              href={publicUrls.resume}
              download="Binod_Subedi.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* only render mobile hamburger when showHamburger is true */}
        {showHamburger && (
          <div className="sm:hidden flex flex-1 justify-end items-center relative">
            <button
              aria-label="Toggle menu"
              aria-expanded={toggle}
              onClick={() => setToggle((t) => !t)}
              className="bg-transparent p-0"
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
              />
            </button>

            {/* prettier mobile dropdown: fixed + backdrop blur + smooth scale */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } fixed top-16 right-4 z-[9999] w-[92vw] max-w-[320px] p-4 rounded-2xl
               bg-gradient-to-br from-black/60 to-gray-900/60 border border-white/10
               backdrop-blur-md shadow-2xl transform transition-all duration-200 ease-out`}
              role="menu"
            >
              <div className="w-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-8 h-8 rounded-md" />
                    <div>
                      <p className="text-white text-sm font-semibold leading-tight">
                        {personalInfo.name}
                      </p>
                      <p className="text-gray-300 text-[12px]">{personalInfo.role}</p>
                    </div>
                  </div>

                  <button
                    aria-label="Close menu"
                    onClick={() => setToggle(false)}
                    className="p-1 rounded-md hover:bg-white/5"
                  >
                    <img src={close} alt="close" className="w-5 h-5" />
                  </button>
                </div>

                <ul className="list-none flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={() => {
                          setActive(link.title);
                          setToggle(false);
                        }}
                        className="block px-3 py-2 rounded-md text-[16px] font-medium
                                   text-gray-100 hover:bg-white/5 hover:text-white transition-colors"
                        role="menuitem"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}

                  <li>
                    <a
                      href={publicUrls.resume}
                      download="Binod_Subedi.pdf"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setToggle(false)}
                      className="inline-block w-full text-center mt-2 px-3 py-2 rounded-md bg-electric-purple text-white font-semibold hover:opacity-95 transition"
                    >
                      Download Resume
                    </a>
                  </li>

                  {/* Social icons row (replace View GitHub) */}
                  <li className="mt-3 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      {publicUrls.socialProfiles.github && (
                        <a
                          href={publicUrls.socialProfiles.github.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setToggle(false)}
                          aria-label="GitHub"
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                        >
                          <img src={github} alt="GitHub" className="w-5 h-5" />
                        </a>
                      )}

                      {publicUrls.socialProfiles.linkedin && (
                        <a
                          href={publicUrls.socialProfiles.linkedin.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setToggle(false)}
                          aria-label="LinkedIn"
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                        >
                          <img src={linkedIn} alt="LinkedIn" className="w-5 h-5" />
                        </a>
                      )}

                      {/* optional instagram */}
                      {publicUrls.socialProfiles.instagram && (
                        <a
                          href={publicUrls.socialProfiles.instagram.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setToggle(false)}
                          aria-label="Instagram"
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                        >
                          <img src={instaico} alt="Instagram" className="w-5 h-5" />
                        </a>
                      )}

                      {/* optional facebook  */}
                      {publicUrls.socialProfiles.facebook && (
                        <a
                          href={publicUrls.socialProfiles.facebook.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setToggle(false)}
                          aria-label="Facebook"
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                        >
                          <img src={facebook} alt="Facebook" className="w-5 h-5" />
                        </a>
                      )}
                      {/* optional whatsapp */}
                      {publicUrls.socialProfiles.whatsapp && (
                        <a
                          href={publicUrls.socialProfiles.whatsapp.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setToggle(false)}
                          aria-label="WhatsApp"
                          className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
                        >
                          <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

  