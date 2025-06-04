import SearchBox from '@/components/Helper/SearchBox'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* overlay for hero section(include vdo and search bar)   bg-amber-500*/}
        <div className='absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50'></div>  
        {/* vdeo */}
        <video src="/images/cloud.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover'></video>
        {/* text content */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
             <div className='flex flex-col items-center justify-center w-full h-full'>
              {/* for animation step: 3 */}
                <div data-aos="fade-up">
                    <h1 className='text-[25px] text-white lg:text-[47px] md:text-[35px] mb-4 md:mb-0 text-center font-bold uppercase tracking-[0.7rem]'> {/* check tracking-[0.7rem] */}
                        Where will you go next?{/* Explore more. Worry less. */}
                        </h1>
                        <p  className='text-center text-white font-medium md:text-normal text-lg [word-spacing:5px]'>Get the best offers, 20,0000+ happy customers, 3000+ destinations</p>
                </div>
                {/* Search Box */}
                <SearchBox />
                {/* Search button  */}
                <Link href="#" className='rounded relative px-14 md:px-28 py-2.5 overflow-hidden bg-orange-700 text-white -mt-4 group hover:bg-gradient-to-l hover:from-orange-400 hover:to-orange-700 hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300'>
                {/* check the -mt-4  */}
                <span className='absolute right-0 w-4 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40  bg-white opacity-10 rotate-12 ease'></span>
                {/* for more transtate check https://tailwindcss.com/docs/translate link tag nte ullil mukalilathe span move cheyyunna code */}
                <span className='relative font-bold'>Search</span>
                </Link>


             </div>

        </div>
    </div>
  )
}

export default Hero