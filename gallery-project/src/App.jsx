import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [idx, setIdx] = useState(1)
  const getData = async () => {
    const { data } = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=10`)
    setData(data)
    console.log(data);

  }

  useEffect(() => {
    getData()
  },[idx])

  let images = <h1 className='text-2xl font-bold absolute top-1/2 left-1/2 '>Loading .....</h1>
  if (data.length > 0) {
    images = data.map((e, idx) => {
      return <div key={idx} className='w-70 h-60'>
        <img src={e.download_url} alt="" className='w-full h-full' />
        <h1 className='text-xl text-center font-medium'>{e.author}</h1>
      </div>
    })
  }
  return (
    <div className='bg-black w-full h-screen text-white p-10 '>
      {/* <button onClick={getData} className='py-2 px-8 bg-sky-400 rounded-xl active:scale-95'>Get Data</button> */}
      <div className='flex flex-wrap gap-10 mt-10'>
        {
          images
        }
      </div>
      <div className='flex justify-center items-center gap-10 mt-20'>
        <button
          onClick={() => {
            if (idx > 1) {
              setIdx(idx - 1)
              images = ' '
            }
          }}
          className='bg-amber-600 px-5 py-2 rounded-xl active:scale-95'>
          Prev
        </button>
        <button
          onClick={() => {
            setIdx(idx + 1)
            images = ' '
          }}
          className='bg-amber-600 px-5 py-2 rounded-xl active:scale-95'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App