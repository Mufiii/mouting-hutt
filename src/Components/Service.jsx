import React from 'react';
import ServiceBg from '../Assets/service-bg.png'
import ThingsToDo from './ThingsTodo';

const Service = () => {
  return (
    <div>
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 py-12 px-6 lg:px-20">
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
       <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-5xl text-white font-semibold text-center mb-4">OUR SERVICES</h2>
          <p className="text-center text-white text-lg mb-16">
            Trip services help plan and book travel for a hassle-free experience.
          </p>

          <h3 className="text-4xl text-white font-bold mb-20">
            <span className="inline-block underline decoration-8">South Indian </span> and Himachali Delicacies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-3xl text-white font-semibold mb-4">Nourish Your Soul with Authentic Cuisine</h4>
              <p className="text-lg text-white mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
              </p>
              <button className="bg-black text-white py-2 px-6 rounded-lg">View More</button>
            </div>

            <div className="flex justify-center">
              <img
                src={ServiceBg}
                alt="Girl enjoying food"
                className="rounded-xl shadow-lg w-96 h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
      <ThingsToDo />
    </div>
  )
}

export default Service
