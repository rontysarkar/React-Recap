import React, { useState } from 'react'

const Function = () => {

    const [num, setNum] = useState(0)

    const increaseNum = () =>{
        setNum(num+1);
    }
    const decreaseNum =() =>{
        setNum(num-1);
    }
    return (
        <div className='p-100 w-20 '>
            <h1 className='w-100 bg-gray-400 py-4 px-6 text-5xl mb-20 text-amber-50'>{num}</h1>
            <div className='flex gap-20'>
                <button onClick={increaseNum} className='text-5xl bg-amber-50 px-5 py-4 rounded-full'>Increse</button>
                <button onClick={decreaseNum} className='text-5xl bg-amber-50 px-5 py-4 rounded-full'>decrese</button>
            </div>
        </div>
    )
}

export default Function