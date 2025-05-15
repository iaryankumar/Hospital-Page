import React, { useRef } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Second from '../components/Second'
import Doctor from '../components/Doctors'
import Fourth from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  const doctorScroll = useRef()
  const homeScroll = useRef()
  const nearScroll = useRef()
  const doctor = () => {
    if (doctorScroll.current) {
      doctorScroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const home = () => {
    if (homeScroll.current) {
      homeScroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  const near = () => {
    if (nearScroll.current) {
      nearScroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Navbar doctor={doctor} home={home} near={near} />
      <div ref={homeScroll}>
        <Hero />
      </div>
      <Second />
      <div ref={doctorScroll}>
        <Doctor  />
      </div>
      <Fourth />
      <div ref={nearScroll}>
        <Footer />
      </div>
    </>
  )
}

export default Home
