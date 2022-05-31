import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <section className='h-screen flex flex-col justify-center items-center dark:bg-dark-900'>
            <div className='text-center flex flex-col justify-center'>
                <h1 className='font-black text-[120px] tracking-wider dark:text-slate-200'>404</h1>
                <h1 className='text-lg dark:text-slate-200 '>Oops something went wrong</h1>
                <p className='font-mono dark:text-slate-200'>Page Not Found</p>
            </div>
            <div>

                <Link to='/'>
                    <button className="flex justify-center items-center py-3.5 px-7 ease-in-out duration-300 rounded-md
           mt-10  bg-violet-500 text-white hover:text-white hover:bg-violet-700">
                        Back to Homepage
                    </button>
                </Link>
            </div>
        </section>
    )
}
