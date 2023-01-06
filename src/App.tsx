import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from 'Pages/Home';
import Login from 'Pages/Login';


const App:React.FC = ()=> (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </>
)

export default App