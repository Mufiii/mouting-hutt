import React from 'react';
import BF1 from '../Assets/BF1.webp';
import Bf2 from '../Assets/Bf2.webp';
import Bf3 from '../Assets/Bf3.webp';
import Lunch1 from '../Assets/Lunch1.webp';
import Lunch2 from '../Assets/Lunch2.jpg';
import Dnr1 from '../Assets/Dnr1.webp';
import Dnr2 from '../Assets/Dnr2.webp';

const meals = {
  breakfast: [
    { name: 'Mooli Paratha', image: BF1 },
    { name: 'Aloo Paratha', image: Bf2 },
    { name: 'Paneer Basachilla', image: Bf3 },
  ],
  lunch: [
    { name: 'Aloo Matar with Rice', image: Lunch1 },
    { name: 'Dal and Rice', image: Lunch2 },
    { name: 'Buttered Corn Rice', image: Lunch1 },
    { name: 'Lorem Ipsum', image: Lunch2 },
  ],
  dinner: [
    { name: 'Cauliflower Sabji with Roti', image: Dnr1 },
    { name: 'Baigan ka Bharta', image: Dnr2 },
    { name: 'Lorem Ipsum', image: Dnr1 },
    { name: 'Lorem Ipsum', image: Dnr2 },
    { name: 'Lorem Ipsum', image: Dnr1 },
  ],
};

const MealSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4 border-b-2 border-white inline-block pb-1">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-black">
          <img src={item.image} alt={item.name} className="w-full h-28 object-cover" />
          <p className="p-2 text-center font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Food = () => {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-900 text-white py-16">
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
      <h2 className="text-3xl font-serif font-semibold text-center mb-10">
        From Dawn to Dusk: Breakfast, Lunch, and Dinner Delights
      </h2>
      
      <div className="max-w-5xl mx-auto px-4">
        <MealSection title="Breakfast" items={meals.breakfast} />
        <MealSection title="Lunch" items={meals.lunch} />
        <MealSection title="Dinner" items={meals.dinner} />
      </div>
    </div>
  );
};

export default Food;
