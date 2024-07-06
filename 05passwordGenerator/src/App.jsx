import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("")


  const passwordGenerator=()=>{
    
  }

  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      
    </>
  )
}

export default App


//useCallback //Object.is comparision algorithm
//useState

