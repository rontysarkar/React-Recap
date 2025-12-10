import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <h2>Ronty Sarakr</h2>
        <div className='menu'>
            {/* <a href="/"> Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar