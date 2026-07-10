import { useState } from 'react'

import './App.css'
import RegisterPatient from './components/RegisterPatient'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ViewAllPatients from './components/ViewAllPatients'
import SearchPatient from './components/SearchPatient'

function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterPatient/>}/>
      <Route path='/view' element={<ViewAllPatients/>}/>
      <Route path='/search' element={<SearchPatient/>}/>
    </Routes>
    </BrowserRouter>
   </>

  )
}

export default App
