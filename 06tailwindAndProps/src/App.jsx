import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Farhan",
    age: 22,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg'>Tailwind Test</h1>
      <Card username="Farhan" btnText = "Read me" />
      <Card username="Happy"  />

    </>
  )
}

export default App
