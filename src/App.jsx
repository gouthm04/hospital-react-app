import { useState } from 'react'

import './App.css'
import RegisterPatient from './components/RegisterPatient'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ViewAllPatients from './components/ViewAllPatients'

function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterPatient/>}/>
      <Route path='/view' element={<ViewAllPatients/>}/>
    </Routes>
    </BrowserRouter>
   </>

  )
}

export default App
