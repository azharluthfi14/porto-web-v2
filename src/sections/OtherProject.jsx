import React, { useState } from "react";
import { FaFolder, FaGithub } from "react-icons/fa";
import { otherProject } from "../data/OtherProject";
import { motion } from "framer-motion";


const OtherProject = () => {

  const styles = {
    otherProjectSection: `pt-10 pb-28`,

    cardProject: `bg-white group  hover:bg-slate-100 dark:bg-dark-800 dark:border-dark-700 relative
    duration-300 ease-in-out cursor-pointer shadow-md border rounded-md p-5`,

  };

  const [showMore, setShowMore] = useState(false);
  const GRID_LIMIT = 3
  const firstSix = otherProject.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? otherProject : firstSix;

  const list = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        when: "afterChildren",
      },
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        delay: i * 0.15,
        ease: "circIn",
      },
    }),
  }

  return (
    <>
      <section id="other-project" className={styles.otherProjectSection}>
        <div className="flex justify-center items-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200">Other Projects</h1>
        </div>

        <motion.div initial="hidden"
          animate="visible"
          variants={list} className="text-slate-800  dark:text-slate-200 relative grid md:grid-cols-2 
          lg:grid-cols-3 gap-5">
          {projectsToShow.map((project, i) => (
            <motion.div
              custom={i}
              variants={list}
              key={project.id}
              className={styles.cardProject}
            >
              <header className="flex justify-between p-2 mb-3">
                <div className="w-5 h-5">
                  <FaFolder />
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                  <div className="w-5 h-5">
                    <FaGithub />
                  </div>
                </a>
              </header>
              <div className="space-y-5 mb-10 h-[200px]">
                <h1 className="font-bold text-2xl lg:text-xl group-hover:text-violet-500">{project.title}</h1>
                <p className="text-base leading-relaxed tracking-wide">{project.desc}</p>
              </div>
              <footer className="flex flex-row items-center space-x-4 w-full text-sm font-mono">
                {project.tech.map((item, i) => (
                  <span key={i}>
                    <span key={i}>{item}</span>
                  </span>
                ))}
              </footer>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center py-3.5 px-7 ease-in-out duration-300 rounded-md
           mt-10  bg-violet-500 text-white hover:text-white hover:bg-violet-700"
            onClick={() => setShowMore(!showMore)}>
            Show {showMore ? 'Less' : 'More'}
          </button>
        </div>
      </section>
    </>
  );
};

export default OtherProject;
