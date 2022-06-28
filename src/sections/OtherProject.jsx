import React, { useState } from "react";
import { FaFolder, FaGithub } from "react-icons/fa";
import { otherProject } from "../data/OtherProject";
import { motion } from "framer-motion";
import Button from "../components/Button";
import LinkTag from "../components/LinkTag";

const OtherProject = () => {
  const styles = {
    otherProjectSection: `pt-10 pb-28`,
    otherProjectTitleWrapper: `flex justify-center items-center mb-12`,
    otherProjectTitle: `text-4xl font-bold text-slate-800 dark:text-slate-200`,
    cardProjectWrapper: `text-slate-800 gap-5 dark:text-slate-200 relative grid md:grid-cols-2 md:gap-2
    xl:grid-cols-3 relative xl:gap-3`,
    cardProject: `bg-white group w-full link hover:bg-violet-100 dark:bg-dark-800 dark:border-dark-700 relative
    duration-300 ease-in-out cursor-pointer shadow-md border rounded-md p-5`,
    cardHeader: `flex justify-between mb-5`,
    cardIcon: `w-5 h-5`,
    cardBodyWrapper: `space-y-5 mb-10`,
    cardTitle: `font-bold text-2xl lg:text-xl group-hover:text-violet-500`,
    cardDesc: `leading-normal tracking-wide`,
    cardFooterWrapper: `flex flex-wrap items-end space-x-2  md:space-x-3 text-xs font-mono md:text-sm grow`,
  };

  const [showMore, setShowMore] = useState(false);
  const GRID_LIMIT = 3;
  const firstThree = otherProject.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? otherProject : firstThree;

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
      <section id="other-project" className={styles.otherProjectSection}>
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
            <motion.div custom={i} variants={list} key={project.id} className={styles.cardProject}>
              <header className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaFolder />
                </div>
                <LinkTag url={project.link}>
                  <div className={styles.cardIcon}>
                    <FaGithub />
                  </div>
                </LinkTag>
              </header>
              <div className={styles.cardBodyWrapper}>
                <h1 className={styles.cardTitle}>{project.title}</h1>
                <p className={styles.cardDesc}>{project.desc}</p>
              </div>
              <footer>
                <ul className={styles.cardFooterWrapper}>
                  {project.tech.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </footer>
            </motion.div>
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
};

export default OtherProject;
