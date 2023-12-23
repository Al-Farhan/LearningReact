import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [color, setColor] = useState("red");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
          <button onClick={() => setColor((color) => color = "red")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor((color) => color = "green")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor((color) => color = "yellow")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor((color) => color = "olive")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: "olive" }}>Olive</button>

        </div>
      </div>

    </div>

  )
}

export default App
