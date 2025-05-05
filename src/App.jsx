import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter,Routes,Route}from 'react-router-dom'

import Editblog from './Page/Editblog'
import Createblog from './Page/createblog'
import Singlepage from './Page/Singlepage'
import Homepage from './Page/HomePage'
import Card from './Component/Card'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/blog/:id" element={<Singlepage/>}/>
      <Route path="/createblog" element={<Createblog/>}/>
   <Route path='/editblog/:id' element ={<Editblog/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
