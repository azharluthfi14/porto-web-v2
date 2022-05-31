import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import SideSocmed from './SideSocmed';

export default function LayoutPage({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <SideSocmed />
            <div className="dark:bg-dark-900">
                <main className="mx-8 md:mx-20 lg:mx-40">
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    )
}
