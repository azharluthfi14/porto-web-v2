import { createContext, useState, useContext, useEffect } from "react";

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("color-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
        if (userMedia.matches) {
            return "dark";
        }
    }

    return "light"; // Set light theme as the default;
};

const StateContext = createContext();

export const ContextProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === "dark";
        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(rawTheme);
        localStorage.setItem("color-theme", rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);


    return (
        <StateContext.Provider value={{ theme, setTheme }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);