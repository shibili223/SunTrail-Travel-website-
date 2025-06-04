import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* first part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>About Us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>ACareers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Magazine</p>
            </div>
            {/* second part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Contact</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Legal Notice</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Privacy Policy</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>GTerms & Condition</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Sitemap</p>
            </div>
            {/* Third Part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Car Hire</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Activity Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Tour List</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Flight Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-900'>Travel Agent</p>
            </div>
            {/* fourth part */}
            <div>
              <h1 className='text-lg font-bold'>Contact Us</h1>
              <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                <h1 className='text-base font-bold text-blue-800 mt-1'>+009 786 354</h1>
              </div>
              <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Our Email</h1>
                <h1 className='text-base font-bold text-blue-800 mt-1'>suntrail@gmail.com</h1>
              </div>           
               </div>
        </div>
        {/* Bottom section */}
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright @ 2024 SunTrail. All rights reserved</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social : </span>
                <Link href="#" className='text-gray-500 hover:text-gray-800'><FaFacebook/></Link> 
                <Link href="#" className='text-gray-500 hover:text-gray-800'><FaTwitter/></Link> 
                <Link href="#" className='text-gray-500 hover:text-gray-800'><FaDribbble /></Link> 
            </div>
        </div>
      
    </div>
  )
}

export default Footer
