import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function courses() {
  return (
    <>
    <div>
      <Navbar/>
      <div className=' min-h-screen'>
        <Course/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default courses
