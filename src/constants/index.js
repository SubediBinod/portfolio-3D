import {
  farmer,
  store,
  design,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  frontend,
  figma,
  linux,
  canva,
  docker,
  spring,
  rabbitmq,
  C,    
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  insta,
  chatbot,
  quote,
  translate,
  weather,
  mini,
  summarizer,
  demo,
  binod,
  facebook,
  instaico,
  whatsapp,
  potato
} from "../assets";
import tilottamac from "../assets/company/tilottamac.ico";
import tilottama from "../assets/company/tilottama.ico";
import database  from "../assets/database.png"

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
  blogs: "blogs", 

};

export const navLinks = [
  { id: navigationPaths.about, title: "About" },
  { id: navigationPaths.work, title: "Work" },
  { id: navigationPaths.contact, title: "Contact" },
  { id: navigationPaths.blogs, title: "Blog" }, // added

];

const services = [
  { title: "Java Backend Developer (Spring Boot, Microservices, Cloud)", icon: backend },
  { title: "React Frontend Developer", icon: frontend },
  { title: "Database Designer (MySQL, PostgreSQL, MongoDB)", icon: database },
  { title: "UI/UX & Graphic Designer (Figma, Canva, Adobe Illustrator)", icon: design },
];


const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "C", icon: C },
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: spring },
  { name: "Linux", icon: linux },
  { name: "Figma", icon: figma },
  { name: "canva", icon: canva },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Docker", icon: docker },
  { name: "RabbitMQ", icon: rabbitmq },
  { name: "Git", icon: git },
  { name: "Github", icon: github },



];

const experiences = [
  {
    title: "IT & System Engineer",
    company_name: "First Choice Foods Limited",
    company_website: "https://fcffoods.com/",
    icon: "/fcf.ico",
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Manage day-to-day IT infrastructure and technical operations across all departments in user office environment.",
      "Handle hardware and software troubleshooting both remotely and physically, resolving operational glitches quickly.",
      "Manage on-premises network operations using MikroTik, coordinate with ISPs, and support PCs, laptops, printers, and scanners.",
      "Set up an internal Ubuntu LTS server on a repurposed Dell PC, enable secure private remote access through Tailscale VPN, and maintain server health.",
      "Build and host internal applications (potato inventory, storekeeping inventory, chamber inventory) using React, Spring Boot, JPA, MySQL, and JWT, improving reporting speed and reducing manual paperwork.",
      "Deploy application updates manually, perform routine server maintenance, and automate scheduled source backups to GitHub via cron.",
      "Provide remote support using AnyDesk, Tailscale, and SSH for administration and issue resolution.",
      "Manage social media operations (Facebook, Instagram, TikTok), including content posting, creative planning, and engagement support.",
      "Lead creative design work for business and branding assets such as ID cards, calendars, diaries, banners, flex prints, social media posts, and packaging materials using Illustrator and Photoshop.",
      "Train and guide staff on the use of internally developed software and digital workflows."
    ],
  },
];

const education = [
  {
    title: "B.Tech-Computer Science and Engineering",
    company_name: "Guru Nanak Institute Of Technology-Hyderabad,Telangana(India)",
    company_website: "https://www.gnithyd.ac.in/",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - May 2025",
    points: [
      "Specialized in Computer Science with a focus on Software and Web Development.",
      "Developed strong technical skills in programming, web development, and software engineering.",
      "Actively participated in coding competitions and tech events.",
    ],
  },
  {
    title: "Intermediate (+2)-PCM",
    company_name: " Tilottama Campus - Yogikuti ,Nepal",
    company_website: "https://tilottama.edu.np/",
    icon: tilottamac,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Nov 2021",
    points: [
  "Completed Intermediate (+2) with focus on Science and Computer Science, including Mathematics, English, Physics, and Chemistry.",
  "Built a strong foundational understanding of computing concepts, basic programming, and the universe of science."
],
  },
  {
    title: "Schooling-Computer",
    company_name: "Tilottama English Secondary School- Pharsatikar, Nepal",
    icon: tilottama,
    iconBg: "#E6DEDD",
    date: "Jan 2006 - Dec 2019",
    points: [
  "Completed schooling with a focus on Science and Computer Science.",
  "Studied core subjects including Computer Science, Mathematics, English, and Physical Science.",
  "Built a strong academic foundation and developed problem-solving and logical thinking skills.",
],

  },
];

