import { motion } from "framer-motion";
import { FadeInUp } from "../components/variants/FadeInUp";

const Hero = () => {
  const styles = {
    hero: `h-screen flex flex-col justify-center items-start dark:text-white`,
    heroContent: `flex space-y-5 flex-col justify-center text-slate-800 dark:text-slate-200`,
    heroHeading: `text-xl text-violet-500`,
    heroSubHeading1: `text-4xl tracking-wide md:text-8xl font-black`,
    heroSubHeading2: `text-5xl md:text-7xl font-black`,
    heroText: `md:text-md md:w-4/6 leading-7`,
  };
  return (
    <>
      <section id="hero" className={styles.hero}>
        <motion.div
          variants={FadeInUp}
          initial="initial"
          animate="animate"
          className={styles.heroContent}
        >
          <motion.h1 variants={FadeInUp} className={styles.heroHeading}>
            Hi, my name is
          </motion.h1>
          <motion.h2 variants={FadeInUp} className={styles.heroSubHeading1}>
            Azhar Luthfi.
          </motion.h2>
          <motion.h3 variants={FadeInUp} className={styles.heroSubHeading2}>
            I build things for the web.
          </motion.h3>
          <motion.p variants={FadeInUp} className={styles.heroText}>
            Seseorang yang tertarik pada dunia IT. Saat ini sedang menekuni dunia pemograman web.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
