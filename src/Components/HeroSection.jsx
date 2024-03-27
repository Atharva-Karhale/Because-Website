import React, { useEffect } from 'react'
import {Link} from 'react-scroll'
import Aos from "aos";
import 'aos/dist/aos.css'

function HeroSection() {
    useEffect(() => {
        Aos.init()
      },[])

  return (
    <div data-aos="fade-right" data-aos-delay="450" id='herosection' className=' relative w-fit'>
        <img
            src='/Assets/HeroSection.png'
            className=' object-contain w-full'
        />
        <Link 
        to='second'
        offset={-220}
        smooth= {true}
        className=' absolute flex items-center justify-center inset-0 mt-[2rem] flex-col '>
        
            <div  className=' transition cursor-pointer  ease-in-out  hover:underline hover:decoration-[#5e4f259a] hover:bg-[#FDD916] hover:bg-opacity-30 hover:font-bold p-4 rounded-lg flex items-center flex-col group ml-10 z-10 font-small font-thin '>Scroll to explore <img 
            src='/Assets/down.png'
            className=' size-3 mt-2 group-hover:size-4'
            /></div>
            
        </Link>
            
        <div className=' absolute  w-full flex items-center inset-0 mt-[38rem]  justify-center '>
            <div className=' w-full h-[40rem] -z-10 ' style={{
          background: 'linear-gradient(to top, rgba(225,225,225,0), #FDD916, rgba(225,225,225,0))'
        }}>
                
            </div>
        </div>
        
        <div id='second'>
            <Link 
            to='page2'
            smooth={true}
            offset={200}
            className=' grid grid-cols-[2.5fr_0.35fr_1.5fr] h-[30rem]'>
                <div className='ml-24'>
                    <div data-aos="fade-up" className=' font-small font-bold text-4xl '>
                    We specialize in strategic solutions & branding, engaging website creation, and innovative digital experiences.
                    </div>
                    <p data-aos="fade-down" className='font-small font-thin text-lg'>Because preserves the authenticity your brand manifests, the identity and personality<br/>that creates your audience, the foundational truths that make your brand - you. </p>
                </div>
                <div></div>
                <div data-aos="fade-left">
                    <div className=' flex'>
                        <div data-aos="fade-left" className=' ml-4 font-small font-bold text-3xl mb-2'>
                            Strategy and Branding
                        </div>
                        <img data-aos="flip-right"
                        src='/Assets/Icon1.png'
                        className=' size-10 rotate-90 '
                        />
                    </div>

                    <div className=' bg-black h-[1px] mr-20'>

                    </div>
                    <div className=' flex'>
                        <div data-aos="fade-left" className=' ml-4 font-small font-bold text-3xl mt-2'>
                            Web and Development
                        </div>
                        <img data-aos="flip-left" 
                        src='/Assets/Icon1.png'
                        className=' size-10 mt-2'
                        />
                    </div>

                    <img 
                    src=' /Assets/logo2.png'
                    className=' right-0 absolute mix-blend-color-burn opacity-45 z-50'
                    />

                </div>



            </Link>
        </div>
        
        
    </div>
    
  )
}

export default HeroSection