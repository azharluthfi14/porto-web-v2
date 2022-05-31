export const FadeInUp = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      ease: "linear",
      type: "spring",
    },
  },
};
