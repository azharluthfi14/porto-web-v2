import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ setLoading }) {

    const container = {
        show: {
            transition: {
                staggerChildren: 0.35,
            },
        },
    };

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    delay: 0.5,
                    type: 'spring',
                    duration: 1.5,
                    bounce: 0
                },
                opacity: {
                    delay: 0.5,
                    duration: 0.01
                }
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.8,
            },
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
            <div className='w-32 h-32'>
                <AnimatePresence type='crossfade'>
                    <motion.svg
                        viewBox="0 0 500 500"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onAnimationComplete={() => setLoading(false)}
                    >
                        <motion.rect
                            x="53.8"
                            y="53.8"
                            width="392.4"
                            height="392.4"
                            rx={30}
                            fill="none"
                            strokeMiterlimit={10}
                            strokeWidth={20}
                            stroke="#8b5cf6"
                            variants={draw}
                        />
                        <motion.path stroke="none" fill="#8b5cf6" variants={fade}
                            d="M279.4,301.4h-59.3l-9.5,28.1h-40.5l57.5-158.8h44.8l57.5,158.8h-41L279.4,301.4z M249.8,213.3l-19.5,58.1h39.1
                        L249.8,213.3z" />
                    </motion.svg>
                </AnimatePresence>
            </div>
        </div>
    )
}
