import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import {Link} from 'react-scroll'
import Aos from "aos";
import 'aos/dist/aos.css'

function SixthSection() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <div data-aos="flip-down" className='  flex flex-col items-center mt-12 '>
        <Link 
        to='herosection'
        
        smooth= {true}
        >
          <img src=' /Assets/Icon1.png' 
          className='hover:bg-[#1689fd] rounded-full size-[6.6rem]' />
        </Link>
        <div className=' mt-4 mb-8 font-small'>All rights reserved by Because </div>
    </div>
  )
}

export default SixthSection