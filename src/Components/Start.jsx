import React, { useContext } from 'react'
import { QuizContext } from "../Context/Quizholder"

export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
<div  style={{
        backgroundColor: 'lightgrey',}}>
<div
      style={{
       textAlign: 'center',
       fontSize: 50,
       
      }}
    >
        WELCOME TO MY QUIZ
    </div>
        <div className='w-full h-screen flex justify-center items-center'>
            <button onClick={() => setStart(true)} className='border border-orange-500 p-3 text-5xl rounded bg-red-500 text-black'>Start</button>
        </div>
        </div>
    )
}

