// import React from 'react';

import Navbar from "../components/Navbar";

function Warehousing() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Warehousing Services</h1>
          <p className="text-lg mb-6">
            Secure, scalable, and efficient storage solutions tailored to your business needs.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-4">
        {/* Warehousing Overview */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <img
              src="/src/assets/female-warehouse-worker-checking-supply-large-distribution-warehouse-storage-area.jpg" // Replace with your warehousing illustration
              alt="Warehousing Illustration"
              className="w-full h-64 object-cover rounded-md mx-auto"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Comprehensive Warehousing Solutions</h2>
          <p className="text-gray-700">
            Our warehousing facilities are designed to provide you with the best in class storage solutions. 
            We ensure your goods are stored securely with real-time tracking and 24/7 monitoring.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Our Warehousing Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/secure-icon.png" // Replace with appropriate icon
                alt="Secure Storage"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Secure Storage</h4>
              <p className="text-gray-600">
                State-of-the-art security systems ensure the safety of your goods around the clock.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/scalable-icon.png" // Replace with appropriate icon
                alt="Scalable Space"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Scalable Space</h4>
              <p className="text-gray-600">
                Flexible storage options that grow with your business needs.
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
                Monitor your inventory in real time with advanced tracking systems.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="bg-gray-50 py-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Additional Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-3xl mx-auto">
            <li>Temperature-controlled storage options for perishable goods.</li>
            <li>Strategically located facilities for easy access and faster delivery.</li>
            <li>Dedicated customer support to assist you at every step.</li>
            <li>Efficient inventory management to reduce operational costs.</li>
          </ul>
        </section>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Simplify Your Storage?</h2>
          <p className="mb-6">
            Contact us today to learn more about our warehousing services and how they can benefit your business.
          </p>
          <button className="bg-white text-gray-600 px-6 py-2 rounded-md shadow-md hover:bg-brown-100">
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}

export default Warehousing;
