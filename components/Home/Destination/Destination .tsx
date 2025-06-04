import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

function Destination () {
  return (
    <div className='pt-20 pb-20'>
        {/* section Heading */}
        <SectionHeading heading='Exploring Popular Desitnations' subHeading={`Discover the world's favorite travel spots and hidden gems`}/> 
        {/* Section Content or Sliider*/}
        <div className='mt-14 w-[80%] mx-auto'>
          <DestinationSlider />
        </div>
    </div>
  )
}

export default Destination 