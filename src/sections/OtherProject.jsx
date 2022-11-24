import React, { useState, useRef, useEffect } from "react";
import { FaFolder, FaGithub } from "react-icons/fa";
import { otherProject } from "../data/OtherProject";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { srConfig } from "../config";
import sr from "../utils/sr";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function OtherProject() {
  const styles = {
    otherProjectSection: `py-20`,
    otherProjectTitleWrapper: `flex items-center w-full justify-center items-center mb-12`,
    otherProjectTitle: `text-5xl pb-3 font-bold bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300`,
    cardProjectWrapper: `gap-5 relative grid sm:grid-cols-2 sm:gap-3
    xl:grid-cols-3  xl:gap-3`,
    cardProject: `bg-white group w-full p-5 link hover:bg-zinc-100 dark:bg-dark-800 dark:border-dark-700 relative
    duration-300 ease-in-out cursor-pointer rounded-md`,
    cardHeader: `flex mb-8 justify-between`,
    cardIcon: `w-5 h-5`,
    cardBodyWrapper: `space-y-5 mb-10 `,
    cardTitle: `font-bold text-2xl lg:text-xl group-hover:text-violet-500`,
    cardDesc: `leading-normal tracking-wide`,
    cardFooterWrapper: `flex items-center flex-row gap-1 text-xs font-mono md:text-sm`,
  };

  const [showMore, setShowMore] = useState(false);
  const GRID_LIMIT = 3;
  const firstThree = otherProject.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? otherProject : firstThree;

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const list = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        when: "afterChildren",
      },
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delay: i * 0.15,
        ease: "circIn",
      },
    }),
  };

  return (
    <>
      <section ref={revealContainer} id="other-project" className={styles.otherProjectSection}>
        <div className={styles.otherProjectTitleWrapper}>
          <h1 className={styles.otherProjectTitle}>Other Projects</h1>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          className={styles.cardProjectWrapper}
        >
          {projectsToShow.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="External Link"
              custom={i}
              variants={list}
              key={project.id}
              className={styles.cardProject}
            >
              <header className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaFolder />
                </div>

                <div className={styles.cardIcon}>
                  <FaGithub />
                </div>
              </header>
              <div className={styles.cardBodyWrapper}>
                <h1 className={styles.cardTitle}>{project.title}</h1>
                <p className={styles.cardDesc}>{project.desc}</p>
              </div>
              <footer>
                <ul className={styles.cardFooterWrapper}>
                  {project.tech.map((item, i) => (
                    <li
                      className="py-1 px-3.5  w-max text-center rounded-full bg-gray-200 dark:bg-dark-500"
                      key={i}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </footer>
            </motion.a>
          ))}
        </motion.div>
        <div className="flex justify-center items-center mt-10">
          <Button
            size="md"
            bgColor="violet-500"
            textColor="white"
            hoverBgColor="violet-700"
            hoverTextColor="white"
            clickEvent={() => setShowMore(!showMore)}
          >
            Show {showMore ? "Less" : "More"}
          </Button>
        </div>
      </section>
    </>
  );
}
