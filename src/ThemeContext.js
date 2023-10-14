import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme(){
    return useContext(ThemeContext);
}

export function ThemeProvider({children}){
    const [darkTheme,setDarkTheme] = useState(false);

    const toggleTheme = ()=>{
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    }

    return(
        <ThemeContext.Provider value={{darkTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}