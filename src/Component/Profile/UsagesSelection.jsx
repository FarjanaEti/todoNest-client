import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/lotti/profile.json"; // Replace with your Lottie JSON file

const UsageSelection = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    personal: true,
    work: true,
    education: true,
  });

  const handleToggle = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-10">
        {/* Progress Indicator */}
        <div className="absolute top-5 right-5 px-3 py-1 bg-gray-200 text-gray-600 rounded text-sm">
          Step 2 of 2
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold">How do you plan to use Todoist?</h2>
        <p className="text-gray-500 mb-6">Choose all that apply.</p>

        {/* Selection Options */}
        {["personal", "work", "education"].map((option) => (
          <div
            key={option}
            className="flex items-center justify-between w-full px-4 py-3 border rounded-md mb-3 cursor-pointer transition hover:bg-gray-100"
            onClick={() => handleToggle(option)}
          >
            <span className="capitalize text-gray-700">{option}</span>
            <input
              type="checkbox"
              checked={selectedOptions[option]}
              readOnly
              className="w-5 h-5 accent-green-300"
            />
          </div>
        ))}

        {/* Launch Button */}
        <button
          className="mt-6 bg-[#3A7D44] text-white py-3 rounded-md text-lg font-semibold w-full hover:bg-red-600 transition"
        >
          Launch Todoist
        </button>
      </div>

      {/* Right Section (Lottie Animation) */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <Lottie animationData={animationData} className="w-3/4 h-3/4" />
      </div>
    </div>
  );
};

export default UsageSelection;
