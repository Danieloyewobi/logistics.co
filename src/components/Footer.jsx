// import React from "react";

const Footer = () => {
    return (
      <footer className="bg-[#D3D3D3] text-black-300 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">LogisticsCo</h4>
            <p className="text-black/80 leading-relaxed">
              Reliable logistics solutions for all your shipping needs. We ensure fast, secure, and global logistics tailored to your business.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="hover:text-black-300 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-black-300 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-black-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:info@logisticsco.com"
                    className="hover:text-black-300 transition-colors duration-300"
                  >
                    info@logisticsco.com
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Phone:</span> +123 456 7890
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Address:</span> 123 Logistics
                  Street, City, Country
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-black/20 pt-8 text-center text-black/80 text-sm">
          © 2025 LogisticsCo. All rights reserved. | Designed with ❤️ by{" "}
          <a
            href="#"
            className="hover:text-black-300 transition-colors duration-300"
          >
            Your Company
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  