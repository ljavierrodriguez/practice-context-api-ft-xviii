import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);


const ThemeWrapper = ({ children }) => {

    const [theme, setTheme] = useState('light'); // light \\ dark

    const handleThemeChange = e => {
        let theme = e.target.checked ? 'dark' : 'light'
        setTheme(theme);
        localStorage.setItem('theme', theme);
    }

    useEffect(() => {
        if(localStorage.getItem('theme')){
            setTheme(localStorage.getItem('theme'));
        }
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, handleThemeChange }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper;