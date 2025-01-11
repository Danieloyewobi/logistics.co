// import React from 'react';

import Navbar from "../components/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg mb-6">
            We’re here to assist you with all your logistics needs. Contact us today!
          </p>
        </div>
      </div>

      {/* Contact Form and Information Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-gray-600 text-white p-3 rounded-full mr-4">
                  📍
                </span>
                <p className="text-gray-700">
                  123 Logistics Lane, Enugu State, Nigeria
                </p>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-600 text-white p-3 rounded-full mr-4">
                  📞
                </span>
                <p className="text-gray-700">+234 800 123 4567</p>
              </li>
              <li className="flex items-center">
                <span className="bg-gray-600 text-white p-3 rounded-full mr-4">
                  📧
                </span>
                <p className="text-gray-700">support@logisticsco.com</p>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Ship with Us?
          </h2>
          <p className="mb-6">
            Connect with us today for efficient and reliable logistics solutions.
          </p>
          <button className="bg-white text-gray-600 px-6 py-2 rounded-md shadow-md hover:bg-brown-100">
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
