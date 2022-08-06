import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import LinkTag from "./LinkTag";

const Footer = () => {
  const socialMedia = [
    { id: 1, icon: FaTwitter, url: "https://twitter.com/AzharLuthfi14" },
    { id: 2, icon: AiFillInstagram, url: "https://www.instagram.com/azhar_luthfi" },
    { id: 3, icon: FaGithub, url: "https://github.com/azharluthfi14" },
    { id: 4, icon: FaLinkedin, url: "https://www.linkedin.com/in/azhar-luthfi14" },
  ];

  const styles = {
    footer: "py-5 w-full",
    footerSocmedWrapper: `lg:hidden flex justify-center text-slate-800 dark:text-slate-200 items-center space-x-10 mb-6`,
    footerSocmedLink: `hover:text-violet-500 hover:-translate-y-1 duration-100 ease-in`,
    footerCopyrightWrapper: `flex justify-center items-center dark:text-slate-200`,
    footerCopyrightContent: `text-sm lg:text-base`,
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerSocmedWrapper}>
        {socialMedia.map((item) => (
          <div key={item.id} className={styles.footerSocmedLink}>
            <LinkTag url={item.url}>
              <span>
                <item.icon fontSize={22} />
              </span>
            </LinkTag>
          </div>
        ))}
      </div>
      <div className={styles.footerCopyrightWrapper}>
        <p className={styles.footerCopyrightContent}>Design and Built with ❤️ by Azhar Luthfi</p>
      </div>
    </div>
  );
};

export default Footer;
