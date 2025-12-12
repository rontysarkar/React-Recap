import React, { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { NotFound } from './pages/NotFound'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'

const  App = () => {
  
  return (
    <div className='' >
      <Navbar />
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>

            <Route path='/product' element={<Product/>} >
              <Route path='men' element={<Men  />}/>
              <Route path='women' element={<Women/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default  App