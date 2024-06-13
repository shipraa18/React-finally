import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   children: 'click me to visit google',
//   props: {
//     href: 'https://google.com',
//     target: '/blank'
//   },
// }

const anotherElement=(
    <a href="https://google.com" target="_blank" >click me to visit</a>
  )

const anotherUser = "chai and chai supermacy"
const reactElement = React.createElement(
  'a',
  {href: "https://google.com"},
  'click me to visit google',
  anotherElement,
)


ReactDOM.createRoot(document.getElementById('root')).render(
      // reactElement
     < App/>
)
