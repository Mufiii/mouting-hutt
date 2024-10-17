import React from 'react';
import bgImage from '../Assets/Login-bg.png';

const Signup = () => {
  return (
    <div className='w-full h-screen overflow-hidden relative'>
      <img 
        src={bgImage} 
        alt="Login Background" 
        className='w-full h-full object-cover' 
      />
      
      <div className='absolute top-1/2 left-1/2 w-[1000px] h-[600px] bg-white flex transform -translate-x-1/2 -translate-y-1/2 shadow-lg'>
        
        <div className='flex-1 flex flex-col justify-center p-10'>
          <h2 className='text-gray-800 font-sans font-bold text-2xl mb-6'>Signup</h2>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="fullName">
                Full Name
              </label>
              <input 
                className='appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id="fullName" 
                type="text" 
                placeholder="Enter your full name" 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">
                Email Address
              </label>
              <input 
                className='appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="phone">
                Phone Number
              </label>
              <input 
                className='appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">
                Password
              </label>
              <input 
                className='appearance-none border-b-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
              />
            </div>
            <div className='flex items-center justify-between'>
              <button 
                className='bg-blue-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-52' 
                type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className='w-72 h-full bg-gradient-to-b from-blue-950 to-blue-700 flex flex-col'>
          <div className='flex pt-24 pl-10'>
            <h2 className='text-white font-sans font-bold'>Signup</h2>
          </div>
          <div className='flex pl-4 pt-10'>
            <p className='font-sans font-semibold text-white'>Are you planning a quick getaway? Then you are at the right door.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup ;
