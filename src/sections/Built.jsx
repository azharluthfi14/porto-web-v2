import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { srConfig } from "../config";
import project1 from "../assets/filmstar.png";
import project2 from "../assets/coinancy.png";
import LinkTag from "../components/LinkTag";
import sr from "../utils/sr";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Built() {
  const styles = {
    builtSection: `py-20 flex flex-col justify-center text-slate-800 dark:text-slate-200`,
    builtContent: `text-slate-800 dark:text-slate-200`,
    builtItem: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mb-10`,
    builtItemSecond: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mt-10`,
    builtItemCover: `p-1 rounded-xl mb-8 bg-gray-900 overflow-hidden dark:border-2 dark:border dark:border-violet-500`,
    builtItemCoverSecond: `p-1 order-1 dark:border-orange-500 dark:border-2 rounded-xl bg-zinc-900 mt-8 md:mt-0 border overflow-hidden border-gray-200`,
    builtItemCoverImg: `object-cover w-full hover:scale-110	ease-in-out duration-500`,
    builtItemContent: `space-y-5 flex flex-col justify-center`,
    builtItemHeading: `text-xl`,
    builtItemSubheading: `text-3xl  bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 font-bold`,
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
        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 mb-8 md:mb-7 font-bold">
          Some Things I've Built
        </h1>
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
          <div className={styles.builtItemContent}>
            <h1 className={styles.builtItemHeading}>Featured Project</h1>
            <h2 className={styles.builtItemSubheading}>Filmstar</h2>
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

        <div className={styles.builtItemSecond}>
          <div className={styles.builtItemContent}>
            <h1 className={styles.builtItemHeading}>Featured Project</h1>
            <h2 className={styles.builtItemSubheading}>Coinancy</h2>
            <p className={styles.builtItemText}>
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
          <figure className={styles.builtItemCoverSecond}>
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
}
