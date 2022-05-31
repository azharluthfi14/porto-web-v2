import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    const socialMedia = [
        { id: 1, icon: FaTwitter, url: 'https://twitter.com/AzharLuthfi14' },
        { id: 2, icon: AiFillInstagram, url: 'https://www.instagram.com/azhar_luthfi' },
        { id: 3, icon: FaGithub, url: 'https://github.com/azharluthfi14' },
        { id: 4, icon: FaLinkedin, url: 'https://www.linkedin.com/in/azhar-luthfi14' }
    ]
    return (
        <div className='py-10 w-full'>
            <div className='lg:hidden flex justify-center 
            text-slate-800 dark:text-slate-200 items-center space-x-10 mb-6'>
                {socialMedia.map(item => (
                    <div key={item.id} className='hover:text-violet-500 hover:-translate-y-1 duration-100 ease-in'>
                        <a href={item.url} target="_blank">
                            <span><item.icon fontSize={22} /></span>
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center dark:text-slate-200">
                <h1>Design and Built with ❤️ by Azhar Luthfi</h1>
            </div>
        </div>
    )
}

export default Footer