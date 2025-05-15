import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className='min-h-[350px] max-h-max w-full bg-gray-900'>
                <div className='h-max w-full flex md:flex-row flex-col-reverse  p-3'>
                    <ul className='h-full md:w-[50%] w-full  md:px-7 px-1 pt-3 text-[14px] text-blue-500'>
                        <h1 className='text-[17px] font-primary font-semibold text-white '>Doctors Panel</h1>
                        <li className='ml-1 underline cursor-pointer mt-1'>
                            <a>Dr.John doe</a>
                        </li>
                        <li className='ml-1 underline cursor-pointer mt-1'>
                            <a>Dr.Alex Superstar</a>
                        </li>
                        <li className='ml-1 underline cursor-pointer mt-1'>
                            <a>Dr.Jhony Warner</a>
                        </li>
                        <li className='ml-1 underline cursor-pointer mt-1'>
                            <a>Dr.Sofia Siddhiqui</a>
                        </li>
                        <li className='ml-1 underline cursor-pointer mt-1'>
                            <a>Dr.Rashmika Devorkonda</a>
                        </li>
                        <li className='ml-1 underline cursor-pointer mt-1'>
                            <a>Dr.John Alex</a>
                        </li>

                        <li className='ml-1 text-gray-500 cursor-pointer mt-16'>
                            <p> &copy; 2025 medico.com  All rights reserved. </p>
                        </li>
                        <li className='ml-1 text-gray-500 cursor-pointer mt-1'>
                            <p> <span>Designed by</span> <a href="" className='text-blue-600 underline'>Aryan</a> </p>
                        </li>
                    </ul> 
                    <div className='md:min-h-[300px] md:w-[50%] w-full flex items-center justify-center'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227821.9871026818!2d80.7776976372719!3d26.84890283036911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1747291892057!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border h-full w-full rounded"
                        />

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
