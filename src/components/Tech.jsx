import { motion } from "framer-motion";
import { styles } from "../styles";
import { technologies } from "../constants";
import { textVariant, zoomIn } from "../utils/motion";

const Tech = () => {
  return (
    <section id="tech" className={`${styles.padding} relative -mt-20`}>
      <span className="hash-span">&nbsp;</span>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.2)}>
          <p className={styles.sectionSubText}>Technologies I work with</p>
          <h2 className={styles.sectionHeadText}>Tech Stack</h2>
        </motion.div>
        <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              variants={zoomIn(index * 0.05, 0.5)}
              className="w-28 h-28 flex flex-col items-center justify-center rounded-2xl bg-tertiary/50 p-4 hover:bg-tertiary/80 transition-colors"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
              <p className="text-center text-secondary text-sm mt-2">
                {technology.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Tech;
