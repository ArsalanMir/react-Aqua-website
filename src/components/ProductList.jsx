import React from "react";
import { Link, useLocation } from "react-router-dom";
import aquaTouch from "../assets/images/aqua-touch.jpg";
import aquaGrand from "../assets/images/aquagrand-plus.jpg";
import blueDimond from "../assets/images/blue-dimond.jpg";
import aquaPearl from "../assets/images/portfolio-3.jpg";
import crystalRo from "../assets/images/Crystal-ro.jpg"; 

const products = [
  { 
    id: 1, 
    name: "Aqua Touch", 
    purificationCapacity: "15 L/hr",
    personsServed: "Up to 5 persons",
    storageCapacity: "8 Liters",
    dimensions: "14 x 10 x 18 inches",
    netWeight: "7.5 kg",
    warranty: "1 Year",
    support: "24/7 Customer Support",
    image: aquaTouch 
  },
  { 
    id: 2, 
    name: "Aqua Grand Plus", 
    purificationCapacity: "20 L/hr",
    personsServed: "Up to 7 persons",
    storageCapacity: "10 Liters",
    dimensions: "15 x 11 x 19 inches",
    netWeight: "8.2 kg",
    warranty: "1 Year",
    support: "24/7 Customer Support",
    image: aquaGrand 
  },
  { 
    id: 3, 
    name: "Blue Dimond", 
    purificationCapacity: "18 L/hr",
    personsServed: "Up to 6 persons",
    storageCapacity: "9 Liters",
    dimensions: "14 x 10 x 17 inches",
    netWeight: "7.8 kg",
    warranty: "1 Year",
    support: "24/7 Customer Support",
    image: blueDimond 
  },
  { 
    id: 4, 
    name: "Aqua Pearl", 
    purificationCapacity: "22 L/hr",
    personsServed: "Up to 8 persons",
    storageCapacity: "12 Liters",
    dimensions: "16 x 12 x 20 inches",
    netWeight: "9 kg",
    warranty: "2 Years",
    support: "24/7 Customer Support",
    image: aquaPearl 
  },
  { 
    id: 5, 
    name: "Crystal RO", 
    purificationCapacity: "25 L/hr",
    personsServed: "Up to 10 persons",
    storageCapacity: "15 Liters",
    dimensions: "18 x 14 x 22 inches",
    netWeight: "10.5 kg",
    warranty: "2 Years",
    support: "Premium 24/7 Support",
    image: crystalRo 
  },
];

const ProductList = ({ limit }) => {
  const location = useLocation();
  const isProductsPage = location.pathname === "/products"; // Check if we are on the Products page
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Heading with line underneath */}
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12 relative">
        Our Products
        <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span> {/* Horizontal Line */}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> {/* Adjusted spacing */}
        {displayedProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Image with hover effect & fixed aspect ratio */}
            <div className="w-full h-48 overflow-hidden rounded-md flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Product Name */}
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>

            {/* Show additional details only on the Products page */}
            {isProductsPage && (
              <div className="mt-4 text-gray-700 text-sm text-left border-t border-gray-300 pt-3">
                <p><strong>Purification Capacity:</strong> {product.purificationCapacity}</p>
                <hr className="my-3 border-gray-300" />
                <p><strong>No. of Persons Served:</strong> {product.personsServed}</p>
                <hr className="my-3 border-gray-300" />
                <p><strong>Storage Capacity:</strong> {product.storageCapacity}</p>
                <hr className="my-3 border-gray-300" />
                <p><strong>Dimensions:</strong> {product.dimensions}</p>
                <hr className="my-3 border-gray-300" />
                <p><strong>Net Weight:</strong> {product.netWeight}</p>
                <hr className="my-3 border-gray-300" />
                <p><strong>Warranty:</strong> {product.warranty}</p>
                <hr className="my-3 border-gray-300" />
                <p><strong>Support:</strong> {product.support}</p>
              </div>
            )}

            {/* Contact Us Button */}
            <Link to="/contact">
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                Contact Us
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* View More Button on Home Page */}
      {!isProductsPage && limit && (
        <div className="text-center mt-12">
          <Link to="/products">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition shadow-md">
              View More Products
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductList;

