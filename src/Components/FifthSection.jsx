import React from 'react';

function FifthSection() {
  return (
    <div className=" hover:bg-[#FDD916] overflow-hidden flex justify-center align-middle m-2 border-t-2 border-black">
      <div className=' h-[2px] w-full bg-black absolute'></div>
      <div className=' font-small text-7xl whitespace-nowrap hover:text-[#1689fd]'>HOME <img className='mb-2 object-contain w-8' src='/Assets/dot.png'/> ABOUT <img className='mb-2 object-contain w-8' src='/Assets/dot.png'/> PROJECTS <img className='mb-2 object-contain w-8' src='/Assets/dot.png'/> SERVICES <img className='mb-2 object-contain w-8' src='/Assets/dot.png'/> CONTACT</div>
      <div className=' h-[2px] w-full mt-[4.4rem] bg-black absolute'></div>
    </div>
  );
}

export default FifthSection;
