import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'

function ForthSection() {
    useEffect(() => {
        Aos.init()
      },[])
  return (
    <div data-aos="fade-left" className='mt-20'>
        <div data-aos="fade-left" data-aos-delay="100" className=' font-small font-bold text-[8rem] text-center mr-60'>WRITE</div>
        <div data-aos="fade-right" data-aos-delay="100" className=' font-small italic font-thin text-[8rem] text-center ml-64'>TO US</div>
        <div data-aos="flip-up" data-aos-delay="200" className='font-small text-center text-[1.4rem] mt-5'>let's start a dialogue! We're eager to connect and assist you.</div>
        <form className=' flex flex-col items-center mt-20'>
            <div data-aos="flip-up" className=' pb-10'>
                <div className='focus-within:bg-yellow-300'>
                    <input placeholder='Full name' className=' w-full focus:outline-none border-none font-small text-xl mb-1  '/>
                    <div className=' h-[2px] bg-black w-[40rem]'></div> 
                </div>
            </div>

            <div data-aos="flip-up" className=' pb-10'>
                <div className='focus-within:bg-yellow-300'>
                    <input placeholder='Email Address' className=' w-full  focus:outline-none border-none font-small text-xl mb-1  '/>
                    <div className=' h-[2px] bg-black w-[40rem]'></div>
                </div>
                 
            </div>

            <div data-aos="flip-up" className=' pb-10 group'>
                <div className=' focus-within:bg-yellow-300'>
                    <input placeholder='Company / Brand' className=' w-full  focus:outline-none border-none font-small text-xl mb-1  '/>
                    <div className=' h-[2px] bg-black w-[40rem]'></div> 
                </div>
            </div>

            <div data-aos="flip-up" className=' pb-10'>
                <div className=' focus-within:bg-yellow-300'>
                    <input placeholder='Anything we should know about you or your work' className=' w-full focus:outline-none border-none font-small text-xl mb-1  '/>
                    <div className=' h-[2px] bg-black w-[40rem]'></div> 
                </div>
                

                <button type='submit' class="relative mt-10 py-1 rounded-full text-center items-center flex px-4 font-small font-bold text-lg overflow-hidden text-black border-2 border-black shadow-inner group w-[8rem] h-[2.6rem] hover:border-black hover:border-2">
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#1689fd] opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease flex group-hover:items-center"><div>Submit</div> <img className=' object-contain w-6 pl-1' src='/Assets/Icons2.png'/></span>
                </button>
                
            </div>

            
            
        </form>
    </div>
  )
}

export default ForthSection