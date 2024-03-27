import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

function ThirdSection() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <div id='moreprojects' data-aos="fade-right" data-aos-offset="200" className=' flex flex-col items-center mt-40 mb-14'>
        <div className=' font-small text-4xl'>
            Explore <span className=' italic font-bold'>more projects</span>
        </div>
        <div className=' bg-black w-[20rem] mt-1 h-[1px] mb-10 ml-0'></div>
        <div className=' flex justify-between w-full'>
            <img data-aos="flip-up" data-aos-delay="100" src='/Assets/c1.png'
            className='object-contain w-[30rem]'
            />
            <img data-aos="flip-down" data-aos-delay="100" src='/Assets/c2.png'
            className='object-contain w-[30rem]'
            />
            <img data-aos="flip-up" data-aos-delay="100" src='/Assets/c3.png'
            className='object-contain w-[30rem]'
            />
        </div>
    </div>
  )
}

export default ThirdSection