
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [num, setNum] = useState(0)

  useEffect(function(){
    console.log("server is running")
  },[])

  const getData = ()=>{
     setNum(num+1)
  }

  return (
    <div>
    <button onClick={getData} className='btn'>Get Data</button>
    <div>
      <h1>{num}</h1>
    </div>
    </div>
  )
}

export default App