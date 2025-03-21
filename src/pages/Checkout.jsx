import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useCart(); // Access cart data
  const navigate = useNavigate();

 
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Handle input changes

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  // Handle Order Submission
  const handleOrder = async (e) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.phone || !userInfo.address) {
      alert("Please fill in all fields.");
      return;
    }

    const orderDetails = {
      user: userInfo,
      products: cart,
      paymentMethod: "Cash on Delivery",
    };

    console.log("Order Placed:", orderDetails);

    // TODO: Send email notification to admin (Mocking it for now)
    alert("Order placed successfully! Admin will be notified.");

    // Clear cart after order
    setCart([]);

    // Redirect to home
    navigate("/");
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Checkout
      </h2>

      <form onSubmit={handleOrder} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Address</label>
          <textarea
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold">Payment Method</label>
          <p className="font-semibold text-green-600">✅ Only Cash on Delivery</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
