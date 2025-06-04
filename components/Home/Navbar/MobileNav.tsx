import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type props = {
  showNav: boolean,
  closeNav:() => void
}

const MobileNav = ({showNav, closeNav}:props) => {
  const navOpen = showNav? 'translate-x-0' : 'translate-x-[-100%]'  //to hise and show mobile navBar(slide navbar) 'translate-x-[-100%]':for close | 'translate-x-0': for open
  return (
    <div>
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 w-full h-screen bg-black opacity-70 z-[1002]  transform transition-all duration-500`}></div>
    {/* navlinks */}
    <div className={`fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%]  text-white bg-orange-700 space-y-6 z-[1050]`}>
    {navLinks?.map((link) => {
      return (
        <Link key={link?.id} href={link?.url}>
          <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link?.label}</p> 
          {/* w-fix used for the border bottom not exceed the link.label text  */}
        </Link>
      )
    })}
    {/* close button */}
    <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>

    </div>
    </div>
  )
}

export default MobileNav