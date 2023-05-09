import React, { useState } from 'react';
import dark from '../../utils/style/Dark';
import light from '../../utils/style/Light';
import { ThemeProvider } from 'styled-components'

const themes = {
    light,
    dark
}

export const ThemeContext = React.createContext()

function ThemeProviders({children}){
    const [currentTheme, setCurrentTheme] = useState('dark')

    const theme = themes[currentTheme]

    return (
        <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}


export default ThemeProviders