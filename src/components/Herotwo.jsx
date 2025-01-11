// import React from 'react';
import { FaShippingFast, FaGlobe, FaLock } from 'react-icons/fa'; // Import icons

function Herotwo() {
  return (
    <div className="bg-brown-100 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <div className="text-brown-600 text-5xl mb-4">
            <FaShippingFast /> {/* Icon */}
          </div>
          <h3 className="text-2xl font-bold text-brown-600 mb-4">
            Fast Delivery
          </h3>
          <p className="text-gray-700">
            Get your goods delivered in record time with our efficient logistics network.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <div className="text-brown-600 text-5xl mb-4">
            <FaGlobe /> {/* Icon */}
          </div>
          <h3 className="text-2xl font-bold text-brown-600 mb-4">
            Global Reach
          </h3>
          <p className="text-gray-700">
            We connect businesses and customers worldwide with ease.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <div className="text-brown-600 text-5xl mb-4">
            <FaLock /> {/* Icon */}
          </div>
          <h3 className="text-2xl font-bold text-brown-600 mb-4">
            Secure Shipping
          </h3>
          <p className="text-gray-700">
            Your packages are handled with care and delivered securely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herotwo;
