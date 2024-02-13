import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/ResetPassword" element={<SignUp />}></Route>
        <Route path="/ForgetPassword" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>

      </Routes>
    </>
  )
}

export default App
