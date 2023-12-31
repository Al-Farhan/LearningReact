import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    // counter = counter +1;
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    console.log("Clicked", counter);
  }

  const removeValue = () => {

    if(!(counter<=0)) {
      // counter = counter -1;
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Farhan Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue} >Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
