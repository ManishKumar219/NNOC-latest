// import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact';
import Gallery from './components/gallery'
import Footer from './components/footer'
import Services from './components/services';
import { IoLogoWhatsapp } from 'react-icons/io';


function App() {


  return (
    <div>
      <Header />
      {/* <Router future={{ v7_startTransition: true }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* </Router> */}


      <div className="fixed bottom-6 right-6 z-50 group">


        {/* Hover Text */}
        <span
          className="
      absolute right-16 top-1/2 -translate-y-1/2
      bg-white text-black font-bold text-sm
      px-4 py-2 rounded-lg
      shadow-md
      whitespace-nowrap
      opacity-0 translate-x-6
      group-hover:opacity-100 group-hover:translate-x-0
      transition-all duration-300 ease-out
    "
        >
          Chat with Us
        </span>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9430241258"
          aria-label="Whatsapp Icon"
          target="_blank"
          rel="noopener noreferrer"
          className="
      w-14 h-14
      bg-emerald-600 hover:bg-emerald-700
      rounded-full
      flex items-center justify-center
      border-4 border-white
      shadow-lg
      transition-transform duration-300
      hover:scale-110
      animate-bounce
    "
        >
          <IoLogoWhatsapp className="text-white" size={30} />
        </a>
      </div>




      <Footer />
    </div>

  )
}

export default App