import React, { useEffect, useRef } from "react";
import avatar from "../assets/avatar2.jpg";
import { srConfig } from "../config";
import sr from "../utils/sr";
import LinkTag from "../components/LinkTag";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function About() {
  const styles = {
    aboutSection: `py-20 text-slate-800 dark:text-slate-200`,
    aboutHeading: `text-4xl bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 text-left font-bold mb-10 lg:mb-7`,
    aboutContent: `flex flex-col xl:flex-row gap-5 md:space-x-10 justify-between`,
    aboutText: `space-y-3 order-2 mt-5 md:mt-0 xl:order-none tracking-wide leading-7 md:leading-6`,
    aboutListSkills: `grid grid-cols-2 gap-3 md:gap-2`,
    aboutImageContent: `flex mx-auto rounded-md overflow-hidden justify-center order-1 xl:order-none items-center`,
    aboutImage: `object-contain w-7/12 md:w-8/12 lg:w-5/12 xl:w-full rounded-xl grayscale hover:grayscale-0`,
  };

  const skills = ["JavaScript", "HTML", "React", "Python", "Django", "CSS", "Photoshop", "Figma"];
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section id="about" ref={revealContainer} className={styles.aboutSection}>
      <div className="inline-flex space-x-2">
        <h1 className={styles.aboutHeading}>About Me</h1>
        <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif"
            alt="😎"
            width="33"
            height="33"
          />
        </picture>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            Hai, nama saya Muhammad Azhar Luthfi, bisa di panggil Azhar. Saya lulusan S1 Teknik
            Informatika dari{" "}
            <LinkTag style="text-violet-500 link" url="https://www.dinus.ac.id/">
              Universitas Dian Nuswantoro Semarang.
            </LinkTag>
          </p>
          <p>
            Saya adalah seseorang yang tertarik dengan dunia seputar IT terutama dalam seputar
            pemrograman berbasis website. Pada saat ini saya menyukai bahasa pemograman python dan
            javascript. Selain memiliki ketertarikan dengan dunia pemrograman, saya juga menyukai
            hal seputar desain grafis seperti UI desain.
          </p>
          <p>
            Saya sangat tertarik untuk mempelajari hal-hal baru terutama dalam dunia IT, dan mampu
            bekerja secara berkelompok atau individu.
          </p>
          <p>Berikut adalah beberapa keahlian yang saya miliki, diantaranya :</p>
          <ul className={styles.aboutListSkills}>
            {skills &&
              skills.map((skill, i) => (
                <li
                  className="bg-gray-200 dark:bg-dark-700 py-2  px-10 text-sm text-center w-full md:w-max rounded-full"
                  key={i}
                >
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.aboutImageContent}>
          <img className={styles.aboutImage} src={avatar} draggable="false" alt="avatar" />
        </div>
      </div>
    </section>
  );
}
