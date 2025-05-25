import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from '/Users/shreyashgolhani1/Desktop/collegepure-assign/omnivus-clone/src/assets/image1.png'


const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 IT Solutions Trends in 2025',
      excerpt: 'Discover the top trends in IT solutions that are transforming industries in 2025...',
      date: 'May 20, 2025',
      image: '',
      author: 'Admin',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'Why Cybersecurity Is More Important Than Ever',
      excerpt: 'With increasing cyber threats, here’s why every business should prioritize cybersecurity...',
      date: 'May 15, 2025',
      image: {image1},
      author: 'Admin',
      category: 'Security',
    },
    {
      id: 3,
      title: 'Choosing the Right Cloud Provider for Your Business',
      excerpt: 'Azure, AWS, or Google Cloud? Find out how to make the right decision...',
      date: 'May 10, 2025',
      image: 'https://source.unsplash.com/600x400/?cloud,servers',
      author: 'Admin',
      category: 'Cloud',
    },
  ];

  const categories = ['Technology', 'Security', 'Cloud', 'Development', 'Design'];
  const recentPosts = blogPosts.slice(0, 3);
  const tags = ['IT', 'Solutions', 'Cybersecurity', 'Cloud', 'Design'];

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
        <p className="text-gray-600 mt-2">Home / Blog</p>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            {blogPosts.map((post) => (
              <div key={post.id} className="mb-8 border-b pb-8">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4 rounded" />
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="mr-4">{post.date}</span>
                  <span className="mr-4">By {post.author}</span>
                  <span className="mr-4">In {post.category}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-600 hover:underline">Read More →</a>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mx-1">1</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mx-1">2</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mx-1">Next</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded"
              />
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="list-disc list-inside text-gray-700">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline">{category}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <ul className="text-gray-700">
                {recentPosts.map((post) => (
                  <li key={post.id} className="mb-4">
                    <a href="#" className="hover:underline">{post.title}</a>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 text-sm"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;

