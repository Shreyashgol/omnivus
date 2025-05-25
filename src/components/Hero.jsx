import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24 text-center px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          IT Solutions & Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          We provide innovative and effective IT solutions for your business growth.
        </p>
        <a href="#services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Our Services
        </a>
      </div>
    </section>
  )
}

export default Hero

