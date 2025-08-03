import React, { useState } from 'react';
import productImage from '../images/home - Copy.jpg'
import aboutImage from '../images/about - Copy.jpg'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // state for mobile menu
  const products = [
  {
    id: 1,
    title: 'Gree Split Air Conditioner',
    description: 'Efficient cooling with inverter technology and quiet operation for your home or office.',
    price: 499,
    image: 'https://storage.googleapis.com/a1aa/image/857c55c5-aa32-4287-4888-479b29f00771.jpg'
  },
  {
    id: 2,
    title: 'Gree Window Air Conditioner',
    description: 'Compact and powerful window AC unit with easy installation and energy-saving features.',
    price: 349,
    image: 'https://storage.googleapis.com/a1aa/image/72ad761f-639d-4892-92a1-c71cd5ff6af7.jpg'
  },
  {
    id: 3,
    title: 'Gree Portable Heater',
    description: 'Portable electric heater with adjustable thermostat and safety features for winter warmth.',
    price: 199,
    image: 'https://storage.googleapis.com/a1aa/image/0d33d94d-747c-4fba-17c9-22dfae50227b.jpg'
  },
  {
    id: 4,
    title: 'Gree Air Purifier',
    description: 'Advanced air purifier with HEPA filter to keep your indoor air clean and fresh.',
    price: 299,
    image: 'https://storage.googleapis.com/a1aa/image/d1299dc2-3a2f-4b2b-e1fe-f62071c25a4a.jpg'
  }
  // Add more products here if needed
];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header / Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a className="flex items-center space-x-2" href="#">
            <img
              alt="Gree logo"
              className="w-10 h-10"
              src="https://storage.googleapis.com/a1aa/image/871de908-b605-4b16-5727-d06f370e7d4d.jpg"
              width="40"
              height="40"
            />
            <span className="text-2xl font-bold text-green-600">Ghree</span>
          </a>
          <nav className="hidden md:flex space-x-8 font-semibold text-gray-700">
            <a href="#products" className="hover:text-green-600 transition">Products</a>
            <a href="#about" className="hover:text-green-600 transition">About</a>
            <a href="#contact" className="hover:text-green-600 transition">Contact</a>
          </nav>
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              onClick={() => setMenuOpen(!menuOpen)} // toggles menu
            >
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          className={`md:hidden bg-white border-t border-gray-200 ${menuOpen ? 'block' : 'hidden'}`}
        >
          <a
            href="#products"
            className="block px-4 py-3 border-b border-gray-200 hover:bg-green-50 text-green-700 font-semibold"
          >
            Products
          </a>
          <a
            href="#about"
            className="block px-4 py-3 border-b border-gray-200 hover:bg-green-50 text-green-700 font-semibold"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-3 hover:bg-green-50 text-green-700 font-semibold"
          >
            Contact
          </a>
        </nav>
      </header>
      {/*-- Hero Section  */}
  <section className="bg-green-50">
   <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-20">
    <div className="max-w-xl text-center md:text-left">
     <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 leading-tight">
      Discover the Best Gree Products for Your Home
     </h1>
     <p className="mt-6 text-lg text-green-900">
      Energy-efficient air conditioners, heaters, and appliances designed to keep your home comfortable all year round.
     </p>
     <a className="inline-block mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition" href="#products">
      Shop Now
     </a>
    </div>
    <div className="w-full max-w-md">
     <img alt="Gree split air conditioner unit mounted on a wall in a modern living room" className="rounded-lg shadow-lg mx-auto" height="350" src={productImage} width="400"/>
    </div>
   </div>
  </section>
   {/*-- Products Section  */}
  <section className="max-w-7xl mx-auto px-6 py-16" id="products">
      <h2 className="text-3xl font-bold text-green-700 mb-12 text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <article key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-green-800 mb-2">{product.title}</h3>
              <p className="text-gray-600 flex-grow">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-700 font-bold text-lg">${product.price}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
   {/*-- About Section  */}
  <section className="bg-green-100 py-16" id="about">
   <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2">
     <img alt="Gree manufacturing factory with rows of air conditioners and appliances in a clean modern facility" className="rounded-lg shadow-lg" height="400" src={aboutImage} width="600"/>
    </div>
    <div className="md:w-1/2">
     <h2 className="text-3xl font-bold text-green-800 mb-6">
      About Gree
     </h2>
     <p className="text-green-900 text-lg leading-relaxed mb-4">
      Gree Electric Appliances is a global leader in air conditioning and home appliances, committed to innovation, quality, and sustainability. Our products are designed to provide comfort and energy efficiency for homes and businesses worldwide.
     </p>
     <p className="text-green-900 text-lg leading-relaxed">
      With decades of experience and cutting-edge technology, Gree continues to set the standard for reliable and eco-friendly climate solutions.
     </p>
    </div>
   </div>
  </section>
   {/*-- Contact Section  */}
  <section className="max-w-7xl mx-auto px-6 py-16" id="contact">
   <h2 className="text-3xl font-bold text-green-700 mb-12 text-center">
    Contact Us
   </h2>
   <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
    <form action="#" className="space-y-6" method="POST">
     <div>
      <label className="block text-green-800 font-semibold mb-2" for="name">
       Name
      </label>
      <input className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" id="name" name="name" placeholder="Your full name" required="" type="text"/>
     </div>
     <div>
      <label className="block text-green-800 font-semibold mb-2" for="email">
       Email
      </label>
      <input className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
     </div>
     <div>
      <label className="block text-green-800 font-semibold mb-2" for="message">
       Message
      </label>
      <textarea className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" id="message" name="message" placeholder="Write your message here" required="" rows="5"></textarea>
     </div>
     <button className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition" type="submit">
      Send Message
     </button>
    </form>
    <div className="mt-8 text-green-800 text-center space-y-2">
     <p>
      <i className="fas fa-phone-alt mr-2">
      </i>
      +1 (555) 123-4567
     </p>
     <p>
      <i className="fas fa-envelope mr-2">
      </i>
      support@greestore.com
     </p>
     <p>
      <i className="fas fa-map-marker-alt mr-2">
      </i>
      123 Green St, Eco City, Country
     </p>
    </div>
   </div>
  </section>
   {/*-- Footer  */}
  <footer className="bg-green-700 text-green-100 py-8 mt-16">
   <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm">
     © 2024 Gree Store. All rights reserved.
    </p>
    <div className="flex space-x-6 mt-4 md:mt-0">
     <a aria-label="Facebook" className="hover:text-green-300 transition" href="#">
      <i className="fab fa-facebook fa-lg">
      </i>
     </a>
     <a aria-label="Twitter" className="hover:text-green-300 transition" href="#">
      <i className="fab fa-twitter fa-lg">
      </i>
     </a>
     <a aria-label="Instagram" className="hover:text-green-300 transition" href="#">
      <i className="fab fa-instagram fa-lg">
      </i>
     </a>
     <a aria-label="LinkedIn" className="hover:text-green-300 transition" href="#">
      <i className="fab fa-linkedin fa-lg">
      </i>
     </a>
    </div>
   </div>
  </footer>

      {/* Your other sections (Hero, Products, About, Contact, Footer) remain unchanged */}
    </div>
  );
}
