import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Omnivus</h1>
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`md:flex space-x-6 text-gray-700 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow md:shadow-none`}>
          <li className="my-2 md:my-0"><a href="/" className="hover:text-blue-500">Home</a></li>
          <li className="my-2 md:my-0"><a href="/services" className="hover:text-blue-500">Services</a></li>
          <li className="my-2 md:my-0"><a href="/blog" className="hover:text-blue-500">Blog</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

