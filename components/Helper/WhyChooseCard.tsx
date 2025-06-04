import React from 'react'
import Image from 'next/image'

type Props = {
    images:string;
    title: string;
    width:number,
    height:number,
    description:string,
}

const WhyChooseCard = ({images, title, width, height, description}:Props) => {
  return (
    <div>
      {/* Image */}
        <Image src={images} alt='Image' width={width} height={height} className='mx-auto'/>
    {/* Content */}
    <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
    <p className='mt-2 text-xs font-medium text-center text-gray-700'>{description}</p>
    </div>
  )
}

export default WhyChooseCard