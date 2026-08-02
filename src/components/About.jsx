import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section id="about" className={`${styles.padding} relative`}>
      <span className="hash-span">&nbsp;</span>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer()}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={textVariant(0.2)} className="mb-10">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me</h2>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p className="mb-4">
            My name is <span className="text-white font-medium">Uchechi Okoronkwo</span>,
            a Software Engineering student in the Co-op program at the University
            of New Brunswick (Fredericton, NB). I'm on the Dean's List with a
            3.8 CGPA.
          </p>
          <p className="mb-4">
            Currently working as a Cybersecurity Software Developer at the Canadian
            Institute for Cybersecurity. I've led frontend and UI/UX work on Agile
            teams (e.g. UTrack), built full-stack apps with React and Node.js, and
            shipped ML-powered projects like CineMatch. I'm comfortable with
            JavaScript, Python, Java, and Go, and I enjoy testing (Cypress, Jest,
            Selenium) and DevOps basics (Docker, CI/CD).
          </p>
          <p>
            When I'm not coding, I'm into video games, basketball, table tennis,
            and exploring AI tools.
          </p>
        </motion.div>
        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

function staggerContainer(staggerChildren = 0.1, delayChildren = 0.1) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}

export default About;
