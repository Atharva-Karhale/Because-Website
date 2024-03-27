import React from 'react'

function SecondSection() {
  return (
    <div>
        <div className=' font-small font-bold text-[8rem] text-center mr-60'>OUR</div>
        <div className=' font-small italic font-thin text-[8rem] text-center ml-64'>WORK</div>
        <div className=' grid grid-cols-[1.2fr_1fr] mt-10'>
          <img 
          src='/Assets/Image1.png'
          className=' object-contain w-full '
          />
          <div className=' p-10'>
            <div className=' font-small text-[2.5rem] text-gray-500'>Lodestone</div>
            <div className=' font-small text-[2.5rem] font-bold pr-10'>A website which excels in digital solutions, trusted by top tech leaders.</div>
            <button className=' hover:bg-[#FDD916] transition ease-in-out delay-150 hover:border-white mt-10 rounded-full text-center items-center flex px-4 font-small font-bold '>View project <img className='ml-' src='/Assets/Icons2.png'/></button>
          </div>
        </div>
    </div>
  )
}

export default SecondSection