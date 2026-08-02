import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold m-0">
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section id="experience" className={`${styles.padding} relative`}>
      <span className="hash-span">&nbsp;</span>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.2)}>
          <p className={styles.sectionSubText}>What I've done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience</h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="#915EFF">
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
