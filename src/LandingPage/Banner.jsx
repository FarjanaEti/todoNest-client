import React from "react";
import img from "../assets/todo-banner.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between mt-7  p-10 rounded-lg ">
      {/* Left Side - Text Content */}
      <div className="max-w-lg">
        <h1 className="text-5xl text-[#9DC08B] font-bold ">
          Stay Organized, Stay Productive!
        </h1>
        <p className="text-lg  mt-6">
          Plan your day, accomplish your goals, and boost your productivity
          effortlessly.
        </p>
        <p>Manage your to-dos with ease and focus on what truly matters</p>
        <button className="mt-6 btn px-6 py-6 bg-[#3A7D44] shadow-2xl text-white rounded-lg text-lg font-semibold  transition">
          Get Started
        </button>
      </div>

      {/* Right Side - Image */}
      <div>
        <img src={img} alt="To-Do List" className="w-[500px] rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Banner;
