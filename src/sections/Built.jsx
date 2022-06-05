import React from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../assets/project1-dark.png";
import project2 from "../assets/cryptodashboard.jpeg";

const Built = () => {
  const styles = {
    builtSection: `pt-10 pb-28   flex flex-col justify-center text-slate-800 dark:text-slate-200`,
    builtContent: `text-slate-800 dark:text-slate-200`,

    builtItem: `grid grid-flow-row lg:grid-cols-2 md:space-x-14 mb-10`,
    builtItemCover: `p-1.5 rounded-lg mb-8 bg-[#1f1f1f] overflow-hidden dark:border dark:border-dark-500`,
    builtItemCoverImg: `object-cover w-full hover:scale-110	ease-in-out duration-500`,
    builtItemHeading: `text-xl text-violet-600`,
    builtItemSubheading: `text-3xl font-bold`,
    builtItemText: `leading-7`,
    builtItemIcon: `w-5 h-5`,
    builtItemLink: `hover:text-violet-500 w-max`,
  };

  return (
    <>
      <section id="built" className={styles.builtSection}>
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
            <a
              className={styles.builtItemLink}
              href="https://github.com/azharluthfi14/django-ai-wine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.builtItemIcon} />
            </a>
          </div>
        </div>

        <div className="grid grid-flow-row lg:grid-cols-2 mt-10">
          <div className="space-y-5 order-2 lg:order-none flex flex-col justify-center">
            <h1 className="text-xl text-violet-600">Featured Project</h1>
            <h2 className="text-3xl font-bold">Cryptocap</h2>
            <p className="leading-7">
              Memanfaatkan API dari Coinranking. Menampilkan sejumlah harga mata uang kripto seperti
              Bitcoin, Ethereum, dan Binance secara real-time.
            </p>
            <a
              className={styles.builtItemLink}
              href="https://github.com/azharluthfi14/cryptocap-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.builtItemIcon} />
            </a>
          </div>
          <div className="p-1.5 order-1 rounded-lg bg-white mb-8 border overflow-hidden border-gray-200">
            <img
              className={styles.builtItemCoverImg}
              src={project2}
              draggable="false"
              loading="lazy"
              alt="project1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Built;
