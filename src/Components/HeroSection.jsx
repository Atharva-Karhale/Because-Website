import React from 'react'

function HeroSection() {
  return (
    <div className=' relative'>
        <img
            src='/Assets/HeroSection.png'
            className=' object-contain w-full'
        />
        <div className='absolute flex items-center justify-center inset-0 mt-[2rem]'>
            <div className='ml-10 z-10 font-small font-thin'>Scroll to explore</div>
            </div>
        <div className=' absolute  w-full flex items-center inset-0 mt-[38rem]  justify-center '>
            <div className=' w-full h-[40rem] bg-red-200 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ' style={{
          background: 'linear-gradient(to top, rgba(225,225,225,0), #FDD916, rgba(225,225,225,0))'
        }}>
                
            </div>
        </div>
        
        <div className=' grid grid-cols-[2.5fr_0.35fr_1.5fr] h-[30rem]'>
            <div className='ml-24'>
                <div className=' font-small font-bold text-4xl '>
                We specialize in strategic solutions & branding, engaging website creation, and innovative digital experiences.
                </div>
                <p className='font-small font-thin text-lg'>Because preserves the authenticity your brand manifests, the identity and personality<br/>that creates your audience, the foundational truths that make your brand - you. </p>
            </div>
            <div></div>
            <div>
                <div className=' flex'>
                    <div className=' ml-4 font-small font-bold text-3xl mb-2'>
                        Strategy and Branding
                    </div>
                    <img 
                    src='/Assets/Icon1.png'
                    className=' size-10 rotate-90 '
                    />
                </div>
                
                <div className=' bg-black h-[1px] mr-20'>
                    
                </div>
                <div className=' flex'>
                    <div className=' ml-4 font-small font-bold text-3xl mt-2'>
                        Strategy and Branding
                    </div>
                    <img 
                    src='/Assets/Icon1.png'
                    className=' size-10 mt-2'
                    />
                </div>

                <img 
                src=' /Assets/logo2.png'
                className=' right-0 absolute mix-blend-color-burn opacity-45 z-50'
                />
                
            </div>
            
            
            
        </div>
        
    </div>
    
  )
}

export default HeroSection