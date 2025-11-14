import { useState } from 'react'
import './App.css'
import logo from './assets/navbar-logo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-danger text-center mt-5' >Stack Underflow  </h1>
     <div className='mt-4 text-center'>
       <img src={logo} alt="" />
     </div>
    </>
  )
}

export default App
