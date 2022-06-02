import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { RiArchiveDrawerFill } from 'react-icons/ri';

export default function Loader({ setLoading }) {
    // points = "121.9,174.2 121.9,315.5 250,382.2 378.1,315.5 378.1,174.2 "
    // points = "159.4,295.5 159.4,154.2 250,97.8 339.3,154.2 339.3,295.5 "
    // x1="250" y1="97.8" x2="250" y2="319.8"
    const containerAnimation = {
        visible: {
            transition: {
                delayChildren: 0.5,
                pathLength: {
                    delay: 0.5,
                    duration: 1.5,
                },
                opacity: {
                    delay: 0.5,
                    duration: 0.001
                },
            }
        }
    };

    const draw = {
        hidden: { pathLength: 0, opacity: 1 },
        visible: {
            pathLength: 1,
            opacity: 1,
            fill: ['#ffffff00', '#8b5cf6'],
            transition: {
                fill: {
                    delay: 2.3,
                    duration: 1,
                    ease: 'linear'
                },
                pathLength: {
                    delay: 0.5,
                    duration: 1.5,
                },
                opacity: {
                    delay: 0.5,
                    duration: 0.001
                },
            },
        },
    }

    const line = {
        hidden: {
            pathLength: 0,
            opacity: 0,
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            stroke: ['#8b5cf6', '#ffff'],
            transition: {
                pathLength: {
                    delay: 0.5,
                    duration: 1.5,
                },
                stroke: {
                    delay: 2.2,
                    ease: 'linear'
                },
                opacity: {
                    delay: 0.5,
                    duration: 0.001
                },
            }
        }
    }

    const fade = {
        hidden: { opacity: 0, y: 90 },
        visible: {
            opacity: 1,
            y: 0,
            ease: [0.17, 0.67, 0.83, 0.67],
            transition: {
                type: "spring",
                staggerChildren: 0.5,
                duration: 1,
                delay: 1
            }
        }
    }

    return (
        <div className='h-screen flex justify-center items-center dark:bg-dark-900'>
            <div className='w-24 h-24'>
                <AnimatePresence type='crossfade'>
                    <motion.svg
                        viewBox="0 0 500 500"
                        variants={containerAnimation}
                        initial="hidden"
                        animate="visible"
                        onAnimationComplete={() => setLoading(false)}
                    >
                        <motion.rect
                            x="15.2" y="15.2"
                            width="469.6" height="469.6"
                            rx={30}
                            strokeMiterlimit={10}
                            strokeWidth={20}
                            stroke="#8b5cf6"
                            variants={draw}
                        />
                        <motion.polyline
                            fill='none'
                            rx={30}
                            stroke="#8b5cf6"
                            strokeWidth={20}
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            variants={line}
                            points="121.9,185.2 121.9,326.5 250,393.2 378.1,326.5 378.1,185.2" />
                        <motion.polyline
                            fill='none'
                            rx={30}
                            strokeLinecap="round"
                            stroke="#8b5cf6"
                            variants={line}
                            strokeMiterlimit={10}
                            strokeWidth={20}
                            points="159.4,304.5 159.4,163.2 250,106.8 339.3,163.2 339.3,304.5" />
                        <motion.line fill='none' stroke="#8b5cf6" variants={line} strokeWidth={20}
                            strokeLinecap="round" x1="250" y1="106.8" x2="250" y2="328.8" />
                    </motion.svg>
                </AnimatePresence>
            </div>
        </div>
    )
}
