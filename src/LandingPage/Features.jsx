import React from "react";
import { PiRainbowCloudThin } from "react-icons/pi";
const Features = () => {
  return (
    <section
      className="md:flex   justify-center items-center py-20 px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/MyJ3FQfD/f-3.jpg')",
        backgroundSize: "cover",
        
      }}
    >
      <div className="flex justify-between items-stretch max-w-6xl w-full">
        {/* First Quote Section */}
        <div className="text-center px-6">
          <p className="text-xl font-semibold">
            “The best to-do list app on the market”
          </p>
          <hr className="my-4 border-t-2 border-[#8B9DC0] w-20 mx-auto" />
          <div>
          <span className="uppercase font-bold  text-gray-600">PC <br />MAC</span><br />
          </div>
          
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-auto bg-red-900 mx-6"></div>

        {/* Second Quote Section */}
        <div className="text-center px-6">
          <p className="text-xl font-semibold ">
            “Stay organized and achieve more daily”
          </p>
          <hr className="my-4 border-t-2 border-[#8B9DC0] w-20 mx-auto" />

          <div className="mt-4  items-center space-x-2 text-gray-500 font-semibold">
              {/* Icons */}
              <span className="text-orange-400 ml-2 rounded-t-full  bg-gray-300 text-xl">➕</span>
              <span className="uppercase font-bold  text-gray-600">THE VERGE</span><br />
              {/* Company Name */}
            </div>
              <span className="text-green-400 bg-gray-300 rounded-b-full text-xl">✔</span>
        </div>

        {/* Vertical Line */}
        <div className="w-[2px] h-auto bg-red-900 mx-6"></div>

        {/* Third Quote Section */}
        <div className="text-center px-6">
          <p className="text-xl font-semibold ">
            “Your productivity companion!”
          </p>
          <hr className="my-4 border-t-2 border-[#8B9DC0] w-20 mx-auto" />
          <div className="mt-4 text-gray-500 font-semibold">
          <span className=" flex items-center justify-center text-2xl text-gray-600">tech  
            <span className="font-extrabold text-gray-800">radar</span>
            <PiRainbowCloudThin className="ml-1 mt-1.5" /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
