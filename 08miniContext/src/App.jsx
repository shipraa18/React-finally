
import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'

function App() {

  return (
   <UserContextProvider>
   <h1>react with chai</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
