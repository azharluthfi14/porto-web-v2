import { motion } from "framer-motion";
import { MdCloudDownload } from "react-icons/md";
import resume from "../file/resume_muhammad_azhar_luthfi.pdf";

export default function Hero() {
  const styles = {
    hero: `h-screen flex flex-col justify-center items-start dark:text-white`,
    heroContent: `flex space-y-4 sm:space-y-5 flex-col justify-center text-slate-800 dark:text-slate-200`,
    heroHeading: `text-xl text-slate-800 dark:text-slate-200`,
    heroHeadingSpan: `text-violet-500`,
    heroSubHeading1: `text-[45px] tracking-wide sm:text-7xl font-bold gradient-animate`,
    heroSubHeading2: `text-5xl sm:text-6xl font-bold`,
    heroText: `md:text-md md:w-4/6 leading-7`,
  };

  const fadeAnimation = {
    initial: {
      y: 80,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        type: "spring",
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  };

  return (
    <>
      <section id="hero" className={styles.hero}>
        <motion.div
          variants={fadeAnimation}
          initial="initial"
          animate="animate"
          className={styles.heroContent}
        >
          <motion.h1 variants={fadeAnimation} className={styles.heroHeading}>
            Hello, my<motion.span className={styles.heroHeadingSpan}> name is</motion.span>
          </motion.h1>
          <motion.h2 variants={fadeAnimation} className={styles.heroSubHeading1}>
            Azhar Luthfi.
          </motion.h2>
          <motion.h3 variants={fadeAnimation} className={styles.heroSubHeading2}>
            Love build things for the web.
          </motion.h3>
          <motion.p variants={fadeAnimation} className={styles.heroText}>
            Seseorang yang tertarik pada dunia IT. Saat ini sedang menekuni dunia pemograman web.
          </motion.p>
          <motion.a
            className="flex justify-center items-center py-3.5 px-7 rounded-md 
            bg-dark-700 text-white space-x-3 w-max hover:bg-violet-700"
            href={resume}
            variants={fadeAnimation}
            rel="noopener noreferrer"
          >
            <MdCloudDownload size={20} />
            <span>Download resume</span>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
