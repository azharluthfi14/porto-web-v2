import React, { useEffect, useRef } from "react";
import avatar from "../assets/avatar2.jpg";
import { srConfig } from "../config";
import sr from "../utils/sr";
import LinkTag from "../components/LinkTag";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function About() {
  const styles = {
    aboutSection: `py-20`,
    aboutHeading: `text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 text-left font-bold mb-10 lg:mb-7`,
    aboutContent: `flex flex-col xl:flex-row gap-5 md:space-x-10 justify-between`,
    aboutText: `space-y-3 order-2 mt-5 md:mt-0 xl:order-none tracking-wide leading-7 md:leading-6`,
    aboutListSkills: `grid grid-cols-2 gap-3 md:gap-2 list-inside`,
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
                <li className="before:content-['▸'] before:mr-2 before:text-violet-700" key={i}>
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
