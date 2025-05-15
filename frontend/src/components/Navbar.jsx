import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { LuStethoscope } from 'react-icons/lu'

const Navbar = ({home,doctor,near}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [clName, setClName] = useState('')
  const handleSwipes = () => {
    if (!menuOpen) {
      setClName('slide-in-left');
      setMenuOpen(true);
    } else {
      setClName('slide-out-left');
      setTimeout(() => setMenuOpen(false), 400)
    }
  }
  const handleWhatsapp = () => {
    const message = "Hey Aryan, I am interested in your *hospital landing page*. I would like to get it. Please share more details.";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/+918756990638?text=${encodedMessage}`;
    window.open(url, "_blank");
  }
  return (
    <>
      <nav className='h-[75px] w-full bg-[#ffffff] flex items-center justify-between md:px-12 px-8 sticky top-0 z-50'>
        <div>
          <span className='text-3xl font-bold tracking-wide'>Medi</span>
          <span className='text-3xl font-bold text-blue-600 '>Co</span>
        </div>
        <div className='h-full flex items-center'>
          <ul className='md:flex hidden gap-3 h-full items-center font-rubik text-[14.5px]'>
            <li className='cursor-pointer text-gray-600  hover:text-black hover:underline'><a onClick={home}>Home</a></li>
            {/* <li className='cursor-pointer text-gray-600  hover:text-black hover:underline'><a>Medicines</a></li> */}
            <li className='cursor-pointer text-gray-600  hover:text-black hover:underline'><a onClick={doctor}>Specalists</a></li>
            <li className='cursor-pointer text-gray-600  hover:text-black hover:underline'><a>Faculties</a></li>
            <li className='cursor-pointer text-gray-600  hover:text-black hover:underline'><a onClick={near}>Near by</a></li>
            <li className='cursor-pointer text-gray-600  hover:text-black hover:underline'><button onClick={handleWhatsapp} className='bg-blue-700 px-3 py-2 text-white rounded text-[13px] ml-5 outline-none hover:bg-blue-600 cursor-pointer transition-all ease-initial '>Book Appoinment</button></li>
          </ul>
          <div className='md:hidden block text-3xl'>
            <HiMenuAlt3 onClick={handleSwipes} />
          </div>
        </div>
      </nav>

      {menuOpen && <div className={`fixed ${clName} inset-0 p-2 flex flex-wrap justify-center items-center  h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.99)] overflow-auto`}>
        <div className="p-3 px-4 rounded-md relative">

          <div className=' w-[200px] p-2'>
            <ul className='text-white flex flex-col gap-3.5  font-rubik text-[14px] font-light'>
              <li className='w-full'><button className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Home</button></li>
              {/* <li className='w-full'><button className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Medicines</button></li> */}
              <li className='w-full'><button className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Specalists</button></li>
              <li className='w-full'><button className='bg-[#1a1818] w-full py-2 rounded cursor-pointer'>Faculties</button></li>
              <li className='w-full'><button onClick={handleWhatsapp} className='bg-blue-700 w-full py-1.5 rounded cursor-pointer'>Book Appoinment</button></li>
              <li onClick={handleSwipes} className='w-full flex items-center justify-center font-light underline font-mont cursor-pointer'>close</li>
            </ul>
          </div>

        </div>
      </div>}
    </>
  )
}

export default Navbar
