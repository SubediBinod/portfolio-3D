import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences, education } from "../constants";

const TimelineCard = ({ item }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    icon={
      item.company_website ? (
        <a href={item.company_website} target="_blank" rel="noreferrer" className="flex justify-center items-center w-full h-full">
          <img src={item.icon} alt={item.company_name} className="w-[60%] h-[60%] object-contain" />
        </a>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <img src={item.icon} alt={item.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      )
    }
    iconStyle={{ background: item.iconBg }}
    date={item.date}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{item.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {item.company_name}
      </p>
    </div>

    <ul className="mt-5 ml-5 list-disc space-y-2">
      {item.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Professional Journey</p>
      <h2 className={styles.sectionHeadText}>Experience</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <TimelineCard key={`experience-${index}`} item={experience} />
        ))}
      </VerticalTimeline>
    </div>

    <motion.div variants={textVariant()} className="mt-20">
      <p className={styles.sectionSubText}>Academic Journey</p>
      <h2 className={styles.sectionHeadText}>Education</h2>
    </motion.div>

    <div className="mt-10 flex flex-col">
      <VerticalTimeline>
        {education.map((edu, index) => (
          <TimelineCard key={`education-${index}`} item={edu} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience,"");
