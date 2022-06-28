import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import ButtonTheme from "./ButtonTheme";
import navLogo from "../favicon.svg";

const Navbar = () => {
  const [scrolled, setSrolled] = useState(false);
  const [toggle, setToggle] = useCycle(false, true);

  const style = {
    navbar: `fixed top-0 w-full z-30 ${
      scrolled
        ? "py-3 shadow-md bg-white/50 backdrop-blur-md ease-in duration-200 dark:bg-dark-800/90"
        : "ease-out duration-200 dark:bg-dark-900 py-5"
    }`,
    navbarContainer: `mx-5 md:mx-12 flex flex-wrap justify-between items-center`,
    navbarLogoContainer: `flex items-center justify-center`,
    navbarLogo: `w-7 h-7`,
    navbarMenu: `hidden w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto md:font-medium`,
    navbarMenuListWrapper: `flex flex-row space-x-10`,
    navbarLink: `block link py-2 pr-5 text-center dark:text-white hover:dark:text-violet-700 cursor-pointer`,
    navbarLinkActive: `text-violet-700 dark:text-violet-500`,
    navbarBtn: `border-l-[0.01rem] pl-5 dark:border-dark-500`,
    buttonOpenMenu: `flex lg:hidden cursor-pointer text-xl rounded-full p-2 text-slate-900 hover:bg-gray-200 dark:text-white dark:hover:bg-dark-500`,
    mobileMenuWrapper: `fixed shadow-md border-l top-0 right-0 bottom-0 h-screen lg:hidden bg-white dark:bg-dark-800 dark:border-0`,
    mobileMenuHeader: `flex justify-between align-middle relative px-5 py-2.5 items-center`,
    buttonCloseMobileMenu: `flex lg:hidden cursor-pointer text-xl rounded-full p-2 text-slate-900 hover:bg-gray-200 dark:text-white dark:hover:bg-dark-500`,
  };

  const slideUp = {
    hidden: {
      y: -30,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        type: "spring",
        ease: "easeInOut",
      },
    },
  };

  const navLink = [
    { id: 1, setTo: "hero", name: "Home" },
    { id: 2, setTo: "about", name: "About" },
    { id: 3, setTo: "built", name: "My Projects" },
    { id: 4, setTo: "other-project", name: "Other Projects" },
  ];

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 70) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };
  });

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbarContainer}>
          <div className={style.navbarLogoContainer}>
            <img src={navLogo} className={style.navbarLogo} alt="logo-nav" />
          </div>
          <div className={style.navbarMenu}>
            <motion.ul
              variants={slideUp}
              initial="hidden"
              animate="visible"
              className={style.navbarMenuListWrapper}
            >
              {navLink &&
                navLink.map((item, i) => (
                  <motion.li variants={slideUp} key={i}>
                    <Link
                      to={item.setTo}
                      spy={true}
                      smooth={true}
                      offset={-60}
                      activeClass={style.navbarLinkActive}
                      duration={500}
                      className={style.navbarLink}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
            </motion.ul>
            <ul className={style.navbarBtn}>
              <motion.div whileTap={{ rotate: 360 }}>
                <ButtonTheme />
              </motion.div>
            </ul>
          </div>

          {/* Open menu mobile */}
          <div onClick={() => setToggle(true)} className={style.buttonOpenMenu}>
            <HiMenu />
          </div>

          {/* Navbar Responsive Mobile */}
        </div>
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: 250,
              }}
              exit={{
                width: 0,
                transition: { ease: "circIn" },
              }}
              className={style.mobileMenuWrapper}
            >
              <div className={style.mobileMenuHeader}>
                <motion.div whileTap={{ rotate: 360 }}>
                  <ButtonTheme />
                </motion.div>
                <div className={style.buttonCloseMobileMenu} onClick={() => setToggle(false)}>
                  <HiX />
                </div>
              </div>
              <ul className="flex flex-col justify-center space-y-7 p-5">
                {navLink &&
                  navLink.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.setTo}
                        spy={true}
                        activeClass={style.navbarLinkActive}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="block py-2 p-5 text-slate-800 dark:text-white cursor-pointer"
                        onClick={() => setToggle(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
