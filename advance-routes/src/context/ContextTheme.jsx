import React, { createContext, useState } from 'react'
export const ThemeChangeContext = createContext()

const ContextTheme = (props) => {
    const [theme, setTheme] = useState('light')

    
  return (
    <div>
        <ThemeChangeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeChangeContext.Provider>
    </div>
  )
}

export default ContextTheme