import { useState, useCallback, useEffect, useRef  } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null)


  const passwordGenerator= useCallback(()=>{
    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "1234567890"
    if(charAllowed) str+="!@#$%^&*()~{}"

    for(let i=0;i<=length;i++)
      {
        let char = Math.floor(Math.random()*str.length + 1);
        pass+=str.charAt(char)
      }

      setPassword(pass);

  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectRange(0,99);
    window.navigator.clipboard.writeText(Password);
  },
[Password])

  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={Password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='password'
        readOnly
        ref={passwordRef}
        />

        <button
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         onClick={copyPasswordToClipboard}
        >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          /> 
          <label>length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setnumberAllowed((prev) => !prev);
          }}
           />
          <label htmlFor="alphabetsInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='alphabetsInput'
          onChange={()=>{
            setcharAllowed((prev) => !prev);
          }}
           />
          <label htmlFor="alphabetsInput">characters</label>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App


//useCallback //Object.is comparision algorithm
//useState

// useCallback: used for optimization it calls the function inside it when the dependencies are changed and returns a memoized function
// useEffect: runs the function inside it whenever the page renders first time or dependencies are changed
// useRef: used to give reference of selected components in our page so that the functions can be performed on referenced values

