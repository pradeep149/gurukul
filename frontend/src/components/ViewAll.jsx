import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DetailedCoursePage = () => {
  const { courseName } = useParams();
  const [filter, setFilter] = useState("all");

  // Sample data for products
  const products = [
    { id: 1, name: "CAT 2022 Paper", type: "Previous Papers", price: 500 },
    { id: 2, name: "CAT 2024 Prep Kit", type: "Course Materials", price: 1500 },
    { id: 3, name: "Mock Test Series", type: "Tests", price: 800 },
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.type === filter);

  return (
    <div className="bg-gradient-to-b from-cyan-100 via-blue-100 to-indigo-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          {courseName.toUpperCase()} Store
        </h1>
        <div className="flex justify-between items-center mb-10">
          <div className="flex space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg ${
                filter === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Previous Papers")}
              className={`px-4 py-2 rounded-lg ${
                filter === "Previous Papers"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600"
              }`}
            >
              Previous Papers
            </button>
            <button
              onClick={() => setFilter("Course Materials")}
              className={`px-4 py-2 rounded-lg ${
                filter === "Course Materials"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600"
              }`}
            >
              Course Materials
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <h4 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h4>
              <p className="text-indigo-500 font-bold mt-2">₹{product.price}</p>
              <button className="mt-4 block bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white text-center py-2 rounded-lg hover:scale-105 transform transition-all">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedCoursePage;
