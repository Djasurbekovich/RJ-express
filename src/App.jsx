import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import AboutUs from './Pages/AboutUs/AboutUs'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutCompany' element={<AboutUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App