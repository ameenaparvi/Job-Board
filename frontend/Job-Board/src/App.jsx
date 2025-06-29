import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AdminPage } from './components/pages/AdminPage'
import NavBar from './components/pages/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/pages/HomePage'
import { AdminJob } from './components/pages/AdminJob'
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Admin from './components/pages/Admin'
import Welcome from './components/Welcome'
import About from './components/pages/About'
import JobDetailPage from './components/pages/JobDetailPage';



function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [userName, setUserName] = useState('');
  
  console.log("Authenticated:", isAuthenticated);

  return (
    <>
          <NavBar userName={userName} setIsAuthenticated={setIsAuthenticated} setUserName={setUserName}/>
          <Routes>
                 <Route path="/about" element={<About/>} />
                 <Route path="/" element={<Welcome/>}/>
                 <Route path="/l" element={<Login setIsAuthenticated={setIsAuthenticated} setUserName={setUserName}/>}/>
                 <Route path="/lo" element={<Admin setIsAuthenticated={setIsAuthenticated} setUserName={setUserName}/>}/>
                 <Route path="/a" element={<AdminPage/>}/>
                 <Route path="/h" element={isAuthenticated?<HomePage/> : <Navigate to="/" replace/>}/>
                 <Route path="/aj" element={isAuthenticated?<AdminJob/> : <Navigate to="/" replace/>}/>                 
                 <Route path="/r" element={<Register/>}/>
                 <Route path='ho' element={<Home/>}/>
                 <Route path="/job-details" element={<JobDetailPage />} />
          </Routes>
    </>
  )
}

export default App
