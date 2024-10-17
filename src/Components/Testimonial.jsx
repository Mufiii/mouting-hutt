import React from 'react'
import avatar from '../Assets/avatar.png'

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 to-blue-900">
      {/* Testimonial Card */}
      <div className="w-full max-w-4xl p-6 bg-opacity-25 bg-gray-500 text-white rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src={avatar}
            alt="User avatar"
          />
          <span className="font-semibold text-lg">kevin</span>
        </div>
        <p className="mt-4 text-lg leading-relaxed">
          This travel website is very informative and easy to use. I like how
          they present various destination options and travel packages with
          clear details. Offering pictures and destination descriptions helps me
          decide where I want to visit. Additionally, the ability to compare
          prices and reviews from other users is very helpful in decision
          making.
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.973 2.872a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.974-2.872a1 1 0 00-1.175 0l-3.974 2.872c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.09 9.101c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.516-4.674z" />
                </svg>
              ))}
          </div>
        </div>
      </div>

      {/* Centered Arrows Outside of Testimonial */}
      <div className="flex justify-center mt-6 space-x-20">
        <button className="p-2 bg-opacity-20 bg-gray-300 hover:bg-blue-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="p-2 bg-opacity-20 bg-gray-300 hover:bg-blue-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Testimonial
