import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Sections from './Components/Sections'

const App = () => {
  return (
    <div className='h-90 w-full bg-gray-200'>
      <Navbar />
      <Footer />
      <Sections>aditya
        <h2>aditya thakur</h2>
      </Sections>
    </div>
  )
}

export default App