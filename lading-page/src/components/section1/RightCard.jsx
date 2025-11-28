import React from 'react'

const RightCard = ({user}) => {
  return (
    <div className='h-full w-80 shrink-0  rounded-4xl relative overflow-hidden'>
        <img className='h-full object-cover ' src={user.img} alt="" />
        <div className='absolute top-0 left-0 w-full h-full  p-10 flex flex-col justify-between'>
          <h1 className='w-10 h-10 bg-white flex items-center justify-center rounded-full text-2xl font-medium'>1</h1>
          <div>
            <p className='text-xl text-white mb-10 text-shadow-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus, suscipit molestiae illum modi ratione!</p>
            <div className='flex justify-between'>
              <button style={{backgroundColor:user.color}} className='  py-2 px-10 rounded-full text-1xl text-white font-semibold'>{user.tag} </button>
              <button style={{backgroundColor:user.color}} className=' py-1 px-6 rounded-full text-2xl text-white'><i class="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightCard