import Image from 'next/image';
import React from 'react'

type props = {
    image: string;
    title: string;
    date:string;
}

const NewsCerd = ({image, title, date}:props) => {
  return (
    <div>
        {/* Image */}
        <div className='h-[300px]'>
            <Image src={image} alt={title} width={300} height={300} className='w-full h-full object-cover rounded-lg'/>
        </div>
        {/* Text content */}
        <div>
            <h1 className='mt-5 text-lg text-gray-950 font-semibold hover:text-blue-800 transition-all duration-200 cursor-pointer'>{title}</h1>
            <p className='mt-2 text-sm text-gray-600'>{date}</p>
        </div>
    </div>
  )
}

export default NewsCerd