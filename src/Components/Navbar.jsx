import React from 'react'

const Navbar = () => {
  return (
    <div className='h-2/6 bg-black'>
      <nav className="absolute mt-2 top-0 left-0 w-full px-8 py-6 flex justify-between items-center bg-transparent text-white">
        <div className="font-bold text-xl">
          <h1 className="text-2xl">MoutingHutt</h1>
        </div>

        {/* Navigation Links inside a rounded box */}
        <div className="flex items-center justify-between bg-slate-100 bg-opacity-40 text-white py-2 px-8 rounded-full w-2/5">
          <button className="hover:text-gray-300 text-white font-semibold">Home</button>
          <button className="hover:text-gray-300 text-white font-semibold">Packages</button>
          <button className="hover:text-gray-300 text-white font-semibold">Services</button>
          <button className="hover:text-gray-300 text-white font-semibold">Blog</button>
          <button className="hover:text-gray-300 text-white font-semibold">About</button>
          <button className="hover:text-gray-300 text-white font-semibold">Contact</button>
          
        </div>

        {/* Login/Signup Button */}
        <div className="font-semibold">
          <a href="/login" className="hover:bg-cyan-700 hover:text-black bg-slate-100 bg-opacity-40 text-white py-2 px-4 rounded-full">
            Login / Signup
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
