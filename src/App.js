import React from 'react'
import NavbarS from './components/NavbarS'
import MainLabel from './components/MainLabel'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ApplicationID from './components/ApplicationID'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<MainLabel/>}/>
      <Route path = "/application/:id" element={<ApplicationID/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App