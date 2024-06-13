import './App.css'
import Card from './components/Card'

function App() {

  let myObj={
    username: "shipra",
    age: 20,
  }

  let newArr=[1,23,4,5,6];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
     <Card username="chaiaurcode" btnText="click me"
      // myobject={myObj} 
      />
      <Card username="hitesh"
      // myarray={newArr} 
      />
    </>
  )
}

export default App
