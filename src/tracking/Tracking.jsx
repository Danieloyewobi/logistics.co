// import React from 'react';

import Navbar from "../components/Navbar";

function Tracking() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Track Your Shipment</h1>
          <p className="text-lg mb-6">
            Enter your tracking ID to view the status and location of your shipment in real time.
          </p>
        </div>
      </div>

      {/* Tracking Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Tracking Form</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="trackingID"
                className="block text-gray-700 font-medium mb-2"
              >
                Tracking ID
              </label>
              <input
                type="text"
                id="trackingID"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your tracking ID"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-700"
            >
              Track Now
            </button>
          </form>

          {/* Example Tracking Status */}
          <div className="mt-8 bg-gray-100 p-4 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-2">Shipment Status</h3>
            <p className="text-gray-600">
              <span className="font-bold">Tracking ID:</span> ABC123456789
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Current Location:</span> Enugu State Warehouse
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Status:</span> In Transit
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Estimated Delivery:</span> 15th January 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracking;
