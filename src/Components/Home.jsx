import React from 'react';
import bgImage from '../Assets/Login-bg.png';
import TourismSection from './Tourism';
import TourPackagesSection from './TourPackagesSection';
import Testimonial from './Testimonial';
import Blog from './Blog';

const Home = () => {
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center bg-transparent text-white">
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
          <a href="/" className="hover:bg-gray-200 hover:text-black bg-white text-gray-700 py-2 px-4 rounded-full">
            Login / Signup
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Extraordinary natural and cultural charm
        </h1>
        <p className="text-lg lg:text-xl text-white mb-8">
          Exploring Indonesia is an unforgettable adventure.
        </p>
        <button className="bg-slate-50 bg-opacity-75 text-black font-bold font-serif py-3 px-8 rounded-xl hover:bg-gray-200 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
    <TourismSection />
    <TourPackagesSection />
    <Testimonial />
    <Blog />
    </>
    
  );
};

export default Home;
