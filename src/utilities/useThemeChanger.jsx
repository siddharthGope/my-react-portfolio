import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeChangeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');


    useEffect(() => {



    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme(localStorage.setItem("dark"))
        }
        else { setTheme(localStorage.setItem("light")) }
    }

    return (
        <ThemeContext.Provider value={toggleTheme}>
            {children}
        </ThemeContext.Provider>
    )
}
