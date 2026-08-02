import { motion } from "framer-motion";
import { styles } from "../styles";
import { awards } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const AwardCard = ({ index, title, organization, period, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-tertiary p-6 rounded-2xl border border-[#2a2a4a]"
  >
    <h3 className="text-white font-bold text-[20px]">{title}</h3>
    <p className="text-[#915EFF] font-semibold text-[14px] mt-1">
      {organization}
    </p>
    <p className="text-secondary text-[12px] mt-0.5">{period}</p>
    <p className="text-white-100 text-[14px] mt-2">{description}</p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <section className={`${styles.padding} relative`}>
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
          <p className={styles.sectionSubText}>Recognition</p>
          <h2 className={styles.sectionHeadText}>Awards & Scholarships</h2>
        </motion.div>
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <AwardCard key={award.title} index={index} {...award} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Feedbacks;
