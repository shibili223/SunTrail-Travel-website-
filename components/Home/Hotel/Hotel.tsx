import HotelCard from '@/components/Helper/HotelCard'
import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'

const Hotel = () => {
  return (
    <div className='pt-20 pb-20px'>
        {/* Section Heading */}
        <SectionHeading heading={'Recommented Hotels'} subHeading={'Our Best Picks for Your Perfect Stay'} /> {/* subHeading={'Where Comfort Meets Convenience'}*/}
    <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 items-center'>
        {/* HotelCard */}
        {hotelsData?.map((data, index) => {
            return <div key={data?.id} 
            data-aos='fade-right' 
            data-aos-anchor-placement='top-center'
            data-aos-delay={`${index * 100}`} //1st image come with zero delay bcoz index=0 , index=1 image come with 100 delay index=2 come with 200delay and so on
            >
              <HotelCard hotel={data}/>

            </div>
        })}
    </div>
    </div>
  )
}

export default Hotel