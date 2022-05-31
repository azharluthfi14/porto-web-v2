import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import SideSocmed from './SideSocmed';
import Loader from './Loader';

export default function LayoutPage({ children, location }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 500)
    }, [])


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
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
                </div>
            )}
        </>
    )
}
