import React from 'react'
import { FaBed } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { SiGooglemaps } from 'react-icons/si'

const Second = () => {
    return (
        <>
            <div className='h-max w-full'>
                <div className='h-max w-full rounded lg:pt-16 pt-7 pb-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-4 justify-items-center items-center sm:px-18 px-3'>
                    <div className='h-[90px] w-full border border-blue-50 bg-blue-50 rounded flex items-center group overflow-hidden px-4 relative cursor-pointer'>
                        <span className="absolute inset-0 bg-blue-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></span>
                        <FaUserDoctor className='text-3xl text-gray-800 relative z-10' />
                        <div className='flex-1 h-full ps-5 py-4 relative z-10'>
                            <h1 className='font-primary font-semibold text-gray-800'>City Specalist</h1>
                            <p className='leading-4 text-[13.5px] text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                        </div>
                    </div>
                    <div className='h-[90px] w-full border border-blue-50 bg-blue-50 rounded flex items-center group overflow-hidden px-4 relative cursor-pointer'>
                        <span className="absolute inset-0 bg-blue-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></span>
                        <FaBed className='text-3xl text-gray-800 relative z-10' />
                        <div className='flex-1 h-full ps-5 py-4 relative z-10'>
                            <h1 className='font-primary font-semibold text-gray-800'>Admit</h1>
                            <p className='leading-4 text-[13.5px] text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                        </div>
                    </div>
                    <div className='h-[90px] w-full border border-blue-50 bg-blue-50 rounded flex items-center group overflow-hidden px-4 relative cursor-pointer'>
                        <span className="absolute inset-0 bg-blue-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></span>
                        <SiGooglemaps className='text-3xl  relative z-10 text-orange-500' />
                        <div className='flex-1 h-full ps-5 py-4 relative z-10'>
                            <h1 className='font-primary font-semibold text-gray-800'>Near By</h1>
                            <p className='leading-4 text-[13.5px] text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second
