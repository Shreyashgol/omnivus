import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    title: 'Web Development',
    description: 'Building modern and responsive websites that deliver results.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps tailored to your business goals.',
    icon: '📱',
  },
  {
    title: 'Cloud Services',
    description: 'Secure and scalable cloud-based infrastructure solutions.',
    icon: '☁️',
  },
  {
    title: 'IT Consultancy',
    description: 'Expert advice to align your IT strategy with your business.',
    icon: '💼',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs for apps and websites.',
    icon: '🎨',
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your systems and data with our security solutions.',
    icon: '🔒',
  },
]

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-2">Home / Services</p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Offer</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12 px-4">
        <h3 className="text-2xl font-semibold mb-4">Looking for a Custom Solution?</h3>
        <p className="mb-6">Get in touch with us to build a tailored IT service for your business.</p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  )
}

export default Services
