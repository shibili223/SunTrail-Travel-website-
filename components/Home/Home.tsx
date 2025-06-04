'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination '
import Hotel from './Hotel/Hotel'
import WhyChoose from './WhyChoose/WhyChoose'
import Reviews from './Reviews/Reviews'
import News from './News/News'
import NewsLetter from './NewsLetter/NewsLetter'
// for  animation 
//  step: 1 goto AOS website -> click above githib icon -> scroll down then get npm i command paste it terminal and also get below 2 codes.this below first line shows error howe the mouse on the error then get npm i type code copy and pate it terminal
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  // for animation step: 2 , step:3 in hero section
  useEffect(() => {
    const iniAOS = async() => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement:'top-bottom',
      })
    }
    iniAOS()
   }, [])


  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Reviews />
      <News />
      <NewsLetter />
    </div>
  )
}

export default Home