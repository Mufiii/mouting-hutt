import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  return (

    <nav className="absolute top-0 left-0 w-full h-1/6 px-8 flex justify-between items-center bg-blue-700 text-white">
        <div className="font-bold text-xl">
          <h1 className="text-2xl">MoutingHutt</h1>
        </div>

        <div className="flex items-center justify-between bg-slate-100 bg-opacity-40 text-white py-2 px-8 rounded-full w-2/5">
          <button className="hover:text-gray-300 text-white font-semibold" onClick={()=> navigate('/')}>Home</button>
          <button className="hover:text-gray-300 text-white font-semibold" onClick={()=> navigate('/packages')}>Packages</button>
          <button className="hover:text-gray-300 text-white font-semibold" onClick={()=> navigate('/services')}>Services</button>
          <button className="hover:text-gray-300 text-white font-semibold" onClick={()=> navigate('/blog')}>Blog</button>
          <button className="hover:text-gray-300 text-white font-semibold" onClick={()=> navigate('/about')}>About</button>
          <button className="hover:text-gray-300 text-white font-semibold" onClick={()=> navigate('/contact')}>Contact</button>
          
        </div>

        <div className="font-semibold">
          <a href="/login" className="hover:bg-cyan-700 hover:text-black bg-slate-100 bg-opacity-40 text-white py-2 px-4 rounded-full">
            Login / Signup
          </a>
        </div>
      </nav>
  )
}

export default Navbar
