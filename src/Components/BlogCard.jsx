import React from 'react'
import memories1 from '../Assets/memories1.jpg';
import memories2 from '../Assets/memories2.webp';
import { useNavigate } from 'react-router-dom';

const BlogCard = () => {

const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-b from-blue-900 to-blue-950 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-gray-300 text-3xl">Our Blog</p>
        <h2 className="text-white text-5xl font-bold font-sans mt-2">Our Travel Memories</h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md h-96 mx-auto">
          <img
            className="w-full h-60 object-cover" // Increased height for the image
            src={memories1}
            alt="Blog Image 1"
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm">Nov 14, 2022</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">
              2023 Travel Trends – what you need to know
            </h3>
            <p className="text-gray-600 mt-2">
              2023 taught us valuable life lessons. Plans don’t always work out, flexibility in life is key, and...
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md h-96 mx-auto">
          <img
            className="w-full h-60 object-cover" 
            src={memories2}
            alt="Blog Image 2"
          />
          <div className="p-4">
            <p className="text-gray-500 text-sm">Nov 18, 2022</p>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">
              Jeep Adventure is a new attraction for tourists visiting Garut
            </h3>
            <p className="text-gray-600 mt-2">
              Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...
            </p>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8">
        <button
          onClick={()=> navigate('/blog')} 
          className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
          view more
        </button>
      </div>
    </div>
  )
}

export default BlogCard
