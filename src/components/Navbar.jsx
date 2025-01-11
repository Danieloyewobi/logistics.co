import  { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-white shadow-md p-4 px-14">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">LogisticsCo</div>

        {/* Menu Button for Mobile */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6`}
        >
          <a href="/" className="block py-2 md:py-0 md:inline-block hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="block py-2 md:py-0 md:inline-block hover:text-gray-200">
            About Us
          </a>

          {/* Services with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block py-2 md:py-0 md:inline-block hover:text-gray-200 focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-lg">
                <a
                  href="/shipping"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Shipping
                </a>
                <a
                  href="/warehousing"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Warehousing
                </a>
                <a
                  href="/delivery"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Delivery
                </a>
              </div>
            )}
          </div>

          <a href="/tracking" className="block py-2 md:py-0 md:inline-block hover:text-gray-200">
            Tracking
          </a>
          <a href="/contact" className="block py-2 md:py-0 md:inline-block hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
