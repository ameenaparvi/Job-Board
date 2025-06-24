import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AdminPage } from './components/pages/AdminPage'
import NavBar from './components/pages/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Welcome from './components/Welcome'
import About from './components/pages/About'



function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated,setIsAuthenticated]=useState(false);

  return (
    <>
          <NavBar/>
          <Routes>
                 <Route path="/about" element={<About/>} />
                 <Route path="/" element={<Welcome/>}/>
                 <Route path="/l" element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
                 <Route path="/a" element={<AdminPage/>}/>
                 <Route path="/h" element={isAuthenticated?<HomePage/> : <Navigate to="/" replace/>}/>
                 <Route path="/r" element={<Register/>}/>
                 <Route path='ho' element={<Home/>}/>
          </Routes>
    </>
  )
}

export default App
