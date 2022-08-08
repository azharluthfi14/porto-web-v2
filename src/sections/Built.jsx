import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/project1-dark.png";
import project2 from "../assets/cryptodashboard.jpeg";
import LinkTag from "../components/LinkTag";
import { srConfig } from "../config";
import sr from "../utils/sr";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const Built = () => {
  const styles = {
    builtSection: `py-20 flex flex-col justify-center text-slate-800 dark:text-slate-200`,
    builtContent: `text-slate-800 dark:text-slate-200`,
    builtItem: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mb-10`,
    builtItemCover: `p-1.5 rounded-lg mb-8 bg-[#1f1f1f] overflow-hidden dark:border dark:border-dark-500`,
    builtItemCoverImg: `object-cover w-full hover:scale-110	ease-in-out duration-500`,
    builtItemHeading: `text-xl text-violet-600`,
    builtItemSubheading: `text-3xl font-bold`,
    builtItemText: `leading-7`,
    builtItemIcon: `w-5 h-5`,
    builtItemLink: `hover:text-violet-500 w-max`,
  };

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <>
      <section ref={revealContainer} id="built" className={styles.builtSection}>
        <h1 className="text-4xl mb-8 md:mb-7 font-bold">Some Things I've Built</h1>
        <div className={styles.builtItem}>
          <figure className={styles.builtItemCover}>
            <img
              className={styles.builtItemCoverImg}
              draggable="false"
              loading="lazy"
              src={project1}
              alt="project1"
            />
          </figure>
          <div className="space-y-5 flex flex-col justify-center">
            <h1 className={styles.builtItemHeading}>Featured Project</h1>
            <h2 className={styles.builtItemSubheading}>Manchine Learning Web App</h2>
            <p className={styles.builtItemText}>
              Sebuah aplikasi web berbasis kecerdasan buatan atau AI. Dengan cabang Machine
              Learning. Aplikasi untuk pengklasifikasian kualitas minuman wine.
            </p>
            <LinkTag
              className={styles.builtItemLink}
              url="https://github.com/azharluthfi14/django-ai-wine"
            >
              <FaGithub className={styles.builtItemIcon} />
            </LinkTag>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-cols-2 md:space-x-10 mt-10">
          <div className="space-y-5 flex flex-col justify-center">
            <h1 className="text-xl text-violet-600">Featured Project</h1>
            <h2 className="text-3xl font-bold">Cryptocap</h2>
            <p className="leading-7">
              Memanfaatkan API dari Coinranking. Menampilkan sejumlah harga mata uang kripto seperti
              Bitcoin, Ethereum, dan Binance secara real-time.
            </p>
            <LinkTag
              className={styles.builtItemLink}
              url="https://github.com/azharluthfi14/cryptocap-dashboard"
            >
              <FaGithub className={styles.builtItemIcon} />
            </LinkTag>
          </div>
          <figure className="p-1.5 order-1 rounded-lg bg-white mt-8 md:mt-0 border overflow-hidden border-gray-200">
            <img
              className={styles.builtItemCoverImg}
              src={project2}
              draggable="false"
              loading="lazy"
              alt="project1"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Built;
