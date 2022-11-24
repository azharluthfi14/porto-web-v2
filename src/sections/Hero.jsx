import { motion } from "framer-motion";
import { MdCloudDownload } from "react-icons/md";
import resume from "../documents/resume_muhammad_azhar_luthfi_frontend_developer.pdf";

export default function Hero() {
  const styles = {
    hero: `h-screen flex flex-col justify-center items-start`,
    heroContent: `flex space-y-4 sm:space-y-5 flex-col justify-center`,
    heroHeading: `text-xl`,
    heroHeadingSpan: `text-violet-500`,
    heroSubHeading1: `text-[45px] tracking-wide sm:text-7xl font-bold gradient-animate`,
    heroSubHeading2: `text-5xl sm:text-6xl font-bold dark:text-white`,
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
          <motion.div variants={fadeAnimation} className="inline-flex items-center">
            <h1 className={styles.heroHeading}>Hello</h1>
            <picture className="mx-2">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif"
                alt="👋"
                width="30"
                height="30"
              />
            </picture>
            <h1 className={styles.heroHeading}>, my name is</h1>
          </motion.div>

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
            className="flex justify-center items-center py-3.5 px-7 rounded-full 
            bg-violet-500 text-white group space-x-3 w-max hover:bg-violet-700"
            href={resume}
            variants={fadeAnimation}
            rel="noopener noreferrer"
          >
            <MdCloudDownload className="group-hover:animate-bounce ease-in-out" size={20} />
            <span>Download resume</span>
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
