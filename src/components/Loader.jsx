import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ setLoading }) {
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      backgroundColor: "#8b5cf6",
      opacity: 1,
      scale: [1, 0],
      transition: {
        scale: {
          delay: 3,
          duration: 0.5,
          ease: "backIn",
        },
        backgroundColor: {
          delay: 2,
          duration: 0.7,
          ease: "circIn",
        },
      },
    },
  };

  const drawBox = {
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: 0.5,
          duration: 1.5,
          ease: "easeInOut",
        },
        opacity: {
          delay: 0.5,
          duration: 0.001,
        },
      },
    },
  };

  const drawLine = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      stroke: ["#8b5cf6", "#ffff"],
      transition: {
        pathLength: {
          delay: 0.5,
          duration: 1.5,
        },
        stroke: {
          delay: 2.2,
          ease: "linear",
        },
        opacity: {
          delay: 0.5,
          duration: 0.001,
        },
      },
    },
  };

  return (
    <div className="h-screen flex justify-center items-center dark:bg-dark-900">
      <AnimatePresence type="crossfade">
        <motion.div
          variants={containerAnimation}
          onAnimationComplete={() => setLoading(false)}
          initial="hidden"
          animate="visible"
          className="w-24 h-24 rounded-lg"
        >
          <motion.svg fill="none" viewBox="0 0 500 500">
            <motion.rect
              x="15.2"
              y="15.2"
              variants={drawBox}
              width="469.6"
              height="469.6"
              rx={30}
              strokeMiterlimit={10}
              strokeWidth={20}
              stroke="#8b5cf6"
            />
            <motion.polyline
              fill="none"
              variants={drawLine}
              rx={30}
              stroke="#8b5cf6"
              strokeWidth={20}
              strokeLinecap="round"
              strokeMiterlimit={10}
              points="121.9,185.2 121.9,326.5 250,393.2 378.1,326.5 378.1,185.2"
            />
            <motion.polyline
              fill="none"
              variants={drawLine}
              rx={30}
              strokeLinecap="round"
              stroke="#8b5cf6"
              strokeMiterlimit={10}
              strokeWidth={20}
              points="159.4,304.5 159.4,163.2 250,106.8 339.3,163.2 339.3,304.5"
            />
            <motion.line
              fill="none"
              stroke="#8b5cf6"
              strokeWidth={20}
              strokeLinecap="round"
              x1="250"
              variants={drawLine}
              y1="106.8"
              x2="250"
              y2="328.8"
            />
          </motion.svg>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
