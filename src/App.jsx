import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [color, setColor] = useState("white")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
            <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
            <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}>Brown</button>
            <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange</button>
            <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "white"}} onClick={() => setColor("white")}>White</button>

        </div>
      </div>
     
    </div>
    </>
  )
}

export default App
