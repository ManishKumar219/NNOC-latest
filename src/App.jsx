// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact';
import Gallery from './components/gallery'
import Footer from './components/footer'
import Services from './components/services'


function App() {


  return (
    <div>
    <Header/>
    {/* <Router future={{ v7_startTransition: true }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    {/* </Router> */}

    <Footer/>
    </div>

  )
}

export default App