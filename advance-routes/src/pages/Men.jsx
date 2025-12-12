import React, { useContext } from 'react'
import { ThemeChangeContext } from '../context/ContextTheme'

const Men = () => {
  const [theme,setTheme] = useContext(ThemeChangeContext)
  const changeTheme = ()=>{
    setTheme('drak')
  }
  return (
    <div>
        <h1>Men's Collections</h1>
        <button onClick={changeTheme} className='mt-20 bg-amber-700 px-6 py-2 active:scale-96'>change theme</button>
    </div>
  )
}

export default Men