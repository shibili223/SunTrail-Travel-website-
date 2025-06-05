import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='pt-20 pb-20 flex flex-col items-center justify-center bg-orange-700'>     {/* bg-[#13357b] */}
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2  gap-10'>
          {/* Text Content */}
          <div>
            <h1 className='text-white font-semibold text-2xl '>Why People Love Us?</h1>{/* Hear From Our Customers */}
            <p className='mt-6 text-gray-200'>{`We value every voice and love hearing from our customers.Here’s what real people are saying about their experience with us.Their stories inspire us to keep doing better every day.Whether it's praise or feedback, we’re always listening.`}
            </p>
            {/* Rating */}
            <div className='mt-6 flex items-center space-x-6'>
              <div>
              <p className='text-2xl font-bold text-white'>4.95</p>
              <p className='text-white mb-2'>Overall rating</p>
              <div className='flex items-center'>
                <FaStar className='text-white'/>
                <FaStar className='text-white'/>
                <FaStar className='text-white'/>
                <FaStar className='text-white'/>
                <FaStar className='text-white'/>
              </div>
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className='overflow-hidden' data-aos="fade-left"  >
          <ReviewSlider />
          </div>
        </div>
    </div>
  )
}

export default Reviews