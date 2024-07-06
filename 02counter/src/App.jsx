import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)


  const addValue = ()=>{
    // counter=counter+1;
    // setCounter(counter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  }

  const removeValue = () =>{

    setCounter(counter-1);

  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>add value{counter}</button>
    <br/>
    <button onClick={removeValue}>remove value{counter}</button>

    <p>footer: {counter}</p>
    </>
  )
}

export default App
 