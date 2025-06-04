'use client'
import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isScrollVisible, setIsScrollVisible] = useState(false)

//To visible the scroll button
    useEffect(() => {
      const scrollVisibilty = () => {  
        if(window.scrollY > 300){
          setIsScrollVisible(true)
        }else{
          setIsScrollVisible(false)
        }
      }

      window.addEventListener('scroll', scrollVisibilty) //to listern scroll event
      return () => window.removeEventListener('scroll', scrollVisibilty) // return is the cleanup function of useEffect

    }, [])

// This function used for goin to the top of the website
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

  return (
    <div className='fixed bottom-4 right-4 animate-pulse '>
      {isScrollVisible && 
      <button className='bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'
      onClick={scrollTop}
      >
        <FaArrowUp /> 
      </button>}
      
    </div>
  )
}

export default ScrollToTop
