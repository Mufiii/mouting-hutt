import React from 'react';
import blog1 from '../src/Assets/blog1.png';
import blog2 from '../src/Assets/blog2.png';
import blogIcon from '../src/Assets/blogIcon.png';

const Blogs = () => {
  const stories = [
    {
      image: blog1,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: 'When an unknown printer took a galley of type and scrambled it to make a type specimen book...',
    },
    {
      image: blog2,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...',
    },
    {
      image: blog1,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: 'It has survived not only five centuries, but also the leap into electronic typesetting...',
    },
    {
      image: blog2,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text...',
    },
    {
      image: blog1,
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      description: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour...',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-900 p-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-3xl font-bold">Read all the Mouting Hutt stories here</h2>
        <img src={blogIcon} alt="Plane Icon" className="w-56 h-auto" /> {/* Increased icon size */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="max-w-xs bg-gray-100 rounded-lg shadow-lg overflow-hidden" // Reduced card size
          >
            <img src={story.image} alt="Story" className="w-full h-40 object-cover" /> {/* Reduced image height */}
            <div className="p-4">
              <h3 className="text-md font-bold text-gray-800 mb-2">{story.title}</h3>
              <p className="text-xs text-gray-600 mb-4">{story.description}</p> {/* Reduced text size */}
              <button className="bg-black text-white px-3 py-1.5 rounded hover:bg-gray-800 transition duration-200">
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
