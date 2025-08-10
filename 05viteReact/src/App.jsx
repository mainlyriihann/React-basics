import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [col, setcol] = useState("black")

  return (
   <div className= 'w-screen h-screen text-white flex  justify-center items-center ' 
   style={{backgroundColor: col}}> 
   <p className='bg-black flex justify-center items-center rounded-2xl px-1.5 m-1'>
   <button className='bg-sky-500 flex justify-center align-middle px-1.5 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
                   transition-all duration-300 hover:text-gray-150 hover:bg-sky-600 hover: delay-100' 
                   onClick={()=> setcol("skyblue")}> Sky </button>
  <button className='bg-red-500 flex justify-center align-middle px-1.5 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
  transition-all duration-300 hover:text-gray-150 hover:bg-red-600 hover: delay-100 m-1.5' 
  onClick={()=> setcol("red")}> Red </button>
  <button className='bg-slate-500 flex justify-center align-middle px-1.5 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
  transition-all duration-300 hover:text-gray-150 hover:bg-slate-600 hover: delay-100 m-1.5' 
  onClick={()=> setcol("gray")}> Slate </button>
  <button className='bg-blue-600 flex justify-center align-middle px-1.5 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]
  transition-all duration-300 hover:text-gray-150 hover:bg-blue-700 hover: delay-100 m-1.5' 
  onClick={()=> setcol("blue")}> Blue </button>
  
  </p>

   </div>
  )
}

export default App
