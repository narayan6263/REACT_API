import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyHome from './pages/dashboard/MyHome'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <MyHome /> } />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
