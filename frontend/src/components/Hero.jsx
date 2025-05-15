import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  
  return (
    <>
      <div className='sm:h-[86vh] h-[70vh] w-full p-1 relative flex items-center justify-center'>
        <Carousel className='h-max w-full rounded overflow-hidden' autoPlay interval={8000} infiniteLoop={true} showThumbs={false} showStatus={false} stopOnHover={false} showArrows={false} showIndicators={false}>
          <div className='sm:h-[85vh] h-[69vh] w-full'>
            <img
              src='https://www.advantagerecruitinggroup.com/wp-content/uploads/2024/03/Why-Choose-the-Medical-Field-as-a-Career.jpg'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='sm:h-[85vh] h-[69vh] w-full'>
            <img
              src='https://www.snhu.edu/-/media/images/social/og/top-majors-in-medical-field-og.jpg'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='sm:h-[85vh] h-[69vh] w-full'>
            <img
              src='https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_640.jpg'
              className='w-full h-full object-cover'
            />
          </div>
          
        </Carousel>
        <div className='sm:h-[85vh] h-[69vh] w-[99.5%] bg-[rgb(0,0,0,0.8)] absolute top-1 rounded'></div>

        <div className='sm:h-[85vh] h-[70vh] w-[99.5%] absolute top-1 rounded flex items-center justify-center sm:text-gray-200 text-gray-200 font-rt flex-col px-8'>
          <h1 className='lg:text-9xl text-7xl'>Your Health</h1>
          <h1 className='lg:text-8xl text-6xl sm:mt-4 mt-0.5'>Our Priority .....</h1>
        </div>
      </div>
    </>
  )
}

export default Hero
