import React, { useState } from 'react'
import Form from './components/Form/Form'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const coptyTask = [...task]
    coptyTask.push({ title, details })
    setTask(coptyTask)
    setTitle('')
    setDetails('')

  }

  const deleteTask = (idx) => {
    const coptyTask = [...task]
    coptyTask.splice(idx, 1)
    setTask(coptyTask)
  }



  return (
    <div className='h-screen w-screen bg-black p-10 flex flex-col gap-10 lg:flex-row '>
      <form onSubmit={(e) => {
        submitForm(e);
      }} className='flex flex-col gap-8 lg:w-1/2'>
        <h1 className='text-white text-3xl font-bold'>Write Notes</h1>
        <input value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} type="text" placeholder='Enter Text' className='text-white border w-full p-5 font-medium' />
        <textarea value={details} onChange={(e) => {
          setDetails(e.target.value)
        }} type="text" placeholder='Details ' className='text-white border w-full p-5 font-medium' />
        <button className='bg-white w-full py-5  text-xl font-medium'>Add Note</button>
      </form>
      <div className="bg-gray-800 flex gap-10 flex-wrap lg:w-1/2 p-10">
        {
          task.map((e, idx) => {
            return <div key={idx} className="bg-white w-30 h-40 p-2 flex flex-col justify-between  ">
              <div>
                <h1 className='text-black font-bold'>{e.title}</h1>
                <p>{e.details}</p>
              </div>
              <button onClick={() => {
                deleteTask(idx)
              }} className='bg-red-500 px-3 active:scale-95'>Delete</button>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default App