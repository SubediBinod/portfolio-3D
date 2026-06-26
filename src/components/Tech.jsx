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
      {
        id: "spring-security",
        label: "Spring Security",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-green-500" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.66 0 3 1.34 3 3 0 1.09-.58 2.04-1.45 2.58l.95 2.42H9.5l.95-2.42C9.58 12.04 9 11.09 9 10c0-1.66 1.34-3 3-3z"/>
          </svg>
        )
      },
      {
        id: "jwt",
        label: "JWT",
        svg: (
          <svg viewBox="0 0 100 100" className="w-10 h-10">
            <circle cx="50" cy="50" r="45" fill="#fb0056" fillOpacity="0.15" stroke="#fb0056" strokeWidth="5" />
            <text x="50" y="58" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="black" fontFamily="sans-serif">JWT</text>
          </svg>
        )
      },
      {
        id: "oauth",
        label: "OAuth 2.0",
        svg: (
          <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round">
            <circle cx="50" cy="22" r="10" fill="#3b82f6" />
            <circle cx="22" cy="68" r="10" fill="#3b82f6" />
            <circle cx="78" cy="68" r="10" fill="#3b82f6" />
            <line x1="50" y1="32" x2="27" y2="60" />
            <line x1="50" y1="32" x2="73" y2="60" />
            <line x1="32" y1="68" x2="68" y2="68" />
          </svg>
        )
      },
      {
        id: "spring-jpa",
        label: "Spring JPA",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
            <path d="M12 8l3 3-3 3" />
          </svg>
        )
      },
      {
        id: "slf4j",
        label: "SLF4J & Logging",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 9h8M8 12h8M8 16h5" />
          </svg>
        )
      },
      {
        id: "microservices",
        label: "Microservices",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            <path d="M9 13h6M9 16h6" />
          </svg>
        )
      }
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
      { id: "aws", src: aws, label: "AWS EC2" },
      {
        id: "github-actions",
        label: "GitHub Actions",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#2088ff]" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        )
      },
      {
        id: "kubernetes",
        label: "Kubernetes (K8s)",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#326ce5]" fill="currentColor">
            <path d="M12.002 0a2.4 2.4 0 00-1.44.48L2.042 6.84a2.4 2.4 0 00-.96 1.92v10.48a2.4 2.4 0 00.96 1.92l8.52 6.36c.432.324.96.48 1.44.48s1.008-.156 1.44-.48l8.52-6.36c.588-.44.96-1.144.96-1.92V8.76a2.4 2.4 0 00-.96-1.92l-8.52-6.36A2.4 2.4 0 0012.002 0zm0 3.36l6.636 4.962v7.356l-6.636 4.962-6.636-4.962-6.636-4.962V8.322L12.002 3.36zm0 2.2a1.86 1.86 0 10.001 3.72 1.86 1.86 0 00-.001-3.72zm-3.66 4.9a1.86 1.86 0 100 3.72 1.86 1.86 0 000-3.72zm7.32 0a1.86 1.86 0 100 3.72 1.86 1.86 0 000-3.72z" />
          </svg>
        )
      },
      {
        id: "nginx",
        label: "Nginx",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#009639]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2.25l2.75 4.5V8h2v8h-2.25L11 11.5V16z" />
          </svg>
        )
      },
      {
        id: "ubuntu",
        label: "Ubuntu",
        svg: (
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#dd4814]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
        )
      }
    ],
  },
];

const Item = ({ item }) => (
  <motion.button
    whileHover={{ scale: 1.08, y: -6 }}
    transition={{ type: "spring", stiffness: 300, damping: 14 }}
    className="flex flex-col items-center gap-2 bg-tertiary/30 hover:bg-tertiary/60 p-3 rounded-lg shadow-sm w-full"
    aria-label={item.label}
    type="button"
  >
    <div className="w-12 h-12 flex items-center justify-center">
      {item.src ? (
        <img src={item.src} alt={item.label} className="max-w-full max-h-full object-contain" />
      ) : (
        item.svg
      )}
    </div>
    <div className="text-xs text-white/80 text-center font-medium leading-tight">{item.label}</div>
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