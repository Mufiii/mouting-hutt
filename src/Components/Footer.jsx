import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
        <div className="mb-6 border-t-2 border-gray-300 opacity-30 mx-6 lg:mx-20"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 lg:px-20 space-y-8 md:space-y-0">
        
        {/* Description Section */}
        <div className="text-center md:text-left md:w-1/3">
          <h4 className="text-xl font-bold mb-2">MoutingHutt</h4>
          <p className="text-sm leading-relaxed">
            A tour homestay booking site allows travelers to find and book unique, locally hosted accommodations, offering an authentic and personalized stay experience.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-20 border-l border-gray-300 mx-8"></div>

        {/* Pages Section */}
        <div className="text-center md:text-left md:w-1/3 space-y-2">
          <h4 className="text-lg font-semibold mb-2">Pages</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li>terms & condtions</li>
            <li></li>
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-20 border-l border-gray-300 mx-8"></div>

        {/* Social Media Section */}
        <div className="text-center md:text-left md:w-1/3 space-y-2">
          <h4 className="text-lg font-semibold mb-2">Social Media</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-red-500 hover:text-red-700">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
