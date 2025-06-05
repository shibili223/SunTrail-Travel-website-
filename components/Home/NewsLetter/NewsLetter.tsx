import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <div className='bg-black pt-16 pb-16  w-full'> {/* bg-[#979c99]  */}
    <div className='flex flex-col items-center justify-center w-full'  data-aos="zoom-in-up" data-aos-mirror="true">
              <BsEnvelopePaper className='w-16 h-16 mt-20 text-white'/> 
        <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'> 
            {/* tracking-widest used for  increasing the letter spacing of text */}
            Your Travel Journey Starts Here
            </h1>
        <p className='mt-3 text-white text-xs sm:text-sm'>Sign up and we&apos;ll send the best deals to you</p>
        {/* Subscription input and buttons */}
        <div className='w-full'>
            <input 
            type="text" 
            placeholder='Email'
            className='px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none' 
            />
            <button className='px-6 py-3.5 bg-orange-700 hover:bg-orange-800 text-white mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none'>Subscribe</button>
        </div>


    </div>
    </div>
  )
}

export default NewsLetter