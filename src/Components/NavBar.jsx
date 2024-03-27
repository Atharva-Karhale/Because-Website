import React, { useEffect } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from 'react-scroll';

function NavBar() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <div data-aos="fade-down" className=' shadow-md z-20 top-0 w-full h-24 bg-white fixed flex align-middle justify-between '>
        <Link 
        to='herosection'
        smooth={true}
        offset={10}
        className='  flex  '>
          <img data-aos="fade-right" data-aos-delay="200"
          src='/Assets/LOGO.png'
          className=' ms-24 object-contain w-56 my-auto cursor-pointer'
        />
        </Link>
        
        <img data-aos="fade-left" data-aos-delay="200"
        src='/Assets/HamBurgerMenu.png'
        className=' size-14 my-auto right-0 me-6 '
        />
    </div>
  )
}

export default NavBar