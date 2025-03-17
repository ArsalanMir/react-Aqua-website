import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/water-resistant-1.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Aqua Global Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold">Aqua Life</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-blue-700 p-4">
          <Link to="/" className="block hover:text-gray-200">Home</Link>
          <Link to="/about" className="block hover:text-gray-200">About</Link>
          <Link to="/services" className="block hover:text-gray-200">Services</Link>
          <Link to="/products" className="block hover:text-gray-200">Products</Link>
          <Link to="/contact" className="block hover:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
