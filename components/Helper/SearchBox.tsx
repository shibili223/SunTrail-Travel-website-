import React from 'react'
import { FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-b-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
      {/* first search input */}
      <div className='flex items-center space-x-6 '>
        <FaMap className='text-blue-600 w-6 h-6 shrink-0'/> 
        {/* this icon is not visible when i gave below input field. to fix this  shrink-0 */}
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
            <input type="text" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800' />
        </div>
      </div>
      {/* second search input */}
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600'/> 
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
            <input type="date" className='outline-none border-none'/>
        </div>
      </div>
            {/* Third search input */}
      <div className='flex items-center space-x-6'>
        <FaCalendarWeek className='w-6 h-6 text-blue-600'/> 
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
            <input type="date" className='outline-none border-none'/>
        </div>
      </div>
      {/* 4th input */}
      <div className='flex items-center space-x-6'>
        <FaUserGroup className='w-6 h-6 text-blue-600'/>
        <div>
            <p className='text-lg font-medium mb-[0.2rem]'>Rooms & Guests</p>
            <p>1 Room 1 Guest</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
