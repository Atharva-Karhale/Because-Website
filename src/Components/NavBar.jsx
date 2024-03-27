import React from 'react'

function NavBar() {
  return (
    <div className=' shadow-md z-20 top-0 w-full h-24 bg-white fixed flex align-middle justify-between '>
        <img 
        src='/Assets/LOGO.png'
        className=' ml-24 object-contain w-56 my-auto'
        />
        <img 
        src='/Assets/HamBurgerMenu.png'
        className=' size-14 my-auto mr-4'
        />
    </div>
  )
}

export default NavBar