// import React from 'react';

import Navbar from "../components/Navbar";

function Shipping() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Shipping Services</h1>
          <p className="text-lg mb-6">
            Reliable, fast, and secure shipping solutions tailored to meet your delivery needs.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-4">
        {/* Shipping Overview */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <img
              src="/src/assets/Large container ship.jpeg" // Replace with your shipping illustration
              alt="Shipping Illustration"
              className="w-full h-64 object-cover rounded-md mx-auto"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Comprehensive Shipping Solutions</h2>
          <p className="text-gray-700">
            Whether its domestic or international, we ensure your goods reach their destination safely and on time.
            Our advanced logistics and tracking systems guarantee a smooth shipping experience.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Our Shipping Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/fast-delivery-icon.png" // Replace with appropriate icon
                alt="Fast Delivery"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Fast Delivery</h4>
              <p className="text-gray-600">
                Get your shipments delivered on time with our efficient logistics network.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/global-reach-icon.png" // Replace with appropriate icon
                alt="Global Reach"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Global Reach</h4>
              <p className="text-gray-600">
                Deliver to any corner of the world with our extensive international network.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/realtime-tracking-icon.png" // Replace with appropriate icon
                alt="Real-Time Tracking"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Real-Time Tracking</h4>
              <p className="text-gray-600">
                Stay updated with live tracking of your shipments from dispatch to delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="bg-gray-50 py-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Additional Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-3xl mx-auto">
            <li>Customizable shipping options to suit your business or personal needs.</li>
            <li>Expert handling of fragile and high-value goods.</li>
            <li>Eco-friendly packaging solutions for sustainable deliveries.</li>
            <li>24/7 customer support to assist with shipping inquiries.</li>
          </ul>
        </section>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Ship Smarter with Us</h2>
          <p className="mb-6">
            Contact us today to explore how our shipping services can help you achieve your delivery goals.
          </p>
          <button className="bg-white text-gray-600 px-6 py-2 rounded-md shadow-md hover:bg-brown-100">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Shipping;
