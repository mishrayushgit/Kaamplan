import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0'>
    <nav className='flex bg-cyan-800 justify-between text-white py-2'>
      <div>
        <div className='logo'>
          <span className='font-bold text-xl mx-8 my-1'>Kaamplan</span>
        </div>
      </div>
      <ul className='flex mx-8 gap-5'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Kaams</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
