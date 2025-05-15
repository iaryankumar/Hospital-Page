import React from 'react'
import { FaStethoscope } from 'react-icons/fa'
import { IoIosClose, IoLogoWhatsapp } from 'react-icons/io'

const TopBar = () => {
  return (
    <>
    
    <header className='h-[60px] w-full bg-[#201f1f] text-white flex items-center justify-between px-12 font-rubik'>
    <div className='flex items-center justify-center gap-3'>
    <IoLogoWhatsapp className='text-3xl text-teal-500' />
    <h1 className='text-xl mt-1 tracking-wider'>9812121212</h1>
    <h1>,</h1>
    <h1 className='text-xl mt-1 tracking-wider'>9812121212</h1>
    </div>

    <div className='flex items-center justify-center gap-24'>
        <button className='bg-red-500 text-[14px] px-5 py-2 rounded-4xl flex items-center gap-3 hover:bg-red-800 cursor-pointer'><FaStethoscope /><span>Book Appoinment</span></button>
        <IoIosClose className='text-2xl hover:text-red-800 cursor-pointer' />
    </div>

    </header>

    </>
  )
}

export default TopBar