const projects = [
  {
    name: "Finished Goods Warehouse Management System",
    description:
      "A production-grade warehouse inventory and pallet tracking platform developed for First Choice Foods Limited to manage finished goods storage, chamber occupancy, pallet transfers, dispatch workflows, audit logs, and PDF reporting across multiple cold storage chambers.",
    tags: [
      { name: "React", color: "green-text-gradient" },
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "JPA", color: "pink-text-gradient" },
      { name: "JWT", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Recharts", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
    ],
    image: store,
    hosted_link:
      "https://github.com/SubediBinod/FCF-Finished-Goods-Warehouse-Management-System",
  },

  {
    name: "Potato Inventory Management System",
    description:
      "An enterprise agricultural inventory system developed for First Choice Foods Limited to manage seasonal potato procurement, lot tracking, grading, dispatch operations, stock analytics, returns handling, and audit-based reporting workflows.",
    tags: [
      { name: "React", color: "green-text-gradient" },
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "REST API", color: "orange-text-gradient" },
      { name: "JWT", color: "pink-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image: potato,
    hosted_link:
      "https://github.com/SubediBinod/FCF-Potato-Inventory-Management-System",
  },

  {
    name: "Farmer Ledger Management System",
    description:
      "A farmer procurement and financial ledger platform built for First Choice Foods Limited to manage farmer registration, cultivation tracking, seed distribution, potato procurement records, payment settlements, and balance calculations.",
    tags: [
      { name: "React", color: "green-text-gradient" },
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "JPA", color: "pink-text-gradient" },
      { name: "JWT", color: "orange-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
    image: farmer,
    hosted_link:
      "https://github.com/SubediBinod/FCF-Farmer-Ledger-Management-System",
  },

  {
    name: "Intelligent Multimedia Summarizer",
    description:
      "An AI-powered learning platform that summarizes multimedia content and provides personalized learning recommendations using NLP and machine learning techniques for smarter educational assistance.",
    tags: [
      { name: "React", color: "green-text-gradient" },
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "NLP", color: "orange-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    image: summarizer,
    hosted_link:
      "https://github.com/SubediBinod/intelligent-multimedia-summarizer",
  },

  {
    name: "Smart Exam Duty Allocation System",
    description:
      "A scheduling and allocation platform designed to automate faculty invigilation assignments based on availability and allocation constraints, improving fairness and operational efficiency during examinations.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Servlets", color: "green-text-gradient" },
      { name: "JSP", color: "pink-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
    ],
    image: mini,
    hosted_link:
      "https://github.com/SubediBinod/Exam-Duty-Allocation-System",
  },

  {
    name: "InfoBuddy Chatbot",
    description:
      "An AI-integrated chatbot application powered by Spring Boot and Gemini AI API, enabling intelligent real-time conversations through a responsive web interface.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Gemini AI", color: "green-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
    ],
    image: chatbot,
    hosted_link:
      "https://github.com/SubediBinod/SpringBoot--chatbot",
  },

  {
    name: "Language Translator",
    description:
      "A multilingual translation web application with text-to-speech, copy, and language swap functionality using translation APIs and a responsive modern interface.",
    tags: [
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "API Integration", color: "pink-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: translate,
    hosted_link:
      "https://github.com/SubediBinod/Language-Translator",
    live_demo:
      "https://subedibinod.github.io/Language-Translator/",
  },
];
const certificates = [
  { id: "certificate-1", title: "Department Second Topper", src: cert1 },
  { id: "certificate-2", title: "Java Full Stack", src: cert2 },
  { id: "certificate-3", title: "Published a Paper", src: cert3 },
  { id: "certificate-4", title: "HR Conclave 2024", src: cert4 },
  { id: "certificate-5", title: "Ziroh Labs", src: cert5 },
  { id: "certificate-6", title: "Data Science Using Python", src: cert6 },
];

const personalInfo = {
  name: "Binod Subedi",
  fullName: "Binod Subedi",
  email: "bidhaksubedi77@gmail.com",
  profileImage: binod,
  role: "Java Backend & Full Stack Developer",
  about: `I'm a skilled software developer with experience in Java and
  JavaScript, with expertise in frameworks like React.js, Spring Boot etc. 
  I collaborate closely with clients to create efficient, scalable, and user-friendly solutions.`,
  projectsIntro: `Following projects showcase my skills and experience through real-world examples.
Each project is briefly described with live demos and reflects my ability to work with
different technologies and manage projects effectively.`,
};

const publicUrls = {
  resume: "/Binod-Subedi-cv.pdf", // downloadable link
  socialProfiles: {
    linkedin: { title: "linkedin", link: "https://www.linkedin.com/in/binod-subedi-3238a7234/", icon: linkedIn },
    github: { title: "github", link: "https://github.com/SubediBinod", icon: github },
    instagram: { title: "instagram", link: "https://www.instagram.com/_binod08?igsh=Ymp1eGV5YzRscXM1", icon: instaico },
    facebook: { title: "facebook", link: "https://www.facebook.com/share/17JZX1AtHw/", icon:  facebook},
    whatsapp: { title: "whatsapp", link: "https://wa.me/+9779709270186", icon: whatsapp },
  
  },
};
export const blogPosts = [
  {
    slug: "spring-boot-properties-cheatsheet-index",
    title: "Spring Boot Properties Cheatsheet",
    date: "2025-10-01",
    summary: "Quick reference for common Spring Boot properties.",
    url: "https://subedibinod.github.io/spring-boot-properties-cheatsheet/index.html",
    image: "/spring.png" // optional: small tile image placed in public/
  },
  {
    slug: "docker-guide",
    title: "Docker — Quick Commands & Examples",
    date: "2025-11-01",
    summary: "Docker commands and examples for building & running containers.",
    url: "https://subedibinod.github.io/spring-boot-properties-cheatsheet/docker.html",
    image: "/docker.png"
  }
];


export {
  services,
  technologies,
  experiences,
  education,
  projects,
  certificates,
  navigationPaths,
  personalInfo,
  publicUrls,
};
