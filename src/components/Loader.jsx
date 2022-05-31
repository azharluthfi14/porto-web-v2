import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

export default function Loader() {
    const text = [['L'], ['O'], ['A'], ['D'], ['I'], ['N'], ['G']]

    const loadingContainerVariants = {
        start: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        end: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const loadingCircleVariants = {
        start: {
            y: "0%",
        },
        end: {
            y: "100%",
        },
    }

    const loadingCircleTransition = {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
    }



    return (
        <motion.div
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
            className={`h-screen dark:bg-dark-900 flex items-center justify-center`}>
            {text.map((item, i) => (
                <motion.h1 className='text-5xl font-bold text-white' key={i} variants={loadingCircleVariants}
                    transition={loadingCircleTransition}>
                    {item}
                </motion.h1>
            ))}

        </motion.div>
    )
}
