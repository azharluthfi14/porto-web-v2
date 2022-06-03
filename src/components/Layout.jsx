import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideSocmed from "./SideSocmed";
import Loader from "./Loader";

export default function LayoutPage({ children }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    isLoading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader setLoading={setLoading} />
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
  );
}
