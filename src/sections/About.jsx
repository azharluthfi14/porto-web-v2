import React from "react";
import avatar from "../assets/avatar2.jpg";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "HTML",
    "React",
    "Python",
    "Django",
    "CSS",
    "Photoshop",
    "Figma",
  ];

  const styles = {
    aboutSection: `pt-10 pb-28 text-slate-800 dark:text-slate-200`,
    aboutHeading: `text-4xl text-left relative font-bold mb-7`,
    aboutContent: `flex flex-col md:flex-row gap-5 md:space-x-10 justify-between`,
    aboutText: `space-y-3 order-2 lg:order-none tracking-wide leading-7 md:leading-6`,
    aboutListSkills: `grid grid-cols-2 list-disc mx-5 gap-2`,
    aboutImageContent: `flex justify-center order-1 w-full items-center`,
    aboutImage: `relative rounded-md w-52 md:w-72 grayscale hover:grayscale-0`,
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <h1 className={styles.aboutHeading}>About Me</h1>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            Hai, nama saya Muhammad Azhar Luthfi, bisa di panggil Azhar. Saya lulusan S1 Teknik
            Informatika dari Universitas Dian Nuswantoro Semarang.
          </p>
          <p>
            Saya adalah seseorang yang tertarik dengan dunia seputar IT terutama dalam seputar
            pemograman berbasis website. Pada saat ini saya menyukai bahasa pemograman python dan
            javascript. Selain memiliki ketertarikan dengan dunia pemograman, saya juga menyukai hal
            seputar desain grafis seperti UI desain.
          </p>
          <p>
            Saya sangat tertarik untuk mempelajari hal-hal baru terutama dalam dunia IT, dan mampu
            bekerja secara berkelompok atau individu.
          </p>
          <p>Berikut adalah beberapa keahlian yang saya miliki, diantaranya :</p>
          <ul className={styles.aboutListSkills}>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
        <picture className={styles.aboutImageContent}>
          <img className={styles.aboutImage} src={avatar} alt="avatar" />
        </picture>
      </div>
    </section>
  );
};

export default About;
