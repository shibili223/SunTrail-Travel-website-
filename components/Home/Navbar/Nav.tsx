'use client';
import React, { useEffect, useState } from 'react'
// import Image from 'next/image';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import { MdFlight } from 'react-icons/md';
import { HiBars3BottomRight } from 'react-icons/hi2';

type props = {
  openNav : () => void
}


// Navbar for large screen
const Nav = ({openNav}:props) => {

//  when we scroll down the page then navbar bg will be blue , the initial loading navbar shows without bg
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const bgHandler = () => {
          if(window.scrollY >= 90) setNavBg(true)
          if(window.scrollY < 90) setNavBg(false)
    };
  window.addEventListener('scroll', bgHandler)

  return () => window.removeEventListener('scroll', bgHandler)    //here return is a cleanUp function; use for to remove eventListener; cleanup function prevent unwanted sideEffect, memory leakage

  }, [])

  return (
    <div className={` ${navBg ? (' bg-[#1b1e7b]  shadow-md') : ('fixed')}  transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>  {/* navBg true then navbg will be blue if it false then navbg fixed without bg */} {/* bg-[#6464DC] */}
    
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center justify-center space-x-38'>
                <div className='relative inline-block'  data-aos="fade-right"  data-aos-duration="2000">
                  <MdFlight className='w-12 h-12  text-orange-500 ' /> {/* animate-bounce transition-transform duration-500 ease-in-out */}
                    {/* <Image src="/images/logo2.jpg" alt="Logo" width={130} height={60} /> */}
                </div>
                <h1 className='absolute text-xl md:text-2xl text-white font-bold mt-2 '>SunTrail</h1> {/* for animation animate-bounce */}
            </div>
            {/* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>   {/* navlinks hidden in smaller devise */}
              {navLinks?.map((link) => {
                return (
                <Link href={link?.url} key={link?.id}>
                  <p className='relative text-white hover:text-orange-500 transition-colors duration-300 group text-[17px] font-medium'>
                  {link?.label}
                  <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span> {/*underline*/}
                  </p>
                  </Link>
                  )
              })}

            </div>
            {/* Button */}
            <div className='flex items-center space-x-4'>
              <button className='bg-white text-gray-900 md:px-12 md:py-2.5 px-6 py-2 text-base hover:text-white hover:bg-orange-600 rounded-lg transition-all duration-200'>Book Now</button>
              {/* Burger Menu for small screens */}
              <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Nav