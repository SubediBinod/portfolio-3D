import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import icons from your assets index — adjust names if different
import {
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  redux,
  java,
  spring,
  mongodb,
  mysql,
  docker,
  git,
  aws,
  // ...add other exports you have
} from "../assets";

const groupedTech = [
  {
    title: "Frontend",
    items: [
      { id: "html", src: html, label: "HTML" },
      { id: "css", src: css, label: "CSS" },
      { id: "js", src: javascript, label: "JavaScript" },
      { id: "react", src: reactjs, label: "React" },
      { id: "tailwind", src: tailwind, label: "Tailwind" },
      { id: "redux", src: redux, label: "Redux" },
    ],
  },
  {
    title: "Backend",
    items: [
      { id: "java", src: java, label: "Java" },
      { id: "spring", src: spring, label: "Spring Boot" },
      // add node/express if available
    ],
  },
  {
    title: "Database",
    items: [
      { id: "mongodb", src: mongodb, label: "MongoDB" },
      { id: "mysql", src: mysql, label: "MySQL" },
    ],
  },
  {
    title: "Tools / Cloud",
    items: [
      { id: "docker", src: docker, label: "Docker" },
      { id: "git", src: git, label: "Git" },
      { id: "aws", src: aws, label: "AWS" },
    ],
  },
];

const Item = ({ item }) => (
  <motion.button
    whileHover={{ scale: 1.08, y: -6 }}
    transition={{ type: "spring", stiffness: 300, damping: 14 }}
    className="flex flex-col items-center gap-2 bg-tertiary/30 hover:bg-tertiary/60 p-3 rounded-lg shadow-sm"
    aria-label={item.label}
    type="button"
  >
    <div className="w-12 h-12 flex items-center justify-center">
      <img src={item.src} alt={item.label} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="text-xs text-white/80">{item.label}</div>
  </motion.button>
);

const Tech = () => {
  return (
    <section id="tech" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>

        <p className="text-secondary text-sm mt-3 max-w-2xl">
          I build frontend and backend systems using these technologies.
        </p>

        <div className="mt-8 grid gap-8">
          {groupedTech.map((group) => (
            <div key={group.title} className="bg-transparent">
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4">
                {group.items.map((it) => (
                  <Item key={it.id} item={it} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;