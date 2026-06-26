import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-all duration-300 hover:-translate-y-2"
    >
      <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center">
        <img
          src={icon}
          alt="web-developemnt"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const aboutText =
    personalInfo.about ?? personalInfo.shortBio ?? "Hello — I'm a developer.";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* container that holds the overview text and the profile picture on the right */}
      <div className="section-container mt-6">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {aboutText} I enjoy designing backend systems with clean
          architecture, writing reliable APIs with Spring Boot, and integrating
          services using MySQL, Docker and Linux-based tooling. I'm keen on
          collaborative engineering, test-driven development and continuous
          learning.
        </motion.p>

        <div className="section__pic-container" aria-hidden={false}>
          <img
            src={personalInfo.profileImage}
            alt={`${personalInfo.name} profile`}
            className="about-pic"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);