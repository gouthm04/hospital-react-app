import { useState } from 'react'

import './App.css'
import RegisterPatient from './components/RegisterPatient'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterPatient/>}/>
    </Routes>
    </BrowserRouter>
   </>

  )
}

export default App
