import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {userContext} from '../src/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{user, setUser}} >
      <Login />
      <Profile />
    </userContext.Provider>
  )
}

export default App
