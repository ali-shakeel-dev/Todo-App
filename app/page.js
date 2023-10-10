"use client"
import React, { useState } from 'react'
{
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
}
const page = () => {
  const [title, settitle] = useState("")
  const [decs, setdecs] = useState("")
  const [taskmain, settaskmain] = useState([])

  const formHandler = (e) => {
    e.preventDefault();
    if (title == "" && decs == "") {
      alert("Please Enter Task")
    } else {
      settaskmain([...taskmain, { title, decs }]);
      settitle("")
      setdecs("")
    }
  }

  const deleteHandler = (i) => {
    let copiedTask = [...taskmain]
    copiedTask.splice(i, 1)
    settaskmain(copiedTask)
  }

  let taskContainer = <h1>Not Available Tasks</h1>

  if (taskmain.length > 0) {
    taskContainer = taskmain.map((task, i) => {
      return <div id="task" className='m-4 bg-black py-4 px-8 text-white max-w-sm h-fit'>
        <div className="task-count flex justify-between">
          <h3>{i + 1}</h3>
          <i onClick={() => { deleteHandler(i) }} class="ri-close-line icon"></i>
        </div>
        <h1 className='capitalize text-lg font-bold'>Title: {task.title}</h1>
        <p className='font-light opacity-90'>{task.decs}</p>
      </div>
    })
  }

  return (
    <>
      <div className="navbar bg-black text-center text-white py-6">
        <h1 className='font-bold px-6 text-2xl'>My Todo</h1>
      </div>
      <div className="py-8 flex justify-center">
        <form onSubmit={formHandler}>
          <input type="text" name="" id="" className='bg-gray-500 mx-2 capitalize  text-white p-5' placeholder='Title' value={title} onChange={(e) => {
            settitle(e.target.value)
          }} />
          <input type="text" className='bg-gray-500 mx-2 text-white p-5' placeholder='Description' value={decs} onChange={(e) => {
            setdecs(e.target.value)
          }} />
          <input type="submit" value="Submit" className='bg-black text-white p-2 px-6' />
        </form >
      </div>
      <div className="w-fit p-10 mx-16 font-bold flex justify-center flex-wrap">
        {taskContainer}
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </div>

    </>
  )
}


export default page
