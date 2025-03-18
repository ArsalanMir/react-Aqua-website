import React from "react";
import { Link, useLocation } from "react-router-dom";
import aquaTouch from "../assets/images/aqua-touch.jpg";
import aquaGrand from "../assets/images/aquagrand-plus.jpg";
import blueDimond from "../assets/images/blue-dimond.jpg";
import aquaPearl from "../assets/images/portfolio-3.jpg";
import crystalRo from "../assets/images/Crystal-ro.jpg"; 

const products = [
  { id: 1, name: "Aqua Touch", description: "Advanced filtration system for clean drinking water.", price: "$150",quality: "zero" ,image: aquaTouch },
  { id: 2, name: "Aqua Grand Plus", description: "Removes bacteria and viruses for safe consumption.", price: "$200",quality: "zero", image: aquaGrand },
  { id: 3, name: "Blue Dimond", description: "Reduces hardness for better quality water.", price: "$180",quality: "zero", image: blueDimond },
  { id: 4, name: "Aqua Pearl", description: "Enhances pH level for healthier drinking water.", price: "$220", image: aquaPearl },
  { id: 5, name: "Crystal RO", description: "Purifies water for the entire home.", price: "$300", image: crystalRo },
];

const ProductList = ({ limit }) => {
  const location = useLocation();
  const isProductsPage = location.pathname === "/products"; // Check if we are on the Products page
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {displayedProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-100 p-4 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
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

            {/* Show description and price only on the Products page */}
            {isProductsPage && (
              <>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-blue-600 font-semibold mt-2">{product.price}</p>
              </>
            )}

            {/* Contact Us Button */}
            <Link to="/contact">
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
                Contact Us
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* View More Button on Home Page */}
      {!isProductsPage && limit && (
        <div className="text-center mt-8">
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
