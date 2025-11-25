import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-16'>
        <div className=''>
            <h3 className='bg-black py-1 px-4 rounded-full uppercase text-white font-medium'>Target Audienc</h3>
        </div>
        <div>
            <h3 className='uppercase'>Digital Banking Platform</h3>
        </div>
    </div>
  )
}

export default Navbar