import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { personalInfo } from "../constants";

const ServiceDetailCard = ({ title, category, description, features, techStack, bgGradient }) => {
  // Map bgGradient to custom hover glow shadows
  let hoverShadow = "hover:shadow-[0_20px_50px_rgba(145,94,255,0.15)]"; // fallback
  if (bgGradient === "green-pink-gradient") {
    hoverShadow = "hover:shadow-[0_20px_50px_rgba(0,206,168,0.25)]";
  } else if (bgGradient === "violet-gradient") {
    hoverShadow = "hover:shadow-[0_20px_50px_rgba(128,77,238,0.25)]";
  } else if (bgGradient === "black-gradient") {
    hoverShadow = "hover:shadow-[0_20px_50px_rgba(255,255,255,0.06)]";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full ${bgGradient} p-[1px] rounded-[24px] shadow-2xl transition-all duration-300 hover:-translate-y-2 ${hoverShadow}`}
    >
      <div className="bg-tertiary rounded-[24px] p-8 min-h-[480px] flex flex-col justify-between">
      <div>
        <span className="text-[12px] uppercase tracking-widest text-[#aaa6c3] font-semibold">
          {category}
        </span>
        <h3 className="text-white text-[28px] font-bold mt-2 mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-secondary text-[16px] leading-[26px] mb-6">
          {description}
        </p>
        
        <h4 className="text-white text-[16px] font-semibold mb-3">Key Offerings:</h4>
        <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#dfd9ff] mb-6">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <hr className="border-t border-white/10 my-4" />
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[12px] font-semibold bg-primary/40 px-3 py-1 rounded-full text-white/90 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
  );
};

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services | Binod Subedi — Software Development & Digital Marketing";
    window.scrollTo(0, 0);
  }, []);

  const serviceOffers = [
    {
      title: "Custom Software & SaaS Development",
      category: "Software Engineering",
      description: "Building production-grade, secure software systems customized to solve complex business operations. Expert in transactional ledgers, inventory systems, and multi-tenant SaaS architectures.",
      features: [
        "Full-fledged Inventory & Warehouse Management Systems (WMS).",
        "Multi-tenant SaaS application structures with database separation.",
        "Custom desktop/web automation bots and scrapers.",
        "Role-based security systems (JWT, OAuth 2.0, Spring Security).",
        "Clean, maintainable APIs with robust Spring Data JPA backends."
      ],
      techStack: ["Java", "Spring Boot", "React.js", "MySQL", "JWT", "JPA", "Microservices"],
      bgGradient: "green-pink-gradient"
    },
    {
      title: "Responsive Web Development & CMS",
      category: "Frontend Development",
      description: "Designing and developing stunning, responsive, and modern websites tailored for businesses and personal brands. High-performance layouts built for clarity and impact.",
      features: [
        "Interactive personal portfolio websites to showcase projects and CVs.",
        "Corporate and small business informational websites.",
        "Fully hosted Web Apps and custom landing pages.",
        "Content Management Systems (CMS like WordPress) setup and customization.",
        "Modern CSS/HTML architectures using Tailwind CSS and React."
      ],
      techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "CMS", "Vite"],
      bgGradient: "violet-gradient"
    },
    {
      title: "End-to-End Web Dev, Deployment & Hosting",
      category: "Cloud & DevOps",
      description: "Managing the full product lifecycle from absolute blank canvas to highly optimized deployment and container orchestration on secure cloud networks.",
      features: [
        "AWS EC2 instance provisioning and configuration.",
        "Nginx reverse-proxying with secure SSL (HTTPS) certifications.",
        "Containerization with Docker, Docker Compose, and basic Kubernetes (K8s) setups.",
        "Automated CI/CD pipelines configured through GitHub Actions.",
        "Automated database and file source backups with Cron scheduling.",
        "Private virtual networks (Tailscale VPN) for secure remote systems."
      ],
      techStack: ["AWS EC2", "Nginx", "Docker", "K8s (Basic)", "GitHub Actions", "Ubuntu"],
      bgGradient: "black-gradient"
    },
    {
      title: "Website Performance & SEO Optimization",
      category: "SEO & Performance",
      description: "Optimizing codebases and system architectures to load instantly, achieve peak Google PageSpeed metrics, and rank high on search engines.",
      features: [
        "Core Web Vitals and Google PageSpeed audits and fixes.",
        "On-page SEO optimization: Meta tags, semantic HTML, and accessibility.",
        "Structured data schema integration (JSON-LD) for rich search snippets.",
        "Asset minification, lazy loading implementation, and image compression.",
        "Responsive cross-browser responsiveness tuning."
      ],
      techStack: ["Google PageSpeed", "SEO Audits", "Schema markup", "Asset Optimization", "LazyLoad"],
      bgGradient: "green-pink-gradient"
    },
    {
      title: "Digital Marketing & Ads Management",
      category: "Growth & Traffic",
      description: "Driving hyper-targeted leads and sales using structured paid ads. Setting up conversion funnels and optimizing acquisition costs.",
      features: [
        "B2B professional lead generation using LinkedIn Ads.",
        "High-intent Search Engine Marketing (SEM) on Google Ads.",
        "Social branding and lead ads on Meta (Facebook & Instagram).",
        "Full conversions tracking pixel integration and optimization.",
        "A/B campaign analytics testing and budget allocation."
      ],
      techStack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Conversion Pixels", "A/B Testing"],
      bgGradient: "violet-gradient"
    },
    {
      title: "Social Media Management & Branding",
      category: "Branding & Socials",
      description: "Managing organic social media presence alongside professional graphic and vector asset designs to cultivate an authoritative digital brand.",
      features: [
        "Creative content calendars and engagement strategy (Facebook/Instagram/LinkedIn).",
        "Brand identity designs: Calendars, diaries, packaging layouts, and company ID cards.",
        "High-resolution vector assets: Banners, flyers, and flex designs.",
        "Professional templates and layout creation using Illustrator and Photoshop."
      ],
      techStack: ["Adobe Illustrator", "Photoshop", "Canva", "Organic Socials", "Branding Design"],
      bgGradient: "green-pink-gradient"
    }
  ];

  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 bg-primary z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className={`${styles.sectionSubText} !text-center`}>
            All-In-One Tech & Marketing Engine
          </p>
          <h2 className={`${styles.sectionHeadText} !text-center mt-2`}>
            Services Offered.
          </h2>
          <p className="text-secondary text-[17px] mt-4 leading-[28px]">
            I bridge the gap between engineering and growth. Whether you need to build custom software, deploy it securely in the cloud, or launch high-converting ad campaigns to sell it, I have you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {serviceOffers.map((service, index) => (
            <ServiceDetailCard key={index} {...service} />
          ))}
        </div>

        {/* Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 p-8 rounded-3xl bg-tertiary border border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl"
        >
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-white text-[24px] font-bold mb-2">
              Ready to execute your next project?
            </h3>
            <p className="text-secondary text-[15px]">
              Let's build reliable software systems, scale your hosting, or boost traffic with optimized campaigns.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 rounded-xl bg-electric-purple text-white font-bold hover:opacity-90 transition shadow-lg shadow-purple-500/20"
            >
              Email Me
            </a>
            <a
              href="https://wa.me/+9779709270186"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:opacity-90 transition shadow-lg shadow-green-500/20"
            >
              WhatsApp Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPage;
