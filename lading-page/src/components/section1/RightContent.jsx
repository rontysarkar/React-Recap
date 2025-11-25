import React from 'react'
import RightCard from './RightCard'

const RightContent = ({users}) => {
  console.log(users)
  return (
    <div className='h-full  p-16 overflow-x-auto  flex flex-nowrap gap-8 '>
        {
          users.map(function(elem){
            return <RightCard user = {elem}/>
          })
        }
    </div>
  )
}

export default RightContent