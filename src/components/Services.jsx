import React from 'react'

const services = [
  { title: "Web Development", desc: "High-quality web apps tailored to your business." },
  { title: "Cloud Services", desc: "Scalable and secure cloud integration." },
  { title: "IT Consulting", desc: "Expert guidance to boost tech strategy." }
]

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

