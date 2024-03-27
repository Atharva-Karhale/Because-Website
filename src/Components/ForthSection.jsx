import React from 'react'

function ForthSection() {
  return (
    <div>
        <div className=' font-small font-bold text-[8rem] text-center mr-60'>WRITE</div>
        <div className=' font-small italic font-thin text-[8rem] text-center ml-64'>TO US</div>
        <div className='font-small text-center text-[1.4rem] mt-5'>let's start a dialogue! We're eager to connect and assist you.</div>
        <form className=' flex flex-col items-center mt-20'>
            <div className=' pb-10'>
                <input placeholder='Full name' className=' focus:outline-none border-none font-small text-xl mb-1  '/>
                <div className=' h-[2px] bg-black w-[40rem]'></div> 
            </div>

            <div className=' pb-10'>
                <input placeholder='Email Address' className=' focus:outline-none border-none font-small text-xl mb-1  '/>
                <div className=' h-[2px] bg-black w-[40rem]'></div> 
            </div>

            <div className=' pb-10'>
                <input placeholder='Company / Brand' className=' focus:outline-none border-none font-small text-xl mb-1  '/>
                <div className=' h-[2px] bg-black w-[40rem]'></div> 
            </div>

            <div className=' pb-10'>
                <input placeholder='Anything we should know about you or your work' className=' focus:outline-none border-none font-small text-xl mb-1  '/>
                <div className=' h-[2px] bg-black w-[40rem]'></div> 
                <button type='submit' className='hover:bg-[#FDD916] transition ease-in-out delay-150 hover:border-white mt-10 py-1 rounded-full text-center items-center flex px-4 font-small font-bold text-lg '>Submit <img className=' object-contain w-6 pl-1' src='/Assets/Icons2.png'/></button>
            </div>

            
            
        </form>
    </div>
  )
}

export default ForthSection