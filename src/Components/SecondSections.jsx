import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';

function SecondSection() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <div data-aos="fade-left" data-aos-offset="150" id='page2'>
        <div data-aos="fade-right" className=' font-small font-bold text-[8rem] text-center mr-60 '>OUR</div>
        <div data-aos="fade-left" className='absolute font-small italic font-thin text-[8rem] right-[27rem] z-10 '>WORK</div>
        <div className=' grid grid-cols-[1.2fr_1fr] mt-10'>
          <img data-aos="fade-right"
          src='/Assets/Image1.png'
          className=' object-contain w-full mt-8 '
          />
          
          <div data-aos="fade-down" className=' p-10'>
            <div data-aos="fade-down" className=' font-small text-[2.5rem] text-gray-500 mt-16'>Lodestone</div>
            <div data-aos="fade-down" className=' font-small text-[2.5rem] font-bold pr-10'>A website which excels in digital solutions, trusted by top tech leaders.</div>
            <button data-aos="flip-down" className=' hover:shadow-lg hover:underline cursor-pointer hover:border-black hover:border-opacity-[20%] hover:shadow-[#FDD916] group w-[10rem] h-[3rem] hover:bg-[#FDD916] transition ease-in-out delay-15 duration-700  mt-10 rounded-full text-center items-center flex px-4 justify-center font-small font-bold '> <div className='text-center'>View project</div> 
            <div className=' hidden group-hover:block opacity-0 transition-opacity group-hover:opacity-100'><img className='' src='/Assets/Icons2.png'/></div></button>
            <Link
            to='moreprojects'
            offset={-120}
            smooth= {true}
            className=' font-small absolute cursor-pointer bottom-0 right-0 p-10 opacity-50 rounded'
          >Scroll to explore v
          </Link>
            
          </div>
          
          
        </div>
    </div>
  )
}

export default SecondSection