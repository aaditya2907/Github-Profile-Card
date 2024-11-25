import React, { useState } from 'react'

function Form({username, setUsername}) {
    const [input, setInput] = useState()

  return (
    <div className='h-60 w-80 flex flex-col px-4 py-8 rounded-lg bg-neutral-300'>
        <h1 className='font-bold text-2xl mb-3'>Enter your username :</h1>

        <input type="text" placeholder={username} onChange={(e)=>{
            setInput(e.target.value)
        }} className='border-2 border-black mt-1 mb-6 rounded-lg py-2 px-3 bg-neutral-300 .placeholder-gray-900 outline-none' />

        <button className='border-2 w-24 mx-auto border-black rounded-lg p-2 bg-zinc-300 hover:bg-zinc-400' onClick={()=>{
            setUsername(input)

        }}>Submit</button>
    </div>
  )
}   

export default Form