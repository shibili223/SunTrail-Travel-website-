'use client';
import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'


const ResposiveNav = () => {
  const [showNav, setShowNav] = useState(false)
  const handleNavShow = () => setShowNav(true)
  const handleNavClose = () => setShowNav(false)
  return (
    <div>
        <Nav openNav={handleNavShow}/>
        <MobileNav showNav={showNav} closeNav={handleNavClose}/>
    </div>
  )
}

export default ResposiveNav