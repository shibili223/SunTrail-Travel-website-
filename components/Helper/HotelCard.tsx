import React from 'react'
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
   hotel: {
    id: number;
    image: string;
    name: string;
    rating: number;
    reviews: string;
    price: string;
    location: string;
    }
}

const HotelCard = ({hotel}:Props) => {
  return (
    <div>
        <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
            {/* Add to fav icon */}
            <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full flex flex-col text-black items-center justify-center '>
                <FaHeart className='w-3 h-3'/>
            </div>
            {/* overlay */}
            <div className='absolute inset-0 bg-black opacity-20 z-10 '></div>
            {/* Image */}
            <Image src={hotel?.image} alt={hotel?.name} width={500} height={500}  className='h-full w-full overflow-hidden transition-all duration-300 object-cover group-hover:scale-110'/> {/* scale-110 for zooming effect */}
        </div>
        {/* Content */}
        <div className='mt-3'>
          <h1 className='text-lg font-semibold text-blue-900 hover:text-black duration-200 cursor-pointer'>{hotel?.name}</h1>
          <p className='text-sm font-normal text-gray-700 mt-2'>{hotel?.location}</p>
          {/* Ratings */}
          <div className='flex items-center space-x-2'>
            <div className='px-2 py-2 bg-orange-600 rounded-full font-bold text-white text-xs sm:rounded-md '>
              {hotel.rating}
            </div>
            <p className='text-sm text-gray-800'>Exceptional</p>
            <p className='text-sm font-bold text-gray-800'>{hotel.reviews}</p>
          </div>
          {/* Prices */}
            <p className='mt-1 sm:mt-2 text-gray-700 font-medium'>
              Starting from <span  >${hotel.price}</span>
            </p>
        </div>
    </div>
  )
}

export default HotelCard