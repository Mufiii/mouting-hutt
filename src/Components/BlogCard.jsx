import React from 'react';

// Sample data for blog posts
const blogPosts = [
  { id: 1, title: 'How to Use Tailwind CSS with React', date: 'Jan 20, 2024', image: 'https://via.placeholder.com/50' },
  { id: 2, title: '10 CSS Tricks Every Developer Should Know', date: 'Jan 18, 2024', image: 'https://via.placeholder.com/50' },
  { id: 3, title: 'The Future of Web Design in 2024', date: 'Jan 15, 2024', image: 'https://via.placeholder.com/50' },
  { id: 4, title: 'Understanding Flexbox in CSS', date: 'Jan 10, 2024', image: 'https://via.placeholder.com/50' },
  { id: 5, title: '5 Tools to Improve Your Web Development Workflow', date: 'Jan 5, 2024', image: 'https://via.placeholder.com/50' },
];

const BlogCard = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className='flex justify-center text-center mb-4'>Our Blogs</h1>
      <p className="text-center text-gray-600 mb-8">
        Explore our collection of insightful articles about the beauty of Himachal Pradesh, <br />
        hiking trails, nature, and the unique stays in the region.
      </p>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Content (Latest Post) */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-4">
              {blogPosts[0].title}
            </h1>
            <img
              src="https://via.placeholder.com/800x400"
              alt="Blog Image"
              className="w-full rounded-lg mb-6"
            />
            {/* <p className="text-gray-700">
              Curabitur non facilisis ante, sit amet scelerisque purus. Nulla
              vitae ex eu justo pretium eleifend. Nulla vulputate dolor nec
              ligula gravida, a mollis ipsum tempor. Pellentesque eu libero eu
              eros placerat tincidunt.
            </p> */}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-6">
              {/* Map through the blog posts (except the first one for the left side) */}
              {blogPosts.slice(1).map((post) => (
                <div key={post.id} className="flex space-x-4">
                  <img
                    src={post.image}
                    alt="Post Image"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <a
                      href={`/post/${post.id}`}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {post.title}
                    </a>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href="/all-posts"
                className="text-blue-600 hover:underline font-semibold"
              >
                See All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default BlogCard;