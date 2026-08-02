import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 1500);
    const hideTimer = setTimeout(() => setShowHint(false), 5500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Uchechi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Engineering student & full-stack developer <br className='sm:block hidden' />
            building web apps, dashboards & ML tools
          </p>
        </div>
      </div>

      <ComputersCanvas onFirstDrag={() => setShowHint(false)} />

      {/* Drag hint badge */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-36 left-8 sm:left-16 flex flex-row items-center gap-3 pointer-events-none z-10"
          >
            <div className="bg-black/60 backdrop-blur-sm border border-[#915EFF]/40 rounded-2xl px-4 py-2 flex items-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="text-[#915EFF] text-lg select-none inline-block"
              >
                ↻
              </motion.span>
              <p className="text-white text-[13px] font-medium whitespace-nowrap">
                Try dragging the PC!
              </p>
            </div>
            {/* Arrow pointing right toward the PC */}
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#915EFF] text-2xl select-none"
            >
              →
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
