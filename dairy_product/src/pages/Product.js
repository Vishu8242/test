import React, { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // state for mobile menu

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
            <span className="text-2xl font-bold text-green-600">Gree Store</span>
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
     <img alt="Modern Gree air conditioner unit installed on a white wall in a bright living room" className="rounded-lg shadow-lg mx-auto" height="350" src="https://storage.googleapis.com/a1aa/image/2f8802e5-e8b5-4a60-e8e0-46bd222967a3.jpg" width="400"/>
    </div>
   </div>
  </section>
   {/*-- Products Section  */}
  <section className="max-w-7xl mx-auto px-6 py-16" id="products">
   <h2 className="text-3xl font-bold text-green-700 mb-12 text-center">
    Our Products
   </h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
     <img alt="Gree split air conditioner unit mounted on a wall in a modern living room" className="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/857c55c5-aa32-4287-4888-479b29f00771.jpg" width="400"/>
     <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
       Gree Split Air Conditioner
      </h3>
      <p className="text-gray-600 flex-grow">
       Efficient cooling with inverter technology and quiet operation for your home or office.
      </p>
      <div className="mt-4 flex items-center justify-between">
       <span className="text-green-700 font-bold text-lg">
        $499
       </span>
       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add to Cart
       </button>
      </div>
     </div>
    </article>
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
     <img alt="Gree window air conditioner unit installed in a window with a sunny outdoor view" className="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/72ad761f-639d-4892-92a1-c71cd5ff6af7.jpg" width="400"/>
     <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
       Gree Window Air Conditioner
      </h3>
      <p className="text-gray-600 flex-grow">
       Compact and powerful window AC unit with easy installation and energy-saving features.
      </p>
      <div className="mt-4 flex items-center justify-between">
       <span className="text-green-700 font-bold text-lg">
        $349
       </span>
       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add to Cart
       </button>
      </div>
     </div>
    </article>
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
     <img alt="Gree portable electric heater with digital display on a wooden floor in a cozy room" className="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/0d33d94d-747c-4fba-17c9-22dfae50227b.jpg" width="400"/>
     <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
       Gree Portable Heater
      </h3>
      <p className="text-gray-600 flex-grow">
       Portable electric heater with adjustable thermostat and safety features for winter warmth.
      </p>
      <div className="mt-4 flex items-center justify-between">
       <span className="text-green-700 font-bold text-lg">
        $199
       </span>
       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add to Cart
       </button>
      </div>
     </div>
    </article>
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
     <img alt="Gree air purifier device on a white table in a modern living room with plants" className="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/d1299dc2-3a2f-4b2b-e1fe-f62071c25a4a.jpg" width="400"/>
     <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
       Gree Air Purifier
      </h3>
      <p className="text-gray-600 flex-grow">
       Advanced air purifier with HEPA filter to keep your indoor air clean and fresh.
      </p>
      <div className="mt-4 flex items-center justify-between">
       <span className="text-green-700 font-bold text-lg">
        $299
       </span>
       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add to Cart
       </button>
      </div>
     </div>
    </article>
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
     <img alt="Gree dehumidifier unit placed on a tiled floor in a bright laundry room" className="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/17161218-1c16-424d-3715-f82e71fad42a.jpg" width="400"/>
     <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
       Gree Dehumidifier
      </h3>
      <p className="text-gray-600 flex-grow">
       Efficient dehumidifier to reduce moisture and prevent mold in your home.
      </p>
      <div className="mt-4 flex items-center justify-between">
       <span className="text-green-700 font-bold text-lg">
        $279
       </span>
       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add to Cart
       </button>
      </div>
     </div>
    </article>
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
     <img alt="Gree smart thermostat mounted on a white wall with a digital touchscreen display" className="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/e50d2243-24df-46f4-6bff-592a9ffdd268.jpg" width="400"/>
     <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
       Gree Smart Thermostat
      </h3>
      <p className="text-gray-600 flex-grow">
       Smart thermostat with Wi-Fi control to optimize your home's heating and cooling.
      </p>
      <div className="mt-4 flex items-center justify-between">
       <span className="text-green-700 font-bold text-lg">
        $159
       </span>
       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add to Cart
       </button>
      </div>
     </div>
    </article>
    <article className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
     <img alt="Gree modern ceiling fan with three blades installed on a white ceiling in a living room" className="w-full h-48 object-cover" height="300" src="https://storage.googleapis.com/a1aa/image/09b8adbe-c99a-4c15-9a78-d68456264620.jpg" width="400"/>
     <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-green-800 mb-2">
       Gree Ceiling Fan
      </h3>
      <p className="text-gray-600 flex-grow">
       Energy-saving ceiling fan with remote control and multiple speed settings.
      </p>
      <div className="mt-4 flex items-center justify-between">
       <span className="text-green-700 font-bold text-lg">
        $129
       </span>
       <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
        Add to Cart
       </button>
      </div>
     </div>
    </article>
   </div>
  </section>
   {/*-- About Section  */}
  <section className="bg-green-100 py-16" id="about">
   <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    <div className="md:w-1/2">
     <img alt="Gree manufacturing factory with rows of air conditioners and appliances in a clean modern facility" className="rounded-lg shadow-lg" height="400" src="https://storage.googleapis.com/a1aa/image/7cee505e-1f79-476c-a4a9-beacbd546934.jpg" width="600"/>
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
