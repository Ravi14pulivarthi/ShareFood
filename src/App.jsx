import React from 'react'
import Lndaingpage from './sharefood/pages/Lndaingpage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Productdisplay from './sharefood/components/Productdisplay'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={   <Lndaingpage/>}/>
        <Route path='/products/:firmId/:firmName'  element={<Productdisplay/>}/>
   
      </Routes>
      
    </div>
  )
}

export default App