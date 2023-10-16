import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
// import Navbar from './Components/Navbar'
// import HomePage from './Components/HomePage'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
