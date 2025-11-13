import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { blogPosts } from "../constants";
import { Tilt } from "react-tilt";

const BlogCard = ({ index, post }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 400 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden"
          title={post.title}
        >
          <div className="relative w-full h-[180px]">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full bg-gray-800/40 flex items-center justify-center text-gray-400 rounded-2xl">
                No image
              </div>
            )}

            <div className="absolute top-3 right-3 flex gap-2">
              <div className="black-gradient w-9 h-9 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 3h7v7M10 14L21 3M21 3L10 14M3 21h18" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[20px]">{post.title}</h3>
            <p className="mt-2 text-secondary text-[14px] max-w-[330px]">{post.summary}</p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <small className="text-[12px] text-secondary">{post.date}</small>
            {post.readTime && <small className="text-[12px] text-secondary">{post.readTime}</small>}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-[12px] text-gray-300 bg-tertiary/40 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          )}
        </a>
      </Tilt>
    </motion.div>
  );
};

const Blog = () => {
    const location = useLocation();

   useEffect(() => {
    if (location.pathname === "/blogs") {
      document.title = "Blog — Binod Subedi";
    }
  }, [location]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My writings</p>
        <h2 className={styles.sectionHeadText}>Blog.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Technical posts — Spring Boot, Docker, RabbitMQ and practical how-tos. (Posts open on external blog)
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7 justify-center">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.slug} index={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blogs");
