// import React from 'react';

import Navbar from "../components/Navbar";

function Delivery() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Delivery Services</h1>
          <p className="text-lg mb-6">
            Seamless, secure, and timely delivery solutions to meet your needs.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto py-16 px-4">
        {/* Delivery Overview */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <img
              src="/src/assets/medium-shot-woman-working-as-driver.jpg" // Replace with your delivery-related image
              alt="Delivery Illustration"
              className="w-full h-64 object-cover rounded-md mx-auto"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4">Reliable Delivery Services</h2>
          <p className="text-gray-700">
            Our delivery service ensures your packages reach their destination safely, whether locally or internationally. 
            From small parcels to large shipments, we handle each delivery with care and efficiency.
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Our Delivery Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/secure-icon.png" // Replace with appropriate icon
                alt="Secure Handling"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">Secure Handling</h4>
              <p className="text-gray-600">
                Your goods are handled with the utmost care to ensure they arrive in perfect condition.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/speed-icon.png" // Replace with appropriate icon
                alt="On-Time Delivery"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">On-Time Delivery</h4>
              <p className="text-gray-600">
                We pride ourselves on meeting delivery deadlines, no matter the distance.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/path/to/customer-support-icon.png" // Replace with appropriate icon
                alt="24/7 Support"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-600">
                Our team is available around the clock to assist you with any delivery-related questions.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="bg-gray-50 py-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Additional Benefits</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 max-w-3xl mx-auto">
            <li>Custom delivery options for businesses and individuals.</li>
            <li>Eco-friendly delivery practices for sustainability.</li>
            <li>Real-time tracking to monitor your package every step of the way.</li>
            <li>Specialized delivery for fragile or high-value items.</li>
          </ul>
        </section>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Experience Hassle-Free Delivery</h2>
          <p className="mb-6">
            Get started today and enjoy seamless delivery services that you can trust.
          </p>
          <button className="bg-white text-gray-600 px-6 py-2 rounded-md shadow-md hover:bg-brown-100">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Delivery;
