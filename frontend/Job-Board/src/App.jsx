import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AdminPage } from './components/pages/AdminPage'
import NavBar from './components/pages/NavBar'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import SearchJobs from './components/pages/SearchJobs'
import Register from './components/pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <NavBar/>
          <Routes>
                 <Route path="/a" element={<AdminPage/>}/>
                 <Route path="/h" element={<HomePage/>}/>
                 <Route path="/s" element={<SearchJobs/>}/>
                 <Route path="/r" element={<Register/>}/>
          </Routes>
    </>
  )
}

export default App
