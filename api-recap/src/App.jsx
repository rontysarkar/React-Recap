
import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  // async function getData(){
  //   const respons = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await respons.json()
  //   console.log(data)
  // }
  const [data, setData] = useState([])
  const getData = async()=>{

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    setData(data)
  }

  return (
    <div>
    <button onClick={getData} className='btn'>Get Data</button>
    <div>
      {
        data.map(function(e,idx){
          return <h1 key={idx}>hello</h1>
        })
      }
    </div>
    </div>
  )
}

export default App