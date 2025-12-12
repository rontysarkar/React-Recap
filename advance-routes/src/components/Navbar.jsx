
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeChangeContext } from '../context/ContextTheme'

const Navbar = () => {
  const [theme] = useContext(ThemeChangeContext)
  
  
  return (
    <div className='bg-sky-600 text-white flex justify-between items-center px-20 py-10'>
        <h2 className='text-2xl font-bold'>Ronty</h2>
        <div className=" flex justify-between gap-10 text-2xl">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/product'}>Proudct</Link>
            <Link >{theme}</Link>
        </div>
    </div>
  )
}

export default Navbar