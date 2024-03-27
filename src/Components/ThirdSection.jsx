import React from 'react'

function ThirdSection() {
  return (
    <div className=' flex flex-col items-center mt-40 mb-14'>
        <div className=' font-small text-4xl'>
            Explore <span className=' italic font-bold'>more projects</span>
        </div>
        <div className=' bg-black w-[20rem] mt-1 h-[1px] mb-10 ml-0'></div>
        <div className=' flex justify-between w-full'>
            <img src='/Assets/c1.png'
            className='object-contain w-[30rem]'
            />
            <img src='/Assets/c2.png'
            className='object-contain w-[30rem]'
            />
            <img src='/Assets/c3.png'
            className='object-contain w-[30rem]'
            />
        </div>
    </div>
  )
}

export default ThirdSection