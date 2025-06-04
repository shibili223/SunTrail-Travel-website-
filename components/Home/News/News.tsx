import NewsCerd from '@/components/Helper/NewsCerd'
import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'

const News = () => {
  return (
    <div className='pt-16 pb-16 '>
      {/* Section Heading */}
        <SectionHeading heading='Exiting Travel News for You' subHeading={`Discover What's New in the World of Travel.`} />
        <div className='w-[80%] mx-auto grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
          <div
            data-aos='fade-left' 
            data-aos-anchor-placement='top-center'
          >
            <NewsCerd 
            image="/images/ds1.jpg" 
            title="Top 10 places to visit in Australia"
            date="15 November"
            />
            </div>
            <div
            data-aos='fade-left'  //do fade-right
            data-aos-anchor-placement='top-center'
            data-aos-delay="100"
            >
            <NewsCerd 
            image="/images/ds4.jpg" 
            title="Top 10 places to visit  in UAE"
            date="25 January"
            />

            </div>
            <div 
            data-aos='fade-left' //do fade-right
            data-aos-anchor-placement='top-center'
            data-aos-delay="200"
            >
            <NewsCerd 
            image="/images/ds3.webp" 
            title="Top 10 places to visit  in India"
            date="07 March"
            />             
            </div>

            <div
            data-aos='fade-left' //do fade-right
            data-aos-anchor-placement='top-center'
            data-aos-delay="300"
            >
            <NewsCerd 
            image="/images/ds2.jpg" 
            title="Top 10 places to visit  Russia "
            date="19th May"
            /> 
            </div>

        
        </div>
    </div>
  )
}

export default News