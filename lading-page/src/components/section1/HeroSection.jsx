import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const HeroSection = ({users}) => {
  return (
    <div className='w-full h-full p-16 flex justify-between gap-12  '>
        <LeftContent/>
        <RightContent users={users} />
    </div>
  )
}

export default HeroSection