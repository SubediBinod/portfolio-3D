import {
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
  binod
} from "../assets";
import tilottamac from "../assets/company/tilottamac.ico";
import tilottama from "../assets/company/tilottama.ico";
import database  from "../assets/database.png"

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  { id: navigationPaths.about, title: "About" },
  { id: navigationPaths.work, title: "Work" },
  { id: navigationPaths.contact, title: "Contact" },
];

const services = [
  { title: "Java Backend Developer (Spring Boot, Microservices, Cloud)", icon: backend },
  { title: "React Frontend Developer", icon: frontend },
  { title: "Database Designer (MySQL, PostgreSQL, MongoDB)", icon: database },
  { title: "UI/UX & Graphic Designer (Figma, Canva)", icon: design },
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
    name: "Intelligent Multimedia Summarizer",
    description:
      "An AI-powered platform that automatically summarizes multimedia content and provides personalized learning recommendations, integrating NLP and machine learning models for smarter study assistance.",
    tags: [
      { name: "SpringBoot", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Java", color: "pink-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
    ],
    image: summarizer,
    hosted_link:
      "https://github.com/SubediBinod/intelligent-multimedia-summarizer",
  },
  // {
  //   name: "AI Powered Fitness App",
  //   description:
  //     "A full-stack Spring Boot and React-based fitness application that leverages AI to generate personalized workout and diet plans based on user preferences, lifestyle, and goals.",
  //   tags: [
  //     { name: "React", color: "green-text-gradient" },
  //     { name: "SpringBoot", color: "blue-text-gradient" },
  //     { name: "Java", color: "pink-text-gradient" },
  //     { name: "MySQL", color: "green-text-gradient" },
  //   ],
  //   image: demo,
  //   hosted_link: "https://github.com/SubediBinod/AI-Powered-Fitness-App",
  // },
  {
    name: "Smart Exam Duty Allocation System",
    description:
      "An intelligent system to automate invigilation duty assignments for faculty members based on availability and constraints, improving fairness and efficiency in exam scheduling.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
    ],
    image: mini,
    hosted_link:
      "https://github.com/SubediBinod/Exam-Duty-Allocation-System",
  },
  {
    name: "Weather App",
    description:
      "A responsive weather application that displays real-time weather information using the OpenWeatherMap API. Users can search by city or allow location access for instant updates.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
    ],
    image: weather,
    hosted_link: "https://github.com/SubediBinod/weather-app",
    live_demo: "https://subedibinod.github.io/weather-app/",
  },
  {
    name: "InfoBuddy Chatbot",
    description:
      "An interactive chatbot powered by Spring Boot and Gemini AI API. It allows real-time intelligent conversations through a simple HTML, CSS, and JavaScript frontend connected to a Spring backend.",
    tags: [
      { name: "SpringBoot", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "Gemini AI", color: "green-text-gradient" },
    ],
    image: chatbot,
    hosted_link: "https://github.com/SubediBinod/SpringBoot--chatbot",
  },
  {
    name: "Instagram Frontend Clone",
    description:
      "A clean and responsive frontend clone of Instagram built using HTML and CSS. It mimics the layout and design of the original app, great for practicing frontend fundamentals.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: insta,
    hosted_link: "https://github.com/SubediBinod/insta-clone",
    live_demo: "https://subedibinod.github.io/insta-clone/",
  },
  {
    name: "Language Translator",
    description:
      "A modern translation web app with text-to-speech, copy, and swap functionalities. It uses translation APIs to provide multilingual support with a responsive dark-themed UI.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
    ],
    image: translate,
    hosted_link: "https://github.com/SubediBinod/Language-Translator",
    live_demo: "https://subedibinod.github.io/Language-Translator/",
  },
  {
    name: "Random Quotes Generator",
    description:
      "A minimal JavaScript-based app that fetches random quotes from an API and displays them dynamically. Users can click to generate new quotes for inspiration or motivation.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
    ],
    image: quote,
    hosted_link: "https://github.com/SubediBinod/Random-Quotes-using-api",
    live_demo: "https://subedibinod.github.io/Random-Quotes-using-api/",
  },
//   {
//   name: "Facial Recognition Login System",
//   description:
//     "A React-based facial recognition login system allowing secure authentication using face detection instead of traditional credentials.",
//   tags: [
//     { name: "React", color: "green-text-gradient" },
//     { name: "Face-api.js", color: "pink-text-gradient" },
//     { name: "JavaScript", color: "orange-text-gradient" },
//     { name: "API Integration", color: "blue-text-gradient" },
//   ],
//   image: faceRecognition, // import your screenshot or placeholder from assets
//   hosted_link: "https://github.com/SubediBinod/Face-Recognition-React",
//   live_demo: "", // add live link here once hosted
// },

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
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  certificates,
  navigationPaths,
  personalInfo,
  publicUrls,
};
