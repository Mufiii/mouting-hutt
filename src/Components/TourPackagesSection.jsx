import React from 'react';
import TourPackage from '../Components/Package';
import groupTrip from '../Assets/group-tour.jpeg';
import javaTrip from '../Assets/java-tour.jpg';
import soloTrip from '../Assets/solo-trip.webp';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    imageUrl: groupTrip,
    days: '7 Days',
    price: '285',
    title: 'Bali Tour Package',
    dateRange: '23 August - 29 August',
  },
  {
    imageUrl: javaTrip,
    days: '5 Days',
    price: '218',
    title: 'Java Tour Package',
    dateRange: '23 August - 27 August',
  },
  {
    imageUrl: soloTrip,
    days: '3 Days',
    price: '163',
    title: 'Solo Tour Package',
    dateRange: '23 August - 25 August',
  },
];

const TourPackagesSection = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 py-12 px-6 lg:px-20">
      {/* Section Header */}
      <div className="mb-10 text-white">
        <h2 className="text-lg lg:text-xl font-semibold text-gray-300">Tour packages</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">Our tourist Packages</h1>
          <p className="text-gray-300 text-lg lg:text-xl">
            Our tourist destinations offer an unrivaled blend of natural beauty and cultural richness.
          </p>
        </div>
      </div>

      {/* Tour Package Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((tour, index) => (
          <TourPackage
            key={index}
            imageUrl={tour.imageUrl}
            days={tour.days}
            price={tour.price}
            title={tour.title}
            dateRange={tour.dateRange}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={()=> navigate('/packages') } 
          className="bg-black text-white font-bold py-3 px-8 rounded-xl hover:bg-gray-800 transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default TourPackagesSection;
