import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  imagePosition = "center",
  imageFit = "cover",
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        {image ? (
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-${imageFit} object-${imagePosition} rounded-2xl`}
          />
        ) : (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
            <p className="text-secondary text-[13px] text-center px-4 leading-relaxed">{name}</p>
          </div>
        )}
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={tag.name}
            className={`text-[14px] ${tag.color} font-medium`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <section id="work" className={`${styles.padding} relative`}>
      <span className="hash-span">&nbsp;</span>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.2)}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Works;
