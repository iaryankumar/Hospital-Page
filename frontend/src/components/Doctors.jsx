import React from 'react'

const Third = () => {
  return (
    <>
      <div className='min-h-[95vh] max-h-max w-[99.5%] m-auto rounded mt-5 flex flex-col items-center lg:pt-20 md:pt-12 pt-5 pb-5 px-3 '>
        <h1 className='lg:text-7xl md:text-4xl text-2xl font-rt text-gray-700'>Meet Our <span className='text-blue-700'>Specalist...</span></h1>

        <div className='h-max w-full sm:mt-8 pt-9 grid lg:grid-cols-3 md:grid-cols-2 lg:px-17 lg:gap-10 gap-7'>
          {/* card  */}
          {Array(6).fill(0).map((ele, i) => {
              return <div key={i} className='h-[380px] w-full border border-gray-200 rounded flex flex-col gap-3 cursor-pointer hover:bg-gray-50 transition-all ease-initial'>
            <div className='h-[150px] w-full flex items-center gap-4 px-4 rounded'>
              <img src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" alt='aaabc' className='h-[105px] w-[105px] rounded-full object-cover' />
              <div className='h-max w-full flex flex-col justify-center gap-0'>
                <h1 className='font-semibold font-primary text-[18px] text-gray-800'>Dr. John Doe</h1>
                <p className=' text-[14px] text-gray-800 '>MBBS Ph.D</p>
                <div className='flex gap-0.5 mt-2'>
                  {Array(4).fill(0).map((ele, i) => {
                    return <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FFD700" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.4 8.172L12 18.896l-7.334 3.867 1.4-8.172L.132 9.21l8.2-1.192z" />
                    </svg>
                  })}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#e0e0e0" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.4 8.172L12 18.896l-7.334 3.867 1.4-8.172L.132 9.21l8.2-1.192z" />
                    <defs>
                      <clipPath id="half">
                        <rect x="0" y="0" width="12" height="24" />
                      </clipPath>
                    </defs>
                    <path fill="#FFD700" clipPath="url(#half)" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.781 1.4 8.172L12 18.896l-7.334 3.867 1.4-8.172L.132 9.21l8.2-1.192z" />
                  </svg>

                </div>

              </div>
            </div>
            <div className='flex-1 w-full px-9 text-[15.5px] font-primary text-gray-700'>
              <p>Dr. John Doe is a skilled cardiologist with expertise in treating heart-related conditions. He completed his medical education from AIIMS, New Delhi, and is known for his patient-focused and accurate approach to cardiac care.</p>
            </div>
          </div>
          })
          }
          {/* card  */}
        </div>
      </div>
    </>
  )
}

export default Third
