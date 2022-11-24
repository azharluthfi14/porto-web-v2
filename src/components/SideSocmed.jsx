import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import LinkTag from "./LinkTag";

export default function SideSocmed() {
  const socialMedia = [
    { id: 1, icon: FaTwitter, url: "https://twitter.com/AzharLuthfi14" },
    { id: 2, icon: AiFillInstagram, url: "https://www.instagram.com/azhar_luthfi" },
    { id: 3, icon: FaGithub, url: "https://github.com/azharluthfi14" },
    { id: 4, icon: FaLinkedin, url: "https://www.linkedin.com/in/azhar-luthfi14" },
  ];

  const styles = {
    sideSocmed: `hidden lg:fixed bottom-0 h-screen w-40 lg:flex flex-col justify-end items-center p-6`,
    sideSocmedWrapper: `bottom-0 space-y-12 py-10 text-slate-800 dark:text-slate-200`,
    sideSocmedLink: `hover:text-violet-700 motion-reduce:transition-none
     motion-reduce:hover:transform-none hover:-translate-y-1 duration-100 ease-in`,
  };

  return (
    <aside className={styles.sideSocmed}>
      <div className={styles.sideSocmedWrapper}>
        {socialMedia.map((item) => (
          <div key={item.id} className={styles.sideSocmedLink}>
            <LinkTag url={item.url}>
              <span>
                <item.icon fontSize={25} />
              </span>
            </LinkTag>
          </div>
        ))}
      </div>
    </aside>
  );
}
