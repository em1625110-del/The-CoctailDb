import { useState } from 'react'
import { myRouter } from './router'
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <div style={{  margin: "0 auto" }} className='big-div'>
      <RouterProvider style={{width:"100%"}} router={myRouter} />
    </div>
  )
}

export default App
