import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function SideSocmed() {

    const socialMedia = [
        { id: 1, icon: FaTwitter, url: 'https://twitter.com/AzharLuthfi14' },
        { id: 2, icon: AiFillInstagram, url: 'https://www.instagram.com/azhar_luthfi' },
        { id: 3, icon: FaGithub, url: 'https://github.com/azharluthfi14' },
        { id: 4, icon: FaLinkedin, url: 'https://www.linkedin.com/in/azhar-luthfi14' }
    ]

    return (

        <aside className="hidden md:fixed bottom-0 h-screen w-40 md:flex flex-col justify-end items-center p-6">
            <div className="bottom-0 space-y-12 py-10 text-slate-800 dark:text-slate-200">
                {socialMedia.map(item => (
                    <div key={item.id} className='hover:text-violet-500 motion-reduce:transition-none motion-reduce:hover:transform-none hover:-translate-y-1 duration-100 ease-in'>
                        <a href={item.url} target="_blank">
                            <span><item.icon fontSize={25} /></span>
                        </a>
                    </div>
                ))}

            </div>
        </aside>

    )
}
