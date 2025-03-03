import React from "react";
import img from "../assets/todo-banner.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between  p-10 rounded-lg ">
      {/* Left Side - Text Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-blue-900">
          Stay Organized, Stay Productive!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Plan your day, accomplish your goals, and boost your productivity
          effortlessly.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Right Side - Image */}
      <div>
        <img src={img} alt="To-Do List" className="w-96 rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Banner;
